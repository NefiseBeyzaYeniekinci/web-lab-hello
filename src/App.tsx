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
          <h2>Hakkimda</h2>
          {/* İçerik buraya gelecek */}
        </section>

        {/* Projeler Bölümü [cite: 125, 127] */}
        <section id="projeler">
          <h2>Projelerim</h2>
          {/* Proje kartları buraya gelecek */}
        </section>

        {/* İletişim Bölümü [cite: 134, 135] */}
        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* Form buraya gelecek */}
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