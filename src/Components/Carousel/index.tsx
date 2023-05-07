import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, A11y } from "swiper";
import { StyledContainer, StyledImg } from "./style";

export const Carousel = () => {
    return (
        <StyledContainer>
            <Swiper
                className="swiper__container"
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <StyledImg
                        src="../../src/assets/images/carousel/hotel-gloria.jpg"
                        alt="hotel glória"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImg
                        src="../../src/assets/images/carousel/pousada-aguas.jpg"
                        alt="pousada águas"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImg
                        src="../../src/assets/images/carousel/hotel-estrada-real.jpg"
                        alt="hotel estrada real"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImg
                        src="../../src/assets/images/carousel/hotel-uniao.jpg"
                        alt="hotel união"
                    />
                </SwiperSlide>
            </Swiper>

            <div className="text__container">
                <h1>Caxambu Turismo</h1>

                <p>
                    Caxambu está situada nas montanhas do Sul de Minas. Suas
                    belezas naturais, os encantos dos seus jardins e o Parque
                    das Águas conquistam seus visitantes. Alguns passeios
                    imperdíveis são o city-tour de charrete pela cidade, o
                    passeio de teleférico ao Morro de Caxambu, ou simplesmente
                    caminhar pela praça XVI de Setembro ou no Centro de
                    Artesanato. Fora da cidade, Caxambu também tem atrações. O
                    visitante pode caminhar no Horto Florestal, visitar os
                    criatórios e exposições de cavalos manga-larga marchador ou
                    cavalgar pelas fazendas da região.
                </p>
            </div>
        </StyledContainer>
    );
};
