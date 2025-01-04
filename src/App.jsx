import Loader from '../components/loader'
import '../css/listener.css'


function App() {
 
  return (
    <>
      <div className="container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <Loader />
      </div>
    </>
  )
}

export default App