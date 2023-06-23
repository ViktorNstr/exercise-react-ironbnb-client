import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ApartmentsList() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    async function fetchApartments() {
      try {
        const response = await axios.get('https://ironbnb-m3.herokuapp.com/apartments');
        setApartments(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchApartments();
  }, []);

  return (
    <div>
      <h1>Apartments List</h1>
      <ul>
        {apartments.map((apartment) => (
          <li key={apartment._id}>
            <h2>{apartment.title}</h2>
            <img src={apartment.img} alt={apartment.title} />
            <p>Price per day: {apartment.pricePerDay}</p>
            <Link to={`/apartments/${apartment.id}`}>View Details</Link>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApartmentsList;
