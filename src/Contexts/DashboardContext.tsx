/* Contexto para funções e estados da dashboard */
import { createContext, useState } from "react";
import { api } from "../Services/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IChildren {
  children: React.ReactNode;
}

interface IDashboardContext {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFilter: string;
  setSelectedFilter: any;
  hotelsData: IGetHotels[];
  restaurantsData: IGetRestaurants[];
  eventsData: IGetEvents[];
  getData: any;
  setSelectedList: any;
  selectedList: IGetHotels[] | IGetRestaurants[] | IGetEvents[];
  handleOpenHotelModal: (hotel: any) => void;
  handleCloseHotelModal: any
  selectedHotel: null | IGetHotels
  handleOpenRestaurantModal: (restaurant: any) => void
  handleCloseRestaurantModal: any
  selectedRestaurant: null | IGetRestaurants
  handleOpenEventModal: (event: any) => void
  handleCloseEventModal: any
  selectedEvent: null | IGetEvents
  addHoteltoFavList: (hotelId: number) => void
  favoriteHotelList: IGetHotels[]
  addRestauranttoFavList: (restaurantId: number) => void
  favoriteRestaurantsList: IGetRestaurants[]
  addEventtoFavList: (eventId: number) => void
  favoriteEvents: IGetEvents[]
  deleteHotelChoice: () => void
  deleteRestaurantChoice: (restaurantId: number) => void
  deleteEventChoice: (eventId: number) => void
}

interface IGetHotels {
  name: string;
  address: string;
  description: string;
  rooms_types: [];
  price: number;
  img: string;
  id: number;
}

interface IGetRestaurants {
  name: string;
  address: string;
  description: string;
  img: string;
  id: number;
}

interface IGetEvents {
  name: string;
  description: string;
  img: string;
  id: number;
}

export const DashBoardContext = createContext({} as IDashboardContext);

export const DashBoardProvider = ({ children }: IChildren) => {
  const [modal, setModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Feed");
  const [selectedList, setSelectedList] = useState([])
  const [hotelsData, setHotelsData] = useState<IGetHotels[]>([]);
  const [restaurantsData, setRestaurantsData] = useState<IGetRestaurants[]>([]);
  const [eventsData, setEventsData] = useState<IGetEvents[]>([]);

  const [hotelModal, setHotelModal] = useState(false)
  const [selectedHotel, setSelectedHotel] = useState(null)

  const [restaurantModal, setRestaurantModal] = useState(false)
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)

  const [eventModal, setEventModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleOpenEventModal = (event: any) => {
    setEventModal(true)
    setSelectedEvent(event)
  }

  const handleCloseEventModal = () => {
    setEventModal(false)
    setSelectedEvent(null)
  }

  const handleOpenRestaurantModal = (restaurant: any) => {
    setRestaurantModal(true)
    setSelectedRestaurant(restaurant)
  }

  const handleCloseRestaurantModal = () => {
    setRestaurantModal(false)
    setSelectedRestaurant(null)
  }

  const handleOpenHotelModal = (hotel: any) => {
    setHotelModal(true)
    setSelectedHotel(hotel)
  }

  const handleCloseHotelModal = () => {
    setHotelModal(false)
    setSelectedHotel(null)
  }

  const getData = async () => {
    try {
      const responseHotels = await api.get<IGetHotels[]>("/hotels");
      setHotelsData(responseHotels.data)
    } catch (error: any) {
        toast.error(error.response.data)
    }
    try {
      const responseRestaurants = await api.get<IGetRestaurants[]>("/restaurants");
      setRestaurantsData(responseRestaurants.data)
    } catch (error: any) {
        toast.error(error.response.data)
    }
    try {
      const responseEvents = await api.get<IGetEvents[]>("/events");
      setEventsData(responseEvents.data)
    } catch (error: any) {
      toast.error(error.response.data)
    }
  };
  
  const [favoriteHotelList, setFavoriteHotel] = useState<IGetHotels[]>([])
  
  const addHoteltoFavList = (hotelId: number) => {
    const hotelIndex = favoriteHotelList.findIndex((hotel: IGetHotels) => hotel.id === hotelId)
    
    if (hotelIndex === -1 && favoriteHotelList.length === 0) {
      const hotelToAdd: any = hotelsData.find(
        (hotel) => hotel.id === hotelId
        )
        setFavoriteHotel([hotelToAdd])
        toast.success("Hotel favoritado!", {
          autoClose: 1500
      })
    } else {
      toast.error("Só pode existir um hotel favorito", {
        autoClose: 1500
      })
    }
  }
  
  const deleteHotelChoice = () => {
    setFavoriteHotel([])
    toast.success("Hotel excluído com sucesso", {
      autoClose: 1400
    })
  }

  const [favoriteRestaurantsList, setFavoriteRestaurants] = useState<IGetRestaurants[]>([])
  
  const addRestauranttoFavList = (restaurantId: number) => {
    const restaurantIndex = favoriteRestaurantsList.findIndex((restaurant: IGetRestaurants) => restaurant.id === restaurantId)

    if (restaurantIndex === -1) {
      const restaurantToAdd: any = restaurantsData.find(
        (restaurant) => restaurant.id === restaurantId
      )
      setFavoriteRestaurants([...favoriteRestaurantsList, restaurantToAdd])
      toast.success("Restaurante favoritado!", {
        autoClose: 1500,
      })
    } else {
      toast.error("Restaurante já favoritado!", {
        autoClose: 1500
      })
    }
  }

  const deleteRestaurantChoice = (restaurantId: number) => {
    const updatedRestaurantChoices = favoriteRestaurantsList.filter(restaurant => restaurant.id !== restaurantId)
    setFavoriteRestaurants(updatedRestaurantChoices)
    toast.success("Restaurante excluído com sucesso!", {
      autoClose: 1500,
    })
  }

  const [favoriteEvents, setFavoriteEvents] = useState<IGetEvents[]>([])

  const addEventtoFavList = (eventId: number) => {
    const eventIndex = favoriteEvents.findIndex((event: IGetEvents) => event.id === eventId)

    if (eventIndex === -1) {
      const eventtoAdd: any = eventsData.find(
        (event) => event.id === eventId
      )
      setFavoriteEvents([...favoriteEvents, eventtoAdd])
      toast.success("Evento favoritado!", {
        autoClose: 1500
      })
    } else {
      toast.error("Evento já foi favoritado!", {
        autoClose: 1500
      })
    }
  }

  const deleteEventChoice = (eventId: number) => {
    const updatedEventChoices = favoriteEvents.filter(event => event.id !== eventId)
    setFavoriteEvents(updatedEventChoices)
    toast.success("Evento excluído com sucesso!", {
      autoClose: 1500,
    })
  }

  
  return (
    <DashBoardContext.Provider
      value={{ modal,
      setModal,
      selectedFilter,
      setSelectedFilter,
      hotelsData,
      restaurantsData,
      eventsData,
      selectedHotel,
      handleOpenHotelModal,
      handleCloseHotelModal,
      handleCloseRestaurantModal,
      handleOpenRestaurantModal,
      selectedRestaurant,
      getData,
      selectedList,
      setSelectedList,
      selectedEvent,
      handleOpenEventModal,
      handleCloseEventModal,
      addHoteltoFavList,
      favoriteHotelList,
      addRestauranttoFavList,
      favoriteRestaurantsList,
      addEventtoFavList,
      favoriteEvents,
      deleteHotelChoice,
      deleteRestaurantChoice,
      deleteEventChoice,
    }}
    >
      {children}
    </DashBoardContext.Provider>
  );
};
