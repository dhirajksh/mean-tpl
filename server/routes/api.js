const express = require('express');
const router = express.Router();

var mongo = require("mongojs");


/* GET api listing. */
router.get('/', (req, res) => {
    //mongoose.connect('mongodb://sftadmin:password@ds023118.mlab.com:23118/sftdb');
    var db = mongo("mongodb://sftadmin:password@ds023118.mlab.com:23118/sftdb", ["student"]);

    db.student.find(function(error, documents){
        console.log('api works, it could be JSON object, mongodb connected');
        res.send(documents);
    });
});
  
module.exports = router;