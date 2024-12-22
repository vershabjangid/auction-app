import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { LoginPages } from './Login/Login_Pages';
import { ForgotPassword } from './Login/Forgot_Password';
import { ChangePassword } from './Login/Change_Password';
import { OtpPage } from './Login/Otp_Page';
import { Register } from './Login/Register';
import { PrivateRoute } from './Login/PrivateRoute';
import { EmailPrivate } from './Login/EmailPrivate';
import { Dashboard } from './PAGES/Dashboard';
import { NewAuction } from './PAGES/NewAuction';
import { MyAuction } from './PAGES/MyAuction';
import { EditAuction } from './PAGES/EditAuction';
import { AuctionDetail } from './PAGES/AuctionDetail';
import { AddTeam } from './PAGES/AddTeam';
import { ViewTeam } from './PAGES/ViewTeam';
import { UpdateTeam } from './PAGES/UpdateTeam';
import { ViewTeamDetails } from './PAGES/ViewTeamDetails';
import { ViewPlayer } from './PAGES/ViewPlayer';
import { AddPlayer } from './PAGES/AddPlayer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<LoginPages />} />

        {/* forgot procedure */}
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/otp-verification' element={<OtpPage />} />
        <Route element={<EmailPrivate />}>
          <Route path='/change-password' element={<ChangePassword />} />
        </Route>


        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/new-auction' element={<NewAuction />} />
          <Route path='/my-auction' element={<MyAuction />} />
          <Route path='/edit-auction' element={<EditAuction />} />
          <Route path='/auction-detail' element={<AuctionDetail />} />
          <Route path='/add-team' element={<AddTeam />} />
          <Route path='/view-team' element={<ViewTeam />} />
          <Route path='/update-team' element={<UpdateTeam />} />
          <Route path='/view-team-details' element={<ViewTeamDetails />} />
          <Route path='/view-player' element={<ViewPlayer />} />
          <Route path='/add-player' element={<AddPlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
