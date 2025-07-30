const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome - Node.js App</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(to right, #00c6ff, #0072ff);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }
        .container {
          background-color: rgba(0, 0, 0, 0.3);
          padding: 40px 60px;
          border-radius: 20px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.4);
        }
        h1 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1.2rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🎉 Welcome to the Home Page</h1>
        <p>This is a beautiful UI powered by Express.js!</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(5000, () => {
  console.log("🚀 Server is running on http://localhost:5000");
});
