import { Link, useNavigate } from "react-router-dom";

import { filterAddOns } from "../../utils/filterAddOns";
import { sumTotalPrice } from "../../utils/sumTotalPrice";

const FormFour = () => {
    const navigate = useNavigate();
    const userPlan = JSON.parse(sessionStorage.getItem("userPlan"));
    const userAddOns = JSON.parse(sessionStorage.getItem("userAddOns"));
    const addOns = filterAddOns(userAddOns);
    const totalPrice = sumTotalPrice(userPlan.price, addOns);

    const lastStep = () => {
        sessionStorage.clear();
        navigate("/finish!");
    };

    return (
        <div className="form-four-main-container">
            <article className="form-four-container">
                <h1 className="form-header">Finishing up</h1>
                <p className="form-description">Double-check everything looks OK before confirming.</p>
                <div className="chosen-services">
                    <div className="plan">
                        <ul className="plan-details">
                            <li>{`${userPlan.plan}/(${userPlan.type})`}</li>
                            <li><Link to="/two">Change</Link></li>
                        </ul>
                        <p className="plan-price">{`$${userPlan.price}/${userPlan.type === "Monthly" ? "mo" : "yr"}`}</p>
                    </div>
                    <hr />
                    {
                        addOns !== undefined ? addOns.map(addOn => 
                        <div className="bonus" key={addOn.addOn}>
                            <p className="add-on">{addOn.addOn}</p>
                            <p className="add-on-price">{`+$${addOn.price}/${addOn.type}`}</p>
                        </div>)
                        :
                        null
                    }
                </div>
                <div className="price-all">
                    <p>{`Total (${userPlan.type === "Monthly" ? "per month" : "per year"})`}</p>
                    <p className="total-price">{`+$${totalPrice}/${userPlan.type === "Monthly" ? "mo" : "yr"}`}</p>
                </div>
            </article>

            <div className="bottom-navigation-btn-container">
                <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
                <button className="next-btn confirm-btn" onClick={lastStep}>Confirm</button>
            </div>
        </div>
    );
};

export default FormFour;
