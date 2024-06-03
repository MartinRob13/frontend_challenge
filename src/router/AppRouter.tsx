import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../routes/AppRoutes';
import { ProfileRoutes } from '../profile/routes/ProfileRoutes';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/profile/*" element={ <ProfileRoutes />}/>

        <Route path="/*" element={ <AppRoutes />}/>


    </Routes>
  )
}
