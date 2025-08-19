import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock data para Google Rating
    const ratingData = {
      rating: 4.8,
      totalReviews: 127,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(ratingData);
  } catch (error) {
    console.error('Error fetching Google rating:', error);
    return NextResponse.json(
      { error: 'Failed to fetch rating data' },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
