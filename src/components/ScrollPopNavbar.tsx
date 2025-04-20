
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Brain, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollPopNavbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 220);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 top-6 z-50 transition-all duration-300 ${
        show ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-90"
      }`}
    >
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-full border border-blue-100 flex items-center gap-1 px-2 py-2">
        <Link to="/">
          <Button variant={location.pathname === "/" ? "default" : "ghost"} size="icon" className="rounded-full text-blue-600 hover:bg-blue-50">
            <Home size={18} />
          </Button>
        </Link>
        <Link to="/brain-scan">
          <Button variant={location.pathname === "/brain-scan" ? "default" : "ghost"} size="icon" className="rounded-full text-blue-600 hover:bg-blue-50">
            <Brain size={18} />
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant={location.pathname === "/contact" ? "default" : "ghost"} size="icon" className="rounded-full text-blue-600 hover:bg-blue-50">
            <Phone size={18} />
          </Button>
        </Link>
        <Link to="/login">
          <Button variant={location.pathname === "/login" ? "default" : "ghost"} size="icon" className="rounded-full text-blue-600 hover:bg-blue-50">
            <User size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ScrollPopNavbar;
