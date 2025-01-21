import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationData: any; // JSON animation data
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  width = "300px",
  height = "300px",
  loop = true,
  autoplay = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let lottieInstance: AnimationItem | null = null;

  useEffect(() => {
    if (containerRef.current) {
      lottieInstance = lottie.loadAnimation({
        container: containerRef.current, // The container to render the animation
        renderer: "svg", // Render as SVG
        loop: loop,
        autoplay: autoplay,
        animationData: animationData, // Animation JSON data
      });
    }

    // Cleanup on component unmount
    return () => {
      if (lottieInstance) {
        lottieInstance.destroy();
      }
    };
  }, [animationData, loop, autoplay]);

  return <div ref={containerRef} style={{ width, height }} />;
};

export default LottieAnimation;
