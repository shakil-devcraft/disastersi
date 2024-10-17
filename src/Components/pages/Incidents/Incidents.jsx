
// import Button from "../../share/Button";
// import ButtonSecondary from "../../share/ButtonSecondary";
// import Contianer from "../../share/Contianer";
import NavbarSecond from "../../share/NavbarSecond";
import News from "../../share/News";

const Incidents = () => {

    return (
        <section>
            {/* <div className="hidden md:block bg-b-secondary mb-5 md:px-4 lg:px-0">
                <Contianer>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-[12px] leading-[15.3px] text-t-secondary">Welcome back</span>
                        <h2 className="font-bold text-t-primary md:text-xl lg:text-[26px]">Dashboard</h2>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <div className="bg-white flex justify-between items-center gap-2 py-2.5 px-4 rounded-lg">
                            <i className='bx bx-search-alt-2 text-xl'></i>
                            <input className="outline-none text-[12px] font-bold" type="text" placeholder="Search incident" />
                        </div>
                        <Button text={"Sort By: Date modified"} className="bg-primary" />
                        <ButtonSecondary text={"New Incident"} icon={"bx bx-plus-medical"} /> 
                    </div>
                </div>  
            </Contianer>
            </div> */}
            <NavbarSecond page="Incidents" text="Sort By: Date modified" text2="New Incident" icon2="bx bx-plus-medical" />
            <News />
        </section>
    );
};

export default Incidents;