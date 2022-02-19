import mongoose from "mongoose";

const createDbConnection = (urlConnection: string) => {
    mongoose.connect(urlConnection)
    mongoose.connection.on('err', (err) => console.log('Error on Connect Database:', err));
    mongoose.connection.once('connected', () => console.log('Database connected'));
}

export default createDbConnection;