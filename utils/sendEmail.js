const axios = require("axios");

const sendEmail = async (to, link) => {
  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Password Reset",
          email: process.env.EMAIL_USER,
        },
        to: [{ email: to }],
        subject: "Reset Your Password",
        htmlContent: `
          <h3>Password Reset</h3>
          <p>Click below link to reset your password:</p>
          <a href="${link}">${link}</a>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

module.exports = sendEmail;