import { useNavigate, Routes, Route } from "react-router-dom";
import FormOne from "../FormOne/FormOne";
import FormTwo from "../FormTwo/FormTwo";
import FormThree from "../FormThree/FormThree";
import Message from "../Message/Message";
import FormFour from "../FormFour/FormFour";

const Main = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="top-navigation-container">
        <ul className="top-navigation">
          <li className="steps">1</li>
          <li className="steps">2</li>
          <li className="steps">3</li>
          <li className="steps">4</li>
        </ul>
      </div>

      <div className="center-area">
        <Routes>
          <Route path="/" element={<FormOne />} />
          <Route path="/secondForm" element={<FormTwo />} />
          <Route path="/thirdForm" element={<FormThree />} />
          <Route path="/fourthForm" element={<FormFour />} />
          <Route path="/compleat" element={<Message />} />
        </Routes>
      </div>

      <div className="bottom-navigation-btn-container">
        <button className="back-btn">Go Back</button>
        <button className="next-btn">Next Step</button>
      </div>
    </main>
  )
}

export default Main;
