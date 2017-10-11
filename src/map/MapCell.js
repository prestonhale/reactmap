
import React, { Component } from 'react';

class Map extends Component {
    getCellType(value){
        switch (value){
            case 0:
            return 'grass'
            break;
            case 1:
            return 'wall';
            break;
        }
    }

    render() {
        let cellType = this.getCellType(this.props.value);
        return(
            <div className={ "map-cell " + cellType }></div>
        )
    }
}

export default Map;