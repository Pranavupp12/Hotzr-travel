
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ButtonGhostIcon } from "@/components/ButtonGhostIcon"; // Adjust the path as needed
import { SignupModal } from "@/components/SignUpModal";         // Adjust the path as needed

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isSignupActive = isActive("/signup");

  return (
    <>
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">Hotzr</span>
          </Link>

          {/* Centered desktop nav */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
          </div>

          {/* Right-side controls */}
          <div className="flex items-center space-x-2">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
            {/* Signup icon (desktop only) */}
            <div className="hidden md:block">
              <ButtonGhostIcon isActive={isSignupActive} onClick={() => setShowSignup(true)} />
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              {/* Signup icon in mobile menu */}
              <div className="px-3 py-2">
                <ButtonGhostIcon isActive={isSignupActive} onClick={() => setShowSignup(true)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
     {/* Signup Modal */}
      <SignupModal open={showSignup} onClose={() => setShowSignup(false)} />
       </> 
  );
};

