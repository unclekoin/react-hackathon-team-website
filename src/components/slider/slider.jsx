import React from 'react'
import SwiperCore, { Autoplay, Pagination, Navigation, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './slider.css'
import members from '../../db/api.members'

import img1 from './frontend-banner.jpg'
import img2 from '../../assets/images/avatar.jpeg'

SwiperCore.use([Autoplay, Pagination, Navigation, Parallax])

const Slider = () => {
  return (
    <Swiper
      className='slider-main-page'
      speed={1600}
      parallax={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      navigation={true}
      module={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <div
        slot='container-start'
        className='swiper-parallax-bg'
        style={{ backgroundImage: `url(${img1})` }}
        data-swiper-parallax='-10%'
      ></div>

      {members.map((member) => (
        <SwiperSlide key={member._id} className='swiper-slider-container'>
          <img alt='' src={member.photo} className='img-swiper' />
          <div className='swiper-block-parallax'>
            <div className='swiper-parallax-title' data-swiper-parallax='-3200'>
              {`${member.firstName} ${member.lastName}`}
            </div>
            <div
              className='swiper-parallax-subtitle'
              data-swiper-parallax='-2800'
            >
              {`${member.about}`}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
