import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/HomeScreen'
import auth from './components/auth'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route path="/auth" component={auth}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
