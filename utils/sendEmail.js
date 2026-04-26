const nodemailer = require("nodemailer");

async function sendEmail(email, link) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Password Reset",
    html: `<p>Click here to reset passowrd:<a href="${link}">${link}</a></p>`,
  });
}

module.exports = sendEmail;
