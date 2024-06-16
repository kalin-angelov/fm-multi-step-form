import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { planManager } from "../../utils/planManager";

const FormTwo = () => {
    const navigate = useNavigate();
    const user = sessionStorage.getItem("user");
    const userPlan = sessionStorage.getItem("userPlan");
    const [toggleBtn, setToggleBtn] = useState(userPlan ? JSON.parse(userPlan).type === "Monthly" ? true : false : true);
    const [selected, setSelected] = useState(userPlan ? JSON.parse(userPlan).plan : null);

    useEffect(() => {
        if (user === null) {
            navigate("/");
        }
    },[]);
   
    const handleToggleButton = () => {
        setToggleBtn(!toggleBtn);
    };

    const chosenPlans = (e) => {
        const plan = e.target.id;
     
        if (String(plan).includes("arcade")) {
            setSelected("Arcade");
        } else if (String(plan).includes("advanced")) {
            setSelected("Advanced")
        } else {
            setSelected("Pro")
        }
    };

    const nextStep = () => {
        if (selected !== null) {
            planManager(selected, toggleBtn);
            navigate("/three");
        };
    };
    
    return (
        <div className="form-two-main-container">
            <article className={toggleBtn ? "form-two-container" : "form-two-container extend"}>
                <h1 className="form-header">Select your plan</h1>
                <p className="form-description">You have the option of monthly or yearly billing.</p>

                <div id="arcade" className={toggleBtn ? "plans" : "plans yearly"} onClick={(e) => chosenPlans(e)} style={selected === "Arcade" ? {border: "1px solid #4639ff", backgroundColor: "#f8f9fe"} : null}>
                    <figure>
                        <img id="arcade-img" src="/public/images/icon-arcade.svg" alt="puzzle piece" />
                    </figure>
                    <ul>
                        <li id="arcade-header" className="header">Arcade</li>
                        <li id="arcade-price" className="price">{toggleBtn ? "$9/mo" : "$90/yr"}</li>
                        {!toggleBtn && <li id="arcade-bonus" className="bonus-months">2 months free</li>}
                    </ul>
                </div>

                <div id="advanced" className={toggleBtn ? "plans" : "plans yearly"} onClick={(e) => chosenPlans(e)} style={selected === "Advanced" ? {border: "1px solid #4639ff", backgroundColor: "#f8f9fe"} : null}>
                    <figure>
                        <img id="advanced-img" src="/public/images/icon-advanced.svg" alt="game controller" />
                    </figure>
                    <ul>
                        <li id="advanced-header" className="header">Advance</li>
                        <li id="advanced-price" className="price">{toggleBtn ? "$12/mo" : "$120/yr"}</li>
                        {!toggleBtn && <li id="advance-bonus" className="bonus-months">2 months free</li>}
                    </ul>
                </div>

                <div id="pro" className={toggleBtn ? "plans" : "plans yearly"} onClick={(e) => chosenPlans(e)} style={selected === "Pro" ? {border: "1px solid #4639ff", backgroundColor: "#f8f9fe"} : null}>
                    <figure>
                        <img id="pro-img" src="/public/images/icon-pro.svg" alt="big game controller" />
                    </figure>
                    <ul>
                        <li id="pro-header" className="header">Pro</li>
                        <li id="pro-price" className="price">{toggleBtn ? "$15/mo" : "$150/yr"}</li>
                        {!toggleBtn && <li id="pro-bonus" className="bonus-months">2 months free</li>}
                    </ul>
                </div>

                <div className="form-slide" >
                    <p>Monthly</p>
                    <label className="switch">
                        <input checked={!toggleBtn} type="checkbox" onChange={handleToggleButton}/>
                        <span className="slider"></span>
                    </label>
                    <p>Yearly</p>
                </div>
            </article>

            <div className="bottom-navigation-btn-container">
                <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
                <button className="next-btn" onClick={nextStep}>Next Step</button>
            </div>
        </div>
    );
};

export default FormTwo;
