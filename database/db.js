import mongoose from "mongoose";
export const Connection = async (username, password) => {
  const URL = `mongodb+srv://arsil8356:52331071@joblist-cluster.3fkkvmd.mongodb.net/`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  } catch (err) {
    console.log("ERROR WHILE CONNECTING WITH DATABASE => ", err.message);
  }
};
