import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <ul className={styles.menu}>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#tec">Tecnologías</a>
          </li>
          <li>
            <a href="#proj">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
      <div className={styles.description} id="home">
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
              alt="profile Logo"
              width={140}
              height={180}
              priority
            />
          </a>
        </div>
        <div className={styles.redes}>
          <a 
            href="https://github.com/RicardoOlveraVe" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reds}
          >
            <Image
              className={styles.red}
              src="/tec/github.png"
              alt="github Logo"
              width={80}
              height={80}
              priority
            />
          </a>

          <a 
            href="https://www.linkedin.com/in/ricardo-olvera-velasco-1b73b5230/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reds}
          >
            <Image
              className={styles.red}
              src="/tec/linkedIn.png"
              alt="linkedIn Logo"
              width={80}
              height={80}
              priority
            />
          </a>

          <a 
            href="/doc/CV_RicardoOlvera.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reds}
          >
            <Image
              className={styles.red}
              src="/tec/doc.png"
              alt="CV Logo"
              width={80}
              height={80}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.description} id="tec">
          <h2 className={styles.titulos}>
            Tecnologías
          </h2>
        <div className={styles.tec}>
          <div className={styles.card}>
            <Image
              className={styles.icons}
              src="/tec/js.png"
              alt="JavaScript Logo"
              width={130}
              height={130}
              priority
            />
            <p className={styles.texTec}>JavaScript</p>
          </div>

          <div className={styles.card}>
            <Image
              className={styles.icons}
              src="/tec/ts.png"
              alt="TypeScript Logo"
              width={130}
              height={130}
              priority
            />
            <p className={styles.texTec}>TypeScript</p>
          </div>

          <div className={styles.card}>
            <Image
              className={styles.icons}
              src="/tec/css.jpeg"
              alt="CSS Logo"
              width={130}
              height={130}
              priority
            />
            <p className={styles.texTec}>CSS</p>
          </div>

          <div className={styles.card}>
            <Image
              className={styles.icons}
              src="/tec/node.jpg"
              alt="Node Logo"
              width={130}
              height={130}
              priority
            />
            <p className={styles.texTec}>NodeJS</p>
          </div>

          <div className={styles.card}>
            <Image
              className={styles.icons}
              src="/tec/react.svg"
              alt="React Logo"
              width={130}
              height={130}
              priority
            />
            <p className={styles.texTec}>ReactJS</p>
          </div>

          <div className={styles.card}>
            <Image
              className={styles.icons}
              src="/tec/next.svg"
              alt="Next Logo"
              width={130}
              height={130}
              priority
            />
            <p className={styles.texTec}>Nextjs</p>
          </div>

          <div className={styles.card}>
            <Image
              className={styles.icons}
              src="/tec/tailwind.png"
              alt="Tailwind Logo"
              width={130}
              height={130}
              priority
            />
            <p className={styles.texTec}>Tailwind</p>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.icons}
              src="/tec/swift.png"
              alt="Swift Logo"
              width={130}
              height={130}
              priority
            />
            <p className={styles.texTec}>Swift</p>
          </div>
        </div>
      </div>

      <div className={styles.proy} id="proj">
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
      <div className={styles.sectForm} id="contact">
        <h2 className={styles.formTitle}>Contacto</h2>
        <form className={styles.form}>
          <ul className={styles.formList}>
            <li className={styles.formSect}>
              <label className={styles.formLabel}>Nombre</label>
              <input 
                className={styles.formInput} 
                type="text" 
                id="name" 
                name="user_name" 
                
              />
            </li>
            <li className={styles.formSect}>
              <label className={styles.formLabel}>Correo electrónico</label>
              <input 
                className={styles.formInput} 
                type="email" 
                id="mail" 
                name="user_mail"
                
              />
            </li>
            <li className={styles.formSect}>
              <label className={styles.formLabel}>Teléfono</label>
              <input 
                className={styles.formInput} 
                type="tel" 
                id="phone" 
                name="user_phone"
                
              />
            </li>
            <li className={styles.formSect}>
              <label className={styles.formLabel}>Mensaje</label>
              <textarea 
                className={styles.formText} 
                id="msg" 
                name="user_message"
                
              ></textarea>
            </li>
            <button className={styles.formButton} >Enviar</button>
          </ul>
        </form>
      </div>
    </main>
  );
}

export function useClient() {
  return null;
}