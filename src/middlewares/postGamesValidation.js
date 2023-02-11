import db from "../database/databaseConnection.js";
import {gameSchema} from '../schemas/gameSchema.js';

export const postGamesValidation = async(req,res, next) =>{
    const newGame = req.body;
    console.log('tenti validar!')
    try{
        console.log('tenti validar try!')
        const newGameValidation = gameSchema.validate(newGame, {abortEarly: false});
        if(newGameValidation.error) return res.status(400).send(newGameValidation.error.details);
    
        await db.query('SELECT * FROM games WHERE name = $1', [newGame?.name]);

        next();
    }catch(error){
        console.log("erro na validação postGameValidation!")
        res.status(500).send(error.details);
    }
}