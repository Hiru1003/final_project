import React from 'react';
import BirdCard from './BirdCard';
import SriLankaJunglefowl from '../Assets/EndemicBirds/Sri Lanka Junglefowl.webp';
import SriLankaBlueMagpie from '../Assets/EndemicBirds/Sri Lanka Blue Magpie.jpeg';
import SriLankaWoodPigeon from '../Assets/EndemicBirds/SriLankaWoodPigeon.jpg';
import SriLankaHangingParrot from '../Assets/EndemicBirds/Sri Lanka Hanging Parrot.jpeg';
import OrangebilledBabbler from '../Assets/EndemicBirds/OrangebilledBabbler.jpg';
import LayardsParakeet from '../Assets/EndemicBirds/LayardsParakeet.jpg';
import SriLankaWhistlingThrush from '../Assets/EndemicBirds/SriLankaWhistlingThrush.jpg';
import SriLankaScimitarBabbler from '../Assets/EndemicBirds/SriLankaScimitarBabbler.jpg';
import SriLankaSpotwingedThrush from '../Assets/EndemicBirds/SriLankaSpotwingedThrush.webp';
import SriLankaSwallow from '../Assets/EndemicBirds/SriLankaSwallow.jpg';
import AshyHeadedLaughingthrush from '../Assets/EndemicBirds/AshyHeadedLaughingthrush.jpeg';
import SriLankaGreenPigeon from '../Assets/EndemicBirds/SriLankaGreenPigeon.webp';
import YellowFrontedBarbet from '../Assets/EndemicBirds/YellowFrontedBarbet.jpg';
import SriLankaSpurfowl from '../Assets/EndemicBirds/SriLankaSpurfowl.jpg';
import SriLankaWhiteEye from '../Assets/EndemicBirds/SriLankaWhiteEye.jpg';
import CrimsonFrontedBarbet from '../Assets/EndemicBirds/CrimsonFrontedBarbet.webp';
import SriLankaDullBlueFlycatcher from '../Assets/EndemicBirds/SriLankaDullBlueFlycatcher.jpeg';
import SriLankaWoodshrike from '../Assets/EndemicBirds/SriLankaWoodshrike.jpeg';
import SriLankaBrownCappedBabbler from '../Assets/EndemicBirds/SriLankaBrownCappedBabbler.jpg';
import RedfacedMalkoha from '../Assets/EndemicBirds/RedfacedMalkoha.jpg';
import SriLankaFlameback from '../Assets/EndemicBirds/SriLankaFlameback.jpg';
import SriLankaBushWarbler from '../Assets/EndemicBirds/SriLankaBushWarbler.jpg';
import SriLankaBlackCappedBulbul from '../Assets/EndemicBirds/SriLankaBlackCappedBulbul.jpg';
import SriLankaPuffThroatedBabbler from '../Assets/EndemicBirds/SriLankaPuffThroatedBabbler.jpg';
import ChestnutbackedOwlet from '../Assets/EndemicBirds/Chestnut-backed Owlet.jpeg';
import CeylonCrestedDrongo from '../Assets/EndemicBirds/Ceylon Crested Drongo.jpg';
import SerendibScopsOwl from '../Assets/EndemicBirds/SerendibScopsOwl.jpg';
import CeylonWhiteheadedStarling from '../Assets/EndemicBirds/Ceylon White-headed Starling.webp';
import GreenbilledCoucal from '../Assets/EndemicBirds/SriLankaGreatCoucal.jpg';
import SriLankaHillMyna from '../Assets/EndemicBirds/SriLankaHillMyna.jpg';
import SriLankaGreyHornbill from '../Assets/EndemicBirds/Sri Lanka Grey Hornbill.jpg';
import WhitethroatedFlowerpecker from '../Assets/EndemicBirds/White-throated Flowerpecker.jpg';

const birds = [
    { id: 1, name: 'Sri Lanka Junglefowl', image: SriLankaJunglefowl },
    { id: 2, name: 'Sri Lanka Blue Magpie', image: SriLankaBlueMagpie },
    { id: 3, name: 'Sri Lanka Wood Pigeon', image: SriLankaWoodPigeon },
    { id: 4, name: 'Sri Lanka Hanging Parrot', image: SriLankaHangingParrot },
    { id: 5, name: 'Orange-billed Babbler', image: OrangebilledBabbler },
    { id: 6, name: 'Layard’s Parakeet', image: LayardsParakeet },
    { id: 7, name: 'Sri Lanka Whistling Thrush', image: SriLankaWhistlingThrush },
    { id: 8, name: 'Sri Lanka Scimitar Babbler', image: SriLankaScimitarBabbler },
    { id: 9, name: 'Sri Lanka Spot-winged Thrush', image: SriLankaSpotwingedThrush },
    { id: 10, name: 'Sri Lanka Swallow', image: SriLankaSwallow },
    { id: 11, name: 'Ashy-headed Laughingthrush', image: AshyHeadedLaughingthrush },
    { id: 12, name: 'Sri Lanka Green Pigeon', image: SriLankaGreenPigeon },
    { id: 13, name: 'Yellow-fronted Barbet', image: YellowFrontedBarbet },
    { id: 14, name: 'Sri Lanka Spurfowl', image: SriLankaSpurfowl },
    { id: 15, name: 'Sri Lanka White-eye', image: SriLankaWhiteEye },
    { id: 16, name: 'Crimson Fronted Barbet', image: CrimsonFrontedBarbet },
    { id: 17, name: 'Sri Lanka Dull Blue Flycatcher', image: SriLankaDullBlueFlycatcher },
    { id: 18, name: 'Sri Lanka Woodshrike', image: SriLankaWoodshrike },
    { id: 19, name: 'Sri Lanka Brown-capped Babbler', image: SriLankaBrownCappedBabbler },
    { id: 20, name: 'Red faced Malkoha', image: RedfacedMalkoha },
    { id: 21, name: 'Sri Lanka Flameback', image: SriLankaFlameback },
    { id: 22, name: 'Sri Lanka Bush Warbler', image: SriLankaBushWarbler },
    { id: 23, name: 'Sri Lanka Black-capped Bulbul', image: SriLankaBlackCappedBulbul },
    { id: 24, name: 'Sri Lanka Puff-throated Babbler', image: SriLankaPuffThroatedBabbler },
    { id: 25, name: 'Chestnut-backed Owlet', image: ChestnutbackedOwlet },
    { id: 26, name: 'Ceylon Crested Drongo', image: CeylonCrestedDrongo },
    { id: 27, name: 'Serendib Scops Owl', image: SerendibScopsOwl },
    { id: 28, name: 'Ceylon White-headed Starling', image: CeylonWhiteheadedStarling },
    { id: 29, name: 'Green-billed Coucal', image: GreenbilledCoucal },
    { id: 30, name: 'Sri Lanka Hill Myna', image: SriLankaHillMyna },
    { id: 31, name: 'Sri Lanka Grey Hornbill', image: SriLankaGreyHornbill },
    { id: 32, name: 'White throated Flowerpecker', image: WhitethroatedFlowerpecker },
];

const BirdGallery = () => {
    return (
        <>
        <h2 style={{ paddingLeft:'4rem', paddingTop:'5rem', paddingBottom:'2rem'}}></h2>
        <div className="bird-gallery" style={{ display: 'flex', flexWrap: 'wrap', paddingLeft:'3rem' , paddingBottom:'2rem', gap: '30px'}}>      
            {birds.map((bird) => (               
                <BirdCard key={bird.id} bird={bird} />
            ))}
        </div>
        </>
    );
};

export default BirdGallery;
