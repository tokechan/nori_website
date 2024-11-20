'use server';
import nodemailer from 'nodemailer';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, '名前は必須です'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  message: z.string().min(1, 'メッセージを入力してください'),
});

export async function submitForm(data: { name: string; email: string; message: string }) {
  const validatedData = contactSchema.parse(data);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: `お問い合わせ: ${validatedData.name}`,
    text: `名前: ${validatedData.name}\nメール: ${validatedData.email}\nメッセージ: ${validatedData.message}`,
  });

  console.log('メッセージが送信されました:', validatedData);
}
