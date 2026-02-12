export type LayoutType = 'final' | 'plain' | 'columns' | 'grid';

export interface FlipParams {
  stagger: number;
  duration: number;
  autoPlay: boolean;
  interval: number;
  spinOnFinal: boolean;
  colorF: string;
  colorL: string;
  colorI: string;
  colorP: string;
  textColor: string;
  bgColor: string;
  fontSize: number;
}
