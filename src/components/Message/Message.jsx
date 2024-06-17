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
    <div className="message-main-container">
      <article className="message-container">
        <figure>
          <img src="/images/icon-thank-you.svg" alt="check" />
        </figure>
        <h1>Thank you!</h1>
        <p>Thanks fpr confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free ro email us at support@loremgaming.com.</p>
      </article>
    </div>
    
  );
};

export default Message;
