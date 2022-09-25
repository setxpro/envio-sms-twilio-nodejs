const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Olá mundo!",
    from: process.env.TWILIO_NUMBER,
    to: "+5521966077757", // meu numero cadastrado
    /**
     * Para fazer envio para outros numeros é necessário adquirir a versão paga
     */
  })
  .then((message) => console.log(message.sid));
