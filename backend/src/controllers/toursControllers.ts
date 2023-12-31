import { Request, Response } from 'express'
import mssql from 'mssql'
import {dbConfig} from '../config/sqlConfig'
import Connection from '../dbHelpers/dbHelpers'
import { Tour} from'../interfaces/interfaces'
import { v4 as uuidv4 } from 'uuid';
import {v4} from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const dbhelper = new Connection



export const addTour = async (req: Request, res: Response) => {
    try {
      let { name, description, destination, startDate, endDate, price, duration, type } = req.body;
  
      let tourID = v4();
  
      let result = await dbhelper.execute('AddTour', {
        tourID,
        name,
        description,
        destination,
        startDate,
        endDate,
        price,
        duration,
        type,
      });
  
      return res.status(200).json({
        message: 'Tour added successfully',
      });
    } catch (error) {
      return res.json({
        error: error,
      });
    }
  };
  






export const getAllTours = async(req:Request, res:Response)=>{
    try {

        const pool = await mssql.connect(dbConfig)

        let tours = (await pool.request().execute('fetchAllTours')).recordset

        return res.status(200).json({
            tours: tours
        })
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}





export const getTourById = async (req: Request, res: Response) => {
    try {
        const tourID = req.params.tourID;

        const pool = await mssql.connect(dbConfig);

        let tour = (await pool.request().input('tourID', tourID).execute('getTourByID')).recordset[0];

        return res.status(200).json({
            tour: tour,
        });
    } catch (error) {
        return res.json({
            error: error,
        });
    }
}




export const editTour = async (req: Request, res: Response) => {
    try {
        const tourID = req.params.tourID;
        let { name, description, destination, startDate, endDate, price, duration, type } = req.body;

        const pool = await mssql.connect(dbConfig);

        await pool
            .request()
            .input('tourID', mssql.VarChar, tourID)
            .input('name', mssql.VarChar, name)
            .input('description', mssql.VarChar, description)
            .input('destination', mssql.VarChar, destination)
            .input('startDate', mssql.Date, startDate)
            .input('endDate', mssql.Date, endDate)
            .input('price', mssql.Decimal(10, 2), price)
            .input('duration', mssql.VarChar, duration)
            .input('type', mssql.VarChar, type)
            .execute('editTour');

        return res.status(200).json({
            message: 'Tour updated successfully',
        });
    } catch (error) {
        return res.json({
            error: error,
        });
    }
};






export const deleteTour = async (req: Request, res: Response) => {
    try {
        const tourID = req.params.tourID;

        const pool = await mssql.connect(dbConfig);

        await pool.request().input('tourID', tourID).execute('softDeleteTour');

        return res.status(200).json({
            message: 'Tour  deleted successfully',
        });
    } catch (error) {
        return res.json({
            error: error,
        })
    }
};







export const getMyTours = async(req:Request, res:Response)=>{
    try {

        const userID = req.params.userID;
        
        let tours = dbhelper.execute('fetchMytours', {
                        userID
        })


        return res.status(200).json({
          tours: tours
        })
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}



