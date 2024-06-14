const FormTwo = () => {
  return (
    <article className="form-two-main-container">
        <h1 className="form-header">Select your plan</h1>
        <p className="form-description">You have the option of monthly or yearly billing.</p>
        <div className="plans">
            <figure>
                <img src="/public/images/icon-arcade.svg" alt="puzzle piece" />
            </figure>
            <ul>
                <li className="header">Arcade</li>
                <li className="price">$9/mo</li>
            </ul>
        </div>
        <div className="plans">
            <figure>
                    <img src="/public/images/icon-advanced.svg" alt="game controller" />
            </figure>
            <ul>
                <li className="header">Advance</li>
                <li className="price">$12/mo</li>
            </ul>
        </div>
        <div className="plans">
            <figure>
                <img src="/public/images/icon-pro.svg" alt="big game controller" />
            </figure>
            <ul>
                <li className="header">Pro</li>
                <li className="price">$15/mo</li>
            </ul>
        </div>
        <form className="form-slide">
            <p>Monthly</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
            <p>Yearly</p>
        </form>
    </article>
  )
}

export default FormTwo;
