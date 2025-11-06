import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from '@/Layout'

import Accueil from '@/pages/Accueil'
import AnalyticsDashboard from '@/pages/AnalyticsDashboard'
import APropos from '@/pages/APropos'
import Contact from '@/pages/Contact'
import MentionsLegales from '@/pages/MentionsLegales'
import NosPacks from '@/pages/NosPacks'
import NosServices from '@/pages/NosServices'
import NotreApproche from '@/pages/NotreApproche'
import NotreExpertise from '@/pages/NotreExpertise'
import PolitiqueConfidentialite from '@/pages/PolitiqueConfidentialite'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/NosServices" element={<NosServices />} />
        <Route path="/NosPacks" element={<NosPacks />} />
        <Route path="/NotreApproche" element={<NotreApproche />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/MentionsLegales" element={<MentionsLegales />} />
        <Route path="/AnalyticsDashboard" element={<AnalyticsDashboard />} />
      </Routes>
      <Outlet />
    </Layout>
  )
}
