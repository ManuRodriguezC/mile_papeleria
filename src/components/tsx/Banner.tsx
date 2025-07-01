import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const sectores = [
  {
    title: "STRETCH FILMS",
    description:
      "Protege tus productos con eficiencia y calidad. Stretch Films que garantizan resistencia, seguridad y máxima protección en cada embalaje.",
    image: "norma.webp",
    backgraund: "bg-custom-gradient",
  },
  {
    title: "CINTA ADHESIVA",
    description:
      "Unión segura para cada aplicación. Nuestras cintas adhesivas ofrecen durabilidad y precisión para mantener tus productos intactos.",
    image: "promo.webp",
    backgraund: "bg-custom-blue-gradient",
  },
  {
    title: "BOLSAS DE BASURA",
    description:
      "Resistencia y confianza en cada bolsa. Soluciones prácticas y duraderas para una gestión de residuos eficiente y segura.",
    image: "norma.webp",
    backgraund: "bg-custom-blue2-gradient",
  }
];


export default function BannerLoop() {
  return (
    <section className="w-full h-[400px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={4}
        loop={true}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-[100%]"
      >
            {
              sectores.map((sector) => (
                <SwiperSlide
                  className={`w-full h-full`}
                  key={sector.title}
                  >
                    <div className="relative w-full h-full">

                      <img src={sector.image} alt={sector.title} className="w-full h-full object-contain" />

                      <div
                        className="w-full h-full absolute z-10 flex flex-col justify-around p-4 md:p-20 text-white"
                      >
                        <div>
                          <h2
                            className="text-center md:text-left text-xl md:text-4xl xl:text-5xl font-bold
                              mb-2 md:mb-6 animate-fade-in animate-delay-250">
                            {sector.title}
                          </h2>
                          <p className="w-[200px] ml-24 md:ml-4 lg:w-[500px] text-xs md:text-xl lg:text-2xl text-center
                            md:text-justify font-light py-5 animate-fade-in animate-delay-500">
                            {sector.description}
                          </p>
                        </div>

                      </div>
                    </div>
                </SwiperSlide>
              ))
        }
      </Swiper>
    </section>
  )
}
