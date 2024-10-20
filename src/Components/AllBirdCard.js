import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/BirdCard.css'; 

const AllBirdCard = ({ bird }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/allbirds/${bird.id}`);
    };

    return (
        <div className="bird-card" onClick={handleClick}>
            <img src={bird.image} alt={bird.name} className="bird-image" />
            <div className="bird-name">{bird.name}</div>
        </div>
    );
};

export default AllBirdCard;
