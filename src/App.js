// import './App.css';
// import Cataloge from './components/cataloge';
// import Nav from './components/Nav';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';

// function App() {
//   return (
    
//      <div className = "App">
//        <BrowserRouter>
//        <Routes>
//         <Route>

//         </Route>
//        </Routes>
//            {/* <Nav></Nav> */}
//           {/* <div className='cataloge'>
//     //      <Cataloge></Cataloge>
//     //      </div>
//     //      <div className='main-page'>
//     //      <Routes>
//     //         <Route path = "/" element={<h1>Product components</h1>}></Route>
//     //         <Route path = "/add" element={<h1>Add product</h1>}></Route>
//     //         <Route path = "/update" element={<h1>Update components</h1>}></Route>
//     //         <Route path = "/longout" element={<h1>Longout</h1>}></Route>
//     //         <Route path = "/signup" element={<h1>signup</h1>}>
//     //         </Route>
//     //      </Routes>
//     //      </div> */}

//     //     </BrowserRouter>

//     // </div>
//   );
// }

// export default App;

import './App.css';
import Nav from './components/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Container from './components/Container';
function App() {
  return (
   <div className = "App">
    
      <BrowserRouter>
      <Nav></Nav>
       <Routes>
        <Route path = "/"  element={<Container></Container>}> hi</Route>
        <Route path = "/add" element={<h1>Add product</h1>}></Route>
        <Route path = "/update" element={<h1>Update components</h1>}></Route>
        <Route path = "/logout" element={<h1>Logout</h1>}></Route>
        <Route path = "/signup" element={<h1>hello</h1>}>
        </Route>

       </Routes>
       <Footer></Footer>
      </BrowserRouter>





      
   </div>
  );
}

export default App;
