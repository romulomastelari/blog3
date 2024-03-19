const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

sgMail.setApiKey('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');

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const msg = {
        to: email,
        from: 'deheon@gmail.com',
        subject: 'Contato',
        text: `Nome: ${name} Email: ${email} Mensagem: ${message}`,
        html: `<strong>Nome: ${name} <br/> Email: ${email} <br/> Mensagem: ${message}</strong>`,
    };

    sgMail
        .send(msg)
        .then(() => res.status(200).json({ message: 'Email enviado com sucesso!' }))
        .catch((error) => res.status(500).json({ error: error.toString() }));
});

app.listen(3000, () => console.log('Server is running on port 3000'));