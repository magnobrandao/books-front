
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from '../shared/components/Header'
import Home from '../pages/Home'
import Detail from '../pages/Detail'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Navigate to="/home" />} />
        </Routes>

    )

}

export default AppRoutes