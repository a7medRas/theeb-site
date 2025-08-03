
document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('toggleLang');
  const modeBtn = document.getElementById('toggleMode');
  const isRTL = () => document.documentElement.getAttribute('dir') === 'rtl';

  langBtn.onclick = () => {
    const isArabic = isRTL();
    document.documentElement.setAttribute('dir', isArabic ? 'ltr' : 'rtl');
    document.documentElement.setAttribute('lang', isArabic ? 'en' : 'ar');
    langBtn.textContent = isArabic ? 'Switch to Arabic' : 'تغيير اللغة';
    modeBtn.textContent = isArabic ? 'Toggle Dark Mode' : 'تغير الوضع الليلى';

    // تبديل النصوص (مثال مبسط)
    document.querySelector('header').textContent = isArabic ? 'Theeb Foundation' : 'مؤسسة ذيب';
    const navLinks = document.querySelectorAll('nav a');
    const titles = isArabic 
      ? ['Home', 'Guide', 'Upgrades', 'Bills', 'Events', 'Entertainment', 'Games']
      : ['الرئيسية', 'دليل المذيع', 'الترقيات', 'الفواتير', 'الفاعليات', 'ترفيه', 'ألعاب'];
    navLinks.forEach((link, i) => link.textContent = titles[i]);

    const h2 = document.querySelector('main h2');
    const p = document.querySelector('main p');
    if (h2 && p) {
      h2.textContent = isArabic ? 'Section Title' : 'عنوان القسم';
      p.textContent = isArabic 
        ? 'Section content will be added soon.' 
        : 'محتوى القسم سيتم إضافته لاحقًا.';
    }

    const footer = document.querySelector('footer');
    if (footer) {
      footer.innerHTML = isArabic 
        ? '&copy; 2025 Theeb Foundation. All rights reserved.' 
        : '&copy; 2025 مؤسسة ذيب. جميع الحقوق محفوظة.';
    }
  };

  // الوضع الليلي
  modeBtn.onclick = () => {
    document.body.classList.toggle('dark-mode');
  };

  // Scroll animation
  const fadeElems = document.querySelectorAll('.scroll-fade');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  fadeElems.forEach(el => observer.observe(el));
});
