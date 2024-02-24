import { Link , useLocation} from "@remix-run/react";
import navLinksData from "./arrayData";
import BarsIcon from './../assets/icons/Bars.svg';
import XmarkIcon from './../assets/icons/Xmark.svg';
import ToggleNav  from './../components/toggleOverlay.tsx'

import { useState } from 'react';

const Navbar = (props) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [icon, setIcon] = useState(BarsIcon);
  
    const handleToggleNav = () => {
      ToggleNav();
      setIsOverlayOpen(!isOverlayOpen);
      setIcon(isOverlayOpen ? BarsIcon : XmarkIcon);
    };
    const location = useLocation();
    return ( <nav className="flex justify-between px-24 py-10 items-center   w-full fixed z-40 md:p-4 ">
       <div className="flex items-start flex-col gap-0 text-neonGreen leading-10 ">
        
<h1 className="text-[48px] font-bold oswald md:text-3xl">
CX
</h1>
<h1 className="text-base aeonik md:text-sm">
CapacityX
</h1>
       </div>
    <div className="flex items-center gap-5 xs:hidden">
{navLinksData.map((data, index) => (
            <div    className={data.className? data.className : ''} key={index}  {...data} data={data}>
            <Link to={data.link}>
                
            <h1 
        className={`${
          location.pathname === data.link || location.pathname === data.otherLink || location.pathname === data.secondLink 
            ? 'text-neonGreen  text-sm  xl:text-xs ' 
            : ' text-sm  xl:text-xs text-white hover:text-neonGreen aeonik'
        }`}
            >
                {data.buttontext}
            </h1>
            </Link>
            </div>
                    ))}
                    </div>
                    <div className="BarsIcon hidden xs:flex items-center">
          <div  onClick={handleToggleNav} className="cursor-pointer">
            <img id="barsIcon" src={icon} alt="icon" className="w-6"  />
          </div>
        </div>
    </nav> );
}
 
export default Navbar;