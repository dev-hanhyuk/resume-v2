import React, { Component } from 'react'
import HoverButton from './common/HoverButton'
import Footer from './Footer'

const styles={
  header: {
    height: '100vh'
  },

}

export default class extends Component {
  constructor(props) {
    super(props)
  }

  gotoShowcase = () => {
    console.log('showcase')
  }


  render() {
    return (
      <section style={styles.header}>
        <div style={{height: '30vh'}}></div>
        <h1 style={{fontSize: '7vh', color: '#FFF', textAlign: 'center', margin: 0}}>HAN HYUK CHO</h1>
        <h2 style={{fontSize: '4vh', color: '#FFF', textAlign: 'center', fontWeight: 300}}>Software Developer</h2>

        <div className="row center-xs" style={{marginTop: '10vh'}}>
          <a href="#showcase"><HoverButton buttonText="Go to Showcase" clickHandler={this.gotoShowcase}/></a>
        </div>

        <div style={{height: '30vh'}}></div>
        <Footer />
      </section>
    )
  }
}



