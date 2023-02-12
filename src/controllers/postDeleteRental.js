import db from "../database/databaseConnection.js";

export const postDeleteRental = async (req, res) =>{
    const id = req.params.id;

    try{
        await db.query('DELETE FROM rentals WHERE id = $1',[id])

        res.sendStatus(200);
    }catch(error){
        console.log("Erro - Rota delete - POST!");
        res.status(500).send(error.message);
    }
}