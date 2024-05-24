import mongoose from 'mongoose'; // Import the mongoose library to interact with MongoDB

let isConnected = false; // track the connection

// Function to connect to the MongoDB database
export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  // Check if already connected to avoid reconnecting
  if (isConnected) {
    console.log('MongoDB is already connected');
    return; // Exit the function if already connected
  }

  try {
    // Attempt to connect to MongoDB using the connection string from environment variables
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'componentForgeDB', // Specify the database name
      useUnifiedTopology: true, // Use the new unified topology engine for MongoDB driver
    });

    isConnected = true; // update the connection status

    // Log successful connection
    console.log('MongoDB connected');
  } catch (error) {
    // Log any errors that occur during connection
    console.log(error);
  }
};
