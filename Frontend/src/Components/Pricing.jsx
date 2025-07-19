import React from 'react' 
import { Link } from 'react-router-dom';
import { Check } from "lucide-react";
 // or wherever it comes from

// import Check from './Check'; // Assuming Check is a component that renders a checkmark icon

const Pricing = () => {
  const pricing=[
     {imgurl:"/pricing.jpg", 
      title:"QUARTLY",
      price:18000,
      length:3,
     },
      {imgurl:"/pricing.jpg", 
      title:"HALF YEARLY",
      price:34000,
      length:6,
     },
      {imgurl:"/pricing.jpg", 
      title:"YEARLY",
      price: 67000,
      length:12, 
     },  
   ]
  return (
    <section className="pricing">
       <h1>ELTIE EDGE FITNESS PLANS</h1>
       <div className="wrapper">
         {
          pricing.map(element=> {
            return(
              <div className="card" key={element.title}>
                <img src={element.imgurl} alt={element.title} /> 
                <div className="title"> 
                  <h1>{element.title}</h1>
                  <h1>PACKAGES</h1>
                  <h3>Rs.{element.price}</h3>
                  <p>For {element.length} Months </p>
                </div> 
                <div className="description">
                  <p>
                    <Check/>Equipment
                  </p>
                   <p>
                    <Check/>All Day Free Training
                  </p>
                   <p>
                    <Check/>Free Restroom
                  </p>
                   <p>
                    <Check/>24/7 Skilled Support
                  </p>
                   <p>
                    <Check/>20 Days Freezing Option
                  </p>
                  <Link to={"/"}>Join Now </Link>
                  </div> 
              </div>
            );
          }
        )
      }
       </div>
  
    </section>
  );
};

export default Pricing
