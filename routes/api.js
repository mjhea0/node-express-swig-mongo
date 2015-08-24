var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Opinion = mongoose.model('opinions');


router.get('/', function(req, res) {
  Opinion.find(function(err, opinions){
    console.log(opinions)
    res.render(
      'api',
      {title : 'API', opinions : opinions}
    );
  });
});

router.post('/opinions', function(req, res) {
  new Opinion({title : req.body.opinion})
  .save(function(err, opinion) {
    console.log(opinion)
    res.redirect('/api');
  });
});

module.exports = router;
