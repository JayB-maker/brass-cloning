import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Homepage } from "./pages"
import ScrollToTop from './scrollToTop/ScrollToTop'

const AppRoutes = () => {
  return (
   <>
   <Router>
    <ScrollToTop />
    <Routes>
        <Route path="/">
            <Route index element={<Homepage />} />
        </Route>
    </Routes>
   </Router>
   </>
  )
}

export default AppRoutes