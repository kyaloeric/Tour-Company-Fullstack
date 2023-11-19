import { Request, Response } from "express";
import mssql from "mssql";
import { v4 } from "uuid";
import Connection from '../dbHelpers/dbHelpers'
import { ExtendedUser } from "../middlewares/verifyToken";
import { bookingDetails } from "../interfaces/interfaces";
import { bookingValidation, validateBookID } from "../validators/bookingValidator";
import { any } from "joi";


const dbhelper = new Connection


export const createBooking = async (req: Request, res: Response) => {
  try {
    let { userID, tourID, totalprice, totalBookCount } = req.body;

    console.log(req.body);

    const { error } = bookingValidation.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    let bookID = v4();

    const procedureName2 = "createNewBooking";

    const params = {tourID, userID, totalprice, totalBookCount, bookID,
    };

    await dbhelper.execute(procedureName2, params);

    res.status(200).json({
      message: "Booking added successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllBookings = async (req: ExtendedUser, res: Response) => {
  try {
    const procedureName = "getAllBookings";
    const result = await dbhelper.query(`EXEC ${procedureName}`);
    return res.json(result.recordset);
  } catch (error) {
    console.log(error);
  }
};

export const getBooking = async (req: Request, res: Response) => {
  try {
    const { bookID } = req.body;
    if (!bookID) return res.status(400).send({ message: `Id is ${bookID}` });

    const { error } = validateBookID.validate(req.body);

    if (error) return res.send({ message: error.details[0].message });

    const procedureName = "getBookingByID";
    const result = await dbhelper.execute(procedureName, { bookID });

    return res.json(result.recordset);
  } catch (error) {
    console.log(error);
  }
};




export const updateBookingDetails = async (req: Request, res: Response) => {
  try {
    const { userID, tourID, totalprice, totalBookCount, bookID } = req.body;
    
    if (tourID || userID || totalprice || totalBookCount || bookID) {
      const updatebookingDetails: bookingDetails = {tourID, userID, totalprice, totalBookCount, bookID,
      };

      const updatebookingprocedureName = "updateBookingDetails";
      const params = updatebookingDetails;

      dbhelper.execute(updatebookingprocedureName, params)

      res.send("Booking Updated Successfully");
    } else {
      return res.send({
        error: "Enter required booking details",
      });
    }
  } catch (error) {
    console.error("Error updating booking details:", error);
    res.status(500).json({ error: "Internal server error" })
  }
}




export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const { bookID } = req.params;

    if (!bookID) {
      return res.send({ message: "enter id" });
    }
    console.log(`tour id IS:${bookID}`);

    const result = await dbhelper.execute("deleteBooking", { bookID });

    console.log(result.recordset);

    res.send({ message: "Booking deleted successfuly" });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};