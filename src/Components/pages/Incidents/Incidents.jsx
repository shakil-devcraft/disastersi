
import { useNavigate } from "react-router-dom";
import NavbarSecond from "../../share/NavbarSecond";
import News from "../../share/News";

const Incidents = () => {
    const navigate = useNavigate();

    // new incidents add btn
    const newIncidentsAdd = () => {
        navigate("/Incidents/TaskA");
    };

    return (
        <section>
            <NavbarSecond page="Incidents" text="Sort By: Date modified" text2="New Incident" icon2="bx bx-plus-medical" onClick2={newIncidentsAdd} />
            <News />
        </section>
    );
};

export default Incidents;