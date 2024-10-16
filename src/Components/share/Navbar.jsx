import { NavLink } from "react-router-dom";
import { navLinks } from "../../api";
import Contianer from "./Contianer";



const Navbar = () => {
    return (
        <section className="bg-b-secondary">
            <Contianer>
                <nav className="flex justify-between items-center">
                    {/* logo */}
                    <div>
                        <img className="w-[131px]" src="/logo.png" alt="" />
                    </div>
                    {/* menu */}
                    <ul className="flex justify-between items-center md:gap-4 lg:gap-5">
                        {
                            navLinks?.map(({item, link}, idx) => (
                                <li key={idx} className="text-t-secondary font-bold text-sm leading-[17.85px]"><NavLink to={link} className="active:text-t-primary">{item}</NavLink></li>
                            ))
                        }
                    </ul>
                    {/* user profile */}
                    <div className="flex justify-between items-center gap-2">
                        <div>
                            <img src="/notify.png" alt="notification" />
                        </div>
                        <div className="flex justify-between items-center gap-2">
                            <div>
                                <img src="/user.png" alt="user profile" />
                            </div>
                            <div>
                                <h3 className="text-t-secondary font-semibold leading-[20.4px] text-base">Usman Zafar</h3>
                                <p className="text-t-secondary font-normal text-[14px] leading-[17.85px]">usmanzafar@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </nav>

            </Contianer>
            <hr />
            <Contianer>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-[12px] leading-[15.3px] text-t-secondary">Welcome back</span>
                        <h2 className="font-bold text-t-primary md:text-xl lg:text-[26px]">Dashboard</h2>
                    </div>
                    <div>
                        <div className="bg-white flex justify-between items-center gap-2 py-2 px-4 rounded-lg">
                            <box-icon name='search-alt-2'></box-icon>
                            <input className="outline-none" type="text" />
                        </div>
                        
                    </div>
                </div>
            </Contianer>
        </section>
    );
};

export default Navbar;