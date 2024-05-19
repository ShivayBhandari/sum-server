const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const todos = [{
  id: 1,
  title: "Todo 1",
  description: "This is todo 1",
  completed: false,
}, {
  id: 2,
  title: "Todo 2",
  description: "This is todo 2",
  completed: false,
}, {
  id: 3,
  title: "Todo 3",
  description: "This is todo 3",
  completed: false,

}, {
  id: 4,
  title: "Todo 4",
  description: "This is todo 4",
  completed: false,
}, {

  id: 5,
  title: "Todo 5",
  description: "This is todo 5",
  completed: false,
}]

app.get("/todo", (req, res) => {
  const todo = todos.find(t => t.id == req.query.id);
  res.json({
    todo
  })
})

app.get("/todos", (req, res) => {
  const randomTodos = [];
  for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.5) {
      randomTodos.push(todos[i]);
    }
  }
  res.json({
    todos: randomTodos,
  })
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  res.send({
    total: total,
    interest: interest,
  })

});

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

app.get("/notifications", (req, res) => {
  res.json({
    network: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messaging: getRandomNumber(10),
    notifications: getRandomNumber(10)
  })
})

// New route to serve the HTML message
app.get("/message", (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Message for Shreya</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(to right, #ff7e5f, #feb47b);
        }
        .message-box {
          text-align: center;
          background: rgba(255, 255, 255, 0.8);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .message-box h1 {
          margin: 0;
          font-size: 2.5em;
          color: #333;
        }
        .message-box p {
          margin: 10px 0 0;
          font-size: 1.2em;
          color: #555;
        }
      </style>
    </head>
    <body>
      <div class="message-box">
        <h1>Good morning Shreya,</h1>
        <p>I love you.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(8080, () => {
  console.log('Server running at http://0.0.0.0:8080/');
});
