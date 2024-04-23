
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homeagent from './components/Home/Home';
import Header from './components/Header/Header';
import MyAgents from './components/Myagents/Myagents';
import Signup from './components/signup/signup';
import Login from './components/Login/Login';
import Listingrequest from "./components/ListingRequest/Listingrequest.js";
import Viewdocuments from './components/Viewdocuments/viewdocuments.js'
import Valuationrequest from "./components/Valuationrequest/Valuationrequest.js"
import Agentlist from './components/AjentList/Agentlist.js';
import ChatComponent from './Sample.js';


function Routing() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header><Homeagent /></Header>} />
      <Route path='/myagents' element={<Header><MyAgents /></Header>} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path="/viewdocuments" element={<Header><Viewdocuments/></Header>}/>
      <Route path="/listingrequest" element={<Header><Listingrequest/></Header>} />      
      <Route path="/valuationrequest" element={<Header><Valuationrequest/></Header>}/>
      <Route path='/agentlist' element={<Header><Agentlist /></Header>} />
      <Route path='sample' element={<Header><ChatComponent /></Header>} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default Routing;
