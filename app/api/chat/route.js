import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { cvData } from './data/data';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    // Create a system message that includes the CV data
    const systemMessage = `You are an AI assistant helping to answer questions about Jordan Roberts' CV. Her pronouns are her/she. 
    Use the following CV data to answer questions: ${JSON.stringify(cvData)}
    Only answer questions based on the provided CV data. If you don't know something, say so.`;

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: message }
      ],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json({ 
      response: completion.choices[0].message.content 
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
} 