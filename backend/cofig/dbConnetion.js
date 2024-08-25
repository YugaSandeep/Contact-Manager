import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// console.log("MongoDB URI:", process.env.URI); // Debug: Check URI output

async function connectDb() {
    try {
        const connect = await mongoose.connect(process.env.URI);
        console.log("Database connected:", connect.connection.host, connect.connection.name);
    } catch (err) {
        console.log("Database connection error:", err);
        process.exit(1);
    }
};

export default connectDb;


// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// async function connectDb()
// {
//     try
//     {
//         console.log(process.env.URI);
//         const connect = await mongoose.connect(process.env.URI);
//         // const connect = await mongoose.connect(process.env.URI, {
//         //     useNewUrlParser: true,
//         //     useUnifiedTopology: true
//         // });
//         // console.log("Database connected:", 
//         //     connect.connection.host, 
//         //     connect.connection.name
//         // );
//     }
//     catch (err)
//     {
//         console.log(err);
//         process.exit(1);
//     }
// };

// export default connectDb;




// import mongoose from "mongoose";
// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";

// dotenv.config();

// const uri = process.env.URI;

// async function connectDb() {
//     try {
//         const client = new MongoClient(uri);
//         console.log("Database Connected ", 
//             // client.db,
//             // client.connection.name
//         );
//     } catch (err) {
//         console.log(err);
//         process.exit(1);
//     }
// }

// export default connectDb;