import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TrainSchedule = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Make API request to your backend to fetch train details
    axios
      .get('http://localhost:5000/api/trains')
      .then((response) => {
        console.log('API Response:', response.data); // Log the response to check its format
        setTrains(response.data);
      })
      .catch((error) => {
        console.error('Error fetching train data:', error.message);
      });
  }, []);

  // Rest of the component code

  return (
    <div>
      <h2>Train Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Train Number</th>
            <th>Departure Time</th>
            <th>Sleeper Seats</th>
            <th>AC Seats</th>
            <th>Sleeper Price</th>
            <th>AC Price</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.trainNumber}>
              <td>{train.trainName}</td>
              <td>{train.trainNumber}</td>
              <td>{train.departureTime.Hours}:{train.departureTime.Minutes}</td>
              <td>{train.seatsAvailable.sleeper}</td>
              <td>{train.seatsAvailable.AC}</td>
              <td>{train.price.sleeper}</td>
              <td>{train.price.AC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // Your JSX code here
  );
};

export default TrainSchedule;
