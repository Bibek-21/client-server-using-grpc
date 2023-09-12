const express = require('express');
(() => {
    const controller = require('./../controllers/index')

    const router = express.Router()

    router.post('/createstudents', controller.createStudents);


    module.exports = router;
})();