const express = require('express');
const app = express();
app.use(express.json());


const itemList = [
    { asin: "ABCDE", itemTitle: "FirstItem", seller: "ShopA" },
    { asin: "XYZAB", itemTitle: "SecondItem", seller: "ShopB" },
];

app.get('/', (req, res) => {
    console.log('=== GET request  at / ===');
    res.sendFile('./ping.html', { root: __dirname });
});

app.get('/ping', (req, res) => {
    console.log('=== GET request /ping ===');
    res.sendFile('./ping.html', { root: __dirname });
});

app.get('/api/items', (req, res) => {
    console.log('=== GET request  at /api/items ===');
    res.send(itemList);
});

app.get('/api/items/ping', (req, res) => {
    console.log('=== GET request  at /api/items/ping ===');
    res.sendFile('./ping.html', { root: __dirname });
});

app.get('/api/items/:asin', (req, res) => {
    const item = itemList.find(item => item.asin === req.params.asin);
    console.log('=== GET request  at /api/items/{asin} ===');
    if (!item) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
    res.send(item);
});


//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening on port ${port}..`));