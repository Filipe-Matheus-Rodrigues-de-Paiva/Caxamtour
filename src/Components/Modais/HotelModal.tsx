import { useContext } from "react"
import { DashBoardContext } from "../../Contexts/DashboardContext"
import { StyledHotelModal } from "./HotelModalStyles"
import { SlHeart } from "react-icons/all"

export default function HotelModal () {
    const { handleCloseHotelModal, selectedHotel, addHoteltoFavList } = useContext(DashBoardContext)
    
    return (
        <StyledHotelModal role="dialog">
            <div className="modal_header">
                <h4>Detalhes</h4>
                <span onClick={handleCloseHotelModal}>X</span>
            </div>
            <div className="modalMainContainer">
                <img src={selectedHotel?.img} alt={selectedHotel?.name} />
                <div>
                    <h1>{selectedHotel?.name}</h1>
                    <p>{selectedHotel?.description}</p>
                    <p>{selectedHotel?.address}</p>
                    <ul>
                        <h4>Tipos de quarto</h4>
                        {selectedHotel?.rooms_types.map(roomType => {
                            return (
                                <li>
                                    {roomType}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="favoriteContainer">
                        <p>Preço médio: {selectedHotel?.price}</p>
                        <SlHeart onClick={() => addHoteltoFavList(Number(selectedHotel?.id))} />
                    </div>
                </div>
            </div>
        </StyledHotelModal>
    )
}