module.exports = function(app) {

app.get('*', function(req, res){
   res.send("404 Page Not Found :( ", 404);
 });          
}