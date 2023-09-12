"use strict";
const client= require('../client')
(()=>{

    exports.createStudents=async(reques,res)=>{

        try {
            const FirstName= request.query;
            const LastName= request.query;
            const CRN= request.query;
            const Contact= request.query;
            const DOB= request.query;
            const Guardian= request.query;
            const Address=request.query;
            const IsDeleted= request.query;

            client.create((
                FirstName,
                LastName,
                CRN,
                Contact,
                DOB,
                Guardian,
                Address,
                IsDeleted),
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
            
        }
        } 

})();
