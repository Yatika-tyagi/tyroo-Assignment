var multer  = require('multer');
// var upload = multer();
var videoStitch = require('video-stitch');
var videoMerge = videoStitch.merge;
var videoCut = videoStitch.cut;
const { getVideoDurationInSeconds } = require('get-video-duration')

  
/* MULTER IMPLEMENTATION */
exports.uploadDoc = (req, res) => {
  var storage = multer.diskStorage({
    destination: function (request, file, callback) {
      callback(null, './src/assests');
    },
    filename: function (request, file, callback) {
      callback(null, file.originalname)
    }
  });
  var upload = multer({storage: storage}).any('file');
  upload(req, res, err => {
    if(err){
      console.log('error');
      console.log(err);
    }
    var file = req.files;
    // console.log(file, "FILE");
    // console.log("***", getVideoDurationInSeconds('src/assests/SampleVideo_1280x720_5mb.mp4'))
  getVideoDurationInSeconds('src/assests/SampleVideo_1280x720_5mb.mp4')
   //.then((duration) => {
    // console.log(__dirname);
    // return duration;
   //})
  .then((duration) => {
    console.log(__dirname, 'wertyuiuytrew');

    console.log("Dur", duration);
    res.end();

    videoCut({
      silent: false // optional. if set to false, gives detailed output on console
    })
    .original({
      "fileName": 'src/assests/SampleVideo_1280x720_5mb.mp4',
      "duration": '00:00:29',
    })
    .exclude([
      {
        "startTime": "00:00:01",
        "duration": "00:00:10"
      },
      {
        "startTime": "00:00:11",
        "duration": "00:00:20"
      },
      {
        "startTime": "00:00:21",
        "duration": "00:00:28"
      }
    ])
    .cut()
    .then((videoClips) => {
      console.log(videoClips, 'wertyuioiuytre');
      res.end();
      // [{startTime, duration, fileName}]
    }).catch(a => console.log(a));
  })
  // res.end();
    // console.log(req.files);
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