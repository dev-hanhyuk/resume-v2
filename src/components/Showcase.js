import React, { Component } from 'react';
import Slider from 'react-slick';
import PF from './pf';

const styles={
  section: {
    backgroundColor: '#232323',
    paddingTop: '10vh',
    paddingBottom: '10vh',
    overflowX: 'hidden',
    width: '100%'
  },
  carouselImage: {
    width: '100%',
    height: '60vh'
  },
}


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { pf: PF[0] }
  }

  displaySlideContent = (next) => {
    this.setState({ pf: PF[next] })
  }

  clickPortfolio = (idx) => { window.open(PF[idx].link) }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      beforeChange: (current, next) => {
        this.displaySlideContent(next)
      }
    }

    return (
      <section style={styles.section} className="col-xs-12 box-shadow">
        <div className="row center-xs">
          <a name="showcase"><div id="showcase"></div></a>
          <div className="col-xs-12">
            <div classNamr="row" style={{height: '5vh'}} ></div>
            <div className="row center-xs"><h1 style={{fontSize: '5vh', marginTop: 0, marginBottom: '2vh', color: '#00bbdc'}}>Showcase</h1></div>


            <div className="row center-xs"><a target="_blank" href={this.state.pf.link} style={{textDecoration: 'none'}}><h2 style={{fontSize: '3vh', color: '#FFF', marginBottom: '1vh'}}>{this.state.pf.title}</h2></a></div>

            <div className="row center-xs"><div className="col-xs-10"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#BBB'}}>{this.state.pf.description}</p></div></div>

            <div className="row" style={{height: '5vh'}}></div>
            <Slider {...settings}>
              { PF.map((pf, idx) => (<img key={idx} src={pf.url} style={{height: '400px'}} className="box-shadow" onClick={() => this.clickPortfolio(idx)}/>))}

            </Slider>

            <div className="row" style={{height: '10vh'}}></div>

          </div>
        </div>
      </section>
    )
  }
}
