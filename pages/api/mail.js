export default async function (req, res) {
  // require('dotenv').config()

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "fastechoffice7@gmail.com",
      pass: "fastech321",
    },
    secure: true,
  });
  const mailData = {
    from: "fastechoffice7@gmail.com",
    to: "info.thefastech@gmail.com",
    subject: `${req.body.subject}`,
    text: `this`,
    html: `<div><p>Name: ${req.body.name}<p/> <p>Message: ${req.body.message}<p/> <p>Contact: ${req.body.number}<p/></div><p>Sent from:
      ${req.body.email}</p>`,
  };
  const mail = await transporter.sendMail(mailData);
  console.log(mail);
  res.send(200);
}
