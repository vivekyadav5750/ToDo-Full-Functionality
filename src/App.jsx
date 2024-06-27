// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/login'
import Todos from './pages/todos'
import Register from './pages/register'
import Layout from './Layout'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Todos />} />
            <Route path="signIn" element={<Login />} />
            <Route path="signUp" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
