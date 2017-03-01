import React, { Component } from 'react'
import HoverButton from './common/HoverButton'
import Footer from './Footer'

const styles={
  header: {
    height: '100vh'
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
    super(props)
    this.state = { hover: false }
    }

  mouseEnter = () => this.setState({ hover: true })
  mouseLeave = () => this.setState({ hover: false })

  render() {
    return (
      <section style={styles.header}>
        <div style={{height: '30vh'}}></div>
        <h1 style={{fontSize: '7vh', color: '#FFF', textAlign: 'center', margin: 0}}>HAN HYUK CHO</h1>
        <h2 style={{fontSize: '4vh', color: '#FFF', textAlign: 'center', fontWeight: 300}}>Software Developer</h2>

        <div className="row center-xs" style={{marginTop: '10vh'}}>

            <a className="row center-xs middle-xs" style={this.state.hover ? styles.buttonHover :styles.buttonStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onTouchTap={() => window.location.hash='showcase' }>Go to Showcase</a>

        </div>

        <div style={{height: '30vh'}}></div>
        <Footer />
      </section>
    )
  }
}


//http://stackoverflow.com/questions/17813719/page-jump-from-div-to-an-anchor