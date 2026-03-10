import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // .jsx veya .tsx yazmana gerek yok, sadece App kalsın
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)