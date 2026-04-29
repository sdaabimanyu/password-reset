const SibApiV3Sdk = require("sib-api-v3-sdk");

const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

const sendEmail = async (to, link) => {
  try {
    await tranEmailApi.sendTransacEmail({
      sender: {
        email: process.env.EMAIL_USER,
        name: "Password Reset",
      },
      to: [{ email: to }],
      subject: "Reset Password",
      htmlContent: `<a href="${link}">Reset Password</a>`,
    });

    console.log("Email sent");
  } catch (err) {
    console.log("Email error:", err.response?.body || err.message);
  }
};

module.exports = sendEmail;