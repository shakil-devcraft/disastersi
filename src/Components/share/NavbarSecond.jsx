import { useLocation } from "react-router-dom";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
import Contianer from "./Contianer";
import PropTypes from 'prop-types'; //

const NavbarSecond = ({ page="back", pageImg, text, icon, onClick, className, text2, icon2, onClick2, className2 }) => {

    console.log(page, text, icon, onClick, className, text2, icon2, onClick2, className2);
    const location = useLocation();
    console.log(location?.pathname);

    return (
        <section className="bg-b-secondary">
            <Contianer>
                <div className="md:flex justify-between items-center">
                    <div>
                        <span className="text-[12px] leading-[15.3px] text-t-secondary">{`Welcome ${location?.pathname !== "/" ? `- ${page}` : "back"}`}</span>
                        <h2 className=" flex gap-3 items-center font-bold text-t-primary md:text-lg lg:text-xl lg:text-[26px] mt-2">{pageImg ? <img src={pageImg} alt="" /> : ""} {page}</h2>
                    </div>
                    <div className="md:flex justify-between items-center md:gap-3 mt-5 md:mt-0">
                        <div className="bg-white flex justify-between items-center gap-2 py-2.5 px-4 rounded-lg mb-5 md:mb-0">
                            <i className='bx bx-search-alt-2 text-xl'></i>
                            <input className="outline-none text-[12px] font-bold flex-1" type="text" placeholder="Search incident" />
                        </div>
                        <div className="flex justify-between md:justify-center gap-5 md:gap-3">
                            <Button text={text} icon={icon} onClick={onClick} />
                            <ButtonSecondary text2={text2} icon2={icon2} onClick2={onClick2} />
                        </div>
                    </div>
                </div>
            </Contianer>
        </section>
    );
};

NavbarSecond.propTypes = {
    page: PropTypes.string, 
    pageImg: PropTypes.string, 
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