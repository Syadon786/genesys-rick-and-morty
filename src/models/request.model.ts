import { Character } from 'models';

export interface Metadata {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterResponse {
  info: Metadata;
  results: Character[];
}
