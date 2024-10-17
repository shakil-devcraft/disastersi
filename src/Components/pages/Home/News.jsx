
import { newsItem } from "../../../api";
import Card from "../../share/Card";
import Contianer from "../../share/Contianer";

const News = () => {
    return (
        <section className="pt-5">
            <Contianer>
                <div className="pb-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[25px]">
                    {
                        newsItem.length > 0 ? newsItem?.map((item, idx) => <Card item={item} key={idx}/>) : (
                            <p>No, new available now</p>
                        )
                    }
                </div>
            </Contianer>
        </section>
    );
};

export default News;