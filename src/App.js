import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"


function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      
    </BrowserRouter>

  );
}

export default App;
