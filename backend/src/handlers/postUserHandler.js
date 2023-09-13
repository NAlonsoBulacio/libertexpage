const postUserController = require("../controllers/postUserController");
const { mailHandler } = require('./postMailHandler');
const emailTemplate = require('../EmailTemplates/postUserMail')
const postUserHandler = async (req, res) => {
  try {
    const { email, rol, name, phone, countryCode } = req.body;
    const userPosted = await postUserController(email, rol, name, phone, countryCode);
    const asunto = 'Bienvenido';
    const destinatario = email;
    const cuerpo = emailTemplate.replace('%NOMBRE%', name);
    await mailHandler(destinatario, asunto, cuerpo);
    return res.status(200).json(userPosted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postUserHandler,
};
