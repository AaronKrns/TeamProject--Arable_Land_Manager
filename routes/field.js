var express = require("express");
var router = express.Router();
var MySql = require('sync-mysql');
var connection_info = require("../modules/connection_info")




/*Display fields*/
router.get('/', function(req, res, next) {
  var connection = new MySql({
    user: connection_info.user,
    password: connection_info.password,
    database: connection_info.database,
    host: connection_info.host
  });
  var field = connection.query("SELECT * from field");
  console.log(field);

  res.render('field', { field:field });
});




/*Add fields*/
router.get('/add', function(req, res, next){

  res.render('add_field')
})


router.post('/add', function(req, res, next) {
  var field_id = parseFloat(req.body.field_id)
  var size = req.body.size
  var best_crop=req.body.best_crop
  var soil_type = req.body.soil_type
  var connection = new MySql({
    user: connection_info.user,
    password: connection_info.password,
    database: connection_info.database,
    host: connection_info.host
  })
  connection.query("INSERT INTO field (field_id, size, soil_type, best_crop) VALUES ((?), (?), (?),(?));", [field_id, size, soil_type, best_crop]);

  res.redirect("/field");
})




/*Edit field info*/
router.get('/edit', function(req, res, next){
  var field_id = req.query.field_id

  res.render('edit_field', {field_id:field_id} )
})


router.post('/edit', function(req, res, next) {
  var field_id = parseFloat(req.body.field_id)
  var size = req.body.size
  var soil_type = req.body.soil_type
  var best_crop = req.body.best_crop
  var connection = new MySql({
    user: connection_info.user,
    password: connection_info.password,
    database: connection_info.database,
    host: connection_info.host
  })
  connection.query("UPDATE field SET size=(?) ,soil_type=(?), best_crop=(?) WHERE field_id=(?)",[size, soil_type, best_crop, field_id]);

  res.redirect("/field");
})




//Remove field info
router.get('/delete', function(req, res, next) {
  var field_id = req.query.field_id
  var connection = new MySql({
    user: connection_info.user,
    password: connection_info.password,
    host: connection_info.host,
    database: connection_info.database
  });
  connection.query("DELETE FROM field where field_id = (?);", [field_id])

  res.redirect('/field')
})




module.exports = router;
