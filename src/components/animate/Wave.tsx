import { CSSProperties, useEffect, useRef } from "react";
import gsap from "gsap";
const waveWrapperStyle: CSSProperties = {
  backgroundColor: "#727272",
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: "0px",
  left: "0px",
  zIndex: -1,
};
const waveItemInitStyle: CSSProperties = {
  position: "fixed",
  bottom: "0px",
  left: "0px",
  //   border: "1px solid black",
  boxShadow: "0px 0px 30px #242424",
};

const waveEase: gsap.EaseString = "circ.out";
const duration: gsap.TweenVars["duration"] = 4;

const Wave = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const waveItemRef = useRef<HTMLDivElement>(null);
  const waveItem2Ref = useRef<HTMLDivElement>(null);
  const waveItem3Ref = useRef<HTMLDivElement>(null);
  const waveItem4Ref = useRef<HTMLDivElement>(null);
  const animate = () => {
    const height = window.innerHeight;
    gsap.fromTo(
      waveItemRef.current,
      {
        width: `100%`,
        left: `-100%`,
        height: height,
        top: `-${height}`,
        borderRadius: "100%",
        opacity: 1,
      },
      {
        width: `200%`,
        height: `${height * 2}px`,
        borderRadius: "100%",
        duration,
        ease: waveEase,
        left: `-100%`,
        bottom: `-${height}px`,
        opacity: 0,
        repeat: -1,
        repeatDelay: 0,
      }
    );

    gsap.fromTo(
      waveItem2Ref.current,
      {
        width: `100%`,
        height: height,
        left: `-100%`,
        bottom: `-${height}`,
        borderRadius: 0,
      },
      {
        width: `200%`,
        height: `${height * 2}px`,
        borderRadius: "100%",
        ease: waveEase,
        duration,
        left: `-100%`,
        bottom: `-${height * 1}px`,
        repeat: -1,
        opacity: 0,
        repeatDelay: 0,
      }
    );
    gsap.fromTo(
      waveItem3Ref.current,
      {
        width: `100%`,
        height: height,
        borderRadius: 0,
        left: "100%",
        bottom: `-${height}`,
      },
      {
        width: `200%`,
        height: `${height * 2}px`,
        borderRadius: "100%",
        ease: waveEase,
        duration,
        left: "0",
        bottom: `-${height}px`,
        repeat: -1,
        opacity: 0,
        repeatDelay: 0,
      }
    );
    gsap.fromTo(
      waveItem4Ref.current,
      {
        width: "100%",
        height: height,
        borderRadius: 0,
        left: "100%",
        top: `-${height}`,
      },
      {
        width: `200%`,
        height: `${height * 2}px`,
        borderRadius: "100%",
        ease: waveEase,
        duration,
        left: "0",
        top: `-${height}px`,
        repeat: -1,
        opacity: 0,
        repeatDelay: 0,
      }
    );
  };
  useEffect(() => {
    animate();
  }, []);
  return (
    <div style={waveWrapperStyle} ref={wrapperRef}>
      <div style={waveItemInitStyle} ref={waveItemRef} />
      <div style={waveItemInitStyle} ref={waveItem2Ref} />
      <div style={waveItemInitStyle} ref={waveItem3Ref} />
      <div style={waveItemInitStyle} ref={waveItem4Ref} />
    </div>
  );
};
export default Wave;
