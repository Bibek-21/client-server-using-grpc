"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    
    const studentdRoutes = require("./studentsRoute");
    

    router.use("/students",studentdRoutes);
    module.exports = router;
})()