
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

// Floating mini-menu nav that appears after scrolling down
const ScrollPopNavbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      // Show pop when scrolling down 220px or more
      setShow(window.scrollY > 220);
      lastY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 top-5 z-[40] transition-all duration-300 ${
        show ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-90"
      }`}
    >
      <div className="bg-white/90 border border-fuchsia-100 backdrop-blur-shadow shadow-2xl rounded-xl flex items-center gap-3 px-5 py-2 animate-slide-down">
        <Link to="/">
          <Button variant={location.pathname === "/" ? "default" : "outline"} size="icon" className="hover:bg-blue-100 transition">
            <Home size={17} />
          </Button>
        </Link>
        <Link to="/about">
          <Button variant={location.pathname === "/about" ? "default" : "outline"} size="icon" className="hover:bg-fuchsia-100">
            <Settings size={17} />
          </Button>
        </Link>
        <Link to="/login">
          <Button variant={location.pathname === "/login" ? "default" : "outline"} size="icon" className="hover:bg-pink-100">
            <User size={17} />
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default ScrollPopNavbar;
