
const express = require('express');
const router = express.Router();
router.get('./treefacts', (req, res) => {
  res.json({ message: 'This is my Tree api route' });
});

module.exports = router;

router.get('./treefacts/:id', (req, res) => {
  const treeId = req.params.id;
  res.json({ message: `Tree ID: ${treeId}` });
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
