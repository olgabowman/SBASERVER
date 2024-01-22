
const express = require('express');
const router = express.Router();
router.get('/api/sample', (req, res) => {
  res.json({ message: 'This is a sample API route' });
});

module.exports = router;

router.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ID: ${userId}` });
});


app.use(express.json());


const app = express();
app.get('/', (req, res) => {
  res.send('Hello, this is your local server!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
