import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher.js';
import { HeroCard } from './HeroCard.js';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}>
                    </HeroCard>
                ))
            }
        </div>
    )
}
