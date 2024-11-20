"use client";

import { TextField, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateInput = () => {
    const newErrors: { name: string; email: string; message: string } = { name: '', email: '', message: '' };
    if (!formData.name) newErrors.name = '名前を入力してください';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = '有効なメールアドレスを入力してください';
    if (!formData.message) newErrors.message = 'メッセージを入力してください';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInput()) return;

    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (

    <Box maxWidth="600px" mx="auto" mt={4}>
      <Typography variant="h4" mb={2}>お問い合わせフォーム</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="名前"
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
          onChange={handleInputChange}
        />
        <TextField
          name="email"
          label="メールアドレス"
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
          onChange={handleInputChange}
        />
        <TextField
          name="message"
          label="メッセージ"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          error={!!errors.message}
          helperText={errors.message}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? '送信中...' : '送信'}
        </Button>
        {status === 'success' && (
          <Typography color="green" mt={2}>メッセージが送信されました！</Typography>
        )}
        {status === 'error' && (
          <Typography color="red" mt={2}>エラーが発生しました。再試行してください。</Typography>
        )}
      </form>
    </Box>
  );
}
