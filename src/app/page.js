import Image from "next/image";
import styles from "./page.module.css";
import JavascriptIcon from '@mui/icons-material/Javascript';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h2 className={styles.name}>
            Ricardo Olvera Velasco
          </h2>
          <h3 className={styles.job}>
            Front End Developer
          </h3>
        </div>
        <div className={styles.center}>
          <p className={styles.profile}>
            Soy desarrollador front-end y estudiante de Diseño y Comunicación Visual 
            con sólidos conocimientos en tecnologías web. Mi enfoque principal ha sido 
            trabajar con HTML, CSS, JavaScript y React.js, lo que me ha permitido crear 
            experiencias web atractivas y funcionales. Mi objetivo a corto plazo es 
            continuar desarrollando mis habilidades en el desarrollo móvil, centrando en 
            Swift y Kotlin para crear aplicaciones innovadores.
          </p>
          <a className={styles.imageProfile}>
            <Image
              className=""
              src="/rolvera.png"
              alt="Next.js Logo"
              width={140}
              height={180}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.grid}>
          <h2 className={styles.tec}>
            Tecnologías
          </h2>
        <div>
          <a
            className={styles.card}
          >
            <Image
              className={styles.icons}
              src="/javascript.svg"
              alt="TypeScript Logo"
              width={60}
              height={60}
              priority
            />
          </a>

          <a
            className={styles.card}
          >
            <Image
              className={styles.icons}
              src="/typescript.svg"
              alt="TypeScript Logo"
              width={60}
              height={60}
              priority
            />
          </a>

          <a
            className={styles.card}
          >
            <Image
              className={styles.icons}
              src="/react.svg"
              alt="React.js Logo"
              width={60}
              height={60}
              priority
            />
          </a>

          <a
            className={styles.card}
          >
            <Image
              className={styles.icons}
              src="/tailwind.svg"
              alt="React.js Logo"
              width={60}
              height={60}
              priority
            />
          </a>
          <a
            className={styles.card}
          >
            <Image
              className={styles.icons}
              src="/next.svg"
              alt="React.js Logo"
              width={60}
              height={60}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.grid}>
        <h2 className={styles.tec}>
          Proyectos
        </h2>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
              className=""
              src="/pokedex.jpg"
              alt="Next.js Logo"
              width={240}
              height={160}
              priority
            />
        </a>
        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
              className=""
              src="/marsiquerida.jpg"
              alt="Next.js Logo"
              width={200}
              height={200}
              priority
            />
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </main>
  );
}
