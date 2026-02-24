export type GenerativeType = "superformula" | "sineorbit";

export interface GenerativeEntry {
  id: GenerativeType;
  name: string;
  description: string;
}

export const GENERATIVES: GenerativeEntry[] = [
  {
    id: "superformula",
    name: "Superformula",
    description: "Gielis superformula geometry",
  },
  {
    id: "sineorbit",
    name: "Sine Orbit",
    description: "Multi-layer sine wave orbits",
  },
];
