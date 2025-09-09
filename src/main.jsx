import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './Router/Router'
import { ColorProvider } from './Color/ColorProvider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorProvider>
      <RouterProvider router={router} />
    </ColorProvider>
  </StrictMode>,
)