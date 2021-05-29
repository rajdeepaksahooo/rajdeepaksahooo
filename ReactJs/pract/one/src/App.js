import './App.css';
// import LayOut from './components/layout/LayOut';
import {BrowserRouter as Router,Switch,Route,useHistory} from 'react-router-dom'
import ProductListOne from './components/containers/ProductListOne';
import ProductListTwo from './components/containers/ProductListTwo';
import ProductListThree from './components/containers/ProductListThree';
import ProductListFour from './components/containers/ProductListFour';
import ProductListFive from './components/containers/ProductListFive';
import ProductListSix from './components/containers/ProductListSix';
import ProductListSeven from './components/containers/ProductListSeven';
import ProductListEight from './components/containers/ProductListEight';
import ProductListNine from './components/containers/ProductListNine';
import ProductListTen from './components/containers/ProductListTen';
import ProductListEleven from './components/containers/ProductListEleven';
import ProductListTwelve from './components/containers/ProductListTwelve';
import ProductListThirteen from './components/containers/ProductListThirteen';
import ProductListFourteen from './components/containers/ProductListFourteen';
import ProductListFifteen from './components/containers/ProductListFifteen';
import ProductListSixteen from './components/containers/ProductListSixteen';
import ProductListSeventeen from './components/containers/ProductListSeventeen';
import ProductListEighteen from './components/containers/ProductListEighteen';
import ProductListNinteen from './components/containers/ProductListNinteen';
import ProductListTwenty from './components/containers/ProductListTwenty';
import ProductListing from './components/containers/ProductListing';

import ProductDetails from './components/containers/ProductDetails';
import Header from './components/containers/Header';
import {Link} from 'react-router-dom'

function App() {
  const hist=useHistory()
  return (<div>
   
     <div className="App">
      <Router>
          <Header />
          <div className='items'>
              <Switch>
                  <Route path='/page1' exact component={ProductListing}/>
                  <Route path='/page2' exact component={ProductListOne}/>
                  <Route path='/page3' exact component={ProductListTwo}/>
                  <Route path='/page4' exact component={ProductListThree}/>
                  <Route path='/page5' exact component={ProductListFour}/>
                  <Route path='/page6' exact component={ProductListFive}/>
                  <Route path='/page7' exact component={ProductListSix}/>
                  <Route path='/page8' exact component={ProductListSeven}/>
                  <Route path='/page9' exact component={ProductListEight}/>
                  <Route path='/page10' exact component={ProductListNine}/>
                  <Route path='/page11' exact component={ProductListTen}/>
                  <Route path='/page12' exact component={ProductListEleven}/>
                  <Route path='/page13' exact component={ProductListTwelve}/>
                  <Route path='/page14' exact component={ProductListThirteen}/>
                  <Route path='/page15' exact component={ProductListFourteen}/>
                  <Route path='/page16' exact component={ProductListFifteen}/>
                  <Route path='/page17' exact component={ProductListSixteen}/>
                  <Route path='/page18' exact component={ProductListSeventeen}/>
                  <Route path='/page19' exact component={ProductListEighteen}/>
                  <Route path='/page20' exact component={ProductListNinteen}/>
                  <Route path='/page21' exact component={ProductListTwenty}/>
                  <Route path='/product/:productId' exact component={ProductDetails}/> 
              </Switch>
          </div>
          <div className='Nav'>
              <ul>

                <li><Link to={"/page1"}>1</Link></li>
                <li><Link to={"/page2"}>2</Link></li>
                <li><Link to={"/page3"}>3</Link></li>
                <li><Link to={"/page4"}>4</Link></li>
                <li><Link to={"/page5"}>5</Link></li>
                <li><Link to={"/page6"}>6</Link></li>
                <li><Link to={"/page7"}>7</Link></li>
                <li><Link to={"/page8"}>8</Link></li>
                <li><Link to={"/page9"}>9</Link></li>
                <li><Link to={"/page10"}>10</Link></li>
                <li><Link to={"/page11"}>11</Link></li>
                <li><Link to={"/page12"}>12</Link></li>
                <li><Link to={"/page13"}>13</Link></li>
                <li><Link to={"/page14"}>14</Link></li>
                <li><Link to={"/page15"}>15</Link></li>
                <li><Link to={"/page16"}>16</Link></li>
                <li><Link to={"/page17"}>17</Link></li>
                <li><Link to={"/page18"}>18</Link></li>
                <li><Link to={"/page19"}>19</Link></li>
                <li><Link to={"/page20"}>20</Link></li>
                <li><Link to={"/page21"}>21</Link></li>
              </ul>
            </div>
      </Router>
      
    </div>
    
  </div>
   
  );
}

export default App;
