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
  <section style={styles.section} className="col-xs-12 box-shadow">
    <div className="row around-xs">

      <div className="col-xs-10 col-sm-offset-1 col-sm-4">
        <div className="row center-xs middle-xs">
          <img src="pf/sc-cloud.png" style={{width: '100%', height: '60vh', marginBottom: '10vh'}} className="box-shadow"/>
        </div>
      </div>

      <div className="col-xs-10 col-sm-6" style={{transform: 'translateZ(50px) scale(0.8)', paddingLeft: '10%'}}>
        <div className="row"><h1 style={{fontSize: '5vh', marginTop: 0, marginBottom: '2vh', color: '#00bbdc'}}>What's New?</h1></div>
        <div className="row"><h2 style={{fontSize: '5vh', color: '#00bbdc', marginBottom: '1vh'}}>Soundcloud Playroom</h2></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5}}>I recently created a favorite music sharing application using Soundcloud API and HTML5 audio. There is no need for one person to be committed on tunes for the entire member during a group gathering. Now, you can simply access a specific playroom with 4-digit passcode and add your own favorite musics to the playroom to share your feelings with friends!</p></div>

        <div className="row" style={{marginTop: '5vh'}}><HoverButton buttonText="VISIT DEMO"/></div>
      </div>

      <div className="col-sm-1"></div>

    </div>
  </section>
)


//style={{transform: 'translateZ(50px) scale(0.9)'}}