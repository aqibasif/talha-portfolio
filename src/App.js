import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import locomotiveOptions from "./utils/locomotiveOptions";
import Loader from "./components/Loader/Loader";
import Home from "./pages/Home";
import "./locomotive-scroll.css";

function App() {
  const containerRef = useRef(null);

  const [locoScroll, setLocoScroll] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: containerRef.current,
      ...locomotiveOptions,
    });

    setLocoScroll(locomotiveScroll);

    // setTimeout(() => {
    //   // locomotiveScroll.update();
    //   setLoading(false)
    // }, 1000);

    return () => {
      // locomotiveScroll.destroy();
      // locoScroll?.destroy();
      setLocoScroll(undefined);
      setLoading(false);

    };
  }, []);

  // console.log("SC", locoScroll);

  return (
    // <LocomotiveScrollProvider
    //   watch={[]}
    //   options={locomotiveOptions}
    //   containerRef={containerRef}
    // >
    <>
      {loading ? (
        <Loader />
      ) : (
        <main data-scroll-container ref={containerRef}>
          <Home locoScroll={locoScroll} />
        </main>
      )}
    </>
    // </LocomotiveScrollProvider>
  );
}

export default App;
