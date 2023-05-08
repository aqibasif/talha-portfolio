import Home from "./pages/Home";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "./locomotiveStyles.css";

function App() {
  const containerRef = useRef(null);

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

  return (
    <LocomotiveScrollProvider
      watch={[]}
      options={LocomotiveOptions}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Home />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
