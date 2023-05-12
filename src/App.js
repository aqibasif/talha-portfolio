import Home from "./pages/Home";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import "./locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const containerRef = useRef(null);

  const [locoScroll, setLocoScroll] = useState();

  const LocomotiveOptions = {
    smooth: true,
    multiplier: 1.75,
    // multiplier: 1.5,
    // touchMultiplier: 3,
    lerp: 0.04,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  };

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: containerRef.current,
      ...LocomotiveOptions,
    });
    // console.log("SC", locomotiveScroll);

    // locoScroll?.on("scroll", (args) => {
    //   console.log("A", args);

    //   // Get all current elements : args.currentElements
    //   // if (typeof args.currentElements["hey"] === "object") {
    //   //   let progress = args.currentElements["hey"].progress;
    //   //   console.log(progress);
    //   //   // ouput log example: 0.34
    //   //   // gsap example : myGsapAnimation.progress(progress);
    //   // }
    // });
    setLocoScroll(locomotiveScroll);
  }, []);

  // console.log("SC", locoScroll);

  return (
    // <LocomotiveScrollProvider
    //   watch={[]}
    //   options={LocomotiveOptions}
    //   containerRef={containerRef}
    // >
    <main data-scroll-container ref={containerRef}>
      <Home locoScroll={locoScroll} />
    </main>
    // </LocomotiveScrollProvider>
  );
}

export default App;
