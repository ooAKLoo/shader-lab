import React, { useEffect, useRef } from "react";

export const VideotextCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const loadVideotext = async () => {
      try {
        const htmlResponse = await fetch(new URL("./videotext.html", import.meta.url).href);
        const htmlContent = await htmlResponse.text();

        const cssResponse = await fetch(new URL("./videotext.css", import.meta.url).href);
        const cssContent = await cssResponse.text();

        const jsResponse = await fetch(new URL("./videotext.js", import.meta.url).href);
        const jsContent = await jsResponse.text();

        const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    ${cssContent}
  </style>
</head>
<body>
  ${htmlContent}
  <script>
    ${jsContent}
  </script>
</body>
</html>
        `;

        if (iframeRef.current) {
          iframeRef.current.srcdoc = fullHtml;
        }
      } catch (error) {
        console.error("Failed to load videotext demo:", error);
      }
    };

    loadVideotext();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <iframe
        ref={iframeRef}
        className="w-full h-full border-0"
        title="Video Text Wrapping"
        allow="autoplay"
      />
    </div>
  );
};
