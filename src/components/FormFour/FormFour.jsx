import { Link, useNavigate } from "react-router-dom";

const FormFour = () => {
    const navigate = useNavigate();

    const lastStep = () => {
        navigate("/finish!")
    }
  return (
    <div className="form-four-main-container">
        <article className="form-four-container">
            <h1 className="form-header">Finishing up</h1>
            <p className="form-description">Double-check everything looks OK before confirming.</p>
            <div className="chosen-services">
                <div className="plan">
                    <ul className="plan-details">
                        <li>Arcade(Monthly)</li>
                        <li><Link>Change</Link></li>
                    </ul>
                    <p className="plan-price">$90/yr</p>
                </div>
                <hr />
                <div className="bonus">
                    <p className="add-on">Oline service</p>
                    <p className="add-on-price">+$10/yr</p>
                </div>
                <div className="bonus">
                    <p className="add-on">Larger storage</p>
                    <p className="add-on-price">+$20/yr</p>
                </div>
            </div>
            <div className="price-all">
                <p>Total (per year)</p>
                <p className="total-price">$120/yr</p>
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
