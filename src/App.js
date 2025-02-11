import ModelViewer from './components/ModelViewer';
import './App.css';
import Apply from './components/Apply/apply';
import Links from './components/links/links';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <ModelViewer />
        <div className='logo'>Technotsav Logo</div>
        {<p className='pw' style={{ position: "absolute", bottom: 0, left: 0, marginLeft: "20px" }}>Made with ❤️ by Technotsav Web Team</p >}
        <Apply />
        <Links facebook={"https://www.github.com/Aditya-138-12"} />
      </BrowserRouter>
    </>

  );
}

export default App;