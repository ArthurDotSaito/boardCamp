import db from "../database/databaseConnection.js";
import {customerSchema} from '../schemas/customerSchema.js';

export const customerValidation = async (req, res, next) =>{
    const newCustomer = req.body;
    const id = req.params?.id || -10;
    
    try{
        const newCustomerValidation = customerSchema.validate(newCustomer, {abortEarly: false});
        if(newCustomerValidation.error) return res.status(400).send(newCustomerValidation.error.details);
    
        const customer = await db.query('SELECT * FROM customers WHERE cpf = $1 AND id <> $2', [newCustomer?.cpf, id]);
        if(customer.rowCount > 0) return res.sendStatus(409);

        next();
    }catch(error){
        console.log("erro na validação postCSValidation!")
        res.status(500).send(error.details);
    }
}

