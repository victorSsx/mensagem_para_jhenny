import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CartaAnimada.css";

export default function CartaAnimada() {
  const [aberta, setAberta] = useState(false);

  // Lista de imagens do carrossel
  const imagens = [
    "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Feliz+Aniversário",
    "https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Que+seu+dia+seja+incrível!",
    "https://via.placeholder.com/300x200/5733FF/FFFFFF?text=Comemore+com+muita+alegria!",
  ];

  return (
    <div className="container">
      {aberta && <Confetti />}
      <motion.div
        className="carta"
        initial={false}
        animate={{ rotateX: aberta ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setAberta(!aberta)}
      >
        <div className="frente">🎁 Clique para abrir</div>
        <div className="verso">
          <p>🎉 Feliz Aniversário! 🎂</p>
          <p>Que seu dia seja incrível! 🥳</p>
          <Swiper spaceBetween={10} slidesPerView={1} className="swiper">
            {imagens.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Slide ${index + 1}`} className="slide-img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
}
