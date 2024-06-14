const FormOne = () => {
  return (
    <article className="form-one-main-container">
      <h1 className="form-header">Personal info</h1>
      <p className="form-description">Please provide your name, email address and phone number.</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="e.g.Stephen King" />
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="e.g.stephenking@lore.com" />
        <label htmlFor="phone">Phone Number</label>
        <input type="number" id="phone" name="phone" placeholder="e.g.+1 234 567 890" />
      </form>
    </article>
  );
};
export default FormOne;
