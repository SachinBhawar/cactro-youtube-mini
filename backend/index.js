// import modules and liabraries
import express, { json } from "express";
import cookieParcer from "cookie-parser";
// import swagger from "swagger-ui-express";
// import apiDocs from "./swagger.json" with { type: "json" };

// import { errorHandlerMiddleware } from "./src/Middlewares/ApplicationError.js";
import cors from "cors";
import { getAllVideoDetails } from "./src/Controller/Controller.js";

// rest api
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParcer());
app.use(cors());
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.get("/", getAllVideoDetails);
// app.get("/:vidId", getRepoDetailsController);
// app.post("/:vidId", createIssueController);

// app.use(errorHandlerMiddleware);

// Swagger documentation
// app.use("/api-docs", swagger.serve, swagger.setup(apiDocs));

app.all("*", (req, res) => {
    res.status(404).send({
        success: false,
        msg: "This route is not Supported by this app. For referece please check documentation at /api-docs",
    });
});

export default app;
