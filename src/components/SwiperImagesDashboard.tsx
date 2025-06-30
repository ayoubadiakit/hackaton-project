import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useState } from 'react';
import type { Category } from '../types/Category';
import { CategoryService } from '../services/CategoryService';
import 'swiper/swiper-bundle.css';

export default function SwiperImagesDashboard() {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        CategoryService.getCategoriesDashboard().then((categories) => setCategories(categories));
    }, []);
    return (
        <div className="col-md-12 col-lg-5">
            <div className="position-relative overflow-hidden rounded">
                <Swiper
                    loop={categories.length > 2}
                    slidesPerView={1} // mettre 1 ou un nombre inférieur au total de slides
                    slidesPerGroup={1}
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    effect="flip"
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation={true}
                    pagination={{ clickable: true }}
                    className="rounded"
                >
                    {categories
                        .filter(cat => cat.id >= 2)
                        .map((cat) => (
                            <SwiperSlide key={cat.id}>
                                <div className="position-relative">
                                    <img
                                        src={cat.src}
                                        alt={cat.label}
                                        className="img-fluid w-100 h-100 bg-secondary rounded"
                                    />
                                    <p
                                        className="btn btn-secondary px-4 py-3 text-white rounded position-absolute top-50 start-50 translate-middle"
                                    >
                                        <span className='h3'>{cat.category}</span>
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
}