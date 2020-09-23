const express = require("express"); 
const app = express()  
const path = require("path")
var PORT = process.env.PORT || 8080 
var cors = require('cors')
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "/8080"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use(cors()) 

app.use(express.urlencoded({extended: true})) 
app.use(express.json()) 
app.use(express.static(path.join(__dirname, "public"))); 

const api = require("./routes/apiRoutes"); 
const html = require("./routes/htmlRoutes"); 

app.use('/html', html); 
app.use('/api', api);

app.use(html) 
app.use(api)

app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
});