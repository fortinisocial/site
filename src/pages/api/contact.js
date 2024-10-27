const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const newMessage = async (req, res) => {
  const body = JSON.parse(req.body);
  const toEmails = ['contato@fortini.org.br', 'maiara@fortini.org.br'];

  try {
    await sgMail.send({
      to: toEmails,
      from: 'newsletter@fortini.org.br',
      ...(body?.email &&
        !toEmails.includes(body?.email) && {
          cc: body.email,
        }),
      subject: `Site Fortini - ${body?.subject} | ${body?.name ?? ''}`,
      text: `Contato\n${body?.name}\n${body?.email}\n${body?.subject}\n${body?.message}`,
      html: `<h1>Contato - Site Fortini</h1>
      <p><strong>Nome:</strong> ${body?.name}</p>
      <p><strong>Email:</strong> ${body?.email}</p
      <p><strong>Assunto:</strong> ${body?.subject}</p>
      <p><strong>Mensagem:</strong> ${body?.message}</p>
      `,
    });
  } catch (error) {
    console.error(error);

    if (error?.response) {
      console.error(error?.response.body);
    }
  }

  res.status(200).json({ status: 'ok' });
};

export default newMessage;
