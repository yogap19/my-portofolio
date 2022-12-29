import Image from 'next/image';
import React from 'react';
import image1 from '../src/boy.png';
import image2 from '../src/boy.png';
import image3 from '../src/boy.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';

function project() {
  return (
    <div className="container">
      <Carousel showThumbs={false}>
        <div>
          <Image src={image1} alt="boy" style={{ width: 200, height: 200 }} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image src={image2} alt="boy" style={{ width: 200, height: 200 }} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image src={image3} alt="boy" style={{ width: 200, height: 200 }} />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>

      {/* <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        EffectFade={true}
      > */}
      {/* <SwiperSlide>
          <Image src={image1} style={{ width: 200, height: 200 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image1} style={{ width: 200, height: 200 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image1} style={{ width: 200, height: 200 }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image1} style={{ width: 200, height: 200 }} />
        </SwiperSlide>
        ...
      </Swiper> */}
    </div>
  );
}

export default project;
