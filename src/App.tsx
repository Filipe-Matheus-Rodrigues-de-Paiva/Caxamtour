import RoutesMain from "./Routes/Routes";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyles } from "./Styles/globalStyles";

export default function App () {

  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <RoutesMain />
    </>
  )
}