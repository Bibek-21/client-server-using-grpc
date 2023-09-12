"use strict";
(()=>{
    exports.createStudents=async(req,res)=>{

        try {
            const dbResponse= await studentsModel.create(req.body)
        
        } catch (error) {
            
        }
        } 

})();
