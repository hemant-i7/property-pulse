export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'buying' | 'selling' | 'renting' | 'finance';
  order: number;
}
