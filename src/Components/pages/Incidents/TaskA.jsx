import { useNavigate } from "react-router-dom";
import { tasksA } from "../../../api";
import ButtonSecondary from "../../share/ButtonSecondary";
import Contianer from "../../share/Contianer";


const TaskA = () => {

    const navigate = useNavigate();

    // new incidents add btn
    const newIncidentsAdd = () => {
        navigate("/Incidents/TaskB");
    };

    return (
        <section className="">
            <Contianer>
            <div className="text-center pt-5 md:pt-10">
                <h2 className="text-[32px] font-bold text-t-primary leading-[40.8px]">{`Let's get started`}</h2>
                <p className="text-sm md:text-base leading-[26px] text-t-secondary md:w-[468px] mx-auto mt-5">
                    Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene
                </p>
            </div>

            {/* Progress bar */}
            <div className="flex justify-center items-center my-10">
                <div className="relative flex justify-between items-center w-full max-w-2xl"> {/* Centered with max width */}
                    {/* Step 1 */}
                    <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center">
                    </div>
                    <div className="flex-grow border-t-2 border-gray-300"></div> {/* Line between circles */}
                    
                    {/* Step 2 */}
                    <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center">
                    </div>
                    <div className="flex-grow border-t-2 border-gray-300"></div> {/* Line between circles */}
                    
                    {/* Step 3 */}
                    <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center">
                    </div>
                </div>
            </div>


            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-[815px] mx-auto">
                {
                    tasksA?.map(({img, title, subTitle}, idx) => (
                        <div key={idx} className="border-2 border-b-secondary rounded-[10px] py-[25px] px-[20px] bg-b-secondary">
                            <div className="text-orange-500 mb-4">
                                <img className="size-[54px]" src={img} alt="" />
                            </div>
                            <h3 className="font-bold text-[20px] leading-[29px] mt-10 text-t-primary">{title}</h3>
                            <p className="text-t-secondary text-sm font-normal leading-[22px] mt-3">{subTitle}</p>
                        </div>
                    ))
                }
            </div>

            {/* Get Started Button */}
            <div className="text-center mt-[75px]">
                <ButtonSecondary text2={"Get started"} className2={"hover:bg-black hover:text-white"} onClick2={newIncidentsAdd} />
            </div>
            </Contianer>
        </section>
    );
};

export default TaskA;
