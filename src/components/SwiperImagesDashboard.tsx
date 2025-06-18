import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import img1 from '../assets/img/hero-img-1.png';
import img2 from '../assets/img/hero-img-2.jpg';

const images = [
    {
        src: img1,
        alt: 'Fruits',
        label: 'Fruits',
    },
    {
        src: img2,
        alt: 'Legumes',
        label: 'Legumes',
    },
];

export default function SwiperImagesDashboard() {
    return (
        <div className="col-md-12 col-lg-5">
            <div className="position-relative overflow-hidden rounded">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    effect="flip"
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    className="rounded"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="position-relative">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="img-fluid w-100 h-100 bg-secondary rounded"
                                />
                                <p
                                    className="btn btn-secondary px-4 py-3 text-white rounded position-absolute top-50 start-50 translate-middle"
                                >
                                    <span className='h3'>{image.label}</span>
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}