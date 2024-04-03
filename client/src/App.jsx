import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import SingIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";


const App = ()=>{

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/sign-in" element={<SingIn />}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;