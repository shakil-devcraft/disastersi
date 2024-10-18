import Contianer from "../../share/Contianer";
import { useState } from "react";
import NavbarSecond from "../../share/NavbarSecond";
import { tasksB } from "../../../api";
import { useNavigate } from "react-router-dom";

const TaskB = () => {
    const [selectedTask, setSelectedTask] = useState(null);
    const navigate = useNavigate();

    // Handle task selection
    const handleSelectTask = (id) => {
        setSelectedTask(id);
    };

    // next btn
    const switchNext = () => {
        navigate("/Incidents/TaskC");
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
                    <h2 className="font-bold leading-[30.6px] text-t-primary text-2xl mb-5">
                        Which of these best describes the incident?
                    </h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {tasksB?.map(({ id, title, img }) => (
                            <div
                                key={id}
                                className={`flex justify-start items-center gap-2 py-[22px] px-[20px] rounded-md ${
                                    selectedTask === id
                                        ? "bg-primary border-primary" // Selected background and border color
                                        : "border border-gray-200"
                                }`}
                                onClick={() => handleSelectTask(id)}
                            >
                                <div className="text-4xl">
                                    {/* <i className={icon}></i> */}
                                    <img src={img} alt="" />
                                </div>
                                {/* Conditionally change the text color here */}
                                <h3
                                    className={`text-xs leading-[17.85px] font-normal ${
                                        selectedTask === id ? "text-white" : "text-t-secondary"
                                    }`}
                                >
                                    {title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </Contianer>
        </section>
    );
};

export default TaskB;
