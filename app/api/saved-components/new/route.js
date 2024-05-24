import { NextResponse } from 'next/server';
import { connectToDB } from '@/utils/database';
import Component from '@/models/component';

export const dynamic = 'force-dynamic';

export const POST = async (req) => {
  const { userId, title, output, conversationHistory } = await req.json();

  try {
    await connectToDB();
    const item = new Component({
      userId,
      title,
      output,
      conversationHistory,
    });

    await item.save();

    return NextResponse.json(
      { message: 'Component Saved successfully', item: item },
      { status: 201 }
    );
  } catch (error) {
    console.log('error', error);
    return NextResponse.error(error.message, { status: 500 });
  }
};
