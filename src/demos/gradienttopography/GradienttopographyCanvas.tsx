import React from "react";

export const GradienttopographyCanvas: React.FC = () => (
  <div className="w-full h-full relative">
    <iframe
      src="/gradienttopography/index.html"
      className="w-full h-full border-0"
      title="Gradient Topography Animation"
    />
  </div>
);
