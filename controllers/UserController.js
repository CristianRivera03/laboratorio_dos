import { response } from "express"
import UserRepository from "../repository/UserRepository.js"

export const Usercontroller ={
    async register(req,res){
        const {username,password}= req.body
        console.log(username.password)
        try{
            const responseData = UserRepository.create({
                username,
                password
            })

            res.send({
                status:true,
                id:responseData,
                message: "Register succesfull"
            })
        } catch (error){
            res.send({
                status:false,
                message:error.message
            })
        }
    },


    async login(req, res){
        try{
            const {username, password} = req.body
            const responseData = UserRepository.login({username,password})
            req.send({
                status: true,
                nessage: "login succesfull",
                data: responseData
            })
        
        } catch (error){
            res.send({
                status: false, 
                message: error.message,
            })
        }
    },
}