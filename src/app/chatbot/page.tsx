
'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bot, Send } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import ExecutiveSummaryGenerator from '@/components/home/executive-summary-generator';
import { Separator } from '@/components/ui/separator';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm the SheCodesHerWay AI assistant. How can I help you today? You can ask me about our programs, internships, or how to get involved.",
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatbotAvatar = PlaceHolderImages.find((p) => p.id === 'chatbot-avatar');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a simulated response. In a real application, I would connect to an AI service to provide a helpful answer!', sender: 'bot' },
        ]);
      }, 1000);
      setInputValue('');
    }
  };

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col items-center justify-center bg-secondary p-4 pt-16">
            <Card className="w-full max-w-2xl h-[70vh] shadow-2xl flex flex-col">
            <CardHeader className="flex flex-row items-center gap-3 border-b">
                {chatbotAvatar && (
                    <Avatar>
                        <AvatarImage src={chatbotAvatar.imageUrl} alt="Chatbot Avatar" data-ai-hint={chatbotAvatar.imageHint} />
                        <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                )}
                <div className="grid gap-0.5">
                <CardTitle className="text-lg">AI Assistant</CardTitle>
                <CardDescription>SheCodesHerWay</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="flex-1 p-0">
                <ScrollArea className="h-full p-4 space-y-4">
                    {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex items-start gap-3 my-4 ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        {message.sender === 'bot' && chatbotAvatar && (
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={chatbotAvatar.imageUrl} alt="Bot Avatar" data-ai-hint={chatbotAvatar.imageHint} />
                                <AvatarFallback>AI</AvatarFallback>
                            </Avatar>
                        )}
                        <div
                        className={`max-w-[75%] rounded-lg px-4 py-2 text-sm shadow ${
                            message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                        >
                        {message.text}
                        </div>
                    </div>
                    ))}
                </ScrollArea>
            </CardContent>
            <div className="p-4 border-t">
                <div className="flex w-full items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!inputValue.trim()}>
                    <Send className="w-5 h-5" />
                    <span className="sr-only">Send</span>
                </Button>
                </div>
            </div>
            </Card>
        </div>
        <div className="bg-secondary">
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <Separator className="my-16"/>
            <div id="ai-tools">
              <ExecutiveSummaryGenerator />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
