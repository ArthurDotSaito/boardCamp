import db from "../database/databaseConnection.js";

export const postCustomers = async (req, res) =>{
    const {name, phone, cpf, birthday} = req.body;

    try{
        await db.query({
            text:'INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)',
            values: [name, phone, cpf, birthday],
        })
        res.send("OK").status(201)
    }catch(error){
        console.log("Erro no postCustomers!");
        res.status(500).send(error.message);
    }
}