"use client";

import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import php from "highlight.js/lib/languages/php";
import javascript from "highlight.js/lib/languages/javascript"

hljs.registerLanguage("php", php);
hljs.registerLanguage("javascript", javascript);

import "highlight.js/styles/github-dark.min.css";

const HighlightCode = ({ code, language }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <pre className="p-0 bg-transparent">
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default HighlightCode;
