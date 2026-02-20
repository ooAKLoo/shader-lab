export interface FlowStream {
  id: string;
  color: string;
  lineCount: number;
  spread: number;
  curvature: number;
  speed: number;
  opacity: number;
  width: number;
  targetX: number;
  targetY: number;
  sourceX: number;
  sourceY: number;
}

export interface EnergyflowParams {
  streams: FlowStream[];
  showMarkers: boolean;
}
