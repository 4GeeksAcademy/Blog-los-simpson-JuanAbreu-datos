import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Favorites } from "./pages/Favorites";
import { CharacterDetail } from "./pages/CharacterDetail";
import { Locations } from "./pages/Locations";
import { LocationDetail } from "./pages/LocationDetail";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path="/" element={<Home />} />
        <Route path="/single/:theId" element={<Single />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/character/:theId" element={<CharacterDetail />} />
        <Route path="/locations" element={<Locations />} /> 
        <Route path="/location/:theId" element={<LocationDetail />} />
      </Route>
    )
);