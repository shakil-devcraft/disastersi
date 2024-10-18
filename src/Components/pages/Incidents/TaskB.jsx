import Contianer from "../../share/Contianer";
import { useState } from "react";
import NavbarSecond from "../../share/NavbarSecond";

const TaskB = () => {
    const [selectedTask, setSelectedTask] = useState(null);

    // Define the tasks
    const tasks = [
        { id: 1, title: "Avalanche", icon: "🏔️" },
        { id: 2, title: "Biological", icon: "🦠" },
        { id: 3, title: "Blizzard", icon: "❄️" },
        { id: 4, title: "Cold/Freezing", icon: "🌬️" },
        { id: 5, title: "Drought", icon: "🌵" },
        { id: 6, title: "Earthquake", icon: "🌍" },
        { id: 7, title: "Flooding", icon: "🌊" },
        { id: 8, title: "Heat Wave", icon: "🌞" },
        { id: 9, title: "Man Made", icon: "✋" },
        { id: 10, title: "Mudslide", icon: "🏞️" },
        { id: 11, title: "Severe Storm", icon: "🌪️" },
        { id: 12, title: "Strong Wind", icon: "💨" },
        { id: 13, title: "Tornado", icon: "🌪️" },
        { id: 14, title: "Tsunami", icon: "🌊" },
        { id: 15, title: "Volcanic Eruption", icon: "🌋" },
        { id: 16, title: "Wildfire", icon: "🔥" }
    ];

    // Handle task selection
    const handleSelectTask = (id) => {
        setSelectedTask(id);
    };

    return (
        <section>
            <NavbarSecond page="New Incidents" text={"Back"} text2={"Next"} />
            <Contianer>
                <div className="container mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-6">Which of these best describes the incident?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className={`border-2 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer ${
                                    selectedTask === task.id
                                        ? "border-orange-500 bg-orange-100"
                                        : "border-gray-200 bg-white"
                                }`}
                                onClick={() => handleSelectTask(task.id)}
                            >
                                <div className="text-4xl mb-2">{task.icon}</div>
                                <h3 className="text-lg font-semibold">{task.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </Contianer>
        </section>
    );
};

export default TaskB;
