const multer = require("multer");
const randemId = require("pkg-rendom-id");
const filesModel = require("../models/files");

const path = require("path");

const uplodeDirectoryPath = path.join(__dirname , ".." , "files");


const storage = multer.diskStorage({
    destination: (req ,res , cd)=>{
        cd(null , uplodeDirectoryPath)
    },
    filename: (req ,file , cd)=>{
        console.log(file.originalname)
        const fileName = randemId(8)+file.originalname;
        cd(null , fileName)
    },
})

const uplode =  multer({
    storage: storage,
}).single("file");

const uplodeFiles = async (req , res) => {
    uplode(req , res , async (err) => {
        console.log(req.body);
        if(err){
            console.log("ERROR WILE UPLODE" , err);
            return;
        }
        const newFile = new filesModel({
            originalFileName : req.file.originalname,
            newName : req.file.filename,
            path : req.file.path,
        });

        const newlyInserterdFile = await newFile.save();

        console.log("file uplode successfully")
        res.json({
            succcess: true,
            message: "all good",
            file : newlyInserterdFile.id,
        });
    });
    // res.json({
    //     succcess: true,
    //     message: 'uploding file API'
    // })
};

const generateDynamicLink = async (req , res) => {
    res.json({
        succcess: true,
        message: 'uploding file API'
    })
};

const downlodeFiles = async (req , res) => {
    res.json({
        succcess: true,
        message: 'uploding file API'
    })
};

const sendFile = async (req , res) => {
    res.json({
        succcess: true,
        message: 'uploding file API'
    })
};

const fileControler = {
    uplodeFiles,
    generateDynamicLink,
    downlodeFiles,
    sendFile
}

module.exports = fileControler;