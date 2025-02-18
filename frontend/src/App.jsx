
import './App.css'
// import ProductCard from "./components/ui/ProdCard"
// import {CardWithForm }from "./components/ui/CardDemo"
// import { ThemeToggle } from './components/ui/ThemeToggle'
// import ProductCreateForm from './components/ui/CreateCard'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route,Outlet } from "react-router-dom";
import Create from './pages/Create';
import Home from './pages/Home';
import Navbar from './components/ui/navbar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
    </Route>
  )
);

function Root() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
