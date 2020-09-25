const crypto = require("crypto");
const knex = require("knex")(require("./knexfile"));

module.exports = {
  createUser({ username, password }) {
    console.log(`Add user ${username}`);
    const { salt, hash } = saltHashPassword({ password });
    return knex("user")
      .insert({
        salt,
        encrypted_password: hash,
        username,
      })
      .then(([id]) => {
        return { uid: id };
      });
  },
  authenticate({ username, password }) {
    console.log(`Authenticating user ${username}`);
    var id;
    return knex("user")
      .where({ username })
      .then(([user]) => {
        if (!user) return { success: false };
        id = user.id;
        const { hash } = saltHashPassword({
          password,
          salt: user.salt,
        });
        return {
          success: hash === user.encrypted_password,
          uid: id,
        };
      });
  },
};

function saltHashPassword({ password, salt = randomString() }) {
  const hash = crypto.createHmac("sha512", salt).update(password);
  return {
    salt,
    hash: hash.digest("hex"),
  };
}

function randomString() {
  return crypto.randomBytes(4).toString("hex");
}
