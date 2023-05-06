import { useContext } from "react"
import { DashBoardContext } from "../../Contexts/DashboardContext"
import { StyledHotelModal } from "./HotelModalStyles"
import { SlHeart } from "react-icons/all"

export default function RestaurantModal () {
    const { handleCloseRestaurantModal, selectedRestaurant, addRestauranttoFavList } = useContext(DashBoardContext)
    
    return (
        <StyledHotelModal role="dialog">
            <div className="modal_header">
                <h4>Detalhes</h4>
                <span onClick={handleCloseRestaurantModal}>X</span>
            </div>
            <div className="modalMainContainer">
                <img src={selectedRestaurant?.img} alt={selectedRestaurant?.name} />
                <div>
                    <h1>{selectedRestaurant?.name}</h1>
                    <p>{selectedRestaurant?.description}</p>
                    <p>{selectedRestaurant?.address}</p>
                    <div className="favoriteContainer">
                        <h4>Favoritar</h4>
                        <SlHeart onClick={() => addRestauranttoFavList(Number(selectedRestaurant?.id))} />
                    </div>
                </div>
            </div>
        </StyledHotelModal>
    )
}