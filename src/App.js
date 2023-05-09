import Home from "./pages/Home";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "./locomotive-scroll.css";

function App() {
  const containerRef = useRef(null);

  const LocomotiveOptions = {
    smooth: true,
    multiplier: 1.5,
    // touchMultiplier: 3,
    lerp: 0.04,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  };

  // useEffect(() => {
  //   const locoScroll = new LocomotiveScroll({
  //     el: containerRef.current,
  //    ...LocomotiveOptions
  //   });
  //   console.log("SC", locoScroll);

  //   locoScroll?.on("scroll", (args) => {
  //     console.log("A", args);

  //     // Get all current elements : args.currentElements
  //     // if (typeof args.currentElements["hey"] === "object") {
  //     //   let progress = args.currentElements["hey"].progress;
  //     //   console.log(progress);
  //     //   // ouput log example: 0.34
  //     //   // gsap example : myGsapAnimation.progress(progress);
  //     // }
  //   });
  // });

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
