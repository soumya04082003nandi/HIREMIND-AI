const multer = require("multer");


const upload = multer({
    storage: multer.memoryStorage(), // Store files in memory as Buffer objects
    limits: {
        fileSize: 4 * 1024 * 1024, // 4 MB file size limit  
    }
});

module.exports  = upload;