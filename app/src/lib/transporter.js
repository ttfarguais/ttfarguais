import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Vous pouvez utiliser un autre service comme Yahoo, Outlook, etc.
  auth: {
    user: (process.env.USER_EMAIL1),
    pass: (process.env.USER_PASS1),
  },
});

export default transporter;
