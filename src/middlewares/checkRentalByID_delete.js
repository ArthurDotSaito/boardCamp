import db from "../database/databaseConnection.js";

export const checkRentalByID_delete = async(req,res, next) =>{
    const id = req.params.id;

    try{
        const rent = await db.query('SELECT id,"returnDate" FROM rentals WHERE id = $1', [id]);
        if(rent.rowCount === 0) return  res.status(404).send("Id-Rent não existente");
        if(rent.rows[0].returnDate === null) return res.sendStatus(400)

        next();
    }catch(error){
        console.log("erro na validação - rota delete!")
        res.status(500).send(error.details);
    }
}