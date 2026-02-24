function App() {
  return (
    <>
      {/* 1. Header ve Navigasyon: Sayfanın başlık ve menü alanı [cite: 77, 79] */}
      <header>
        <nav aria-label="Ana navigasyon"> {/* Erişilebilirlik için etiket ekledik [cite: 316] */}
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      {/* 2. Main: Sayfanın birincil içeriği (Sadece 1 tane olmalı) [cite: 83] */}
      <main id="main-content">
        
        {/* Hakkımda Bölümü [cite: 85, 113] */}
        <section id="hakkimda">
  {/* Sayfadaki tek ve ana başlık [cite: 192] */}
  <h1>Nefise Beyza Yeniekinci</h1> 
  <h2>Hakkimda</h2>
  
  <figure>
    {/* alt metni görseli tanımlar, figcaption ise açıklama ekler [cite: 253, 259] */}
    <img src="profil-fotografin.jpg" alt="Nefise Beyza Yeniekinci'nin profil fotografi" width="200" />
    <figcaption>Yazilim Muhendisligi Ogrencisi</figcaption>
  </figure>

  <p>
    Merhaba! Ben Nefise Beyza. Modern web teknolojileri ve yazilim mimarileriyle ilgileniyorum.
  </p>
  
  <h3>Kullandigim Teknolojiler</h3>
  <ul>
    <li>React & TypeScript</li>
    <li>Git & GitHub</li>
    <li>HTML5 & CSS3</li>
  </ul>
</section>

      </main>

      {/* 3. Footer: Telif hakkı ve alt bilgiler [cite: 94, 148] */}
      <footer>
        <p>&copy; 2026 Nefise Beyza Yeniekinci. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}

export default App