import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/BirdCard.css';

const SightingCard = ({ sighting }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/sightings/${sighting.id}`);
    };

    return (
        <div className="bird-card" onClick={handleClick}>
            <img src={sighting.image} alt={sighting.name} className="bird-image" />
            <div className="bird-name">{sighting.name}</div>
        </div>
    );
};

export default SightingCard;
