# auth-knex

auth knex is more or less a fully functional auth server written in NodeJS, using knex and sqlite3

## Installation

Install all packages using npm.

```bash
npm install
```

Then setup knex.

First, install knex globally

```bash
npm install knex -g
```

Then update the migrations

```bash
knex migrate:latest
```

Finally, don't forget to update the JWT secret in
.env to your own!


## Usage

To register a user, send a POST request to

```
http://localhost:3000/users/createUser
```

with a username and password formatted as json in the body.

```json
{
	"username": "exampleuser",
	"password": "123"
}
```

you should recive a x-access-token in the headers. This is the JWT that you can use to
access protected routes. To do so, put the token in your request headers as x-access-token.

For examples, go to 
```
http://localhost:3000/public
```
for a unathenticated route or
```
http://localhost:3000/private
```
for an authenticated route.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
