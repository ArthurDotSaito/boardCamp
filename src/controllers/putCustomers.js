import db from "../database/databaseConnection.js";

export const putCustomers = async (req,res) =>{
    const id = req.params.id;
    const {name, phone, cpf, birthday} = req.body;

    try{
        await db.query({
            text:'UPDATE customers SET name = $1, phone = $2, cpf = $3, birthday = $4 WHERE id = $5',
            values:[name, phone, cpf, birthday, id],
        })

        res.sendStatus(200);
    }catch(error){
        console.log("Erro no putCustomers!");
        res.status(500).send(error.message);
    }
}