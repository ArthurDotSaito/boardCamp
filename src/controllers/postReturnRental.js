import db from "../database/databaseConnection.js";
import dayjs from "dayjs";

const delayDays = ({ rentDate, returnDate, daysRented }) => {
    const daysDifference = dayjs(returnDate).diff(rentDate, 'day');
    return daysDifference > daysRented ? daysDifference - daysRented : 0;
};

export const postReturnRental = async (req, res) =>{
    const id = req.params.id;
    const returnDate = dayjs().format('YYYY-MM-DD');  

    try{
        const rental = await db.query('SELECT "rentDate","daysRented","originalPrice" FROM rentals WHERE id = $1', [id]);
        if(rental.rowCount === 0) return res.sendStatus(404);
        const delay = await delayDays({rentDate:rental.rows[0].rentDate , returnDate: returnDate, daysRented:rental.rows[0].daysRented});
        const pricePerDay = rental.rows[0].originalPrice/rental.rows[0].daysRented;
        const delayFee = delay * pricePerDay;

        await db.query({
            text:'UPDATE rentals SET "returnDate" = $1, "delayFee" = $2 WHERE id = $3',
            values: [returnDate, delayFee, id]
        })
        res.sendStatus(200);
    }catch(error){
        console.log("Erro no postReturnRentals!");
        res.status(500).send(error.message);
    }
}