import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './Router/Router'
import { ColorProvider } from './Color/ColorProvider'
import { AuthProvider } from './Authcontext/Authprovider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <ColorProvider>
      <RouterProvider router={router} />
    </ColorProvider>
    </AuthProvider>
  </StrictMode>,
)