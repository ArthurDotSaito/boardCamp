import db from "../database/databaseConnection.js";

export const getRentals = async(req, res) =>{

    try{
        const rentals = await db.query('SELECT * FROM rentals');
        const customer = await db.query('SELECT id,name FROM customers');
        const game = await db.query('SELECT id, name FROM games'); 

        const rentalObject = rentals.rows.map((rental, i) =>({
            ...rental,
            customer: {
                id:rentals.rows[i].customerId,
                name: customer.rows.find((e) => e.id === rentals.rows[i].customerId).name
            },
            game: {
                id: rentals.rows[i].gameId,
                name: game.rows.find((e) => e.id === rentals.rows[i].gameId).name
            }
        }))
        console.log("Oi")

        res.status(200).send(rentalObject)
    }catch(error){
        console.log("Erro no getRentals!!");
        res.status(500).send(error.message);
    }
}
