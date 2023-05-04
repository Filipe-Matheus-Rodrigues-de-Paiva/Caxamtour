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

  return (
    <DashBoardContext.Provider
      value={{ modal, setModal, selectedFilter, setSelectedFilter, hotelsData, restaurantsData, eventsData, getData, selectedList, setSelectedList }}
    >
      {children}
    </DashBoardContext.Provider>
  );
};
