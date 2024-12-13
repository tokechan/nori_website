import { supabase } from '../../../lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const { data, error } = await supabase.from('contacts').insert([
      { name, email, subject, message },
    ]);

    if (error) {
      console.error('Supabase Insert Error:', error);
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error('Server Error:', err);
    return NextResponse.json({ success: false, message: 'サーバーエラーが発生しました' }, { status: 500 });
  }
}
