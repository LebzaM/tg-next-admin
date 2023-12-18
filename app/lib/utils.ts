import mongoose, { ConnectOptions } from 'mongoose';

const connectToDatabase = async (): Promise<void> => {
  try {
    const dbUrl = 'mongodb+srv://lebomariri505:lebza123@cluster0.madopni.mongodb.net/test?retryWrites=true&w=majority';

    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log('Connected to MongoDB');

    // Event listeners for Mongoose connection
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected');
    });

    mongoose.connection.on('connected', () => {
      console.log('MongoDB reconnected');
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectToDatabase