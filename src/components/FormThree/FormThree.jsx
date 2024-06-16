import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { addOnManager } from "../../utils/addOnManager";
import { useForm } from "../../hooks/useForm";

const FormThree = () => {
    const navigate = useNavigate();
    const userPlan = sessionStorage.getItem("userPlan");
    const userAddOns = sessionStorage.getItem("userAddOns");
    const [plan, setPlan] = useState(JSON.parse(userPlan).type === "Monthly" ? true : false);

    const { formValue, onFormValueChange} = useForm({
        service: userAddOns ? JSON.parse(userAddOns).service.checked : false,
        storage: userAddOns ? JSON.parse(userAddOns).storage.checked : false,
        customize: userAddOns ? JSON.parse(userAddOns).customize.checked : false,
    });

    const nextStep = (body) => {
        addOnManager(body, plan);
        navigate("/four")
    };

    return (
        <div className="form-three-main-container">
            <article className="form-three-container">
                <h1 className="form-header">Pick add-ons</h1>
                <p className="form-description">Add-ons help enhance your gaming experience</p>

                <form>
                    <label htmlFor="service" className={formValue.service ? "add-on active" : "add-on"} name="service" >
                        <input type="checkbox" id="service" name="service" className="checkbox" checked={formValue.service} onChange={onFormValueChange} />
                        <p className="header">Online Service</p>
                        <p className="description">Access to multiplayer games</p>
                        <p className="price">{plan ? "+$1/mo" : "+$10/yr"}</p> 
                    </label>

                    <label htmlFor="storage" className={formValue.storage ? "add-on active" : "add-on"} name="storage" >
                        <input type="checkbox" id="storage" name="storage" className="checkbox" checked={formValue.storage} onChange={onFormValueChange}/>
                        <p className="header" >Larger storage</p>
                        <p className="description">Extra 1TB of cloud save</p>
                        <p className="price">{plan ? "+$2/mo" : "+$20/yr"}</p>
                    </label >
                    
                    <label htmlFor="customize" className={formValue.customize ? "add-on active" : "add-on"} name="customize" >
                        <input type="checkbox" id="customize" name="customize" className="checkbox" checked={formValue.customize} onChange={onFormValueChange}/>
                        <p className="header">Customizable profile</p>
                        <p className="description">Custom theme on your profile</p>
                        <p className="price">{plan ? "+$2/mo" : "+$20/yr"}</p> 
                    </label >
                </form>
                
            </article>

            <div className="bottom-navigation-btn-container">
                <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
                <button className="next-btn" onClick={() => nextStep(formValue)}>Next Step</button>
            </div>
        </div>
    );
};

export default FormThree;
