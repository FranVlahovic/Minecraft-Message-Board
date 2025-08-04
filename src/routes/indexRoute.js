import express from 'express';
import { messages } from '../public/messages.js';
const router = express.Router();

const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});


router.get('/', (req, res) => {
    try {
        res.render('index', {messages:messages});
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Broken");
    }
})

router.post('/new', (req, res) => {
    const signText = req.body.text;
    const signUser = req.body.user;

    messages.push({ text: signText, user: signUser, added: formattedDate });

    res.redirect('/');
})

router.get('/messages', (req, res) => {
    res.json(messages);
});

export { router };