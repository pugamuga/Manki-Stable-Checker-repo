import { EtherComponent } from "./components/EtherComponent";
import Examples from "./components/Examples";
import Footer from "./components/Footer";
import { Header, nav } from "./components/Header";
import Monke from "./components/Monke";
import Random from "./components/Random";
import { Route, Routes } from "react-router-dom";
import Paste from "./components/Paste";

function App() {

  return (
      <div className="  flex flex-col min-h-screen font-mono transition-all bg-gradient-to-t from-slate-400 to-slate-700 relative">
        <Header />
        <div className="z-10 bottom-0 top-0 mb-4 mt-[8%] sm:mt-[2.5%] right-0 left-0 ml-auto mr-auto sm:ml-[5%] p-5 sm:p-10 sm:h-[300px] sm:w-[500px] h-[300px] w-[85%] rounded-lg bg-slate-300 shadow-xl">
          <Routes>
            <Route
              path="/Manki-Stable-Checker-repo/"
              element={<EtherComponent />}
            />
            <Route path="/example" element={<Examples />} />
            <Route path="/random" element={<Random />} />
            <Route path="/paste" element={<Paste />} />
          </Routes>
        </div>
        <div className="mt-auto z-0">
          <Monke />
          <Footer />
        </div>
      </div>
  );
}

export default App
