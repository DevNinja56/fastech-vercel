// export default async function (req, res) {
//   let nodemailer = require("nodemailer");
//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: "ragzonoffice7@gmail.com",
//       pass: "ragzon321",
//     },
//     secure: true,
//   });
//   const mailData = {
//     from: "ragzonoffice7@gmail.com",
//     to: "abdulengineer321@gmail.com",
//     subject: `Pricing Plans`,
//     text: `this`,
//     html: `<div><p>Name: ${req.body.select1}<p/> <p>Message: ${req.body.select2}`,
//   };
//   const mail = await transporter.sendMail(mailData);
//   console.log(mail);
//   res.send(200);
// }
