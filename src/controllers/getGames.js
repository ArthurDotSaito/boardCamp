import db from "../database/databaseConnection.js";

console.log(db)

export const getGames = async(req, res) =>{
    console.log("tentei abrir conexão getGames!!");
    try{
        const games = await db.query("SELECT  * from games ", (error, result) =>{
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
