import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/BirdCard.css'; 

const BirdCard = ({ bird }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/birds/${bird.id}`);
    };

    return (
        <div className="bird-card" onClick={handleClick}>
            <img src={bird.image} alt={bird.name} className="bird-image" />
            <div className="bird-name">{bird.name}</div>
        </div>
    );
};

export default BirdCard;
