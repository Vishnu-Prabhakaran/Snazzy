const nodemailer = require("nodemailer");


const auth = {
  auth: {
    api_key: "",
    domain: ""
  }
};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email@email.com',
        pass: 'Password'
    }
});

const mailOptions = {
  from: " ",
  to: " ",
  subject: "Email from Snazzy",
  text: " Hello! this is a Test email from Node "
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("Error Occoured", err);
  } else {
    console.log("Message Sent");
  }
});
