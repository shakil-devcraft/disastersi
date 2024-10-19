import { NavLink } from "react-router-dom";
import { navLinks } from "../../api";
import Contianer from "./Contianer";
import PropTypes from 'prop-types'; 

const SmallNavbar = ({openMenu}) => {
    console.log(openMenu);

    return (
        <section className={`bg-white fixed w-full h-screen top-0 left-0 mt-[85px] ${!openMenu && "hidden"}`}>
            <Contianer>
                <nav className="">

                    {/* menu */}
                    <ul className="flex-col justify-center items-center space-y-5">
                        {
                            navLinks?.map(({item, link}, idx) => (
                                <li onClick={openMenu} key={idx} className="text-t-secondary font-bold text-base leading-[17.85px]"><NavLink
                                to={link}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active text-t-primary" : "text-t-secondary"
                                }
                                >
                                {item}
                                </NavLink></li>
                            ))
                        }
                    </ul>
                </nav>
            </Contianer>
        </section>
    );
};

SmallNavbar.propTypes = {
    openMenu: PropTypes.any,
};

export default SmallNavbar;