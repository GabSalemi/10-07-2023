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
  import SingleLocationPage from "../components/singleLocationPage";
  import Login from "../components/login";
  import Dashboard from "./dashboard";
  import "../App.scss"

  export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<DefaultLayout />}>
            <Route path="/" element={<Hero />}>
                <Route path="/locations" element={<LocationsPage />}/>
                <Route path="/locations/:id" element={<LayoutUser><SingleLocationPage /></LayoutUser>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contacts" element={<LayoutUser><Contacts /></LayoutUser>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
            </Route>
        </Route>
    )
  );