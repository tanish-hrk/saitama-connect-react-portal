
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
      setShow(window.scrollY > 220);
      lastY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 top-6 z-[40] transition-all duration-300 ${
        show ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-90"
      } animate-slide-down`}
    >
      <div className="bg-white/80 border border-fuchsia-200 backdrop-blur-xl shadow-2xl rounded-xl flex items-center gap-3 px-6 py-3 ring-2 ring-blue-100">
        <Link to="/">
          <Button variant={location.pathname === "/" ? "default" : "outline"} size="icon" className="hover:bg-blue-100 transition">
            <Home size={19} />
          </Button>
        </Link>
        <Link to="/about">
          <Button variant={location.pathname === "/about" ? "default" : "outline"} size="icon" className="hover:bg-fuchsia-100 transition">
            <Settings size={19} />
          </Button>
        </Link>
        <Link to="/login">
          <Button variant={location.pathname === "/login" ? "default" : "outline"} size="icon" className="hover:bg-pink-100 transition">
            <User size={19} />
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default ScrollPopNavbar;
