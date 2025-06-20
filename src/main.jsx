import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "@mdi/font/css/materialdesignicons.css";
import App from './components/app/app';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
