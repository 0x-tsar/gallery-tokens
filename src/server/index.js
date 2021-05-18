const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// to start
// npx nodemon index.js

const app = express();
const router = express.Router();

app.use(cors());

const PORT = process.env.PORT || 3008;

app.get('/', async (req, res)=>{
    res.json('posts')
})

app.get('/posts', async (req,res)=>{
    return res.json({message:'hello from posts'})
})

// router.get('/posts', (req, res)=>{
//     res.json('hello there!!')
// })


app.listen(PORT, ()=>{console.log(`listening to port: ${PORT}`);})