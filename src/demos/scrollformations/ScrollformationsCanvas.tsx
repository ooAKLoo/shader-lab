import React, { useRef } from "react";

export const ScrollformationsCanvas: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="w-full h-full relative">
      <iframe
        ref={iframeRef}
        src="/scrollformations/index.html"
        className="w-full h-full border-0"
        title="Scroll Layout Formations"
      />
    </div>
  );
};
