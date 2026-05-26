const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Calculator API is running');
});

app.get('/calculate/:num1/:op/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const op = req.params.op;
    let result;

    if (op === 'add') result = num1 + num2;
    else if (op === 'sub') result = num1 - num2;
    else if (op === 'mul') result = num1 * num2;
    else if (op === 'div') result = num3 / num2;

    res.send({ answer: result });
});

app.listen(3000, () => console.log('Calculator API running on port 3000'));