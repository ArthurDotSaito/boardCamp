import db from "../database/databaseConnection.js";
import {gameSchema} from '../schemas/gameSchema.js';

export const postGamesValidation = async(req,res, next) =>{
    const newGame = req.body;
    
    try{
        const newGameValidation = gameSchema.validate(newGame, {abortEarly: false});
        if(newGameValidation.error) return res.status(400).send(newGameValidation.error.details);
        
        const game = await db.query('SELECT * FROM games WHERE name = $1', [newGame?.name]);
        if(game.rowCount > 0) return res.sendStatus(409);

        next();
    }catch(error){
        console.log("erro na validação postGameValidation!")
        res.status(500).send(error.details);
    }
}
