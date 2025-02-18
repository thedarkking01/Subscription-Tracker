import express from 'express';
import { PORT } from './config/env.js';
const app = express();
console.log('Port:', PORT);
app.get('/', (req, res) => {
    res.send('Welcome to Subscription Tracker!');
});
app.listen(PORT, () => {
    console.log(`Subcription Tracking API is running on port ${PORT}`);
});

export default app;