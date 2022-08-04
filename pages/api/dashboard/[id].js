import ConnectDB from "../../../config/db";
import DashboardModel from "../../../models/dashboard";
import Cors from "cors";

ConnectDB();

const cors = Cors({
  methods: ["PUT", "DELETE", "GET"],
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

async function DashboardApiWithId(req, res) {
  await runMiddleware(req, res, cors);

  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const updateData = await DashboardModel.findById(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!updateData) {
          res.status(400).json({
            success: false,
            message: "Get Single Data Failed",
          });
        }
        res.status(200).json({
          success: true,
          message: "Get Single Data Successfully",
          data: updateData,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: "Get Single Data Failed",
        });
      }

      break;

    case "PUT":
      try {
        const updateData = await DashboardModel.findByIdAndUpdate(
          id,
          JSON.parse(req.body),
          {
            new: true,
            runValidators: true,
          }
        );
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
        const deleteData = await DashboardModel.deleteOne({ _id: id });
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
}

export default DashboardApiWithId;
