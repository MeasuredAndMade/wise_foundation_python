import { useState } from 'react'
import './css/style.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Dashboard from './pages/admin/DashboardLayout'
import DashboardHome from './components/admin/DashboardHome'
import DashboardSection from './components/admin/DashboardSection'
import Login from './pages/Login'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/PortfolioLayout.jsx'
import PortHome from './components/portfolio/PortHome.jsx'
import PortfolioCategory from './components/portfolio/PortfolioCategory.jsx'
import Contact from './pages/Contact.jsx'
import ProjectDetail from './components/portfolio/ProjectDetail.jsx'
import ThankYou from './pages/ThankYou.jsx'

function App() {
  const page = location.pathname;
  const isAdminPage = page.startsWith('/admin');

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={ <Portfolio /> }>
            <Route index element={ <PortHome /> } />
            <Route path=':category' element={<PortfolioCategory />} />
        </Route>
        <Route path='/project/:id' element={<ProjectDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin' element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path=":section" element={<DashboardSection />} />
        </Route>
        <Route path='/admin/login' element={<Login />} />
        <Route path='/thank-you' element={<ThankYou />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
