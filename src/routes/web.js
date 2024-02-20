import express from "express";
import chatbotController from "../controllers/chatbotController";

let router = express.Router();

// const app = express()
let initWebRoutes = (app) => {

    router.get("/", chatbotController.test)
    
    router.get("/webhook", chatbotController.getWebHook)
    router.post("/webhook", chatbotController.postWebHook)


    return app.use("/", router);
}

module.exports = initWebRoutes