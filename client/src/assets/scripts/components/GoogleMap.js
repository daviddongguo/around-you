import React from 'react'
import useAxios from 'axios-hooks'
import { Button, Card, Col, Row } from 'reactstrap'
import config from '../../../config/index'

export default function GoogleMap() {
  const [{ data, loading, error }] = useAxios(
    `${config.server}/api/advertisings`
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const location = data.company.location.split(',')
  const lng = parseFloat(location[0])
  const lat = parseFloat(location[1])

  return (
    <div id='googleMap'>
      <Row>
        <div id='map'>
          <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU'></script>
          <script>console.log('google map')</script>
        </div>
      </Row>
    </div>
  )
}
