import React, { useState } from 'react';
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import David from '../Assets/WorkersImg/David.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar'; // Add scrollbar CSS

export default function MySwiper() {
	const [swiperRef, setSwiperRef] = useState(null);
	const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5", "Slide 6", "Slide 7", "Slide 8", "Slide 9"];

	return (
		<>
			<SwiperReact
				modules={[Virtual, Navigation, Pagination, Autoplay]}
				onSwiper={setSwiperRef}
				slidesPerView={1}
				spaceBetween={30}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={true}
				virtual
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
						navigation: false
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},

				}}
			>
				{slides.map((slideContent, index) => (
					<SwiperSlide key={slideContent} virtualIndex={index} className='mx-3'>
						<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<img className="rounded-t-lg object-cover w-full" src={David} alt="" />
							<div className="p-5">
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">David Məmmədov</h5>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Web Developer</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</SwiperReact>
		</>
	);
}
