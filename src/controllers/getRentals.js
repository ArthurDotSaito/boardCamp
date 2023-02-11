import db from "../database/databaseConnection.js";

export const getRentals = async(req, res) =>{

    try{
        const rentals = await db.query('SELECT * FROM rentals');
        const customer = await db.query('SELECT id,name FROM customers');
        const game = await db.query('SELECT id, name FROM games'); 

        const rentalObject = rentals.rows.map((rental, i) =>({
            rental,
            customer: {
                id:rentals[i].customerId,
                name: customer.find((e) => e.id === rentals[i].customerId).name
            },
            game: {
                id: rentals[i].gameId,
                name: game.find((e) => e.id === rentals[i].gameId).name
            }
        }))

        res.status(200).send(rentalObject)
    }catch(error){
        console.log("Erro no getRentals!!");
        res.status(500).send(error.message);
    }
}
