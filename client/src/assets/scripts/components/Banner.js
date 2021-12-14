import useAxios from 'axios-hooks';
import React from 'react';
import { Card, CardImg, CardImgOverlay } from 'reactstrap';
import config from '../../../config/index';
import BannerBigImage from '../../images/Header-1080.png';
import PlaceIcon from '../../images/place_white.ico';

export default function Banner() {
  const [{ data, loading, error }] = useAxios(
    `${config.server}/api/advertisings`,
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const title = 'Welcome to Montreal';
  const subTitle = `Restaurants around ${data.company.name}'s Office`;
  const icon = (
    <div>
      <img
        class='img-fluid'
        id='banner_icon_img'
        src={PlaceIcon}
        alt='place_icon'
      />
    </div>
  );

  return (
    <div class='position-relative'>
      <Card inverse className='text-center'>
        <CardImg width='100%' src={BannerBigImage} alt='' />
        <CardImgOverlay>
          <div class='card-text'>
            <div
              id='banner'
              class='position-absolute top-50 start-50 translate-middle'
            >
              <div id='banner_title'>{title}</div>
              <div id='banner_sub_title'>{subTitle}</div>
              <div>{icon}</div>
            </div>
          </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
}
