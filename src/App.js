import React from 'react'
import Myapi from './api/Myapi';
import PracticeState from './practice_state/PracticeState';
import Todo from "./todo/Todo";
import MyEffect from './useeffect/MyEffect';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import home from './routing/home';
import about from './routing/about';
import contact from './routing/contact';
// import navbar from './routing/Navbar';
import Navbar from './routing/Navbar';
import Mymultistate from './multistate/Mymultistate';
 import Shoppinglist from './shoppinglist/Shoppinglist';
import Guessthenumber from './guessthenumber/Guessthenumber';
import Typography from './materialui/Typography';
import List from './materialui/List';

  function App() {
  return (
    //  <h2 className='myclass'>hello world</h2>
   <div>
      {/* <Todo/> */}
    {/* <PracticeState/> */}
    {/* <MyEffect/> */}
    {/* <Myapi/> */}
    <BrowserRouter>
    {/* <Navbar/> */}
    {/* <Shoppinglist/> */}
    {/* <Guessthenumber/> */}
    {/* <Typography/> */}
    <List/>
      <Switch>
      <Route path="/about" exact  component={about} />
      <Route path="/contact"  exact component={contact} />
      </Switch>
     </BrowserRouter>
   </div>
  );
}

export default App;
