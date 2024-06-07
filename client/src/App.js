import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import Tada from "react-reveal/Tada";
import { useTheme } from "./context/ThemeContext";
// import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/MobileNav/MobileNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();
  return (
    <div id={theme}>
      <ToastContainer />
      <MobileNav />
      <Layout />
      <div className="container">
        <About />
        <Projects />
        <Education />
        <Techstack />
        <Contact />
      </div>
      <div className="dude-3">
        <Tada>
          <h4 className="text-center">CYBERCRAFT c2 @Ghosttech31:2024</h4>
        </Tada>
      </div>
      {/* <ScrollToTop smooth style={{ borderRadius: "80px" }} /> */}
    </div>
  );
}

export default App;
