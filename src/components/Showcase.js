import React from 'react'
import PrevArrow from 'material-ui/svg-icons/navigation/chevron-left';
import NextArrow from 'material-ui/svg-icons/navigation/chevron-right';


const styles={
  section: {
    backgroundColor: '#FFF',
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

export default () => (
  <section style={styles.section} className="col-xs-12 box-shadow">
    <div className="row center-xs">

      <div className="col-xs-12" style={{padding: '10vh'}}>
        <div className="row center-xs"><h1 style={{fontSize: '5vh', marginTop: 0, marginBottom: '2vh', color: '#00bbdc'}}>Showcase</h1></div>
        <div className="row center-xs"><h2 style={{fontSize: '5vh', color: '#000', marginBottom: '1vh'}}>Soundcloud Playroom</h2></div>

        <div className="row" style={{height: '5vh'}}></div>

        <div className="row center-xs">
          <div className="col-xs-1"><PrevArrow style={{marginTop: '25vh'}}/></div>
          <div className="col-xs-10"><img src="http://placehold.it/600x400" style={{width: '100%', height: '500px'}}/></div>
          <div className="col-xs-1"><NextArrow style={{marginTop: '25vh'}} /></div>
        </div>

        <div className="row center-xs">
          <div className="col-xs-10">
            <p style={{fontSize: '1rem', lineHeight: 1.5, color: '#BBB'}}>I recently created a favorite music sharing application using Soundcloud API service. It has been a great experience to play with HTML5 audio features and so much fun listening to musics during application development</p>
          </div>
        </div>

      </div>
    </div>
  </section>
)


//#232323