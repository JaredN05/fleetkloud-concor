const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Simulated database (in-memory)
const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' }
];

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like index.html)
app.use(express.static('.'));

app.post('/index', (req, res) => {
    console.log("Received data:", req.body);    
    const { username, password } = req.body;
    console.log(`Received login request for username: ${username}`);

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    console.log("Login successful");
    res.json({ success: true }); // Send success response
  } else {
    console.log("Login failed");
    res.json({ success: false, message: 'Invalid credentials.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});