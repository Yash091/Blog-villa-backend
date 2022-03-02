import mongoose from "mongoose";
const Connection = async () => {
  try {
    const DB =
      "mongodb+srv://Yash091:8542955586@cluster0.htilt.mongodb.net/BLOGAPP?retryWrites=true&w=majority";
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Error while connecting to MONGODB", err);
  }
};
Connection();
export default Connection;
