import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import authRoutes from './routes/auth.routes';
import passport from 'passport';
import passportTokenAuth from './middlewares/passport';

// Start
const app = express();

// Set-up

app.set('port',process.env.port || 3000);

// Middlewares

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(authRoutes);
app.use(passport.initialize());
passport.use(passportTokenAuth);

// Routes

app.get('/', (req, res) => {
    res.send(`API is in http://localhost:${app.get('port')}`);
})



export default app;