import { useContext } from "react"
import { DashBoardContext } from "../../Contexts/DashboardContext"
import { StyledHotelModal } from "./HotelModalStyles"
import { SlHeart } from "react-icons/all"

export default function EventModal () {
    const { handleCloseEventModal, selectedEvent, addEventtoFavList } = useContext(DashBoardContext)
    
    return (
        <StyledHotelModal role="dialog">
            <div className="modal_header">
                <h4>Detalhes</h4>
                <span onClick={handleCloseEventModal}>X</span>
            </div>
            <div className="modalMainContainer">
                <img src={selectedEvent?.img} alt={selectedEvent?.name} />
                <div>
                    <h1>{selectedEvent?.name}</h1>
                    <p>{selectedEvent?.description}</p>
                    <div className="favoriteContainer">
                        <h4>Favoritar</h4>
                        <SlHeart onClick={() => addEventtoFavList(Number(selectedEvent?.id))}/>
                    </div>
                </div>
            </div>
        </StyledHotelModal>
    )
}