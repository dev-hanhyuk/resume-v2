import React from 'react'

const styles={
  section: {
    // width: '100%',
    backgroundColor: 'transparent',
    paddingTop: '10vh',
    // paddingBottom: '10vh'
  },
}

export default () => (
    <section style={styles.section} className="col-xs-11">
    <div className="row around-xs">
      <div className="col-xs-1 col-sm1"></div>
      <div className="col-xs-10 col-sm-4">
        <div className="row center-xs middle-xs">
          <img src="/images/profile_img_2.png" style={{width: '100%', height: '100vh'}} />
        </div>
      </div>

      <div className="col-xs-1 col-sm-1"></div>
      <div className="col-sm-5 col-xs-10 " style={{transform: 'translateZ(80px) scale(0.8)'}}>
        <div className="row"><h1 style={{fontSize: '5vh', marginTop: '5vh', marginBottom: '2vh', color: '#00bbdc'}}>What am I capable of?</h1></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>Python, Javascript, react, redux...I like both front-end and back-end. I love to access various APIs and utilize it to improve user experience and convenience.</p></div>

        <div className="row"><h2 style={{fontSize: '3vh', color: '#00bbdc', marginBottom: '1vh'}}>Proficient</h2></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>react/redux, angular, postgres, node.js, HTML5 APIs, SASS, Material Design</p></div>

        <div className="row"><h2 style={{fontSize: '3vh', color: '#00bbdc', marginBottom: '1vh'}}>Confident</h2></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>chrome extension, Ionic, lodash, python, firebase, git, agile environment, APIs, parallax</p></div>

        <div className="row"><h2 style={{fontSize: '3vh', color: '#00bbdc', marginBottom: '1vh'}}>Interested</h2></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>currently studying d3, Mongo DB...Filet mignon rump pastrami beef landjaeger brisket short loin tail andouille cow. Frankfurter pastrami ham chicken, pancetta filet mignon flank strip steak landjaeger boudin. </p></div>
      </div>

      <div className="col-sm-1"></div>

    </div>
  </section>
)

//<img src="http://placehold.it/300x600" style={{width: '100%', height: '80vh'}}/>