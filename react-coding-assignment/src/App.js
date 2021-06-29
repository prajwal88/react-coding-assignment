import {Provider, defaultTheme} from '@adobe/react-spectrum';
import './App.css';
import '../node_modules/@spectrum-css/vars/dist/spectrum-global.css'
import '../node_modules/@spectrum-css/vars/dist/spectrum-medium.css'
import '../node_modules/@spectrum-css/vars/dist/spectrum-light.css'
import '../node_modules/@spectrum-css/page/dist/index-vars.css';
import '../node_modules/@spectrum-css/button/dist/index-vars.css';
import  CreativeCloud  from './pages/CreativeCloud';
import  DocumentCloud  from './pages/DocumentCloud';
import  ExperienceCloud from './pages/ExperienceCloud';
import Header  from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer  from './components/Footer'


function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="light">
        <Router>  
          <Header></Header> 
          <div>  
          <Route exact path="/" component={ExperienceCloud} />
          <Route exact path="/experience" component={ExperienceCloud} />
          <Route exact path="/creative" component={CreativeCloud} />
          <Route exact path="/document" component={DocumentCloud} />
          </div>   
        </Router>
        <Footer></Footer>
    </Provider>
  );
}

export default App;
