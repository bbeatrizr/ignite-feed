import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/bbeatrizr.png" />
          <div className={styles.authorInfo}>
            <strong>Beatriz Ramalho</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="23 de Novembro às 18:00h"
          dateTime="2022-11-23 06:00:30 PM"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉{""} <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          {""} <a>#nlw</a>
          {""} <a> #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
