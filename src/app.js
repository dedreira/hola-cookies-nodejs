var http = require('http'); 
var fs = require('fs'); 

http.createServer(function (req, res) { 
 var url = req.url;
 // mapeamos la ruta /cookies a un fichero html estático que tenemos en una ruta
 // física del servidor y lo servimos junto con una cookie simulando datos de
 // un usuario logeado en el sistema
 if(url ==='/cookies'){    

    let userInfo = { name: 'user', role: 'admin'};         
    
    res.writeHead(200, {'Set-Cookie':'data=' + JSON.stringify(userInfo),
                        'Content-Type': 'text/html'}); // http header
    
    fs.readFile('./static/cookies.html', null, function(error,data){
        if(error){
            res.writeHead(400);
            res.write('no se de que me hablas');
        }else{
            res.write(data);
        }
        res.end();
    });    
 }else{ 
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write('<h1>Estoy triste, no tengo cookies!<h1>'); 
    res.end();
 }}).listen(3000, function(){
 console.log("server start at port 3000");
});