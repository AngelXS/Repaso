/* npm install express*/
/*node express */

const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(__dirname));
console.log(__dirname);
app.get('/Repaso/index.html',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    console.log(path.join(__dirname+'/index.html'));
});
app.listen(8954,function() {
    console.log("Escuchando...")
});