import db from "../database/databaseConnection.js";

export const getCustomersByID = async(req, res) =>{
    const id = req.params.id
    try{
        const customer = await db.query("SELECT  * from customers WHERE id = $1", [id]); 
        if(!customer.rows[0]) return res.sendStatus(404);
        return res.status(200).send(customer.rows[0]);
    }catch(error){
        console.log("Erro no getCustomersByID!!");
        res.status(500).send(error.message);
    }
}