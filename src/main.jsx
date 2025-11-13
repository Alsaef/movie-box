import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import SearchMovies from './Components/SearchMovies.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </StrictMode>,
)
