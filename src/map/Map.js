import React, { Component } from 'react';
import MapCell from './MapCell.js'
import './Map.css';


const KEY = {
  LEFT:  37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  A: 65,
  D: 68,
  W: 87,
  S: 83,
  SPACE: 32
};


const LAYOUT = [
  1, 1, 1, 0, 1, 1, 0, 1, 0, 1,
  1, 1, 0, 0, 0, 1, 1, 0, 0, 1,
  1, 1, 0, 1, 0, 1, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 1, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 1, 1, 1, 1, 0, 0, 1,
  1, 0, 0, 1, 0, 1, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 1, 0, 1, 1, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

]


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {'playerLocation': 22}
    this.rowSize = 10;
    this.numRows = LAYOUT/this.rowSize
    this.getTile = this.getTile.bind(this);
    this.handleMapKey = this.handleMapKey.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleMapKey)
  }

  handleMapKey(e){
    let attemptedMove = null;
    if ([KEY.W, KEY.UP].includes(e.keyCode))
      attemptedMove = this.state.playerLocation-this.rowSize;
    else if ([KEY.S, KEY.DOWN].includes(e.keyCode))
      attemptedMove = this.state.playerLocation+this.rowSize;
    else if ([KEY.D, KEY.RIGHT].includes(e.keyCode))
      attemptedMove = this.state.playerLocation+1;
    else if ([KEY.A, KEY.LEFT].includes(e.keyCode))
      attemptedMove = this.state.playerLocation-1;
    let newLocation = this.moveToLocation(attemptedMove)
    this.setState({playerLocation: newLocation});
  }

  getTileIndex(x, y){
    return (y*this.rowSize)+x;
  }

  getTile(x, y){
    return(LAYOUT[this.getTileIndex(x, y)]);
  }

  moveToLocation(locIndex){
    // Doesn't block going LEFT or RIGHT off side of map
    if (LAYOUT[locIndex] == 0)
      return locIndex;
    else
      return this.state.playerLocation;
  }

  render() {
    let map = [];
    for (let y = 0; y < this.rowSize; y++){
      let row = [];
      for (let x = 0; x < this.rowSize; x++){
        if (this.getTileIndex(x, y) == this.state.playerLocation){
          row.push(<MapCell value="!" />);
        } else {
          row.push(<MapCell value={this.getTile(x, y)} key={ `"tile ${x}-${y}"` }/>);
        }
      }
      map.push(<span id="map-row">{row}<br /></span>);
    }
    return <div id="map" tabIndex='0' >
              {map}
           </div>
  }
}

export default Map;