import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { router as indexRouter } from './routes/indexRoute.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const assetsPath = path.join(__dirname, 'public');

app.use(express.static(assetsPath));

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});