import React, { useState } from 'react';

const Reservation = () => {
  const [isGoing, setIsGoing] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(0);

  function handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    if (name === "isGoing")
      setIsGoing(value);
    else
      setNumberOfGuests(value);
  }

  return (
    <form>
      <label>
        Is going:
        <input 
          name='isGoing'
          type='checkbox'
          checked={isGoing}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name='numberOfGuests'
          type='number'
          value={numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}

export default Reservation;
