import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

// import Users from './user/pages/Users';
// import NewPlace from './places/pages/NewPlace';
// import UserPlaces from './places/pages/UserPlaces';
// import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserReg from './UserReg';
import DealerReg from './DealerReg';
import Def from './Def';
import Login from './Login';
import Password from './Password';
import Verify from './Verify';
import DealerRequest from './Components/DealerRequest';
import ProductList from './Components/ProductList';
import DetailsPage from './Components/DetailsPage';
import FeedbackForm from './Components/form';
import Submission from './Components/submissions';

const App = () => {
  
    let routes;
      routes = (
      <Routes>
        {/* <Route path="/" exact>
          <Users />
        </Route> */}
        <Route path="/" exact element={<Def/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/userreg" exact element={<UserReg/>}/>
        <Route path="/dealerreg" exact element={<DealerReg/>}/>
        <Route path="/createpass" exact element={<Password/>}/>
        <Route path="/verify" exact element={< Verify/>} />
        <Route path="/login/product" exact element={< ProductList/>}/>
        <Route path="/dealer" exact element={< DealerRequest/>}/>
        <Route path="/customer/detail" exact element={< DetailsPage/>}/>
        <Route path="/customer/feedback" exact element={< FeedbackForm/>}/>
        <Route path="/customer/feedback/submission" exact element={< Submission/>}/>
        <Route path="/customer/feedback/submission/:id" exact element={< Submission/>}/>
        {/* <Route path="/places/new" exact>
          <NewPlRedirectace />
        </Route> */}
        {/* <Route path="/places/:placeId">
          <UpdatePlace />
        </Route> */}
        {/* <Navigate to="/" /> */}
      </Routes>
    );
    return (
    <Router>
      
      {/* <UserReg /> */}
      <main>{routes}</main>

    </Router>
  );
};

export default App;
