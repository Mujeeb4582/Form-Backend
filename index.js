import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import dataRoutes from "./routes/data.js";

dotenv.config();
const app = express();


app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());
app.use("/", dataRoutes);

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		// useNewUrlParser: true,
		// useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
// Path: https://www.mongodb.com/cloud/atlas
