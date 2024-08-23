import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Forgot_Password } from './Login/Forgot_Password.jsx';
import { Login_Pages } from './Login/Login_Pages.jsx';
import { Otp_Page } from './Login/Otp_Page.jsx';
import { Change_Password } from './Login/Change_Password.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login_Pages />} />
        <Route path='/forgot-password' element={<Forgot_Password />} />
        <Route path='/otp-verification' element={<Otp_Page />} />
        <Route path='/change-password' element={<Change_Password />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
