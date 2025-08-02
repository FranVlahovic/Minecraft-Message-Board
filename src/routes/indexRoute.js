import express from 'express';
const router = express.Router();

const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

let messages = [
    { text: 'This is a Test', user: 'Fran', added: formattedDate },
    { text: 'This is a Test', user: 'Fran', added: formattedDate },
    { text: 'This is a Test', user: 'Fran', added: formattedDate },
];

router.get('/', (req, res) => {
    try {
        res.render('index', {messages:messages});
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Broken");
    }
})

export { router };