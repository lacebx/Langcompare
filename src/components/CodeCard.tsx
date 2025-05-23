
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

interface CodeCardProps {
  title: string;
  description: string;
  language: string;
  code: string;
  compilable?: boolean;
  explanation: string;
}

const CodeCard: React.FC<CodeCardProps> = ({
  title,
  description,
  language,
  code,
  compilable = true,
  explanation
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompilationView, setIsCompilationView] = useState(false);

  const getLanguageClass = () => {
    return `lang-indicator ${language.toLowerCase()}`;
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mb-6 bg-card overflow-hidden border border-border hover:border-primary/50 transition-all duration-200 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <Badge variant="outline" className={getLanguageClass()}>
            {language}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <pre className="text-sm">
          <code dangerouslySetInnerHTML={{ __html: code }} />
        </pre>
        
        {showExplanation && (
          <div className="mt-4 p-4 bg-secondary rounded-md animate-fade-in">
            <h4 className="font-bold mb-2 text-primary">Explanation:</h4>
            <p className="text-sm">{explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t border-border pt-4">
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleExplanation}
            className="flex items-center gap-1"
          >
            <Info className="h-4 w-4" />
            {showExplanation ? 'Hide Details' : 'Show Details'}
          </Button>
          
          {compilable && (
            <Button 
              variant="default" 
              size="sm"
              className="flex items-center gap-1"
            >
              <Play className="h-4 w-4" />
              Run Example
            </Button>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch 
            id={`compilation-toggle-${title}`}
            checked={isCompilationView}
            onCheckedChange={setIsCompilationView}
          />
          <Label htmlFor={`compilation-toggle-${title}`} className="text-xs">
            {isCompilationView ? 'Compilation' : 'Interpretation'}
          </Label>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CodeCard;
