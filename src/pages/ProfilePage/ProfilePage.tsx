import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Page,
  EpisodesTable,
  LocationCard,
  CharacterCard,
  BackButton,
} from 'components';
import { useCharacter, useLocation, useEpisodes } from 'queries';

import classes from './profilePage.module.scss';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  const { character } = useCharacter(id);
  const { location } = useLocation({
    enabled: !!character && character.location.url !== '',
    url: character?.location.url,
  });
  const { location: origin } = useLocation({
    enabled: !!character && character.origin.url !== '',
    url: character?.origin.url,
  });

  const { episodes } = useEpisodes({
    enabled: !!character && !!character.episode.length,
    urls: character?.episode ?? [],
  });

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
