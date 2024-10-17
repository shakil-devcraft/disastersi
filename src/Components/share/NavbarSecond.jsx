import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
import Contianer from "./Contianer";
import PropTypes from 'prop-types'; // 

const NavbarSecond = ({btnTextOne, btnTextTwo}) => {
    return (
        <section className="bg-b-secondary">
            <Contianer>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-[12px] leading-[15.3px] text-t-secondary">Welcome back</span>
                        <h2 className="font-bold text-t-primary md:text-xl lg:text-[26px]">Dashboard</h2>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <div className="bg-white flex justify-between items-center gap-2 py-2 px-4 rounded-lg">
                            <box-icon name='search-alt-2'></box-icon>
                            <input className="outline-none text-[12px] font-bold" type="text" placeholder="Search incident" />
                        </div>
                        <Button btnText={btnTextOne} />
                        <ButtonSecondary btnText={btnTextTwo} />
                        {/* <ButtonSecondary btnText={location?.pathname === "/Incidents" ? "New Incident" : "Cypher AI"} /> */}
                    </div>
                </div>
            </Contianer>
        </section>
    );
};

NavbarSecond.propTypes = {
    btnTextOne: PropTypes.any.isRequired,
    btnTextTwo: PropTypes.any.isRequired,
};

export default NavbarSecond;