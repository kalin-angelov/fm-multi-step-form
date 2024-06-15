import { Routes,Route } from "react-router-dom";

import Aside from "../Aside/Aside";
import FormOne from "../FormOne/FormOne";
import FormTwo from "../FormTwo/FormTwo";
import FormThree from "../FormThree/FormThree";
import FormFour from "../FormFour/FormFour";
import Message from "../Message/Message";
import NotFound from "../NotFound/NotFound";

const Main = () => {
  return (
    <main>
      <Aside />
      <Routes>
        <Route path="*" element={<NotFound />} /> 
        <Route path="/" element={<FormOne />}/>
        <Route path="/two" element={<FormTwo />}/>
        <Route path="/three" element={<FormThree />}/>
        <Route path="/four" element={<FormFour />}/>
        <Route path="/finish!" element={<Message />}/>
      </Routes>
    </main>
  )
}

export default Main
