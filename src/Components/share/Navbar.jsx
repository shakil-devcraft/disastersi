import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../api";
import Contianer from "./Contianer";
import { useState } from "react";
import SmallNavbar from "./SmallNavbar";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    // location
    const location = useLocation();
    console.log(location.pathname);

    // change menu open and close
    const openMenu = () => {
        setMenu(!menu);
    };

    return (
        <section className="bg-b-secondary">
            <div>
                <Contianer>
                    <nav className="flex justify-between items-center">
                        {/* logo */}
                        <NavLink to="/">
                            <div>
                                <img className="w-24 md:w-[110px] lg:w-[131px]" src="/logo.png" alt="" />
                            </div>
                        </NavLink>
                        {/* menu */}
                        <ul className="hidden md:flex justify-between items-center md:gap-3 lg:gap-5">
                            {
                                navLinks?.map(({item, link}, idx) => (
                                    <li key={idx} className="text-t-secondary font-bold text-xs lg:text-sm leading-[17.85px]"><NavLink
                                    to={link}
                                    className={({ isActive, isPending }) =>
                                      isPending ? "pending" : isActive ? "active text-t-primary relative before:w-full before:h-[3px] before:bg-[#09090B] before:absolute before:-bottom-[37px] before:rounded-full" : "text-t-secondary"
                                    }
                                  >
                                    {item}
                                  </NavLink></li>
                                ))
                            }
                        </ul>
                        {/* user profile */}
                        <div className="flex justify-between items-center gap-2">
                            <div className="hidden md:block">
                                <img src="/notify.png" alt="notification" />
                            </div>
                            <div className="flex justify-between items-center gap-3 md:gap-2">
                                <div>
                                    <img src="/user.png" alt="user profile" />
                                </div>
                                <div className="hidden md:block">
                                    <h3 className="text-t-secondary font-semibold leading-[20.4px] md:text-sm lg:text-base">Usman Zafar</h3>
                                    <p className="text-t-secondary font-normal md:text-xs lg:text-[14px] leading-[17.85px]">usmanzafar@gmail.com</p>
                                </div>
                                <div className="block md:hidden">
                                    <button className="flex items-center" onClick={openMenu}>{menu ? <i className='bx bx-x text-[35px]' ></i> : <i className='bx bx-menu text-[35px]' ></i>}</button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {
                        menu ? <SmallNavbar openMenu={openMenu} /> : ""
                    }

                </Contianer>
            </div>
            <hr />
        </section>
    );
};

export default Navbar;