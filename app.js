const express = require('express');
const app = express()

// app.use((req, res)=>{
//     console.log('i run on every request')
//     res.send("this is the new website")
// })

app.get('/', (req, res)=>{
    res.send('here is your home page')
});

app.get('/cats', (req, res)=>{
    res.send('Here i really do not like cats, kindly don"t request anymore')
});

app.get('/r/:subreddit', (req, res)=>{
    console.log(req.params)
    res.send(req.params)
})

app.get('/r/:subreddit/:postId', (req, res)=>{
    const {subreddit, postId} = req.params
    res.send(`here is my subreddit: ${subreddit}, also my post id: ${postId}`)
})

// query string
app.get('/search', (req, res)=>{
    const {q} = req.query
    console.log(req.query)
    res.send(`here is your query: ${q}`)  
})


app.listen(3000, ()=>{
    console.log('listening to port 3000')
})