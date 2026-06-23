'use client';

import React, { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Share2, MessageCircle, Linkedin } from "lucide-react";

interface ShareDropdownProps {
  title: string;
}

export default function ShareDropdown({ title }: ShareDropdownProps) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    // Safely get the current URL on the client side
    setUrl(window.location.href);
  }, []);

  const shareWhatsApp = () => {
    const text = `${title}\n\nRead more at: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full px-6">
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 p-2">
        <DropdownMenuItem 
          onClick={shareWhatsApp} 
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
          onClick={shareLinkedIn} 
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
