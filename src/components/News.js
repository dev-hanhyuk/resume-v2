import React, { Component } from 'react'
import HoverButton from './common/HoverButton'

const styles={
  section: {
    backgroundColor: '#FFF',
    paddingTop: '10vh',
    paddingBottom: '10vh',
  },
  buttonStyle: {
    textDecoration: 'none',
    marginLeft: '0vh',
    width: '180px',
    height: '2.2rem',
    outline: '0',
    background: 'transparent',
    border: '2px solid #00bbdc',
    fontWeight: '500',
    fontSize: '0.7em',
    color: '#00bbdc',
    borderRadius: '2.4vh',
  },
  buttonHover: {
    textDecoration: 'none',
    marginLeft: '0vh',
    width: '180px',
    height: '2.2rem',
    outline: '0',
    background: '#00bbdc',
    border: '2px solid #00bbdc',
    fontWeight: '500',
    fontSize: '0.7em',
    color: '#fff',
    borderRadius: '2.4vh',
  }
}


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false }
  }

  mouseEnter = () => this.setState({ hover: true })
  mouseLeave = () => this.setState({ hover: false })

  render () {
    return (
      <section style={styles.section} className="col-xs-11">
        <div className="row around-xs">

          <div className="col-xs-1 col-sm-1"></div>
          <div className="col-xs-10 col-sm-6" style={{transform: 'translateZ(80px) scale(0.8)', paddingLeft: '5%'}}>
            <div className="row" style={{height: '5vh'}}></div>
            <div className="row"><h1 style={{fontSize: '5vh', marginTop: 0, marginBottom: '2vh', color: '#00bbdc'}}>What's New?</h1></div>
            <div className="row"><h2 style={{fontSize: '5vh', color: '#00bbdc', marginBottom: '1vh'}}>Soundcloud Playroom</h2></div>
            <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5}}>I recently created a music sharing application using Soundcloud API services. Using React/Redux, HTML5 audio web API and firebase, I was able to develop an application in which users are able to combine their favorite playlists into a “playroom” with 4-digit passcode so that the users can add, update and stream tracks in the playroom. You do not have to worry about who will be the DJ for the night anymore!</p></div>

            <div className="row" style={{marginTop: '5vh'}}>
              <a className="row center-xs middle-xs" style={this.state.hover ? styles.buttonHover :styles.buttonStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onTouchTap={() => window.open('https://sc-playroom.herokuapp.com')}>TRY PLAYROOM</a>
            </div>
          </div>

          <div className="col-xs-10 col-sm-4">
            <div className="row center-xs middle-xs">
              <a target="_blank" href="https://sc-playroom.herokuapp.com/"><img src="pf/sc-cloud.png" style={{width: '100%', height: '60vh', marginBottom: '10vh'}} className="box-shadow" /></a>
            </div>
          </div>



        </div>
      </section>
    )
  }
}


//style={{transform: 'translateZ(50px) scale(0.9)'}}