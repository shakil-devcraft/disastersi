import { useNavigate } from "react-router-dom";
import Contianer from "../../share/Contianer";
import NavbarSecond from "../../share/NavbarSecond";

const TaskC = () => {
    const navigate = useNavigate();

    // next btn
    const switchNext = () => {
        navigate("/Incidents/TaskD");
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

                    <input className="text-xs py-3 px-[10px] outline-none bg-b-secondary w-full rounded-md mt-5" type="text" placeholder="Add title here" />
                    
                    <h2 className="font-bold leading-[30.6px] text-t-primary text-2xl mt-5">
                    Describe what happened during the incident?
                    </h2>
                    <p className="text-sm leading-[26px] text-t-secondary">
                    Share some information about the incident. The when, where, how. 
                    </p>

                    <textarea className="text-xs py-3 px-[10px] outline-none bg-b-secondary w-full rounded-md mt-5" placeholder="Type here" rows={5} name="" id=""></textarea>
                </div>
            </Contianer>
        </section>
    );
};

export default TaskC;