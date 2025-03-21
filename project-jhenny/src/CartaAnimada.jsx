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
        <div className="frente">🎁 Aperta essa bagaça</div>
        <div className="verso">
          <p>Minha querida Jhenny, 💖</p>
          <p>"

            Hoje é um dia tão especial, e eu não poderia deixar de te desejar um Feliz Aniversário cheio de amor, alegria e momentos incríveis. 🌟

            Desde que te conheci, tudo parece ter ficado mais leve e mais bonito. Seu sorriso ilumina os meus dias, e ter você na minha vida tem sido uma das maiores bênçãos. 💫

            Eu desejo que o seu ano seja repleto de felicidade, conquistas e que você tenha ao seu lado sempre pessoas que te amam, assim como eu. Que seus sonhos se tornem realidade, e que a cada novo dia você se sinta mais feliz e realizada.

            Você é uma pessoa maravilhosa, e eu sou muito grato por te conhecer. Que essa nova fase da sua vida seja ainda mais maravilhosa do que a anterior. 💕 Estou ansioso para viver mais momentos incríveis com você!

            Parabéns, Jhenny! Te desejo tudo de melhor no seu aniversário e sempre! 🎉🎂🥳_

            "_</p>
            <p>Com todo o meu carinho,
            [Seu amigo putão]</p>
        </div>
      </motion.div>
    </div>
  );
}
