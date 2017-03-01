import React from 'react'
import HoverButton from './common/HoverButton'

const styles={
  section: {
    backgroundColor: '#FFF',
    paddingTop: '10vh',
    paddingBottom: '10vh',
  },
}


export default () => (
  <section style={styles.section} className="col-xs-11">
    <div className="row around-xs">

      <div className="col-xs-1 col-sm-1"></div>
      <div className="col-xs-10 col-sm-6" style={{transform: 'translateZ(80px) scale(0.8)', paddingLeft: '5%'}}>
        <div className="row" style={{height: '5vh'}}></div>
        <div className="row"><h1 style={{fontSize: '5vh', marginTop: 0, marginBottom: '2vh', color: '#00bbdc'}}>What's New?</h1></div>
        <div className="row"><h2 style={{fontSize: '5vh', color: '#00bbdc', marginBottom: '1vh'}}>Soundcloud Playroom</h2></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5}}>I recently created a music sharing application using Soundcloud API services. Using React/Redux, HTML5 audio web API and firebase, I was able to develop an application in which users are able to combine their favorite playlists into a “playroom” with 4-digit passcode so that the users can add, update and stream tracks in the playroom. It was a rewarding moment when I was able to see the final product in action at a social gathering, not having to worry about who will be the DJ for the night.</p></div>

        <div className="row" style={{marginTop: '5vh'}}><a target="_blank" href="https://sc-playroom.herokuapp.com/"><HoverButton buttonText="TRY PLAYROOM"/></a></div>
      </div>

      <div className="col-xs-10 col-sm-4">
        <div className="row center-xs middle-xs">
          <a target="_blank" href="https://sc-playroom.herokuapp.com/"><img src="pf/sc-cloud.png" style={{width: '100%', height: '60vh', marginBottom: '10vh'}} className="box-shadow" /></a>
        </div>
      </div>



    </div>
  </section>
)


//style={{transform: 'translateZ(50px) scale(0.9)'}}