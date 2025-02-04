import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './Book'

function App() {
  const data = { isbn: "1234", title: "Harry Potter", author: "J.K. Rowling", price: "290" }

  return (
    <div>
      <Book data={data} />
    </div>
  )
}

export default App
