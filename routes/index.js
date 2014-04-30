
/*
 * GET home page.
 */

var testinfo = require('../testinfo.js');

exports.index = function(req, res){
  res.render('index', { title: 'Express', testids: testinfo.testids() });
};

exports.deliverTest = function(req, res){
    if (req.query.format && req.query.format === 'json')
        res.json(200, {testdata: testinfo.getTestData(req.params.id)});
    else
        res.render('test_page', {title:'Test ID: ' + req.params.id, testdata: testinfo.getTestData(req.params.id)});
};