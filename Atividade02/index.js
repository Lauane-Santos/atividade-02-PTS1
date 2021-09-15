const express = require ('express'); 
const pagPrincipal = express();
const porta = 3000;

pagPrincipal.use(express.static('public')) ;
pagPrincipal.set('view ␣ engine', 'ejs') ; 
pagPrincipal.engine('html', require('ejs').renderFile ) ;

pagPrincipal.get('/', function(req, res){
res.render('index.ejs'); 
})

pagPrincipal.get('/noticias', function(req, res){
res.render('noticias/index.ejs'); 
})


pagPrincipal.get('/noticias01', function(req, res){
res.render('noticias/noticias01/index01.ejs'); 
})

pagPrincipal.get('/noticias02', function(req, res){
res.render('noticias/noticias02/index02.ejs'); 
})

pagPrincipal.get('/noticias03', function(req, res){
res.render('noticias/noticias03/index03.ejs'); 
})

pagPrincipal.get('/noticias04', function(req, res){
res.render('noticias/noticias04/index04.ejs'); 
})

pagPrincipal.listen(porta, function(){
  console.log("O servidor está funcionando " + porta);
})