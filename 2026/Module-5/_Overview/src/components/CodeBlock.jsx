import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Register only the languages we actually use in slides (keeps the bundle lean).
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("css", css);

// A highlighted code block for slides, with a copy button.
//   <CodeBlock language="bash">{`npm create vite@latest`}</CodeBlock>
export default function CodeBlock({ language = "jsx", children }) {
  const code = String(children).trim();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={copy}
        aria-label="Copy code"
        className="btn btn-sm btn-ghost absolute top-2 right-2 text-gray-300 hover:text-white"
      >
        {copied ? (
          <>
            <Check size={16} /> Copied
          </>
        ) : (
          <>
            <Copy size={16} /> Copy
          </>
        )}
      </button>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          borderRadius: "0.75rem",
          padding: "1.25rem 1.5rem",
          fontSize: "1.05rem",
          margin: 0,
          textAlign: "left",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
