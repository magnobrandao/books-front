
import { Button } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/home' element={<Button>HOME</Button>} />
            <Route path='*' element={<Navigate to="/home" />} />
        </Routes>

    )

}

export default AppRoutes