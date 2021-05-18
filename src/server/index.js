const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();
const router = express.Router();

app.use(cors());

const PORT = process.env.PORT || 3008;

app.get('/', async (req, res)=>{
    res.json('posts')
})

app.get('/posts', async (req,res)=>{
    return res.json({message:'hello from posts'})
    // res.send('aeeeeee')
    // res.send('hello from server!');
    // res.json({
    //     message:'hello there!!!'
    // })
})

// router.get('/posts', (req, res)=>{
//     res.json('hello there!!')
// })


app.listen(PORT, ()=>{console.log(`listening to port: ${PORT}`);})