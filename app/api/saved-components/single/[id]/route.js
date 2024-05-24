import { NextResponse } from 'next/server';
import { connectToDB } from '@/utils/database';
import Component from '@/models/component';

export const dynamic = 'force-dynamic';

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const item = await Component.findById(params.id);
    return NextResponse.json({ item: item }, { status: 200 });
  } catch (error) {
    return NextResponse.error(error.message, { status: 500 });
  }
};
