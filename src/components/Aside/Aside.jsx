import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Aside = () => {
  const location = useLocation();
  const [onPage, setOnPage] = useState();

  useEffect(() => {
    setOnPage(location.pathname)
  },[location]);

  return (
    <aside>
      <ul className="navigation">
        <li className={onPage === "/" ? "steps on" : "steps"}>1</li>
        <li className={onPage === "/two" ? "steps on" : "steps"}>2</li>
        <li className={onPage === "/three" ? "steps on" : "steps"}>3</li>
        <li className={onPage === "/four" || onPage === "/finish!" ? "steps on" : "steps"}>4</li>
      </ul>
    </aside>
  )
}

export default Aside;
