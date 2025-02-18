import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun, Plus } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isDarkIcon, setIsDarkIcon] = useState(false);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const ThemeHandler = ()=>{
    setIsDarkIcon(!isDarkIcon)
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link to="/" className="mr-auto">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Product Store
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full relative h-10 w-10"
            onClick={ThemeHandler}
          >
            <div className="relative h-5 w-5">
              <Sun className={`absolute transition-all duration-200 ${
                isDarkIcon ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`} />
              <Moon className={`absolute transition-all duration-200 ${
                isDarkIcon ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              }`} />
            </div>
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button onClick = {()=> navigate("/create")}>
            <Plus className="h-4 w-4 mr-2" />
            Create Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;