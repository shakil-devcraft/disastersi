import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../api";
import Contianer from "./Contianer";

const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <section className="bg-b-secondary">
            <div>
                <Contianer>
                    <nav className="flex justify-between items-center">
                        {/* logo */}
                        <div>
                            <img className="w-20 md:w-[131px]" src="/logo.png" alt="" />
                        </div>
                        {/* menu */}
                        <ul className="hidden md:flex justify-between items-center md:gap-4 lg:gap-5">
                            {
                                navLinks?.map(({item, link}, idx) => (
                                    <li key={idx} className="text-t-secondary font-bold text-sm leading-[17.85px]"><NavLink to={link} className="active:text-t-primary">{item}</NavLink></li>
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
                                <div>
                                    <h3 className="text-t-secondary font-semibold leading-[20.4px] text-base">Usman Zafar</h3>
                                    <p className="text-t-secondary font-normal text-[14px] leading-[17.85px]">usmanzafar@gmail.com</p>
                                </div>
                                <div className="block md:hidden">
                                    <i className='bx bx-menu text-[35px]' ></i>
                                </div>
                            </div>
                        </div>
                    </nav>

                </Contianer>
            </div>
            <hr />
        </section>
    );
};

export default Navbar;