import React, { Component } from 'react';

// import Appbar from './components/Appbar'
import VideoBackground from './components/VideoBackground';
import Intro from './components/Intro';
import About from './components/About';
import News from './components/News';
import Showcase from './components/Showcase';
import Tech from './components/Tech';
import Gotcha from './components/Gotcha';
import Epilogue from './components/Epilogue';


import './App.css';


const styles = {
  section: { //parallax
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto',
    perspective: '300px'
  },
  page: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#FFF'
  },
}

//<Footer /> <DataMapView />
class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section>

        <VideoBackground />

        <section style={styles.section} className="row">
          <div className="col-xs-12"><Intro /></div>
          <div className="col-xs-12 box-shadow" style={{backgroundColor: '#FFF'}}><News /></div>
          <div className="col-xs-12"><About /></div>
          <Showcase />
          <Tech />
          <Gotcha />
          <Epilogue />
        </section>

      </section>
    );
  }
}

export default App;
