export default async function (req, res) {
  const formData = req.body;
  console.log(("My form data is ", formData));
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "fastechoffice7@gmail.com",
      pass: "fastechoffice321",
    },
    secure: true,
  });
  const mailData = {
    from: "fastechoffice7@gmail.com",
    to: "abdulengineer321@gmail.com",
    subject: `${req.body.subject}`,
    text: `this`,
    html: `<div><p>Name: <p/> <p>Message: <p/></div><p>Sent from:
      ${req.body.email}</p>`,
  };
  const mail = await transporter.sendMail(mailData);
  console.log(mail);
  res.send(200);
}
