
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from '../shared/components/Header'
import Home from '../pages/Home'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<Navigate to="/home" />} />
        </Routes>

    )

}

export default AppRoutes