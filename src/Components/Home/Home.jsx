import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';
import Estates from '../Estates/Estates';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const datas = useLoaderData();
    console.log(datas.length)
    return (
        <div className=''>
            <Helmet>
                <title>Residential-Era | Home</title>
            </Helmet>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.ibb.co/qCBDWsX/house-1867187-1280.jpg" alt="" /></SwiperSlide>
                {/* <SwiperSlide><img src="https://i.ibb.co/zfPLs66/house-1867187-640.jpg" alt="" /></SwiperSlide> */}
                <SwiperSlide><img src="https://i.ibb.co/dMs0D1K/banner1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/JrbMtxP/istockphoto-1227098317-1024x1024.jpg" alt="" /></SwiperSlide>
                
                
            </Swiper>
            <div>
                <Estates datas={datas}></Estates>
            </div>

        </div>
    );
};

export default Home;