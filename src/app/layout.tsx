import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import ChatbotWidget from '@/components/chatbot/chatbot-widget';

export const metadata: Metadata = {
  title: 'EmpowerFly by SheCodesHerWays',
  description: 'Build Your Path. Lead Your Way. Leave Your Mark.',
  icons: {
    icon: 'data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5C12 1.5 6.5 6 3 9C1 11 3 17 6 19C9 21 12 22.5 12 22.5" stroke="%23528F6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22.5C12 22.5 17.5 21 21 18C23 16 21 10 18 8C15 6 12 1.5 12 1.5" stroke="%23528F6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 9C3 9 7 10.5 12 12C17 13.5 21 15 21 18" stroke="%23528F6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-white text-foreground font-body antialiased')} suppressHydrationWarning>
        <FirebaseClientProvider>
          {children}
          <ChatbotWidget />
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
