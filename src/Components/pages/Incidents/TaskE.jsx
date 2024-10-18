import Contianer from "../../share/Contianer";
import NavbarSecond from "../../share/NavbarSecond";

const TaskE = () => {
    return (
        <section>
            <NavbarSecond page="DR-4699 March 2023 Severe Storms" pageImg="/public/incident (17).png" text={"Sort By: Date modified"} icon2={"bx bx-plus-medical"} text2={"New Location"} />
            <Contianer>
                <div className="flex justify-between gap-[94px] mt-2">
                    <div className="lg:w-[680px]">
                        <div>
                            <div className="flex items-center gap-[15px]">
                                <img className="size-[29px]" src="/location-map.png" alt="" />
                                <div>
                                    <p className="text-t-secondary text-sm font-normal leading-[22px]">Location</p>
                                    <h3 className="text-xl text-t-primary font-bold leading-[29px]">Tulare County,  Los Angles, CA 23415</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-[15px] mt-5">
                                <img className="size-[29px]" src="/location-point.png" alt="" />
                                <div>
                                    <p className="text-t-secondary text-sm font-normal leading-[22px]">Approx. Cost:</p>
                                    <h3 className="text-xl text-t-primary font-bold leading-[29px]">$60,607,456.00</h3>
                                </div>
                            </div>
                        </div>
                        {/* divide */}
                        <div className="w-full bg-b-secondary h-[1px] my-10"></div>

                        <div className="space-y-1">
                            <p className="text-t-primary text-sm font-bold leading-[22px]">Description</p>
                            <p className="text-t-secondary text-sm font-normal leading-[22px]">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                        </div>

                        {/* divide */}
                        <div className="w-full bg-b-secondary h-[1px] my-10"></div>

                        <div className="space-y-2">
                            <p className="text-t-primary text-sm font-bold leading-[22px]">Locations</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-[17.5px]">
                                <div className="space-y-2">
                                    <img src="/location.png" alt="" />
                                    <div>
                                        <h4 className="text-t-primary text-sm font-bold leading-[21px]">Whitechapel Rd.</h4>
                                        <p className="text-t-secondary text-xs font-normal leading-[21px]">Tulare County,  Los Angles, CA 23415</p>
                                        <h4 className="text-t-primary text-sm font-bold leading-[21px]">$1,456,654.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Contianer>
        </section>
    );
};

export default TaskE;