// app.js
const express = require("express")
const path = require('path')

const app = express();
app.use(express.static(__dirname));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get("/download/", (req, res) => {
    const filePath = __dirname + "/public/assets/" + "Poulin_Steven_Resume_23.pdf";
    res.download(
        filePath, 
        "Poulin_Steven_Resume_23.pdf", // Remember to include file extension
        (err) => {
            if (err) {
                res.send({
                    error : err,
                    msg   : "Problem downloading the file"
                })
            }
    });
});



app.listen(5000, () => {
  console.log('Listening on port ' + 5000 + " http://localhost:5000");
});
