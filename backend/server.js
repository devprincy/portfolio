require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Portfolio backend is running 🚀', time: new Date() });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate inputs
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address.' });
  }

  try {
    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to portfolio owner (Deva Princy)
    const ownerMailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `📬 New Portfolio Message: ${subject || 'No Subject'} — from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
          <div style="background: #0a1628; padding: 24px; text-align: center;">
            <h2 style="color: #c9a84c; margin: 0; font-size: 22px;">New Portfolio Message</h2>
          </div>
          <div style="padding: 28px; background: #fff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px; width: 100px;">From</td>
                <td style="padding: 10px 0; font-weight: 600; color: #1a1a1a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #1a73e8;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Subject</td>
                <td style="padding: 10px 0; color: #1a1a1a;">${subject || '—'}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
            <p style="color: #888; font-size: 13px; margin: 0 0 8px;">Message</p>
            <div style="background: #f5f0e8; border-radius: 6px; padding: 16px; color: #333; font-size: 15px; line-height: 1.7;">${message.replace(/\n/g, '<br/>')}</div>
            <div style="margin-top: 24px;">
              <a href="mailto:${email}" style="background: #c9a84c; color: #0a1628; padding: 10px 22px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 14px;">Reply to ${name}</a>
            </div>
          </div>
          <div style="background: #f5f0e8; padding: 14px; text-align: center; font-size: 12px; color: #888;">
            Sent from your portfolio at devaprincy.vercel.app
          </div>
        </div>
      `,
    };

    // Auto-reply to sender
    const senderMailOptions = {
      from: `"Deva Princy J" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! 👋`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
          <div style="background: #0a1628; padding: 24px; text-align: center;">
            <h2 style="color: #c9a84c; margin: 0;">Deva Princy J</h2>
            <p style="color: #8892a4; margin: 4px 0 0; font-size: 14px;">Full Stack Developer</p>
          </div>
          <div style="padding: 28px; background: #fff;">
            <p style="color: #1a1a1a; font-size: 16px;">Hi <strong>${name}</strong>,</p>
            <p style="color: #555; line-height: 1.7; font-size: 15px;">Thank you for visiting my portfolio and reaching out! I've received your message and will get back to you as soon as possible — usually within 24 hours.</p>
            <p style="color: #555; line-height: 1.7; font-size: 15px;">Here's a copy of your message:</p>
            <div style="background: #f5f0e8; border-radius: 6px; padding: 16px; color: #333; font-size: 14px; line-height: 1.7; margin: 16px 0;">${message.replace(/\n/g, '<br/>')}</div>
            <p style="color: #555; font-size: 15px;">Looking forward to connecting!<br/><strong style="color: #0a1628;">Deva Princy J</strong><br/><span style="color: #888; font-size: 13px;">Full Stack Developer · Thoothukudi, Tamil Nadu</span></p>
          </div>
          <div style="background: #f5f0e8; padding: 14px; text-align: center; font-size: 12px; color: #888;">
            📧 devaprincy2005@gmail.com · 📱 +91 9566123991
          </div>
        </div>
      `,
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(senderMailOptions);

    res.json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, error: 'Failed to send email. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Portfolio backend running on http://localhost:${PORT}`);
});
