const express = require('express');
const app = express();

app.use(express.static('dist/lol'));
app.get('/*', (req, res)=>{
    res.sendFile('index.html', {root: 'dist/lol'})
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Server running in http://localhost:' + port);
});