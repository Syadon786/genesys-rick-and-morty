import { Character } from 'models';

export interface PagingInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterResponse {
  info: PagingInfo;
  results: Character[];
}
