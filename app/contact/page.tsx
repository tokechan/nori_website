'use client';

import { TextField, Button, Typography, styled } from '@mui/material';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const StyledTextField = styled(TextField)({
  '& .MuiInput-underline:before': {
    borderBottomColor: '#000',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#000',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: '#000',
  },
  '& .MuiInputLabel-root': {
    color: '#666',
    fontSize: '0.9rem',
  },
  '& .MuiInput-root': {
    fontSize: '1.1rem',
  },
});

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateInput = () => {
    const newErrors: { name: string; email: string; subject: string; message: string } = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    if (!formData.name) newErrors.name = '名前を入力してください';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = '有効なメールアドレスを入力してください';
    if (!formData.subject) newErrors.subject = '題名を入力してください';
    if (!formData.message) newErrors.message = 'メッセージを入力してください';
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInput()) return;

    setStatus('submitting');
    try {
      //supabaseにデータを挿入
      const { error } = supabase.from('contacts').insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

      if (error) {
        console.log('Supabase Insert Error:', error);
        throw new Error(error.message);
      }
      
      setStatus('success');
    } catch (err) {
      console.log('Form Submiton Error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif leading-tight mb-12  text-center">
        CONTACT
      </h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold mb-8">お問い合わせフォーム</h1>
            <div className="space-y-4">
              <p>Mail: unlabeling.contact@gmail.com</p>
              <p>Instagram: @unlabeling___</p>
              <div className="mt-8">
                <p>独立前のお仕事など</p>
                <p>当サイト掲載作品以外にも</p>
                <p>ポートフォリオがございますので</p>
                <p>お気軽にお問い合わせください。</p>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <StyledTextField
                name="name"
                label="名前"
                fullWidth
                variant="standard"
                error={!!errors.name}
                helperText={errors.name}
                onChange={handleInputChange}
              />
              <StyledTextField
                name="email"
                label="メールアドレス"
                fullWidth
                variant="standard"
                error={!!errors.email}
                helperText={errors.email}
                onChange={handleInputChange}
              />
              <StyledTextField
                name="subject"
                label="題名"
                fullWidth
                variant="standard"
                error={!!errors.subject}
                helperText={errors.subject}
                onChange={handleInputChange}
              />
              <StyledTextField
                name="message"
                label="メッセージ"
                multiline
                rows={4}
                fullWidth
                variant="standard"
                error={!!errors.message}
                helperText={errors.message}
                onChange={handleInputChange}
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  disabled={status === 'submitting'}
                  sx={{
                    backgroundColor: '#E6E6FA',
                    color: '#000',
                    '&:hover': { backgroundColor: '#D8D8FF' },
                    boxShadow: 'none',
                    borderRadius: '0',
                    padding: '0.5rem 2rem',
                  }}
                >
                  {status === 'submitting' ? '送信中...' : '送信する'}
                </Button>
              </div>
              {status === 'success' && <Typography color="green">メッセージが送信されました！</Typography>}
              {status === 'error' && <Typography color="red">エラーが発生しました。再試行してください。</Typography>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
