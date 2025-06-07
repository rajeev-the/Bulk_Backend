const mongoose = require('mongoose');


// Replace this with your actual MongoDB URI from Railway
const mongoURI = "mongodb+srv://rajeevranjan7654321:GPFAyX9amOfLKj7B@bulkwala.hnjlycy.mongodb.net/?retryWrites=true&w=majority&appName=Bulkwala";



const connectDB = async()=>{

    try {
        const conn = await mongoose.connect(mongoURI,{
        
             }
        )
        console.log(`connection  to mongoose Database ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`error in mongoose ${error}`)
        
    }

}


module.exports = connectDB; // Export the connectDB function