import db from "../database/databaseConnection.js";
import {rentalSchema} from '../schemas/rentalSchema.js';

const verifyGame = async (gameId, stockTotal) => {
    const { rowCount } = await db.query('SELECT * FROM rentals WHERE "gameId" = $1 AND "returnDate" IS NULL', [gameId]);
    return stockTotal > rowCount;
  };

export const postRentalValidation = async(req,res, next) =>{
    const newRental = req.body;
    
    try{
        const newRentalValidation = rentalSchema.validate(newRental, {abortEarly: false});
        if(newRentalValidation.error) return res.status(400).send(newRentalValidation.error.details);
    
        const customerExist = await db.query('SELECT * FROM customers WHERE id = $1', [newRental?.customerId]);
        if(customerExist.rowCount === 0) return  res.status(400).send("Cliente não existente");

        const gameExist = await db.query('SELECT * FROM games WHERE id = $1', [newRental?.gameId]);
        if(gameExist.rowCount === 0) return  res.status(400).send("Game não existente");

        console.log(gameExist.rows[0].stockTotal);
        const isGameAvailable = await verifyGame(newRental.gameId, gameExist.rows[0].stockTotal);
        if(!isGameAvailable) return res.status(400).send("Jogo não disponível")

        next();
    }catch(error){
        console.log("erro na validação postRentValidation!")
        res.status(500).send(error.details);
    }
}
