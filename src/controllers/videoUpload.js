var multer  = require('multer');
// var upload = multer();
var videoStitch = require('video-stitch');
var videoMerge = videoStitch.merge;
const { getVideoDurationInSeconds } = require('get-video-duration')

  
/* MULTER IMPLEMENTATION */
exports.uploadDoc = (req, res) => {
  console.log("***", getVideoDurationInSeconds('src/assests/SampleVideo_1280x720_5mb.mp4'))
  getVideoDurationInSeconds('src/assests/SampleVideo_1280x720_5mb.mp4').then((duration) => {
    return duration;
  }).then((duration) => {
    videoMerge()
    .original({
      "fileName": 'src/assests/SampleVideo_1280x720_5mb.mp4',
      "duration": duration,
    })
    .clips([
      {
        "startTime": "hh:mm:ss",
        "fileName": "FILENAME",
        "duration": "hh:mm:ss"
      },
      {
        "startTime": "hh:mm:ss",
        "fileName": "FILENAME",
        "duration": "hh:mm:ss"
      },
      {
        "startTime": "hh:mm:ss",
        "fileName": "FILENAME",
        "duration": "hh:mm:ss"
      }
    ])
    .merge()
    .then((outputFile) => {
      console.log('path to output file', outputFile);
    });

  })
  var storage = multer.diskStorage({
    destination: function (request, file, callback) {
      callback(null, './src/assests');
    },
    filename: function (request, file, callback) {
      callback(null, file.originalname)
    }
  });
  var upload = multer({storage: storage}).any('uploadedImages');
  upload(req, res, err => {
    if(err){
      console.log('error');
      console.log(err);
    }
    var file = req.files;
    console.log(file, "FILE");
    res.end();
    console.log(req.files);
  });
};

const videoIntervalDuration = () => {

};
 
const getDurattion = () => {

}
 




































































































































































// upload(req, res, err => {
//   if(err){
//     console.log('error');
//     console.log(err);
//   }
//   var file = req.files;
//   fs.readFile('./src/assests/' + file[0].filename, function(err, data) {
//     console.log(data, "++")
//     const a = encodeData(data);
//     console.log(a);
//     //res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
//   console.log(req.files);
// });