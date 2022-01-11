import React from 'react'
import useAxios from 'axios-hooks'
import { Button, Card, Col, Row } from 'reactstrap'
import config from '../../../config/index'

import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function GoogleMap() {
  const [{ data, loading, error }] = useAxios(
    `${config.server}/api/restaurants/top3`
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const restaurants = data.restaurants
  const res01 = restaurants[0]

  const center = {
    lng: res01.location.lng,
    lat: res01.location.lat
  }
  const title = res01.name
  const icon = res01.icon
  const zoom = 17

  const greatPlaceStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  }

  const handleApiLoaded = (map, maps) => {
    new maps.Marker({
      position: center,
      map,
      label: title,
      icon
    })
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h3>latitude: {center.lat}</h3>
      <h3>long: {center.lng}</h3>
      <h3>{zoom}</h3>
      <h3>{title}</h3>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU' }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      ></GoogleMapReact>
    </div>
  )
}
