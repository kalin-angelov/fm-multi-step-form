import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Message = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    },5000);
    
  },[]);

  return (
    <article className="message-main-container">
      <figure>
        <img src="/public/images/icon-thank-you.svg" alt="check" />
      </figure>
      <h1>Thank you!</h1>
      <p>Thanks fpr confirming your subscription!</p>
      <p>We hope you have fun using our platform. If you ever need support, please feel free ro email us at support@loremgaming.com.</p>
    </article>
  );
};

export default Message;
