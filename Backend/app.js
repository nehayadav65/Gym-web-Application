import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import {sendEmail} from './utils/sendemail.js'; // Assuming this is where the email sending logic is defined

const app = express();

const router = express.Router();
config({ path: './config.env' });
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: 'POST',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post('/send/mail' , async(req, res, next) => {
    const { name, email, message } = req.body;  
    if (!name || !email || !message) {
        return next(res.status(400).json({ success: false, message: 'Please provide all required fields' }));
    }
    try{ 
        await sendEmail({
            email: "nehaaaaa.2305@gmail.com",
            subject: `GYM WEBSITE CONTACT`,
            message: message,
            userEmail: email
        });
        res.status(200).json({ success: true, message: 'Email sent successfully' });

    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
});

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
