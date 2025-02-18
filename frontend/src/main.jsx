import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ui/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Toaster } from "@/components/ui/toaster"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider defaultTheme="system">
    <App />
    <Toaster />
    </ThemeProvider>
    </Provider>
  </StrictMode>
)
