import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Page,
  EpisodesTable,
  LocationCard,
  CharacterCard,
  BackButton,
} from 'components';
import { Character, Location, Episode } from 'models';
import { characterService, episodeService, locationService } from 'services';
import { assertFulfilled } from 'utils';

import classes from './profilePage.module.scss';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character>();
  const [location, setLocation] = useState<Location>();
  const [origin, setOrigin] = useState<Location>();
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const getCharacter = async () => {
      if (id) {
        setCharacter(await characterService.getCharacter(parseInt(id)));
      }
    };
    getCharacter();
  }, [id]);

  useEffect(() => {
    const getLocationAndEpisodes = async () => {
      if (character) {
        const locationUrl = character.location.url;
        const originUrl = character.origin.url;
        if (locationUrl !== '') {
          setLocation(await locationService.getLocation(locationUrl));
        }
        if (originUrl !== '') {
          setOrigin(await locationService.getLocation(originUrl));
        }
        const episodeResults = await Promise.allSettled([
          ...character.episode.map(episodeService.getEpisode),
        ]);
        setEpisodes(
          episodeResults.filter(assertFulfilled).map(({ value }) => value)
        );
      }
    };
    getLocationAndEpisodes();
  }, [character]);

  return (
    <Page title="Character Details">
      <>
        <BackButton />
        <div className={classes.cardContainer}>
          {character && (
            <CharacterCard
              className={classes.mainCard}
              name={character.name}
              image={character.image}
              alt={`Image of ${character.name}`}
              status={character.status}
              gender={character.gender}
              species={character.species}
              type={character.type}
            />
          )}
          {(origin || location) && (
            <div className={classes.subCardContainer}>
              {origin && (
                <LocationCard
                  title="Origin"
                  className={classes.subCard}
                  name={origin.name}
                  type={origin.type}
                  dimension={origin.dimension}
                />
              )}
              {location && (
                <LocationCard
                  title="Last known location"
                  className={classes.subCard}
                  name={location.name}
                  type={location.type}
                  dimension={location.dimension}
                />
              )}
            </div>
          )}
        </div>
        <h2>Episodes that the Character featured in</h2>
        <EpisodesTable
          episodes={episodes.map(({ air_date, episode, id, name }) => ({
            air_date,
            episode,
            id,
            name,
          }))}
        />
      </>
    </Page>
  );
};

export default ProfilePage;
