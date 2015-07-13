var express = require('express');
var router = express.Router();
var postmark = require('postmark')
var postmarkClient = new postmark.Client("632e2b3a-8875-4684-937c-de8517657363");
var uuid = require('node-uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/account/confirm/:token', function(req, res) {
	var token = req.params.token;
	res.send(token);
});

router.post('/register', function(req, res) {
	var partialEmail = req.body.email;
	var fullEmail = partialEmail + "@trinityschoolnyc.org";
	console.log("Sending email to: " + fullEmail);

	var token = uuid.v1();
	var link = "localhost:3000/account/confirm/" + token;
	var emailBody = "Hi Daniel, <br><br> Welcome To Internect. Press <a href='" + link + "'>HERE</a> to confirm your account and start browsing potential internships!";

	postmarkClient.sendEmail({
	    "From": "daniel.ernst@yale.edu",
	    "To": fullEmail,
	    "Subject": "Welcome To Internect!", 
	    "HtmlBody": emailBody
	}, function(err) {
		if (err) throw err;
		res.send("Success!");
	});
	
});

module.exports = router;
