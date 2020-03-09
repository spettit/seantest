import React, { Component } from 'react'
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api'
import {graphql} from 'gatsby'

export default ({data}) => {
//   render() {
  
    const path = data.allSomegpsjsonJson.edges.map((node) => {
        return({lat: node.node.lat, lng: node.node.lng})
    })
    console.log(path)
     return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyAov8VpvRFBsCiFsB8pZIMa4P2NEP0qwcU"
        // libraries="geometry"
        // {...other props}
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={{
            height: "400px",
            width: "800px"
          }}
          zoom={7}
          center={{
            lat: 51.242969,
            lng: 0.799256
          }}

        //   {...other props }
        >
        <Polyline
    //   onLoad={onLoad}
      path={path}
    //   options={options}
    />

        </GoogleMap>
      </LoadScript>
     )
//   }
  
}

export const mapquery = graphql`
query {
    allSomegpsjsonJson {
    edges {
      node {
        lat
        lng
      }
    }
  }


}`

