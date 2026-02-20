import React from "react";

export const DraggablegridCanvas: React.FC = () => (
  <div className="w-full h-full relative">
    <iframe
      src="/draggablegrid/index.html"
      className="w-full h-full border-0"
      title="Draggable Product Grid"
    />
  </div>
);
