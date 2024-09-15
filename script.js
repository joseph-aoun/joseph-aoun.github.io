router.post('/contact', function(req, res) {
  var mailOptions = {
    from: req.body.email,
    to: 'joseph04@bu.edu',
    subject: 'Contact Form Submission',
    text: req.body.message
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('/');
        }
        }
    );
}
);
