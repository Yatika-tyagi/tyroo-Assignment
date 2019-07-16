var express = require('express'); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var videoUpload = require('../../controllers/videoUpload');
/*
Wrapper APIs Start
*/
router.route('/fileupload')
  .post(videoUpload.uploadDoc);

/*
Wrapper APIs Ends
*/

module.exports = router; // Exporting router
