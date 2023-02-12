import db from "../database/databaseConnection.js";

export const postGames = async (req, res) =>{
    const {name, image, stockTotal, pricePerDay} = req.body;

    try{
        await db.query({
            text:'INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4)',
            values: [name, image, stockTotal, pricePerDay],
        })
        res.sendStatus(201)
    }catch(error){
        console.log("Erro no postGames!");
        res.status(500).send(error.message);
    }
}