import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animated = true,
}) => {
  const divRef = useRef(null);
  const animatedDivRef = useRef(null);

  useEffect(() => {
    if (!animated) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animatedDivRef.current?.animate(
          {
            opacity: [0.5, 0.8, 0.5],
          },
          {
            duration: 3000,
            iterations: Infinity,
          }
        );
      }
    });
    observer.observe(divRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <div
      ref={divRef}
      className={cn("relative p-[1px] group", containerClassName)}
    >
      <div
        ref={animatedDivRef}
        className={cn(
          `absolute inset-0 rounded-[32px] z-0 blur-xl
          bg-gradient-to-r from-[#005fa0] via-[#026688] to-[#005fa0]
          opacity-75 group-hover:opacity-100 transition duration-500 will-change-transform`,
          !animated && "opacity-100"
        )}
      />
      <div
        className={cn("relative rounded-[32px] p-0 bg-white overflow-hidden", className)}
      >
        {children}
      </div>
    </div>
  );
};
