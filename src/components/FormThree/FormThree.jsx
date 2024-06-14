const FormThree = () => {
  return (
    <article className="form-three-main-container">
        <h1 className="form-header">Pick add-ons</h1>
        <p className="form-description">Add-ons help enhance your gaming experience</p>
        <div className="add-on">
            <form>
                <input type="checkbox" id="service" name="service" className="checkbox" />
                <label htmlFor="service" className="header">Online Service</label>
                <p className="description">Access to multiplayer games</p>
                <p className="price">+$10/yr</p>
            </form>
            
        </div>
        <div className="add-on">
            <form>
                <input type="checkbox" id="storage" name="storage" className="checkbox" />
                <label htmlFor="storage" className="header" >Larger storage</label>
                <p className="description">Extra 1TB of cloud save</p>
                <p className="price">+$20/yr</p>
            </form>
            
        </div>
        <div className="add-on">
            <form>
                <input type="checkbox" id="customize" name="customize" className="checkbox" />
                <label htmlFor="customize" className="header">Customizable profile</label>
                <p className="description">Custom theme on your profile</p>
                <p className="price">+$20/yr</p>
            </form>
        </div>
    </article>
  );
};

export default FormThree;
