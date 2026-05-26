import { NextRequest, NextResponse } from 'next/server';
import Review from '@/models/Review';
import { connectToDatabase } from '@/lib/mongodb';

// GET single review
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const review = await Review.findById(params.id);
    if (!review) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }
    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch review' }, { status: 500 });
  }
}

// PATCH update review (approve/unapprove)
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const review = await Review.findByIdAndUpdate(params.id, body, { new: true });
    if (!review) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }
    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update review' }, { status: 500 });
  }
}

// DELETE review
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const review = await Review.findByIdAndDelete(params.id);
    if (!review) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Review deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
  }
}
