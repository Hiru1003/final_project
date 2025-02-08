import React from 'react';
import BirdCard from './BirdCard';
import Kanneliya from '../Assets/Sightings/Kanneliya Forest.webp';
import BundalaNationalPark from '../Assets/Sightings/Bundala National Park.jpg';
import HortonPlains from '../Assets/Sightings/Horton Plains .jpg';
import KumanaNationalPark from '../Assets/Sightings/KumanaNationalPark.jpg';
import SinharajaForestReserve from '../Assets/Sightings/Sinharaja Forest Reserve.jpg';
import YalaNationalPark from '../Assets/Sightings/YalaNationalPark.jpg';
import AnawilundawaWetlandSanctuary from '../Assets/Sightings/Anawilundawa Wetland Sanctuary.jpg';
import KnucklesForestReserve from '../Assets/Sightings/Knuckles Forest Reserve.jpg';
import SigiriyaBirdSanctuary from '../Assets/Sightings/Sigiriya Bird Sanctuary.jpg';
import BeddaganaWetlandPark from '../Assets/Sightings/Beddagana Wetland Park.jpg';
import ThalangamaWetlandPark from '../Assets/Sightings/thalangama wetland park.jpg';
import WilpattuNationalPark from '../Assets/Sightings/Wilpattu National Park.jpg';

import SightingCard from './SightingsCard';
import MannarIsland from '../Assets/Sightings/Mannar Island .webp';

const sightings = [
   
    { id: 1, name: 'Sinharaja Forest Reserve', image: SinharajaForestReserve },
    { id: 2, name: 'Kanneliya Forest', image: Kanneliya },
    { id: 3, name: 'Kumana National Park', image: KumanaNationalPark },
    { id: 4, name: 'Horton Plains', image: HortonPlains },
    { id: 5, name: 'Bundala National Park', image: BundalaNationalPark },
    { id: 6, name: 'Yala National Park', image: YalaNationalPark },
    { id: 7, name: 'Anawilundawa Wetland Sanctuary', image: AnawilundawaWetlandSanctuary },
    { id: 8, name: 'Knuckles Forest Reserve', image: KnucklesForestReserve },
    { id: 9, name: 'Sigiriya Bird Sanctuary', image: SigiriyaBirdSanctuary },
    { id: 10, name: 'Thalangama Wetland Park', image: ThalangamaWetlandPark },
    { id: 11, name: 'Mannar Island', image: MannarIsland },
    { id: 12, name: 'Beddagana Wetland Park', image: BeddaganaWetlandPark },
    { id: 13, name: 'Wilpattu National Park', image: WilpattuNationalPark },
];

const SightingGallery = () => {
    return (
        <>
        <h2 style={{ paddingLeft:'4rem', paddingTop:'5rem', paddingBottom:'2rem'}}></h2>
        <div className="bird-gallery" style={{ display: 'flex', flexWrap: 'wrap', paddingLeft:'3rem' , paddingBottom:'2rem', gap: '30px'}}>      
            {sightings.map((sighting) => (               
                <SightingCard key={sighting.id} sighting={sighting} />
            ))}
        </div>
        </>
    );
};

export default SightingGallery;
