const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require("express");
const multer = require("multer");
const upload = multer({dest: "./uploads/"});
const logger = require("morgan");
const jsonParser = require("body-parser").json;
const app = express();
const port = process.env.PORT || 3000;



app.use(logger("dev"));
app.use(jsonParser());

app.use("/", express.static("public"));

// app.post("/file", upload.any(), (req, res, next) => {
// 	res.status(200);
// 	res.json({
// 		size: req.files[0].size
// 	});
// })


app.listen(port, () => {
	console.log("The server is running on port", port);
})


