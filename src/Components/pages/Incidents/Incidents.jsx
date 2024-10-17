
import { newsItem } from "../../../api";
import Button from "../../share/Button";
import ButtonSecondary from "../../share/ButtonSecondary";
import Card from "../../share/Card";
import Contianer from "../../share/Contianer";

const Incidents = () => {

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
                        <Button btnText={"Sort By: Date modified"} />
                        <ButtonSecondary btnText={"+ New Incident"} />
                        {/* <ButtonSecondary btnText={location?.pathname === "/Incidents" ? "New Incident" : "Cypher AI"} /> */}
                    </div>
                </div>
            </Contianer>
            <Contianer >
                <div className="pb-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[25px]">
                    {/* Incidents page data */}
                    {
                        newsItem && newsItem.length > 0 ? newsItem?.map((item, idx) => <Card item={item} key={idx}/>) : (
                            <p>No, new available now</p>
                        )
                    }
                </div>
            </Contianer>
        </section>
    );
};

export default Incidents;