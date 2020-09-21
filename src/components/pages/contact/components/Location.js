import React,  { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import styles from './location.module.css'
import marker from '../assets/marker.png'

const Pin = () => <div></div>;

class location extends Component {
  static defaultProps = {
    center: {
      lat: -37.8136,
      lng: 144.9631
    },
    zoom: 10
  };
 
  render() {
    return (
      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAR0VUXA_QCzJv8pE9RIxPqFEgaiOFPEJk"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Pin>
            lat={-37.8136}
            lng={144.9631}
            <img src={marker} className={styles.marker} alt="marker" />
        </Pin>
        
       </GoogleMapReact>
      </div>
    );
  }
}
 

export default location