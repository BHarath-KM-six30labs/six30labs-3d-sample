import { Routes, Route } from "react-router-dom";
import { Home  } from "./pages";
import { Footer , Header } from "./components";


function App() {
  return (
    <>
      <Header />
      {/* <ScrollRestoration /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about-us" element={<About />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
