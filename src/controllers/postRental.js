import db from "../database/databaseConnection.js";
import dayjs from "dayjs";

export const postRental = async (req, res) =>{
    const {customerId, gameId, daysRented} = req.body;
    const rentDate = dayjs().format('YYYY-MM-DD');

    try{
        const gameRented = await db.query('SELECT * FROM games WHERE id = $1', [gameId]);
        const originalPrice = daysRented * gameRented.rows[0].pricePerDay;

        await db.query({
            text:`INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee")  
            VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            values: [customerId, gameId, rentDate, daysRented, null, originalPrice, null],
        })
        res.send("OK").status(201)
    }catch(error){
        console.log("Erro no postGames!");
        res.status(500).send(error.message);
    }
}