import React from 'react'
import HoverButton from './common/HoverButton'
import Laptop from 'material-ui/svg-icons/hardware/laptop-mac';


const styles={
  section: {
    width: '100%',
    backgroundColor: '#232323',
  },
}


export default () => (
  <section style={styles.section}>
    <div className="row">
      <div className="col-xs-11">
        <div className="row around-xs">

          <div className="col-xs-1 col-sm-1"></div>

          <div className="col-xs-10 col-sm-5" style={{transform: 'translateZ(80px) scale(0.8)'}}>
            <div className="row" style={{height: '30vh'}}></div>
            <div className="row"><h1 style={{fontSize: '5vh', marginTop: 0, marginBottom: '2vh', color: '#00bbdc'}}>Gotcha!</h1></div>
            <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>Click on the titles to access the github tutorials. The tutorials are written as markdown format included in each git branch.</p></div>

            <div className="row"><a target="_blank" href="https://github.com/dev-hanhyuk/recommendation" style={{textDecoration: 'none'}}><h2 style={{fontSize: '3vh', color: '#00bbdc', marginBottom: '1vh'}}>Machine Learning: Recomemendation pt.1</h2></a></div>
            <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>Inspired by developers <a target="_blank" href="https://www.burakkanber.com/tag/ml-in-js/" style={{fontStyle: 'italic', color: '#DDD'}}>Burak Kanber</a> and <a target="_blank" href="https://www.toptal.com/algorithms/predicting-likes-inside-a-simple-recommendation-engine" style={{fontStyle: 'italic', color: '#DDD'}}>Mahmud Ridwan</a>, I elaborated on a back-end collective suggestion API based on user similarity using node and Postgres.</p></div>


            <div style={{height: '3vh'}}></div>
            <div className="row"><a target="_blank" href="https://github.com/dev-hanhyuk/react-redux-tutorial" style={{textDecoration: 'none'}}><h2 style={{fontSize: '3vh', color: '#00bbdc', marginBottom: '1vh'}}>Implementation of a simple react/redux app</h2></a></div>
            <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>Let's create a webpack environment and set up modules for react/redux app development.</p></div>
          </div>

          <div className="col-sm-4">
            <div className="row center-xs middle-xs">
              <Laptop color="#DDD" style={{width: '100%', height: '80vh', marginTop: '20vh'}}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
)

/*

https://www.toptal.com/algorithms/predicting-likes-inside-a-simple-recommendation-engine

*/