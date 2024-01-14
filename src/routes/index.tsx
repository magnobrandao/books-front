
import { Navigate, Route, Routes } from 'react-router-dom'
import ButtonSearch from '../shared/components/Button-search'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/home' element={<ButtonSearch />} />
            <Route path='*' element={<Navigate to="/home" />} />
        </Routes>

    )

}

export default AppRoutes