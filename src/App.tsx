import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import UIKit from './pages/UIKit';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [showUIKit, setShowUIKit] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-50 transition-colors duration-200">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana icerige atla
      </a>

      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        {!isDark ? <span>&#9790;</span> : <span>&#9728;</span>}
      </button>

      <div className="fixed top-16 right-4 z-50">
        <Button size="sm" variant={showUIKit ? "secondary" : "primary"} onClick={() => setShowUIKit(!showUIKit)}>
          {showUIKit ? "Portföye Dön" : "UI Kit Göster"}
        </Button>
      </div>

      {showUIKit ? (
        <UIKit />
      ) : (
        <main id="main-content">
          <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
              <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                Nefise Beyza Yeniekinci
              </h1>
              <nav aria-label="Ana navigasyon">
                <ul className="flex flex-wrap gap-2">
                  <li><a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Hakkimda</a></li>
                  <li><a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Projeler</a></li>
                  <li><a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Iletisim</a></li>
                </ul>
              </nav>
            </div>
          </header>

          <section id="hakkimda" className="py-16 px-4 bg-white dark:bg-gray-950 transition-colors">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
              <figure className="shrink-0">
                <div className="w-40 h-40 rounded-full bg-blue-100 dark:bg-blue-900 shadow-lg flex items-center justify-center text-blue-800 dark:text-blue-300 text-4xl font-bold overflow-hidden object-cover">
                  NB
                </div>
              </figure>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                  Hakkimda
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Ben Nefise Beyza, Yazılım Mühendisliği Öğrencisiyim. Yapay zeka, mobil ve web alanlarına ilgi duyuyorum. Modern teknolojilerle kullanıcı dostu projeler oluşturmayı hedefliyorum.
                  <br />
                  Öğrenci No: 230541059
                </p>
                <ul className="flex flex-wrap gap-2">
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</li>
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</li>
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Tailwind</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                Projelerim
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="elevated" title="e-kin" image="https://via.placeholder.com/400x200?text=Proje+1" imageAlt="e-kin uygulamasinin kapak fotografi">
                  Kapsamli proje ve e-ticaret uygulamasi.
                </Card>
                <Card variant="outlined" title="Movision" image="https://via.placeholder.com/400x200?text=Proje+2" imageAlt="Movision film uygulamasinin kapak fotografi">
                  Film ve dizi takip portali.
                </Card>
                <Card variant="filled" title="Görev Yöneticisi" image="https://via.placeholder.com/400x200?text=Proje+3" imageAlt="Uygulama gorunumu" footer={<Button size="sm">İncele</Button>}>
                  TypeScript ve React kullanılarak gelistirilen gorev takip araci.
                </Card>
              </div>
            </div>
          </section>

          <section id="iletisim" className="py-16 px-4 bg-white dark:bg-gray-950 transition-colors">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Iletisim
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input id="name" label="Ad Soyad" required />
                <Input id="email" label="E-posta" type="email" required />
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mesajiniz
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"
                  ></textarea>
                </div>
                <Button variant="primary" size="lg" type="submit">
                  Gonder
                </Button>
              </form>
            </div>
          </section>

          <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm transition-colors">
            <p>&copy; 2025 Nefise Beyza Yeniekinci. Tum haklari saklidir.</p>
          </footer>
        </main>
      )}
    </div>
  );
}