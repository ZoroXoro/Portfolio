const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
  const data = req.body;
  console.log("✅ Received contact form:", data);

  res.status(200).json({ code: 200, message: 'Message received!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
