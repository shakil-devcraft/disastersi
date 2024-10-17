import { useLocation } from "react-router-dom";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
import Contianer from "./Contianer";
import PropTypes from 'prop-types'; //

const NavbarSecond = ({ page="back", text, icon, onClick, className, text2, icon2, onClick2, className2 }) => {

    console.log(page, text, icon, onClick, className, text2, icon2, onClick2, className2);
    const location = useLocation();
    console.log(location?.pathname);

    return (
        <section className="bg-b-secondary">
            <Contianer>
                <div className="flex justify-between items-center ">
                    <div>
                        <span className="text-[12px] leading-[15.3px] text-t-secondary">{`Welcome ${location?.pathname !== "/" ? `- ${page}` : "back"}`}</span>
                        <h2 className="font-bold text-t-primary md:text-xl lg:text-[26px]">{page}</h2>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <div className="bg-white flex justify-between items-center gap-2 py-2.5 px-4 rounded-lg">
                            <i className='bx bx-search-alt-2 text-xl'></i>
                            <input className="outline-none text-[12px] font-bold" type="text" placeholder="Search incident" />
                        </div>
                        <Button text={text} />
                        <ButtonSecondary text2={text2} icon2={icon2} />
                    </div>
                </div>
            </Contianer>
        </section>
    );
};

NavbarSecond.propTypes = {
    page: PropTypes.string,    
    text: PropTypes.string,    
    icon: PropTypes.string, 
    onClick: PropTypes.func,
    className: PropTypes.string,
    text2: PropTypes.string,    
    icon2: PropTypes.string, 
    onClick2: PropTypes.func,
    className2: PropTypes.string,
};

export default NavbarSecond;