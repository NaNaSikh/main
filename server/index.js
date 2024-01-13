
const express = require('express');
const { connectDB } = require('./utils/db.js');
const User = require('./User.js');
const app = express();


app.listen(3000, () => {
  console.log('App is running on port 3000');
});

app.use(express.json());
connectDB()

.then((db) => {
app.all('/insert', async (req, res) => {
  try {
    console.log("trying to write in database");
    const result = await  db.collection('users').insertOne({
      name: 'nnn',
      age: 31,
    });
    console.log('Document inserted successfully:', result.ops);
    res.send('Document inserted successfully');
  } catch (error) {
    console.error('Error inserting document:', error);
    res.status(500).send('Error inserting document');
  }
});

app.get('/read', async (req, res) => {
  try {
    const users = await db.collection('users').find({}).toArray();
    console.log('Read data from the database:', users);
    res.json(users);
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).send('Error reading data');
  }
});
app.post('/register', async (req,res)=>{
   let user = new User(req.body); 
   let result = await user.save();
   res.send(result)
})
});

