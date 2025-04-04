import styles from "./AboutMe.module.css";
import PostTemplate from "components/PostTemplate";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha-foto.png";

export default function AboutMe() {
    return (
        <PostTemplate
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Natalia!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto da Natalia"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>Sou apaixonada por tecnologia e educação. Estou em formação em Tecnologia da Informação pela UNIVESP e sempre explorando novas maneiras de criar experiências interativas na web. Meu foco é o desenvolvimento front-end, com conhecimentos em HTML, CSS, JavaScript e React.</p>

            <p className={styles.paragrafo}>Minha trajetória começou na educação, o que reforçou minha habilidade de explicar conceitos complexos de forma acessível e prática.</p>
            
            <p className={styles.paragrafo}>Aqui no meu site, compartilho aprendizados, projetos e ideias sobre desenvolvimento web. Meu objetivo é criar conteúdo útil e acessível, tanto para quem está começando quanto para quem já tem experiência na área.</p>

            <p className={styles.paragrafo}>Se quiser trocar ideias sobre tecnologia ou acompanhar meu trabalho, fique à vontade para explorar o site e me encontrar no LinkedIn ou GitHub!</p>
        </PostTemplate>
    )
}
