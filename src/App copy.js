// import logo from './logo.svg';
import hynosis from './hypnosis.webp';
import './App.css';
import RoutesPath from './Routes/routes';
import Header from './Components/Template/Header';
import Sidebar from './Components/Template/Sidebar';
import Footer from './Components/Template/Footer';
import { BrowserRouter, Routes } from 'react-router-dom';


function App() {


  return (
    <div>
      <main id="main" className="main">

        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">

            <div className="col-xxl-12 col-md-12">
              <div className="card info-card sales-card">

                <div className="card-body">
                  <h5 className="card-title">
                    {new Date().toLocaleString().split(',')[0]}<span>| Today</span>
                  </h5>

                  {/* Main Content */}
                  <RoutesPath />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default App;
