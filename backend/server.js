import app from "./index.js";
import { configDotenv } from "dotenv";

configDotenv();

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
    console.log(`Server is listening on ${PORT}`);
});
