export interface TextMaskSlide {
  line1: string;
  line2: string;
  line3: string;
}

export interface TextMaskParams {
  slides: TextMaskSlide[];
  duration: number;
  interval: number;
  autoPlay: boolean;
  color1: string;
  color2: string;
  color3: string;
  bgColor: string;
}
