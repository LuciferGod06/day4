import React, { useState, useRef } from 'react';

const UserForm = () => {

  const [name, setName] = useState('');

  const emailRef = useRef(null);

  const [validationError, setValidationError] = useState('');

  // Controlled input change handler
  const handleNameChange = (event) => {
    setName(event.target.value);
  
    if (event.target.value.length < 3) {
      setValidationError('Name must be at least 3 characters long.');
    } else {
      setValidationError('');
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  
    const emailValue = emailRef.current.value;

    console.log('Name:', name);
    console.log('Email:', emailValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Controlled input */}
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        {/* Validation message */}
        {validationError && <p>{validationError}</p>}
      </div>
      {/* Uncontrolled input using ref */}
      <div>
        <label>
          Email:
          <input type="text" ref={emailRef} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
