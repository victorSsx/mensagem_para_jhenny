import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./CartaAnimada.css";

export default function CartaAnimada() {
  const [aberta, setAberta] = useState(false);

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
          <p>Desejo a você muita felicidade, amor, e sucesso em tudo o que fizer. Aproveite seu dia com muito carinho e diversão!</p>
        </div>
      </motion.div>
    </div>
  );
}
