import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Comments from './components/Comments/Comments';
import MainVideo from './components/Mainvideo/MainVideo';
import Navigation from './components/Navigation/Navigation';
import { Suggestion } from './components/Suggestion/Suggestion';

function App() {
  return (
    <div >
    <Navigation/>
    <div className="row">
    <div className="col-md-8">
    <MainVideo/>
    <Comments/>
    </div>
    <div className="col-md-4">
    <Suggestion/>
    </div>
    </div>
    

    </div>
  );
}

export default App;
