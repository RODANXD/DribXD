import { useState } from 'react'
import Signup from './component/Signup'
import CreatePf from './component/CreatePf'
import Otherpage from './component/Otherpage'
import VerificationPage from './component/VerificationPage'
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/createpf" element={<CreatePf />} />
      <Route path="/createpf2" element={<Otherpage />} />
      <Route path="/emailverify" element={<VerificationPage />} />
    </Routes>
    </>
  )
}

export default App
