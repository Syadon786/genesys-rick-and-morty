import { CharacterResponse, Character } from 'models';
import { request, Service } from 'utils';

class CharacterService extends Service {
  getCharacters = async (page: number = 1) => {
    return request<CharacterResponse>({
      resource: `${this.resource}/?page=${page}`,
    });
  };

  getCharacter = async (id: number) => {
    return request<Character>({
      resource: `${this.resource}/${id}`,
    });
  };
}

export const characterService = new CharacterService('/character');
