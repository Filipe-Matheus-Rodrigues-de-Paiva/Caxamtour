import { useContext } from "react";
import { StyledModal } from "./FavModalStyle";
import { DashBoardContext } from "../../Contexts/DashboardContext";

export default function FavModal () {
    const { setModal, favoriteHotelList, favoriteRestaurantsList, favoriteEvents, deleteHotelChoice, deleteRestaurantChoice, deleteEventChoice } = useContext(DashBoardContext)

    return (
        <StyledModal role="dialog">
            {favoriteHotelList.length > 0 || favoriteRestaurantsList.length > 0 || favoriteEvents.length > 0 ? (
                <>    
                    <div className="header">
                        <span onClick={() => setModal(false)}>X</span>
                        <h1>Favoritos</h1>
                    </div>
                    <div className="preferences">
                        <div className="hotel">
                            <h1>Hotel escolhido</h1>
                            <ul>
                                {favoriteHotelList?.map((hotel) => 
                                    <li>
                                        <h1>{hotel.name}</h1>
                                        <img src={hotel.img} alt={hotel.name} />
                                        <button onClick={() => deleteHotelChoice()}>Excluir</button>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="restaurants">
                            <h1>Restaurantes escolhidos</h1>
                            <ul>
                                {favoriteRestaurantsList?.map((restaurant) => 
                                    <li>
                                        <h1>{restaurant.name}</h1>
                                        <img src={restaurant.img} alt={restaurant.name}/>
                                        <button onClick={() => deleteRestaurantChoice(restaurant.id)}>Excluir</button>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="events">
                            <h1>Eventos de interesse</h1>
                            <ul>
                                {favoriteEvents?.map((event) => 
                                    <li>
                                        <h1>{event.name}</h1>
                                        <img src={event.img} alt={event.name}/>
                                        <button onClick={() => deleteEventChoice(event.id)}>Excluir</button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <span className="emptyModalCloseButton" onClick={() => setModal(false)}>X</span>
                    <div className="emptyModal">
                        <h1>Adicione preferências</h1>
                    </div>
                </>
            )}
        </StyledModal>
    )
}