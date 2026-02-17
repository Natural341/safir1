import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // E-posta taşıyıcısı yapılandırması
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'okan428215@gmail.com',
        pass: process.env.EMAIL_APP_PASSWORD, // Buraya Gmail'den alacağın Uygulama Şifresi gelecek
      },
    });

    // Şık HTML Tablo Tasarımı
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #2563eb; text-align: center;">Yeni İletişim Formu Mesajı</h2>
        <p style="text-align: center; color: #666;">Web sitenizden yeni bir talep geldi.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f8fafc;">
            <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left; width: 30%;">Ad Soyad</th>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${name}</td>
          </tr>
          <tr>
            <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">E-posta</th>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${email}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Telefon</th>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${phone}</td>
          </tr>
          <tr>
            <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Konu</th>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${subject || 'Genel Temizlik Talebi'}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Mesaj</th>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${message}</td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
          Bu e-posta Safir Temizlik web sitesi üzerinden otomatik olarak gönderilmiştir.
        </div>
      </div>
    `;

    const mailOptions = {
      from: '"Safir Temizlik Web" <okan428215@gmail.com>',
      to: 'okan428215@gmail.com',
      subject: `Yeni Talep: ${name} - ${subject || 'İletişim Formu'}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Mesaj başarıyla gönderildi' });
  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    return NextResponse.json({ error: 'Mesaj gönderilemedi' }, { status: 500 });
  }
}
