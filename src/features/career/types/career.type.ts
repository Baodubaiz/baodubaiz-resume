export interface CareerRoadmapStep {
  stepNumber: string;
  stepLabel: string;
  title: string;
  description: string;
  topics: string[];
}

export interface TradeoffDimension {
  name: string;
  label: string;
  desc: string;
}

export interface CareerPathFocus {
  badge: string;
  title: string;
  description: string;
  keyAreas: string[];
}
