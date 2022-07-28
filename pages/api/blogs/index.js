import ConnectDB from "../../../config/db";
import BlogsModel from "../../../models/blogs";

ConnectDB();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const getData = await BlogsModel.find({});
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
        const postData = await BlogsModel.create(JSON.parse(req.body));
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
};
