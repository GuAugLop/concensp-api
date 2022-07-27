import nodemailer from "nodemailer";
const email_contato = process.env.EMAIL_CONTATO;
const psw = process.env.PSW_EMAIL_CONTATO;

type Contact = {
  nome: string;
  sobrenome: string;
  telefone: string;
  titulo: string;
  cidade: string;
  estado: string;
  email: string;
  assunto: string;
};

async function sendMail({
  nome,
  sobrenome,
  assunto,
  cidade,
  estado,
  email,
  titulo,
  telefone,
}: Contact) {
  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: email_contato, // generated ethereal user
      pass: psw, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: email_contato, // sender address
    to: email_contato, // list of receivers
    subject: `Contato de ${nome} ${sobrenome} - ${cidade}/${estado}`, // Subject line
    html: htmlGenContact(
      nome,
      sobrenome,
      email,
      telefone,
      cidade,
      estado,
      assunto,
      titulo
    ), // html body
  });
  if (!info.rejected.length) {
    transporter.sendMail({
      from: { name: "Contato Concensp", address: email_contato! },
      to: email,
      subject: "Recebemos seu email de contato!",
      html: htmlGenConfirm(nome),
    });
  }
}

function htmlGenContact(
  nome: string,
  sobrenome: string,
  email: string,
  telefone: string,
  cidade: string,
  estado: string,
  assunto: string,
  titulo: string
) {
  return `
  <style>
  *{margin: 0}
  p{
  margin: 5px 0;
   font-family: Roboto, sans-serif
  }
  </style>
  <p>Contato de <b>${nome} ${sobrenome}</b></p>
  <p>email: ${email}</p>
  <p>Telefone/Celular: ${telefone}</p>
  <p>Cidade: ${cidade}/${estado}</p>
  <h2>Titulo:</h2>
  <p>${titulo}</p>
  <h3>Assunto:</h3>
  <p>${assunto}</p>
  `;
}

function htmlGenConfirm(nome: string) {
  return `
  <div style="width:95%;max-width: 580px; padding: 60px;margin: 0 auto;background-color: #FFFFE8; flex-direction: column;">
  <img style="width: 358px;height:108px;display:block;margin: 0 auto;" class="hero-image" src="https://www.concensp.com.br/logonew.png"/>
  <h2 style="text-align: center;margin: 15px 0;font-weight: 500;font-family: 'Gill Sans Extrabold', Helvetica, sans-serif;" class="hero-title">Recebemos sua solicitação de contato</h2>
  <h2 style="text-align: start;margin: 15px 0;font-size: 1.5rem;font-weight: 700;margin: 15px 0;font-family: 'Gill Sans Extrabold', Helvetica, sans-serif;">Ola, ${nome}</h2>
  <p style="font-family: 'Gill Sans Extrabold', Helvetica, sans-serif; font-size:1rem;">Estamos enviando esse email para avisar que recebemos sua solicitação, logo logo entraremos em contato, então fique de olho na sua caixa de entrada do email e/ou no seu telefone.</p>
  <hr style="margin: 20px 0;">
  <p style="text-align: center; font-size: 1.1rem;font-family: 'Gill Sans Extrabold', Helvetica, sans-serif;" class="hero-title">CONSÓRCIO INTERMUNICIPAL DA REGIÃO CENTRAL DO ESTADO DE SÃO PAULO</p>
  
  <div class="redes-sociais" style="width: 179px;margin: 0 auto; margin-top: 50px;">
    <a href="#" style="margin: 0 5px"><img style="width: 32px;height: 32px;" src="https://www.concensp.com.br/facebook1.png"/></a>
    <a href="#" style="margin: 0 5px"><img style="width: 32px;height: 32px;" src="https://www.concensp.com.br/whatsApp.png"/></a>
    <a href="#" style="margin: 0 5px"><img style="width: 32px;height: 32px;" src="https://www.concensp.com.br/instagram2.png"/></a>
    <a href="#" style="margin: 0 5px"><img style="width: 32px;height: 32px;" src="https://www.concensp.com.br/linkedin1.png"/></a>
  </div>
</div>
  `;
}

export default {
  sendMail,
};
