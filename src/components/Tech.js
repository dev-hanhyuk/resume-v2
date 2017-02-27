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

      <div className="col-xs-10 col-sm-5" style={{transform: 'translateZ(80px) scale(0.8)'}}>
        <div className="row"><h1 style={{fontSize: '5vh', marginTop: '5vh', marginBottom: '2vh', color: '#00bbdc'}}>What am I good at?</h1></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>I like both front-end and back-end development. I love to access various APIs and apply them to improve user experience and convenience. React/redux has been my favorite front-end framework, however, I am open to learn new technologies. Currently, I am self-teaching python data analysis tools and flask APIs.</p></div>
        <div className="row"><h2 style={{fontSize: '3vh', color: '#00bbdc', marginBottom: '1vh'}}>Proficient</h2></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>React/redux, React Native, angular, Ionic, postgres, node.js, HTML5 APIs(canvas, audio), APIs, SASS, Material Design</p></div>

        <div className="row"><h2 style={{fontSize: '3vh', color: '#00bbdc', marginBottom: '1vh'}}>Confident</h2></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>Chrome extension, lodash, python, firebase, git, agile environment, parallax</p></div>

        <div className="row"><h2 style={{fontSize: '3vh', color: '#00bbdc', marginBottom: '1vh'}}>Interested</h2></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>Currently, I am interested in D3.js, Mongo DB, and Machine Learning techniques.</p></div>
      </div>

      <div className="col-xs-10 col-sm-4">
        <div className="row center-xs middle-xs">
          <img src="/images/profile_img_2.png" style={{width: '100%', height: '100vh'}} />
        </div>
      </div>


    </div>
  </section>
)

//<img src="http://placehold.it/300x600" style={{width: '100%', height: '80vh'}}/>