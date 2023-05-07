import { useContext, useEffect } from "react";
import Header from "../Components/HeaderDashboard/Header";
import Menu from "../Components/MenuNavigate/Menu";
import { DashBoardContext } from "../Contexts/DashboardContext";
import { CardsList } from "../Components/CardsList/CardsList";
import { Carousel } from "../Components/Carousel";

export default function Dashboard() {
    const { getData } = useContext(DashBoardContext);

    useEffect(() => {
        const test = async () => {
            await getData();
        };
        test();
    }, []);

    return (
        <div className="App">
            <Header />
            <Menu />
            <CardsList />
        </div>
    );
}
