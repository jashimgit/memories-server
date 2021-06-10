import express from "express";
import cors from "cors";
import mongoose  from "mongoose";
import postRoutes from "./routes/postRoutes.js";

// initialize express app

const app = express();
// mongo url
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vewnd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json({"extended": true}));
app.use(express.urlencoded({"extended" : true}));

app.use('/posts', postRoutes);



// connect db with mongoose
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
