//

import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index.ejs');
});

app.post('/generate', async (req, res)=>{
    try {
        const result = await axios.get('https://v2.jokeapi.dev/joke/Any');
        const response = result.data;
        res.render('index.ejs', {
            setup: response.setup,
            delivery: response.delivery,
            category: response.category,
            id: response.id
        })
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, (req, res)=>{
    console.log(`Started listening at port ${port}`);
});