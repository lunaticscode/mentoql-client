import React from "react"; //* by-auto-react-import
typeof React; //* by-auto-react-import
import { CSSProperties, useEffect, useRef } from "react";
import gsap from "gsap";

const waveItemStyle: CSSProperties = {
  position: "fixed",
  // bottom: "0px",
  // left: "0px",
  width: "200%",
  height: "200vh",
  borderRadius: "100%",
  background: "#c0c0c0",
  boxShadow: "0px 0px 30px #242424",
  pointerEvents: "none",
  opacity: 0,
  transform: "scale(0.8)",
  willChange: "transform, opacity",
};

const duration = 6;
const waveEase: gsap.EaseString = "sine.inOut";
const getInitPosition = (index: number) => {
  const unit = 1;
  if (index === 0) {
    return {
      left: `${100 * unit * -1}%`,
      top: `${100 * unit * -1}vh`,
    };
  }
  if (index === 1) {
    return {
      left: `${100 * unit * -1}%`,
      bottom: `${100 * unit * -1}vh`,
    };
  }
  if (index === 2) {
    return {
      right: `${100 * unit * -1}%`,
      bottom: `${100 * unit * -1}vh`,
    };
  }
  if (index === 3) {
    return {
      right: `${100 * unit * -1}%`,
      top: `${100 * unit * -1}vh`,
    };
  }
};
const Wave = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const waveRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    waveRefs.current.forEach((ref, index) => {
      if (!ref) return;

      gsap.fromTo(
        ref,
        {
          opacity: 0.2,
          scale: 0.5,
          ...getInitPosition(index),
        },
        {
          opacity: 0.6,
          scale: 1,
          ease: waveEase,
          duration: duration,
          repeat: -1,
          yoyo: true,
        }
      );
    });
  }, []);

  return (
    <div className="background-wave-wrapper" ref={wrapperRef}>
      {[...Array(4)].map((_, idx) => (
        <div
          key={idx}
          style={waveItemStyle}
          // ref={waveRefs.current[idx] as Ref<HTMLDivElement>}
          ref={(el: HTMLDivElement | null) => {
            waveRefs.current[idx] = el;
          }}
        />
      ))}
    </div>
  );
};

export default Wave;
