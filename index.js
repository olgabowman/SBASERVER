const express = require('express');
const { getTreeFacts } = require('./treefacts'); 

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get('/api/trees', (req, res) => {
  
  getTreeFacts((err, treeFacts) => {
    if (err) {
      console.error('Error getting tree facts:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

  
    res.json(treeFacts);
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
