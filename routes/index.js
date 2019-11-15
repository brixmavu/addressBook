var express = require('express');
var router = express.Router();

var db=require('../dbconnection'); 

//route for homepage
router.get('/',(req, res) => {
  let sql = "SELECT * FROM contacts";
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    res.render('index',{
      results: results
    });
  });
});

//route for insert data
router.post('/save',(req, res) => {
  let data = {name: req.body.name, surname: req.body.surname, telephone: req.body.telephone, email: req.body.email };
  let sql = "INSERT INTO contacts SET ?";
  let query = db.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//route for update data
router.post('/update',(req, res) => {
  let sql = "UPDATE contacts SET name='"+req.body.name+"', surname='"+req.body.surname+"', telephone='"+req.body.telephone+"', email='"+req.body.email+"' WHERE contact_id="+req.body.id;
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//route for delete data
router.post('/delete',(req, res) => {
  let sql = "DELETE FROM contacts WHERE contact_id="+req.body.contact_id+"";
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});

module.exports = router;
