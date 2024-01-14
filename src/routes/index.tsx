
import { Navigate, Route, Routes } from 'react-router-dom'
import CardBook from '../shared/components/Card-book'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/home' element={<CardBook title='titulo do livro' />} />
            <Route path='*' element={<Navigate to="/home" />} />
        </Routes>

    )

}

export default AppRoutes