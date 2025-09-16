"use client";

import { useEffect, useState } from "react";

const useObserver = (targetRef: any) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const currentTarget = targetRef.current;
    
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Daha erken tetiklenmesi için threshold'u düşürdük
    };

    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
        // else bloğunu kaldırdık çünkü bir kez görüldükten sonra gizlenmemeli
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef]);

  return show;
};

export default useObserver;
