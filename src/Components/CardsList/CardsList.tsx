import { useContext } from "react";
import { DashBoardContext } from "../../Contexts/DashboardContext";
import { CardsListStyled } from "./StyledCardsList";
import HotelModal from "../Modais/HotelModal";
import RestaurantModal from "../Modais/RestaurantModal";
import EventModal from "../Modais/EventModal";
import { Carousel } from "../Carousel"

export const CardsList = () => {
  const { selectedFilter, eventsData, restaurantsData, hotelsData, setSelectedList, selectedList, selectedHotel, selectedEvent, handleOpenHotelModal, handleOpenEventModal ,handleOpenRestaurantModal ,selectedRestaurant } = useContext(DashBoardContext);
  if (selectedFilter === "Hotéis") {
    setSelectedList(hotelsData)
  } else if (selectedFilter === "Restaurantes") {
    setSelectedList(restaurantsData)
  } else if (selectedFilter === "Eventos") {
    setSelectedList(eventsData)
  }

  const whichFilter = (item: any) => {
    if (selectedFilter === "Hotéis") {
      handleOpenHotelModal(item)
    } else if (selectedFilter === "Restaurantes") {
      handleOpenRestaurantModal(item)
    } else if (selectedFilter === "Eventos") {
      handleOpenEventModal(item)
    }
  }

  return (
    <>
      {selectedFilter === "Feed" ? (
        <Carousel />
      ) : (
      <CardsListStyled>
        <ul>
          {selectedHotel && selectedFilter === "Hotéis" ? (
            <HotelModal />
            ) : null}
          {selectedRestaurant && selectedFilter === "Restaurantes" ? (
            <RestaurantModal />
            ) : null}
          {selectedEvent && selectedFilter === "Eventos" ? (
            <EventModal />
            ) : null}
            {selectedList.map((item) => (
              <li key={item.id}>
                    <p>{item.name}</p>
                    <img src={item.img} alt={item.name} />
                    <button onClick={() => whichFilter(item)}>Saiba mais</button>
                </li>
            ))}
        </ul>
      </CardsListStyled>
      )}
    </>
  );
};
