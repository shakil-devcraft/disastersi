import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
import Contianer from "./Contianer";
import PropTypes from 'prop-types'; //

const NavbarSecond = ({ page="back", text, icon, onClick, className }) => {

    console.log(page, text, icon, onClick, className);

    return (
        <section className="bg-b-secondary">
            <Contianer>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-[12px] leading-[15.3px] text-t-secondary">Welcome {page}</span>
                        <h2 className="font-bold text-t-primary md:text-xl lg:text-[26px]">Dashboard</h2>
                    </div>
                    <div className="justify-between items-center gap-3">
                        <div className="bg-white flex justify-between items-center gap-2 py-2 px-4 rounded-lg">
                            <i className='bx bx-search-alt-2'></i>
                            <input className="outline-none text-[12px] font-bold" type="text" placeholder="Search incident" />
                        </div>
                        <Button text={text} icon={icon} onClick={onClick} className={className} />
                        <ButtonSecondary  text={text} icon={icon} onClick={onClick} className={className} />
                        {/* <ButtonSecondary btnText={location?.pathname === "/Incidents" ? "New Incident" : "Cypher AI"} /> */}
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
};

export default NavbarSecond;