const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../dist');

app.use(express.static(publicPath));

app.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath, 'home.html'));
});

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
});