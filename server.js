const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

// default options
app.use(fileUpload());
app.use(express.static("frontend"));

app.use("/form", express.static(__dirname + "/frontend/index.html"));

app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + "/upload/" + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.send("File uploaded!");
  });
});

app.listen(8000, "127.0.0.1", () => {
  console.log("Express server listening");
});