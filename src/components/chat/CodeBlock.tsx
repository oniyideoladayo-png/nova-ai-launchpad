import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as Sonner from 'sonner';

interface CodeBlockProps {
  language: string;
  value: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    Sonner.toast.success('Code copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCode = () => {
    const blob = new Blob([value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `project.${language === 'javascript' ? 'js' : language === 'typescript' ? 'ts' : language}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    Sonner.toast.success('File downloaded');
  };

  const isWebCode = ['html', 'css', 'javascript', 'typescript', 'jsx', 'tsx'].includes(language.toLowerCase());

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-white/10 glass">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <span className="text-xs font-mono text-slate-400 uppercase">{language}</span>
        <div className="flex items-center gap-2">
          {isWebCode && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPreview(!showPreview)}
              className="h-8 px-2 text-slate-400 hover:text-white"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              {showPreview ? 'Show Code' : 'Preview'}
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={downloadCode}
            className="h-8 px-2 text-slate-400 hover:text-white"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-8 px-2 text-slate-400 hover:text-white"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      {showPreview && isWebCode ? (
        <div className="bg-white rounded-b-lg overflow-hidden h-[400px]">
          {/* Simple preview for HTML/CSS/JS */}
          <iframe
            title="Preview"
            className="w-full h-full border-none"
            srcDoc={`
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <style>body { font-family: sans-serif; }</style>
                  ${language === 'css' ? `<style>${value}</style>` : ''}
                </head>
                <body>
                  ${language === 'html' ? value : ''}
                  ${language === 'javascript' || language === 'typescript' ? `<script>${value}</script>` : ''}
                  ${!['html', 'css', 'javascript', 'typescript'].includes(language) ? '<p>Preview not available for this language.</p>' : ''}
                </body>
              </html>
            `}
          />
        </div>
      ) : (
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '0.9rem',
          }}
        >
          {value}
        </SyntaxHighlighter>
      )}
    </div>
  );
};
