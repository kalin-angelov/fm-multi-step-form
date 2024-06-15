import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormOne = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const nextStep = () => {
    navigate("/two")
  };

  return (
    <div className="form-one-main-container">

      <article className="form-one-container">
        <h1 className="form-header">Personal info</h1>
        <p className="form-description">Please provide your name, email address and phone number.</p>
        <form>

          <div className="form-field">
            <label htmlFor="name">Name</label>
            <p className="error-message">This field is required</p>
            <input
              className="input" 
              type="text" 
              id="name" 
              name="name" 
              placeholder="e.g.Stephen King"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <p className="error-message">This field is required</p>
            <input
              className="input"
              type="email" 
              id="email" 
              name="email" 
              placeholder="e.g.stephenking@lore.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <p className="error-message">This field is required</p>
            <input
              className="input" 
              type="number" 
              id="phone" 
              name="phone" 
              placeholder="e.g.+1 234 567 890" 
              value={phone}
              onChange={(e) => setPhone(e.target.phone)}
            />
          </div>
          
        </form>
      </article>

      <div className="bottom-navigation-btn-container">
        <button className="next-btn" onClick={nextStep}>Next Step</button>
      </div>
      
    </div>
  );
};
export default FormOne;
