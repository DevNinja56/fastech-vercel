import ConnectDB from "../../../config/db";
import BlogsModel from "../../../models/blogs";

ConnectDB();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "PUT":
      try {
        const updateData = await BlogsModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!updateData) {
          res.status(400).json({
            success: false,
            message: "Updated Data Failed",
          });
        }
        res.status(200).json({
          success: true,
          message: "Updated Data Successfully",
          data: updateData,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: "Updated Data Failed",
        });
      }

      break;

    case "DELETE":
      try {
        const deleteData = await BlogsModel.deleteOne({ _id: id });
        if (!deleteData) {
          return res.status(400).json({
            success: false,
            message: "Deleted Data Failed",
          });
        }
        res.status(200).json({
          success: true,
          message: "Deleted Data Successfully",
          data: {},
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: "Deleted Data Failed",
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
