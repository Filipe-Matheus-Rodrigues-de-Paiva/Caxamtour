import RoutesMain from "./Routes/Routes";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function App () {

  return (
    <>
      <ToastContainer />
      <RoutesMain />
    </>
  )
}