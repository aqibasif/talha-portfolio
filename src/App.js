import Home from "./pages/Home";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "./locomotiveStyles.css";
import "./App.css";

function App() {
  const containerRef = useRef(null);
  // const parallaxRef = useRef(null);
  // const [scrollEl, setScrollEl] = useState();

  const LocomotiveOptions = {
    smooth: true,
    multiplier: 1.5,
    lerp: 0.03,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  };

  // useEffect(() => {
  //   setScrollEl(parallaxRef.current);
  // });

  return (
    // <div className="my-scroll-container" ref={parallaxRef}>
    //   <ParallaxProvider scrollContainer={scrollEl}>
    <LocomotiveScrollProvider
      watch={[]}
      options={LocomotiveOptions}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Home />
      </main>
    </LocomotiveScrollProvider>
    //   </ParallaxProvider>
    // </div>
  );
}

export default App;
