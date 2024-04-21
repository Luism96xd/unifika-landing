import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section>
        <div class="section__content">
          <svg>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
              Unifika
            </text>
          </svg>
        </div>
      </section>
      <section>
        <video
          src="https://i.imgur.com/lxtpox0.mp4"
          autoplay
          playsinline
          muted
          loop
        ></video>
        <div class="section__content">
          <p>
            En Unifika queremos crear una plataforma en donde puedas vender tus productos
            y servicios digitales y ganar recompensas por recomendar a otros creadores.
            Todo potenciado por la Blockchain de Hive.
            <br />¡Suena genial! ¿No?.
          </p>
        </div>
      </section>
      <section>
        <div class="section__content">
          <h2>Muy Pronto...</h2>
        </div>
      </section>
    </div>
  )
}
