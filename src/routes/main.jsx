import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import DefaultLayout from "../layouts/defaultLayout";
  import LayoutUser from "../layouts/layoutUser";
  import Hero from "../components/hero";
  import About from "../components/about"
  import LocationsPage from "../components/locationsPage"
  import Contacts from "../components/contacts"
  import singleLocationPage from "../components/singleLocationPage"
import SingleLocationPage from "../components/singleLocationPage";

  export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<DefaultLayout />}>
            <Route path="/" >
                <Route path="/locations" element={<LocationsPage />}/>
                <Route path="/locations/:id" element={<SingleLocationPage />}/>
                <Route path="/about" element={<LayoutUser><About /></LayoutUser>}/>
                <Route path="/contacts" element={<Contacts /> }/>
            </Route>
        </Route>
    )
  );