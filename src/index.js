import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';


let cards = [{
  id: 1,
  title: "AVIATION",
  pins: 641,
  mainImg: require('./img/787.jpg'),
  subImg1: require('./img/sub1.jpg'),
  subImg2: require('./img/sub2.jpg')
},
{
  id: 2,
  title: "Exceptional Aviation",
  pins: 209,
  mainImg: require('./img/787.jpg'),
  subImg1: require('./img/sub1.jpg'),
  subImg2: require('./img/sub2.jpg')
},
{
  id: 3,
  title: "Aerospace",
  pins: 1545,
  mainImg: require('./img/787.jpg'),
  subImg1: require('./img/sub1.jpg'),
  subImg2: require('./img/sub2.jpg')
}];

cards.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.str,
  pins: PropTypes.number,
  mainImg: PropTypes.func,
  subImg1: PropTypes.func,
  subImg2: PropTypes.func
};
function Table() {
    return(
      <div>
          <div className="table">
            <div className="board">
            {cards.map(item => (
              <div key={item.id} className="card">
                <div className="title">{item.title}</div>
                  <div className="images">
                    <img className="main" src={item.mainImg} alt="plane number"/>
                    <img className="sub1" src={item.subImg1} alt="plane front"/>
                    <img className="sub2" src={item.subImg2} alt="engine or something"/>
                  </div>
                  <div className="pin-count">{item.pins}</div>
                  <div className="follow-btn">FOLLOW</div>
                </div>
              ))}
            </div>
          </div>
      </div>
    )

}

ReactDOM.render(<Table />, document.querySelector('#root'));
