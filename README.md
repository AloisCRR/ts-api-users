## Project in self

API made with Typescript, MongoDB and JsonWebToken as main technologies.  
This API has an **no-sesion** authentication, made by passport-jwt, for endpoints. Based on **MVC** architecture.

## To start

### `npm install`  

To install all dependencies before run any other script.

### `npm run dev`  

Script automatically compiles tsc and watch for changes. Only runs 1 time.

### `npm run build`

Compiles tsc code (this is more for production)

### `npm start`

Starts project after `npm run build`

After that, you can open the project in...
``` javascript
http://localhost:3000
```
Or you can define a port in eviroment variables...
``` javascript
app.set('port',process.env.port || 3000);
```

## Screenshots

- Fields validation
<p align='center'>
<img src='https://i.imgur.com/JQD2vth.png' alt='final-project-image'>
</p>

- Invalid password or email
<p align='center'>
<img src='https://i.imgur.com/B8Mzqk5.png' alt='final-project-image'>
</p>

- Successful sign in
<p align='center'>
<img src='https://i.imgur.com/hJoFb4B.png' alt='final-project-image'>
</p>

- Sending token on headers

<p align='center'>
<img src='https://i.imgur.com/5r0cAo0.png' alt='final-project-image'>
</p>

- Authorization

<p align='center'>
<img src='https://i.imgur.com/jcTFWIB.png' alt='final-project-image'>
</p>

## Tutorials

- [JsonWebTokens #1](https://www.youtube.com/watch?v=qckBlIfOnlA)
- [JsonWebTokens #2](https://www.youtube.com/watch?v=mbsmsi7l3r4)
- [JsonWebTokens #3](https://www.youtube.com/watch?v=7nafaH9SddU)
- [Passport JWT Strategy Flow](https://www.youtube.com/watch?v=o6mSdG09yOU)

## Explication

#### Route creation

``` javascript
import { Router } from 'express';
import { signIn, signUp } from '../controllers/user.controller';

const router = Router();

router.post('/signup',signUp);
router.post('/signin', signIn);

export default router;
```

#### Route controller

``` javascript
router.get('/auth', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.status(200).json({msg: "Auth route succeeded"})
})
```

#### Create token

``` javascript
function createToken(user:Iuser) {
    return jwt.sign({id: user.id, email:user.email}, config.jwtSecret, {
        expiresIn: 86400
    })
}
```

Works in this way... With JWT obviously you can generate a token for authentication, a token have some public and private information. Public info is like the algorith used to sign token or the type of token, also included something called "payload" wich is content or body of token (this includes all data registered for token).

To generate a token we use a function from jwt moduled sign, passing a "payload" that is information of token, and a secret used to sign token.

Token is signed by a private key, and it is used to "decrypt" it and use to auth, passport takes his time in this, with passport-jwt we can use a function called passport.authenticate() and thats it.


## Architecture

- [MVC](https://si.ua.es/es/documentacion/asp-net-mvc-3/1-dia/modelo-vista-controlador-mvc.html)

## Modules used

- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

- [cors](https://github.com/expressjs/cors)

- [express](https://github.com/expressjs/express)

- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

- [mongoose](https://github.com/Automattic/mongoose)

- [morgan](https://github.com/expressjs/morgan)

- [passport](https://github.com/jaredhanson/passport)

- [passport-jwt](https://github.com/mikenicholson/passport-jwt)