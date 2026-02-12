import React, { useEffect, useRef, useState } from "react";
import type { FramersParams } from "./types";

interface Props {
  params: FramersParams;
}

function buildHtml(params: FramersParams): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting.css">
  <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting-cells.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Bevan&display=swap');
    html { height: 100%; display: flex; overflow: hidden; }
    body { margin: auto; }
    html, body {
      background: ${params.bgColor};
      color: ${params.textColor};
      font-family: 'Bevan', sans-serif;
      font-size: 18vw;
    }
    *, *:before, *:after {
      animation-timing-function: cubic-bezier(.5, 0, .5, 1);
    }
    :root {
      --duration: ${params.duration}s;
    }
    .char {
      animation-name: char-transform;
      animation-duration: calc(var(--duration));
      animation-fill-mode: both;
      animation-delay: calc(var(--duration) + .05s * (var(--char-total) - var(--char-index)));
      text-shadow: 0 3vh 4vh rgba(0, 0, 0, 0.03);
    }
    .char:first-child {
      animation-name: first-char-transform;
      animation-duration: calc(var(--duration) * 2);
      animation-delay: 0s;
    }
    @keyframes char-transform {
      0% { opacity: 0; transform: translateY(50%); }
      70% { transform: translateY(-6%); }
      90% { transform: translateY(1%); }
      to { transform: translateY(0%); }
    }
    @keyframes char-rotate {
      0% { transform: rotate(30deg); }
      30% { transform: rotate(-10deg); }
      100% { transform: rotate(0deg); }
    }
    @keyframes first-char-transform {
      0% {
        transform: translateX(calc(.75ch * var(--char-total))) translateY(200%);
      }
      40% {
        transform: translateX(calc(.75ch * var(--char-total))) translateY(-10%);
      }
      60% {
        transform: translateX(calc(.75ch * var(--char-total))) translateY(7%);
      }
      100% {
        transform: none;
      }
    }
    @keyframes first-char-rotate {
      0% { transform: rotate(.5turn); }
      40% { transform: rotate(-.1turn); }
      70% { transform: rotate(.1turn); }
      100% { transform: rotate(0turn); }
    }
    .splitting .char {
      visibility: hidden;
    }
    .splitting .char::before {
      visibility: visible;
      animation: inherit;
      animation-name: char-rotate;
      animation-duration: calc(var(--duration) * 1.1);
    }
    .splitting .char:first-child::before {
      animation-name: first-char-rotate;
      animation-duration: inherit;
    }
    .hint {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: .5em;
      font-size: 12px;
      font-family: monospace;
      text-align: center;
      pointer-events: none;
      opacity: 0.5;
    }
  </style>
</head>
<body>
  <div data-splitting>${params.text}</div>
  <div class="hint">Click to replay</div>
  <script src="https://unpkg.com/splitting/dist/splitting.min.js"><\/script>
  <script>
    Splitting();
    var lr = document.querySelector('[data-splitting]');
    window.addEventListener('click', function() {
      var newone = lr.cloneNode(true);
      lr.parentNode.replaceChild(newone, lr);
      lr = newone;
    });
  <\/script>
</body>
</html>`;
}

export const FramersCanvas: React.FC<Props> = ({ params }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = buildHtml(params);
    }
  }, [params, key]);

  return (
    <div className="w-full h-full relative">
      <iframe
        ref={iframeRef}
        key={key}
        className="w-full h-full border-0"
        title="Framers Logo Animation"
      />
    </div>
  );
};
