import HomeLayout from "../../components/layout/HomeLayout";
import {createBrowserRouter} from "react-router-dom"
import LandingPage from "../../pages/Landing";

const Main=createBrowserRouter([
    {
      path:"/",
      element:<HomeLayout/>,
      children:[
        {
            index:true,
            element:<LandingPage/>
        }
      ]
    }
])
export default Main