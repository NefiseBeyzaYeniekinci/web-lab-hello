function App() {
  return (
    <>
      
      <header>
        <a href="#main-content" className="skip-link">Ana icerige atla</a> [cite: 330]
        <nav aria-label="Ana navigasyon"> [cite: 316]
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      
      <main id="main-content">
        
        
        <section id="hakkimda">
          <h1>Nefise Beyza Yeniekinci</h1> [cite: 203]
          <h2>Hakkimda</h2> [cite: 207]
          <figure> [cite: 255]
            <img 
              src="profil-fotografin.jpg" 
              alt="Nefise Beyza Yeniekinci'nin profil fotografi" 
              width="200" 
            /> [cite: 253]
            <figcaption>Yazilim Muhendisligi Ogrencisi</figcaption> [cite: 259]
          </figure>
          <p>Merhaba! Ben Nefise Beyza. Modern web teknolojileriyle ilgileniyorum.</p>
          <h3>Kullandigim Teknolojiler</h3>
          <ul>
            <li>React & TypeScript</li>
            <li>Git & GitHub</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </section>

        
        <section id="projeler">
          <h2>Projelerim</h2> [cite: 127]
          <article> [cite: 532]
            <h3>E-kin (PlantDoc)</h3> [cite: 533]
            <p>Bitki analizi yapan bir veri tabanı yönetim projesi.</p>
            <p><strong>Teknolojiler:</strong> SQL, Image Processing</p>
          </article>
          <article> [cite: 532]
            <h3>BookVerse</h3> [cite: 533]
            <p>Mikroservis mimarisi ile geliştirilmiş kitap yönetim sistemi.</p>
            <p><strong>Teknolojiler:</strong> Spring Boot, Java</p>
          </article>
        </section>

        
        <section id="iletisim">
          <h2>Iletisim</h2> [cite: 135]
          <form action="#" method="POST" noValidate> [cite: 426]
            <fieldset> [cite: 427]
              <legend>Iletisim Formu</legend> [cite: 428]

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label> [cite: 430]
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" 
                /> [cite: 431, 432, 434]
                <small id="name-error" className="error-msg" role="alert"></small> [cite: 433]
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label> [cite: 444]
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                /> [cite: 445, 446, 448]
                <small id="email-error" className="error-msg" role="alert"></small> [cite: 451, 453]
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label> [cite: 486]
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10} 
                  aria-describedby="message-error"
                ></textarea> [cite: 487, 488]
                <small id="message-error" className="error-msg" role="alert"></small> [cite: 489, 491]
              </div>

              <button type="submit">Gonder</button> [cite: 494]
            </fieldset>
          </form>
        </section>

      </main>

      {/* 3. Footer: Telif hakkı [cite: 539, 540] */}
      <footer>
        <p>&copy; 2026 Nefise Beyza Yeniekinci. Tum haklari saklidir.</p> [cite: 149]
      </footer>
    </>
  )
}

export default App