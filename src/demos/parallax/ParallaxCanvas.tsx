import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    gsap: any;
  }
}

export const ParallaxCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const loadParallax = async () => {
      try {
        // Fetch the HTML content
        const htmlResponse = await fetch(new URL("./parallax.html", import.meta.url).href);
        const htmlContent = await htmlResponse.text();

        // Fetch the JS content
        const jsResponse = await fetch(new URL("./parallax.js", import.meta.url).href);
        const jsContent = await jsResponse.text();

        // Create a complete HTML document
        const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      overflow-x: hidden;
      background: #fff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .scrollElement {
      height: 5000px;
      position: relative;
    }
    svg.parallax {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
    footer {
      position: fixed;
      bottom: 20px;
      left: 0;
      width: 100%;
      text-align: center;
      color: #666;
      font-size: 12px;
      opacity: 0;
    }
  </style>
</head>
<body>
  <div class="scrollElement">
    ${htmlContent}
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <script>
    ${jsContent}
  </script>
</body>
</html>
        `;

        // Create iframe and set content
        if (iframeRef.current) {
          const iframe = iframeRef.current;
          iframe.srcdoc = fullHtml;
        }
      } catch (error) {
        console.error("Failed to load parallax demo:", error);
      }
    };

    loadParallax();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <iframe
        ref={iframeRef}
        className="w-full h-full border-0"
        title="Parallax Scroll Animation"
      />
    </div>
  );
};
