import './App.css'; // App.css'i de import ettiğinden emin ol
import './styles/tokens.css'; 

function App() {
  return (
    <>
      <header>
        <a href="#main-content" className="skip-link">Ana içeriğe atla</a> 
        <nav aria-label="Ana navigasyon"> 
          {/* Navigasyon artık Flexbox kurallarını uygulayacak */}
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* Hakkımda Bölümü: about-content sınıfını ekledik */}
        <section id="hakkimda">
          <h1>Nefise Beyza Yeniekinci</h1> 
          <div className="about-content">
            <figure> 
              <img 
                src="profil-fotografin.jpg" 
                alt="Nefise Beyza Yeniekinci'nin profil fotografi" 
              /> 
              <figcaption>Yazılım Mühendisliği Ögrencisi</figcaption> 
            </figure>
            <div>
              <h2>Hakkımda</h2>
              <p>Merhaba! Ben Nefise Beyza. Modern web teknolojileriyle ilgileniyorum.</p>
              <h3>Kullandığım Teknolojiler</h3>
              <ul className="tech-list">
                <li>React & TypeScript</li>
                <li>Git & GitHub</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projeler Bölümü: project-grid ve project-card sınıflarını ekledik */}
        <section id="projeler">
          <h2>Projelerim</h2> 
          <div className="project-grid">
            <article className="project-card"> 
              <h3>E-kin (PlantDoc)</h3> 
              <div className="project-info">
                <p>Bitki analizi yapan bir veri tabanı yönetim projesi.</p>
                <p><strong>Teknolojiler:</strong> SQL, Image Processing</p>
              </div>
            </article>
            {/* Buraya yeni projeler eklendiğinde otomatik yan yana dizilecek */}
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2> 
          <form action="#" method="POST" noValidate> 
            <fieldset> 
              <legend>İletişim Formu</legend> 
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label> 
                <input type="text" id="name" name="name" required minLength={2} /> 
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta: </label> 
                <input type="email" id="email" name="email" required /> 
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label> 
                <textarea id="message" name="message" rows={5} required minLength={10}></textarea> 
              </div>
              <button type="submit">Gönder</button> 
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Nefise Beyza Yeniekinci. Tüm hakları saklıdır.</p> 
      </footer>
    </>
  )
}

export default App;