const express =   require("express");
const bodyParser =    require("body-parser");
const multer  =   require('multer');
const app =   express();
app.use(bodyParser.json());
const storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + '.' +file.originalname.split('.')[1]);
    }
});
const upload = multer({ storage : storage }).array('userPhoto',2);

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post('/api/photo',function(req,res){
    upload(req,res,function(err) {
        //console.log(req.body);
        //console.log(req.files);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

app.listen(5000,function(){
    console.log("Working on port 5000");
});