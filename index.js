import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import hitUserRoutes from "./routes/userRouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


const PORT = process.env.PORT || 8080;

app.use("/api/user", hitUserRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
