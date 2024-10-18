import Contianer from "../../share/Contianer";


const TaskA = () => {
    return (
        <section className="">
            <Contianer>
            <div className="text-center">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="border-2 border-green-500 rounded-lg p-6 text-center">
                    <div className="text-orange-500 mb-4">
                        <i className="bx bx-radiation text-4xl"></i>
                    </div>
                    <h3 className="font-bold text-lg">What type of incident?</h3>
                    <p className="text-sm text-gray-500 mt-2">
                        Choose the category that best describes the incident.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="border-2 border-gray-200 rounded-lg p-6 text-center">
                    <div className="text-orange-500 mb-4">
                        <i className="bx bx-info-circle text-4xl"></i>
                    </div>
                    <h3 className="font-bold text-lg">Tell us about the incident</h3>
                    <p className="text-sm text-gray-500 mt-2">
                        Let’s connect the dots and see where to start.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="border-2 border-gray-200 rounded-lg p-6 text-center">
                    <div className="text-orange-500 mb-4">
                        <i className="bx bx-map text-4xl"></i>
                    </div>
                    <h3 className="font-bold text-lg">Where did the incident occur?</h3>
                    <p className="text-sm text-gray-500 mt-2">
                        Please provide details on the location of the incident.
                    </p>
                </div>
            </div>

            {/* Get Started Button */}
            <div className="text-center mt-8">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
                    Get started
                </button>
            </div>
            </Contianer>
        </section>
    );
};

export default TaskA;
