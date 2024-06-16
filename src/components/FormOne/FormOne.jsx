import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const FormOne = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }} = useForm({
    criteriaMode: "all",
  });

  const user = sessionStorage.getItem("user");
  const values = user ? JSON.parse(user) : {name: "", email: "", phone: ""};

  const nextStep = (data) => {
    sessionStorage.setItem("user", JSON.stringify(data));
    navigate("/two");
  };

  return (
    <div className="form-one-main-container">

      <article className="form-one-container">
        <h1 className="form-header">Personal info</h1>
        <p className="form-description">Please provide your name, email address and phone number.</p>
        <form>

          <div className="form-field">
            <label htmlFor="name">Name</label>
            <ErrorMessage 
              errors={errors}
              name="name"
              render={({ messages }) => 
                messages && Object.entries(messages).map(([type, message]) => (
                  <p className="error-message" key={type}>{message}</p>
                ))
              }
            />
            <input
              className={"input"} 
              type="text" 
              id="name" 
              name="name"
              placeholder="e.g.Stephen King"
              defaultValue={values.name}

              {...register("name", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z]+$/gm,
                  message: "Invalid name"
                }
              })}
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <ErrorMessage 
              errors={errors}
              name="email"
              render={({ messages }) => 
                messages && Object.entries(messages).map(([type, message]) => (
                  <p className="error-message" key={type}>{message}</p>
                ))
              }
            />
            <input
              className="input"
              type="email" 
              id="email" 
              name="email" 
              placeholder="e.g.stephenking@lore.com"
              defaultValue={values.email}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9]+@[a-z]+.[a-z]{2,3}$/gm,                                                
                  message: "Invalid email"
                }
              })}
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <ErrorMessage 
              errors={errors}
              name="phone"
              render={({ messages }) => 
                messages && Object.entries(messages).map(([type, message]) => (
                  <p className="error-message" key={type}>{message}</p>
                ))
              }
            />
            <input
              className="input" 
              type="number" 
              id="phone" 
              name="phone" 
              placeholder="e.g.+1 234 567 890" 
              defaultValue={values.phone}
              {...register("phone", {
                required: "This field is required",
                minLength: {
                  value: 5,
                  message: "Invalid phone number"
                }
              })}
            />
          </div>
          
        </form>
      </article>

      <div className="bottom-navigation-btn-container">
        <button className="next-btn" onClick={handleSubmit(nextStep)}>Next Step</button>
      </div>
      
    </div>
  );
};

export default FormOne;
