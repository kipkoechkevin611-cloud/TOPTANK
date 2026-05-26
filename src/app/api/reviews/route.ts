import { NextRequest, NextResponse } from 'next/server';
import Review from '@/models/Review';
import { connectToDatabase } from '@/lib/mongodb';

// GET all reviews
export async function GET() {
  try {
    await connectToDatabase();
    const reviews = await Review.find({}).sort({ createdAt: -1 });
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}

// POST new review
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const review = await Review.create(body);
    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 });
  }
}
