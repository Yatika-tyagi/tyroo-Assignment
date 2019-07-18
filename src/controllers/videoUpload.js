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
  getVideoDurationInSeconds('src/assests/SampleVideo_1280x720_30mb.mp4')
   //.then((duration) => {
    // console.log(__dirname);
    // return duration;
   //})
  .then((duration) => {
    var dataArray = [
      {
        start: '00:00:03',
        end: '00:00:10',
        name: '1'
      },
      {
        start: '00:00:13',
        end: '00:00:10',
        name: '2'
      },
      {
        start: '00:00:23',
        end: '00:00:10',
        name: '3'
      },

    ];

    const exec = require("child_process").exec;
    let comm = 'ffmpeg -i src/assests/SampleVideo_1280x720_30mb.mp4 -ss {start} -t {till} -strict experimental  src/assests/{name}.mp4';

    for (let index = 0; index < dataArray.length; index++) {
      var comm1 = comm.replace('{start}', dataArray[index].start).replace('{till}',dataArray[index].end).replace('{name}', dataArray[index].name);
        exec(comm1, (error, stdout, stderr) => {
        //do whatever here
        console.log(error, stdout, stderr);
        })     
      
    }
    
  })
  res.end();
    // console.log(req.files);
  });
};

const videoIntervalDuration = () => {

};
 
const getDurattion = () => {

}

const  toHHMMSS = (secs) => {
  var sec_num = parseInt(secs, 10)
  var hours   = Math.floor(sec_num / 3600)
  var minutes = Math.floor(sec_num / 60) % 60
  var seconds = sec_num % 60

  return [hours,minutes,seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":")
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