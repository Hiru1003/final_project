import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/BirdInfo.css'; 
import sparrowImage from '../Assets/landing2.webp';
import eagleImage from '../Assets/landing2.webp';

// Sample bird data. In a real application, you might fetch this from an API or database.
const birdData = [
    {
        id: 1,
        name: 'Sparrow',
        image: sparrowImage,
        description: 'Sparrows are small, brown and gray birds that are common in many parts of the world. They are known for their chirping and are often found in gardens and parks.',
    },
    {
        id: 2,
        name: 'Eagle',
        image: sparrowImage,
        description: 'Eagles are large birds of prey known for their powerful build and keen eyesight. They are often found in mountainous areas and are symbols of strength.',
    },
  
];

const BirdInfo = () => {
    const { id } = useParams(); 
    const bird = birdData.find((bird) => bird.id === parseInt(id));

    if (!bird) {
        return <div>Bird not found!</div>;
    }

    return (
        <div className="bird-info-container">
            <img src={bird.image} alt={bird.name} className="bird-info-image" />
            <h1 className="bird-info-name">{bird.name}</h1>
            <p className="bird-info-description">{bird.description}</p>
        </div>
    );
};

export default BirdInfo;
