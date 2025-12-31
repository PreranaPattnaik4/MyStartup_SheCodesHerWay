'use server';

/**
 * @fileOverview This file defines a Genkit flow for handling chatbot conversations.
 *
 * The flow takes a user's message as input and uses the FAQ data to generate a response,
 * acting as the "EmpowerFly Assistant".
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { faqData } from '@/lib/faq-data';

const ChatInputSchema = z.object({
  message: z.string().describe("The user's message to the chatbot."),
});

export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  message: z.string().describe("The chatbot's response."),
});

export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

// Flatten the FAQ data for easier searching
const allFaqs = faqData.flatMap(category => category.questions);

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const userMessage = input.message.toLowerCase();
    
    // Find a matching FAQ
    const foundFaq = allFaqs.find(faq => 
        faq.question.toLowerCase().includes(userMessage) || 
        (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(userMessage))
    );

    if (foundFaq) {
        let answerText = '';
        if (typeof foundFaq.answer === 'string') {
            answerText = foundFaq.answer;
        } else if (React.isValidElement(foundFaq.answer)) {
            // A simple way to extract text from React elements. Might not be perfect for complex components.
            const extractText = (element: React.ReactNode): string => {
                if (typeof element === 'string') return element;
                if (!React.isValidElement(element)) return '';
                const children = (element.props as any).children;
                if (children) {
                    return React.Children.map(children, child => extractText(child)).join('');
                }
                return '';
            };
            answerText = extractText(foundFaq.answer);
        }
        
        return { message: answerText || "I found some information, but couldn't format it as a simple text answer." };
    }

    return { message: "I'm sorry, I don't have information about that. Please try asking about our programs, careers, or the EmpowerFly initiative." };
  }
);

// We need a React import for isValidElement, even in a server file, due to the nature of the FAQ data.
import React from 'react';
