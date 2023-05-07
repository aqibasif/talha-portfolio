import Home from "./pages/Home";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./App.css";
import { useRef } from "react";

function App() {
  const containerRef = useRef(null);
  // const [scrollEl, setScrollEl] = useState();

  const LocomotiveOptions = {
    smooth: true,
    multiplier: 0.5,
    lerp: 0.03,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  };

  // useEffect(() => {
  //   setScrollEl(containerRef.current);
  // });

  return (
    <LocomotiveScrollProvider
      watch={[]}
      options={LocomotiveOptions}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {/* <ParallaxProvider scrollContainer={scrollEl}> */}
        <Home />
        {/* </ParallaxProvider> */}
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
