import './styles/tokens.css'; 
function App() {
  return (
    <>
      
      <header>
        <a href="#main-content" className="skip-link">Ana icerige atla</a> 
        <nav aria-label="Ana navigasyon"> 
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      
      <main id="main-content">
        
        
        <section id="hakkimda">
          <h1>Nefise Beyza Yeniekinci</h1> 
          <h2>Hakkimda</h2> 
          <figure> 
            <img 
              src="profil-fotografin.jpg" 
              alt="Nefise Beyza Yeniekinci'nin profil fotografi" 
              width="200" 
            /> 
            <figcaption>Yazilim Muhendisligi Ogrencisi</figcaption> 
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
          <h2>Projelerim</h2> 
          <article> 
            <h3>E-kin (PlantDoc)</h3> 
            <p>Bitki analizi yapan bir veri tabanı yönetim projesi.</p>
            <p><strong>Teknolojiler:</strong> SQL, Image Processing</p>
          </article>
        </section>

        
        <section id="iletisim">
          <h2>Iletisim</h2> 
          <form action="#" method="POST" noValidate> 
            <fieldset> 
              <legend>Iletisim Formu</legend> 

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label> 
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" 
                /> 
                <small id="name-error" className="error-msg" role="alert"></small> 
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label> 
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                /> 
                <small id="email-error" className="error-msg" role="alert"></small> 
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label> 
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10} 
                  aria-describedby="message-error"
                ></textarea> 
                <small id="message-error" className="error-msg" role="alert"></small> 
              </div>

              <button type="submit">Gonder</button> 
            </fieldset>
          </form>
        </section>

      </main>

      
      <footer>
        <p>&copy; 2026 Nefise Beyza Yeniekinci. Tum haklari saklidir.</p> 
      </footer>
    </>
  )
}

export default App