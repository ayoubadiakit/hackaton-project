import React, { useEffect, useRef } from "react";

export default function Loading() {
  const spinnerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (spinnerRef.current) {
        (spinnerRef.current as HTMLElement).classList.remove("show");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    // <!-- Spinner Start -->
    <div
      id="spinner"
      ref={spinnerRef}
      className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
    >
      <div className="spinner-grow text-primary" role="status"></div>
    </div>
    // <!-- Spinner End -->
  );
}
