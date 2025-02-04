import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Startpage from './Startpage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Startpage />
  </StrictMode>
)
