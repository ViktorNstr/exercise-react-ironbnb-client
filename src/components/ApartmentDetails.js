import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ApartmentDetails() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    async function fetchApartment() {
      try {
        const response = await axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${id}`);
        setApartment(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchApartment();
  }, [id]);

  if (!apartment) {
    return <div>Loading, please wait</div>;
  }

  return (
    <div>
      <h1>{apartment.title}</h1>
      <img src={apartment.img} alt={apartment.title} />
      <p>Price per day: {apartment.pricePerDay}</p>
    </div>
  );
}

export default ApartmentDetails;