import Flickity from 'react-flickity-component';
import './flickity.css';

function App() {
  return (
    <Flickity
      options={{
        pageDots: false,
        // prevNextButtons: false,
        wrapAround: true,
        autoPlay: 5000,
        setGallerySize: false,
      }}
    >
      <div className="slide">slide1</div>
      <div className="slide">slide2</div>
      <div className="slide">slide3</div>
      <div className="slide">slide4</div>
      <div className="slide">slide5</div>
      <div className="slide">slide6</div>
      <div className="slide">slide7</div>
      <div className="slide">slide8</div>
    </Flickity>
  );
}

export default App;
