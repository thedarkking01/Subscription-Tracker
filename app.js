import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

const app = express();
console.log('Port:', PORT);

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.get('/', (req, res) => {
    res.send('Welcome to Subscription Tracker!');
});
app.listen(PORT, () => {
    console.log(`Subcription Tracking API is running on port ${PORT}`);
});

export default app;