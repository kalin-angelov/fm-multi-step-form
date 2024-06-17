import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Aside = () => {
  const location = useLocation();
  const [onPage, setOnPage] = useState();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    setOnPage(location.pathname);

    const handleWindowSize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };

  },[location]);

  return (
    <aside>
      <div className="navigation">

        <div className="step-container">
          <p className={onPage === "/" ? "steps on" : "steps"}>1</p>
          {windowSize >= 1024 && 
            <ul className="step-info">
              <li>Step 1</li>
              <li><span>Your Info</span></li>
            </ul>
          }
        </div>

        <div className="step-container">
          <p className={onPage === "/two" ? "steps on" : "steps"}>2</p>
          {windowSize >= 1024 &&
            <ul className="step-info">
              <li>Step 2</li>
              <li><span>Select Plan</span></li>
            </ul>
          }
        </div>

        <div className="step-container">
          <p className={onPage === "/three" ? "steps on" : "steps"}>3</p>
          {windowSize >= 1024 &&
            <ul className="step-info">
              <li>Step 3</li>
              <li><span>Add-ons</span></li>
            </ul>
          }
        </div>

        <div className="step-container">
          <p className={onPage === "/four" || onPage === "/finish!" ? "steps on" : "steps"}>4</p>
          {windowSize >= 1024 &&
           <ul className="step-info">
            <li>Step 4</li>
            <li><span>Summary</span></li>
            </ul>
          }
        </div>

      </div>
    </aside>
  );
};

export default Aside;
