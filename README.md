# TypeScript API with authentication

This project purpose is to learn about JWT auth flow, using TypeScript.

## Run Locally

1. Install both:

   - [Node.js](https://nodejs.org/es/download/)
   - [MongoDB](https://www.mongodb.com/try/download/community)

   You will need to have MongoDB running on port 27017.

2. Clone the project:

   ```bash
   git clone https://github.com/AloisCRR/jwt-api-users-auth.git
   ```

3. Go to the project directory:

   ```bash
   cd jwt-api-users-auth
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

6. To compile TypeScript to JavaScript and run the project:

   ```bash
   npm run build && npm start
   ```

## Screenshots

Basic input validation

![Screenshot](https://i.imgur.com/JQD2vth.png)

Invalid password or email

![Screenshot](https://i.imgur.com/B8Mzqk5.png)

Successful sign in

![Screenshot](https://i.imgur.com/hJoFb4B.png)

Sending token on headers

![Screenshot](https://i.imgur.com/5r0cAo0.png)

Authorization

![Screenshot](https://i.imgur.com/jcTFWIB.png)

## Tech Stack

| Name                                                       | Description                                                 |
| ---------------------------------------------------------- | ----------------------------------------------------------- |
| [Node.js](https://nodejs.org/es/download/)                 | Business logic                                              |
| [MongoDB](https://www.mongodb.com/try/download/community)  | Database                                                    |
| [Express](https://expressjs.com/es/api.html)               | HTTP Server                                                 |
| [TypeScript](https://www.typescriptlang.org/)              | JavaScript super-set to add static code analysis            |
| [JWT](https://jwt.io/)                                     | Library to generate JWTs                                    |
| [Mongoose](https://mongoosejs.com/docs/api.html)           | ODM (Object Data Modeling)                                  |
| [Passport JWT](https://www.npmjs.com/package/passport-jwt) | Passport strategy for authenticating with a JSON Web Token. |
| [Bcrypt](https://www.npmjs.com/package/passport-jwt)       | Passport strategy for authenticating with a JSON Web Token. |

## Lessons Learned

### Route creation

```typescript
import { Router } from "express";
import { signIn, signUp } from "../controllers/user.controller";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;
```

### Route controller

```typescript
router.get(
  "/auth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({ msg: "Auth route succeeded" });
  }
);
```

### Create token

```typescript
function createToken(user: Iuser) {
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: 86400,
  });
}
```

Works in this way... With JWT obviously you can generate a token for authentication, a token can hold public data in a stateless way. Public info is like the algorithm used to sign token or the type of token, also included something called "payload" which is content or body of token (this includes all data registered for token).

To generate a token we use a function from jwt module called sign, passing a "payload" that is information that token will save, and a secret used to sign the token.

Token is signed by a private key, and with the same key we can check if token is valid and use it to authenticate an user, passport takes his time in this, with passport-jwt we can use a function called passport.authenticate() which is a middleware that handles all the logic from getting the token from auth header to validate it and attach the token payload to the request object of express.

## Roadmap

- [x] App functionality
- [ ] Testing
- [ ] Hosting, domain, etc.
- [ ] CI/CD
