import { useContext, useEffect } from "react";
import Header from "../Components/HeaderDashboard/Header";
import Menu from "../Components/MenuNavigate/Menu";
import { DashBoardContext } from "../Contexts/DashboardContext";
import { CardsList } from "../Components/CardsList/CardsList";

export default function Dashboard () {
    const { getData, eventsData, restaurantsData, hotelsData } = useContext(DashBoardContext)

    useEffect(() => {
        const test = async () => {
            await getData()
            console.log(eventsData)
            console.log(hotelsData)
            console.log(restaurantsData)
        }
        test()
    }, [])

    return (
        <>
            <Header />
            <Menu />
            <CardsList />
        </>
    );
}
