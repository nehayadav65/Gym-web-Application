import React, { useState } from 'react';
import {toast} from 'react-toastify';

const BMICalculator = () => {
    const [height,setHeight]=useState('');
    const [weight, setWeight] = useState('');
    const [gender,setGender] = useState(null);
    const [bmi, setBmi] = useState(null);

    const calucalateBMI= (e) => {
      e.preventDefault();
      if (!height || !weight || !gender) {
        alert('Please enter height, weight, and gender');
        return;
      }
      const heightInMeters = height / 100; // Convert height from cm to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      if (bmiValue < 18.5) {
        toast.warning('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        toast.success('You have a normal weight');
      } 
      else if (bmiValue >= 25 && bmiValue < 29.9) {
        toast.warning('You are overweight');
      }
      else {
        toast.error('You are obese range');
      }
    };

    return <section className='bmi'>
      <h1>BMI CALCULATOR</h1>  
       <div className="container">
        <div className="wrapper">
          <form onSubmit={calucalateBMI}>
            <div>
              <label>Height (cm)</label>
              <input type='number' value={height} onChange={(e) => setHeight(e.target.value)} required />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input type='number' value={weight} onChange={(e) => setWeight(e.target.value)} required />
            </div>
            <div>
              <label>Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value=''>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
            <button type='submit'>Calculate BMI</button>
          </form>

        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="BMI" />
        </div>
       </div>

     </section>
 
};

export default BMICalculator
