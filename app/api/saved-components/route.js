import { NextResponse } from 'next/server';
import { connectToDB } from '@/utils/database';
import User from '@/models/user';

export const dynamic = 'force-dynamic';

export const GET = async (req) => {
  try {
    await connectToDB();
    const items = await User.find({});
    return NextResponse.json({ users: items }, { status: 200 });
  } catch (error) {
    return NextResponse.error(error.message, { status: 500 });
  }
};
