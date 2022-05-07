import React from "react";
import { Feedback } from "./Components/Feedback";
import logo from "./Assets/img/logo.png";

function App() {
  return (
    <>
      <div className="w-full flex-wrap flex-col h-[100vh] max-w-full max-h-full flex items-center justify-center">
        <img
          className="md:w-96 sm:w-40 lg:w-96 xl:w-96"
          src={logo}
          alt="feedget logo"
        />
        <h1 className="text-primary-900 text-[5rem] font-bold">FeedGet</h1>
        <span className="text-primary-100 -mt-5 text-center">
          COMPONENTE REACT PARA ENVIO DE FEEDBACKS
          <br />
        </span>
        <span className="text-primary-50 opacity-30 -mt-1 text-center text-[0.8rem]">
          clique no ícone no canto inferior direito para testar.
        </span>
      </div>
      <Feedback />
    </>
  );
}

export default App;
