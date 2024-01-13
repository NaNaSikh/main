
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://newAdmin:newAdmin@cluster.3cihw2w.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    const client = await MongoClient.connect(url);
    console.log('Connected to the database');
    
    return client.db('test');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};


module.exports = { connectDB };