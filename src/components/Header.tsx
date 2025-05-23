
import React from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
            <span className="font-bold text-primary-foreground">LC</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">LangCompare</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Visual Playground for Language Syntax</span>
          <Button variant="outline" size="icon">
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
