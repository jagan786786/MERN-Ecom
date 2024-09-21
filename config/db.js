import mongoose from "mongoose"
import colors from 'colors';

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connect to mongodb ${conn.connection.host}`.bgMagenta.white);
    }catch(e){
        console.log(`error in mongodb ${e}`.bgRed.white);
    }
}

export default connectDB;