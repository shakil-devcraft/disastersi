
import NavbarSecond from "../../share/NavbarSecond";
import News from "../../share/News";

const Home = () => {
    return (
        <section>
            <NavbarSecond page="Dashboard" text="Sort By: Date modified" text2="Cypher AI" />
            <News />
        </section>
    );
};

export default Home;