# CSS Kararları

## 1. Breakpoint Seçimi
Neden 640px ve 1024px seçtim?
* Breakpoint değerlerini belirli cihaz modellerine göre değil, içeriğin düzeninin bozulmaya başladığı noktaları esas alarak belirledim.
* Projede üç ana kırılım noktasını hedefledim: Mobil (varsayılan), Tablet (640px ve üzeri) ve Masaüstü (1024px ve üzeri).

## 2. Layout Tercihleri
* **Flexbox:** Navigasyon çubuğu ve buton grupları gibi tek boyutlu hizalama gerektiren alanlarda, elemanları bir eksen boyunca esnek bir şekilde dağıtmak için Flexbox kullandım.
* **CSS Grid:** Proje kartları gibi hem satır hem de sütun bazlı (iki boyutlu) düzenleme gerektiren yapılar için Grid sistemini tercih ettim.
* **auto-fit:** Kart düzeninde `auto-fit` ve `minmax` kombinasyonunu kullanarak, ek bir media query yazmaya gerek kalmadan kartların boş alanı otomatik doldurmasını ve ekran daraldığında sütun sayısının kendiliğinden azalmasını sağladım.

## 3. Design Tokens
* **Renk Paleti:** Projenin görsel tutarlılığını korumak ve bakımını kolaylaştırmak için tüm renk ve boşluk değerlerini `:root` seçicisi altında merkezi CSS değişkenleri (design tokens) olarak tanımladım.
* **Fluid Typography:** Yazı boyutlarının farklı ekran genişliklerinde keskin geçişler yerine akıcı bir şekilde ölçeklenmesi için `clamp()` fonksiyonunu ve `rem + vw` birimlerini kullandım.

## 4. Responsive Stratejiler
* **Mobile-First:** CSS yazımına en küçük ekran (mobil) için temel kurallarla başladım ve büyük ekranlar için özellikleri `min-width` media query'leri kullanarak kademeli olarak ekledim.
* **Görsel Yönetimi:** Görsellerin her ekrana uyum sağlaması için `max-width: 100%` ve `object-fit: cover` özelliklerini kullanarak responsive davranış sergilemelerini sağladım.