import { NextResponse } from 'next/server';
import { connectToDB } from '@/utils/database';
import Component from '@/models/component';

export const dynamic = 'force-dynamic';

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const items = await Component.find({ userId: params.id }).sort({
      createdAt: -1,
    });
    return NextResponse.json({ items: items }, { status: 200 });
  } catch (error) {
    return NextResponse.error(error.message, { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { title, output, conversationHistory } = await req.json();
  try {
    await connectToDB();
    // Find the existing prompt by ID
    const item = await Component.findById(params.id);
    if (!item) {
      return NextResponse.json({ message: 'Item Not Found' }, { status: 404 });
    }
    // Update the Item with new data
    item.title = title;
    item.output = output;
    item.conversationHistory = conversationHistory;
    await item.save();
    return NextResponse.json(
      { message: 'Successfully updated the Item', item: item },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.error(error.message, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  console.log('yes hitting');
  try {
    await connectToDB();
    // Find the item by ID and remove it
    await Component.findByIdAndDelete(params.id);
    return NextResponse.json(
      { message: 'User deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.error(error.message, { status: 500 });
  }
};
