import { Link } from "react-router-dom";
const FormFour = () => {
  return (
    <article className="form-four-main-container">
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
  );
};

export default FormFour;
