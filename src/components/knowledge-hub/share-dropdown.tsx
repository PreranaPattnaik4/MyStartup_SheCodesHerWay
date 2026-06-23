
'use client';

import React, { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Share2, MessageCircle, Linkedin, Link2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ShareDropdownProps {
  title: string;
}

export default function ShareDropdown({ title }: ShareDropdownProps) {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Safely get the current URL on the client side
    setUrl(window.location.href);
  }, []);

  const shareWhatsApp = () => {
    const text = `Check out this article on SheCodesHerWays: ${title}\n\nRead more at: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: "Link Copied!",
        description: "Article link copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full px-6">
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-2 shadow-xl border-primary/10">
        <DropdownMenuItem 
          onSelect={shareWhatsApp} 
          className="cursor-pointer flex items-center gap-3 py-3 focus:bg-green-50 focus:text-green-700 rounded-lg transition-colors"
        >
          <div className="bg-green-100 p-2 rounded-full">
            <MessageCircle className="h-4 w-4 text-green-600" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">WhatsApp</span>
            <span className="text-xs text-muted-foreground">Share with friends or groups</span>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onSelect={shareLinkedIn} 
          className="cursor-pointer flex items-center gap-3 py-3 focus:bg-blue-50 focus:text-blue-700 rounded-lg transition-colors"
        >
          <div className="bg-blue-100 p-2 rounded-full">
            <Linkedin className="h-4 w-4 text-blue-700" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">LinkedIn</span>
            <span className="text-xs text-muted-foreground">Share on your professional feed</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem 
          onSelect={copyToClipboard} 
          className="cursor-pointer flex items-center gap-3 py-3 focus:bg-primary/10 rounded-lg transition-colors"
        >
          <div className="bg-muted p-2 rounded-full">
            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Link2 className="h-4 w-4 text-primary" />}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{copied ? 'Copied!' : 'Copy Link'}</span>
            <span className="text-xs text-muted-foreground">Copy article URL to clipboard</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
