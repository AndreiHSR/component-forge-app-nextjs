import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const dynamic = 'force-dynamic';

export const POST = async (req) => {
  const { prompt, conversationHistory } = await req.json();

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_SECRET_KEY,
    });

    let promptWithHistory = ''; // Start with the current prompt

    // If there is previous conversation history, add it to the prompt
    if (conversationHistory && conversationHistory.length > 0) {
      promptWithHistory +=
        '\n' +
        conversationHistory
          .map((entry) => `${entry.prompt} ${entry.response}`)
          .join('\n');
      promptWithHistory += '\n' + prompt;
    } else {
      promptWithHistory = prompt;
    }

    console.log('promptWithHistory', promptWithHistory);

    // Making the API call to ChatGPT
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: promptWithHistory }],
      model: 'gpt-4-turbo',
    });

    console.log('choice', chatCompletion.choices[0]);

    return NextResponse.json(
      { content: chatCompletion.choices[0].message.content },
      { status: 200 }
    );
  } catch (error) {
    console.log('error', error);
    return NextResponse.error(error.message, { status: 500 });
  }
};
