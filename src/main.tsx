import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Startpage from './startpage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Startpage />
  </StrictMode>
)
