import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MeuPortfolio from './pages/MeuPortfolio.jsx'
import Descobrir from './pages/Descobrir.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <MeuPortfolio/>
//   },
//   {
//     path:'/descobrir',
//     element: <Descobrir/>
//   }
// ])

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Descobrir/>
      },
      {
        path: "meu-portfolio",
        element: <MeuPortfolio/>
      }
    ]
  },
  // {
  //   path:'/descobrir',
  //   element: <Descobrir/>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
