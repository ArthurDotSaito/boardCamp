import db from "../database/databaseConnection.js";

export const getCustomers = async(req, res) =>{
    console.log("tentei abrir conexão Customer");
    try{
        await db.query("SELECT  * from customers ", (error, result) =>{
        if (error) return res.status(500).send({error: error})
        else{
            res.status(200).send(result.rows)
        }
    })
    }catch(error){
        console.log("Erro no getGames!!");
        res.status(500).send(error.message);
    }
}
