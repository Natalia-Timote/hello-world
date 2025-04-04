import styles from "./PostTemplate.module.css";

export default function PostTemplate({ children, fotoCapa, titulo }) {
    return (
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{backgroundImage: `url(${fotoCapa}` }}
            ></div>

            <h1 className={styles.titulo}>
                {titulo}
            </h1>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}