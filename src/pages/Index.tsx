
import React, { useState } from 'react';
import Header from '@/components/Header';
import CodeCard from '@/components/CodeCard';
import LanguageSelector from '@/components/LanguageSelector';
import CategorySelector from '@/components/CategorySelector';
import { codeExamples, allCategories, allLanguages } from '@/data/codeExamples';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(allLanguages);
  const [selectedCategory, setSelectedCategory] = useState<string>(allCategories[0]);

  const handleLanguageToggle = (language: string) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter(lang => lang !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const filteredExamples = codeExamples.filter(example => 
    example.category === selectedCategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="container mx-auto py-6 flex-1">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Visual Playground for Language Syntax</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare syntax for common programming tasks across different languages. 
            Each card shows the same functionality implemented in various languages with explanations.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <CategorySelector 
            categories={allCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          
          <LanguageSelector 
            languages={allLanguages}
            selectedLanguages={selectedLanguages}
            onSelectLanguage={handleLanguageToggle}
          />
        </div>
        
        <div className="space-y-8">
          {filteredExamples.map(example => (
            <div key={example.id} className="mb-12">
              <h3 className="text-xl font-bold mb-4">{example.title}</h3>
              <p className="text-muted-foreground mb-4">{example.description}</p>
              
              <Tabs defaultValue={Object.keys(example.languages)[0]}>
                <TabsList className="mb-4 w-full max-w-md flex overflow-auto">
                  {Object.keys(example.languages)
                    .filter(lang => selectedLanguages.includes(lang))
                    .map(language => (
                      <TabsTrigger 
                        key={language} 
                        value={language}
                        className="flex-1"
                      >
                        {language}
                      </TabsTrigger>
                    ))}
                </TabsList>
                
                {Object.entries(example.languages)
                  .filter(([lang]) => selectedLanguages.includes(lang))
                  .map(([language, langData]) => (
                    <TabsContent key={language} value={language}>
                      <CodeCard 
                        title={`${example.title} in ${language}`}
                        description={example.description}
                        language={language}
                        code={langData.code}
                        explanation={langData.explanation}
                        compilable={langData.compilable}
                      />
                    </TabsContent>
                  ))}
              </Tabs>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="border-t border-border py-6">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>LangCompare - Visual Playground for Programming Language Syntax</p>
          <p className="mt-1">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
