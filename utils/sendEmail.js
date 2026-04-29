const SibApiV3Sdk = require("sib-api-v3-sdk");

const client = SibApiV3Sdk.ApiClient.instance;

const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

const sendEmail = async (to, link) => {
  try {
    const emailData = {
      sender: {
        name: "Password Reset",
        email: process.env.EMAIL_USER,
      },
      to: [
        {
          email: to,
        },
      ],
      subject: "Reset Your Password",
      htmlContent: `
        <h3>Password Reset</h3>
        <p>Click below link:</p>
        <a href="${link}">${link}</a>
      `,
    };

    await tranEmailApi.sendTransacEmail(emailData);

    console.log("✅ Email sent successfully via Brevo");
  } catch (error) {
    console.log("❌ Email Error:", error.response?.body || error.message);
  }
};

module.exports = sendEmail;