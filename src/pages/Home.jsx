import React, { useEffect, useState } from "react";
// import { ParallaxBanner } from "react-scroll-parallax";

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("OFF", offsetY);

  return (
    <div className='App' data-scroll-section data-scroll>
      <div className='hero'>
        <span className='circle' />
        <h1
        // data-scroll
        // data-scroll-speed='1'
        >
          I'm Talha Asif
        </h1>
        <p
        // data-scroll
        // data-scroll-speed='2'
        >
          I'm Talha Asif I'm Talha Asif I'm Talha Asif I'm Talha Asif I'm Talha
          Asif I'm Talha Asif I'm Talha Asif I'm Talha Asif I'm Talha Asif I'm
          Talha Asif I'm Talha Asif I'm Talha Asif I'm Talha Asif I'm Talha Asif
          I'm Talha Asif I'm Talha Asif I'm Talha Asif I'm Talha Asif
        </p>

        {/* <ParallaxBanner
          layers={[
            {
              image:
                "https://images.unsplash.com/photo-1530162690600-8e5e742151e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
              speed: -20,
            },
          ]}
          style={{ aspectRatio: "2 / 1", height: 400 }}
        /> */}
        <div
          style={{
            overflow: "hidden",
            height: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            width: "100%",
          }}
        >
          <img
            src={
              "https://images.unsplash.com/photo-1530162690600-8e5e742151e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80"
            }
            // height={600}
            alt=''
            data-scroll
            data-scroll-speed='1'
            style={{ position: "absolute", zIndex: "0" }}
          />
          <h1 data-scroll data-scroll-speed='-0.6' style={{color: 'white'}}>
            Hi there
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
