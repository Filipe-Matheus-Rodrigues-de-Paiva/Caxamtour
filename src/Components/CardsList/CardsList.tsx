import { useContext } from "react";
import { DashBoardContext } from "../../Contexts/DashboardContext";
import { CardsListStyled } from "./StyledCardsList";
import { Carousel } from "../Carousel";

export const CardsList = () => {
    const {
        selectedFilter,
        eventsData,
        restaurantsData,
        hotelsData,
        setSelectedList,
        selectedList,
    } = useContext(DashBoardContext);
    if (selectedFilter === "Hotéis") {
        setSelectedList(hotelsData);
    } else if (selectedFilter === "Restaurantes") {
        setSelectedList(restaurantsData);
    } else if (selectedFilter === "Eventos") {
        setSelectedList(eventsData);
    }

    return (
        <>
            {selectedFilter === "Feed" ? (
                <Carousel />
            ) : (
                <CardsListStyled>
                    <ul>
                        {selectedList.map((item) => (
                            <li>
                                <p>{item.name}</p>
                                <img src={item.img} alt={item.name} />
                                <button>Saiba mais</button>
                            </li>
                        ))}
                    </ul>
                </CardsListStyled>
            )}
        </>
    );
};
