
import { Navigate, Route, Routes } from 'react-router-dom'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/home' element={<h1>Page Home</h1>} />
            <Route path='*' element={<Navigate to="/home" />} />
        </Routes>

    )

}

export default AppRoutes