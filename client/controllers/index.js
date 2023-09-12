"use strict";
(()=>{
    const client= require('../client')

    exports.createStudents=async(request,res)=>{

        try {
            const FirstName= request.body.FirstName;
            const LastName= request.body.LastName;
            const CRN= request.body.CRN;
            const Contact= request.body.Contact;
            const DOB= request.body.DOB;
            const Guardian= request.body.Guardian;
            const Address=request.body.Address;
            const IsDeleted= request.body.IsDeleted;

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
