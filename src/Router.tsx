import { Routes, Route } from 'react-router-dom'
import { DefaultLayouts } from './layouts/DefaultLayout/'
import { History } from './pages/History'
import { Home } from './pages/Home/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
