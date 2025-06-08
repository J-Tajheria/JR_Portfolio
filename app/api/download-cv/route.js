import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the CV file from the public directory
    const filePath = path.join(process.cwd(), 'public', 'Jordan_Roberts_CV.pdf');
    const fileBuffer = fs.readFileSync(filePath);

    // Set the appropriate headers for PDF download
    const headers = {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Jordan_Roberts_CV.pdf"',
    };

    // Return the file as a response
    return new NextResponse(fileBuffer, { headers });
  } catch (error) {
    console.error('Error serving CV:', error);
    return new NextResponse('Error downloading CV', { status: 500 });
  }
} 