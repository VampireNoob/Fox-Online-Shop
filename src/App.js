import './App.css';
import Shop from './Shop';
import video from './assets/pixel.mp4'

const App = () => {
    return (
        <div className='App'>
            <video src={ video } autoPlay loop muted />
            <div className='content'>
                <Shop />
            </div>
        </div>
    );
}

export default App;