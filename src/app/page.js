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

      <div>
          <h2 className={styles.titulos}>
            Tecnologías
          </h2>
        <div className={styles.tec}>
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

      <div className={styles.proy}>
        <h2 className={styles.titulos}>
          Proyectos
        </h2>
        <div className={styles.grid}>

        <a
          href="https://pokedex-rov.netlify.app"
          className={styles.projects}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
              className={styles.img}
              src="/pokedex.jpg"
              alt="Next.js Logo"
              width={240}
              height={160}
              priority
            />
            <p className={styles.desc}>
              Proyecto realizado con React, JavaScript, CSS, HTML donde se practicó el consumo de API Rest y protección de páginas. 
            </p>
        </a>
        <a
          href=""
          className={styles.projects}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
              className={styles.img}
              src="/marsiquerida.jpg"
              alt="Next.js Logo"
              width={200}
              height={200}
              priority
            />
            <p className={styles.desc}>
              Es una aplicación web donde permite tomar ordenes a meseros, permite visualizar en tiempo real las ordenes en cocinas, ver la administración del lugar contando con gráficas, opción para añadir más usuarios y añadir platillos nuevos al menú.
            </p>
            <p className={styles.desc}>
              Con este proyecto tuve oportunidad de poner en practica todo
              lo que sé, aprender typescript, tailwind y trabajr con Nextjs
            </p>
        </a>
        </div>
      </div>
    </main>
  );
}
