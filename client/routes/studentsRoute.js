const express = require('express');
(() => {
    const controller = require('./../controllers/index')

    const router = express.Router()

    router.post('/createstudents', controller.createStudents);
    router.get('/readstudents', controller.readAllStudents);
    router.get('/readstudentsbyid', controller.readStudents);
    router.put('/updatestudents', controller.updateStudents);
    router.delete('/deletestudentsbyid', controller.deleteStudents);



    module.exports = router;
})();