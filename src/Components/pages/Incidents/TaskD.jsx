import { useNavigate } from "react-router-dom";
import Contianer from "../../share/Contianer";
import NavbarSecond from "../../share/NavbarSecond";

const TaskD = () => {
    const navigate = useNavigate();

    // next btn
    const switchNext = () => {
        navigate("/Incidents/TaskE");
    };
    
    // back btn
    const switchBack = () => {
        navigate(-1);
    };

    return (
        <section>
            <NavbarSecond page="New Incidents" text={"Back"} onClick={switchBack} text2={"Next"} onClick2={switchNext} />
            <Contianer>
                <div className="mx-auto lg:w-[753px] mt-5 mb-20">
                    <h2 className="font-bold leading-[30.6px] text-t-primary text-2xl">
                    Let’s give the incident a title?
                    </h2>
                    <p className="text-sm leading-[26px] text-t-secondary">
                    Make a title that will easily identify the incidents
                    </p>

                    <div className="relative">
                        <img className="mt-5 rounded-md w-full" src="/map.png" alt="" />
                        <div className="absolute top-[10px] left-[10px]">
                            <div className="bg-white flex justify-between items-center gap-2 py-2.5 px-4 rounded-lg w-[240px]">
                                <i className='bx bx-search-alt-2 text-xl'></i>
                                <input className="outline-none text-[12px] font-bold flex-1" type="text" placeholder="Enter incident address or GPS" />
                            </div>
                            <div className="bg-white flex justify-between items-center gap-2 py-2.5 px-4 rounded-lg mt-2 md:mt-[5px] w-[240px]">
                                <i className='bx bx-search-alt-2 text-xl'></i>
                                <input className="outline-none text-[12px] font-bold flex-1" type="text" placeholder="Pinpoint damage" />
                            </div>
                        </div>
                    </div>
                </div>
            </Contianer>
        </section>
    );
};

export default TaskD;