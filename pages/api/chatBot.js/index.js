import ConnectDB from "../../../config/db";
import ChatBotModel from "../../../models/chatbotModel";
import Cors from "cors";

ConnectDB();
const cors = Cors({
  methods: ["GET", "POST"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

async function ChatBotApi(req, res) {
  await runMiddleware(req, res, cors);
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const getData = await ChatBotModel.find({});
        res.status(200).json({
          success: true,
          messsage: "Get Data Succcessfully",
          data: getData,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: "Get Data Failed",
        });
      }
      break;

    case "POST":
      try {
        console.log(req.body);
        const postData = await ChatBotModel.create(req.body);
        res.status(200).json({
          success: true,
          messsage: "Post Data Successfully",
          data: postData,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          messsage: `Post Data Failed due to ${error.message}`,
        });
      }
      break;

    default:
      res.status(400).json({
        success: false,
        message: "Failed to hit Api",
      });
      break;
  }
}

export default ChatBotApi;
