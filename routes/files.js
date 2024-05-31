const express = require("express");
const fileControler = require("../controllers/files");

const router = express.Router();

router.post("/app/files" , fileControler.uplodeFiles);

router.get("/files/:uuid" , fileControler.generateDynamicLink);

router.get("/files/download/:uuid" , fileControler.downlodeFiles);

router.post("/api/files/send" , fileControler.sendFile);

module.exports = router;