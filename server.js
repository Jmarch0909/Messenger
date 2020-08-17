const express = require('express');

const app = express();

app.use(express.static(__dirname));

var messages = [
    {name: 'Tim',message: "Hi"},
    {name: 'Joe',message: "Hey"}
];

app.get('/all', (req, res) => {
    res.send("foobar");
})

   const server = app.listen(4002, () => {
    console.log(`server is listening on port ${server.address().port}`);
});



