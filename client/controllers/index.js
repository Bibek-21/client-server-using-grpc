"use strict";
(()=>{
    const client= require('../client')

    exports.createStudents=async(request,res)=>{

        try {
           
            client.create(request.body,
                (err,data)=>{
                    if(err){
                        res.status(400).send(err)
                    }

                    else{

                        res.status(200).send(data)
                    }



                }
                
                )
        } catch (error) {
            res.send(`Error occured ${error}`)
            
        }
        }
        
        

        exports.readAllStudents=async(request,res)=>{

            try {
               
                client.readAll(request,         //this must be taken from .rpc.proto service rpc name
                    (err,data)=>{
                        if(err){
                            res.status(400).send(err)
                        }
    
                        else{
    
                            res.status(200).send(data)
                        }
    
    
    
                    }
                    
                    )
            } 
            catch (error) {
                res.send(`Error occured ${error}`)
                
            }
            } 


            exports.readStudents=async(request,res)=>{

                try {
                   
                    client.read((request.body),
                        (err,data)=>{
                            if(err){
                                res.status(400).send(err)
                            }
        
                            else{
        
                                res.status(200).send(data)
                            }
        
        
        
                        }
                        
                        )
                } catch (error) {
                    res.send(`Error occured ${error}`)
                    
                }
                } 

            exports.updateStudents=async(request,res)=>{

                try {
                   
                    client.update(request.body,
                        (err,data)=>{
                            if(err){
                                res.status(400).send(err)
                            }
        
                            else{
        
                                res.status(200).send(data)
                            }
        
    
                        }
                        
                        )
                } catch (error) {
                    res.send(`Error occured ${error}`)
                    
                }
                } 


                exports.deleteStudents=async(request,res)=>{

                    try {
                        client.delete(request.body,
                            (err,data)=>{
                                if(err){
                                    res.status(400).send(err)
                                }
            
                                else{
            
                                    res.status(200).send(data)
                                }
            
                            }
                            
                            )
                    } catch (error) {
                        res.send(`Error occured ${error}`)
                        
                    }
                    } 

})();
