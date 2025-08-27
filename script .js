const services = [
  { id: 1, name: 'استشارة', description: 'استشارة طبية لتقييم حالة الأسنان.', image: 'https://via.placeholder.com/300x240?text=استشارة', duration: '30 دقيقة', benefits: 'تشخيص دقيق، خطة علاج مخصصة.', details: 'استشارات شاملة مع أطباء متخصصين لتقييم حالة الأسنان ووضع خطة علاج مناسبة.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 2, name: 'تنظيف الأسنان', description: 'إزالة الجير والبقع.', image: 'https://via.placeholder.com/300x240?text=تنظيف', duration: '30 دقيقة', benefits: 'منع التسوس، تحسين صحة اللثة.', details: 'تنظيف عميق باستخدام الموجات فوق الصوتية لإزالة الجير والبقع.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 3, name: 'تبييض الأسنان', description: 'تبييض الأسنان بأمان وسرعة.', image: 'https://via.placeholder.com/300x240?text=تبييض', duration: '1 ساعة', benefits: 'ابتسامة مشرقة وجذابة.', details: 'تبييض باستخدام تقنية الليزر الآمنة للحصول على ابتسامة مشرقة.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 4, name: 'توريد اللثة', description: 'علاج تصبغ اللثة.', image: 'https://via.placeholder.com/300x240?text=توريد', duration: '1 ساعة', benefits: 'لثة صحية ومظهر جمالي.', details: 'توريد اللثة باستخدام الليزر لتحسين اللون والمظهر.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 5, name: 'حشو عادي', description: 'حشوات لعلاج التسوس.', image: 'https://via.placeholder.com/300x240?text=حشو', duration: '45 دقيقة', benefits: 'إصلاح التسوس بسرعة.', details: 'حشوات متينة وآمنة لعلاج التسوس.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 6, name: 'حشو تجميلي أمامي', description: 'حشوات للأسنان الأمامية.', image: 'https://via.placeholder.com/300x240?text=حشو+تجميلي', duration: '1 ساعة', benefits: 'مظهر طبيعي وجميل.', details: 'حشوات مطابقة للون الأسنان لتحسين المظهر.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 7, name: 'زراعة الأسنان', description: 'زراعة أسنان دائمة.', image: 'https://via.placeholder.com/300x240?text=زراعة', duration: '3-6 أشهر', benefits: 'حل دائم للأسنان المفقودة.', details: 'زراعة بتقنية ثلاثية الأبعاد لضمان الدقة.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 8, name: 'تركيبات ثابتة', description: 'تركيبات دائمة.', image: 'https://via.placeholder.com/300x240?text=تركيبات', duration: '2-4 أسابيع', benefits: 'متانة ومظهر طبيعي.', details: 'تركيبات زيركون عالية الجودة.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 9, name: 'تركيبات متحركة', description: 'تركيبات قابلة للإزالة.', image: 'https://via.placeholder.com/300x240?text=تركيبات+متحركة', duration: '1-2 أسابيع', benefits: 'راحة وسهولة الاستخدام.', details: 'تركيبات مرنة ومريحة.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] }
];

const weekSchedule = {
  'الأحد': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الإثنين': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الثلاثاء': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الأربعاء': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الخميس': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الجمعة': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'السبت': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م']
};

const faqResponses = {
  'ساعات العمل': 'نعمل يوميًا من الساعة 4:00 م إلى 11:00 م.',
  'كيف أحجز موعد': 'يمكنك الحجز من خلال قسم "احجز موعدك" على الموقع، اختر الخدمة والموعد المناسب ثم أدخل بياناتك.',
  'الخدمات المتوفرة': 'نقدم خدمات مثل الاستشارة، تنظيف الأسنان، تبييض الأسنان، زراعة الأسنان، والتركيبات الثابتة والمتحركة.',
  'العنوان': 'العنوان: 27 شارع 26 يوليو - أعلى سينما ريفولي - أمام دار القضاء العالي - وسط البلد - القاهرة.',
  'رقم الهاتف': 'رقم الهاتف: +201030956097',
  'هل يوجد وضع ليلي': 'نعم، يمكنك تفعيل الوضع الليلي من زر القمر/الشمس في الأعلى.',
  'ما هي مدة زراعة الأسنان': 'زراعة الأسنان تستغرق من 3 إلى 6 أشهر حسب الحالة.'
};

window.addEventListener('load', () => {
  // إخفاء الـ Loader
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 500);

  // عرض رسالة ترحيبية
  Swal.fire({
    title: 'مرحبًا بكم في مركز ريفولي لطب الأسنان!',
    text: 'اكتشف خدماتنا المتقدمة واحجز موعدك الآن للحصول على ابتسامة مثالية.',
    icon: 'info',
    confirmButtonText: 'موافق',
    confirmButtonColor: '#4FC3F7',
    allowOutsideClick: false,
    width: '95%',
    padding: '1rem'
  });

  // تحميل الوضع الليلي إن وجد
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
  }

  // تهيئة AOS مع تحسين للجوال
  AOS.init({
    duration: 800,
    once: true,
    offset: 60,
    disable: window.innerWidth < 480
  });

  // تهيئة الوظائف
  displayServices();
  displaySchedule();
  initGallery();
  initTestimonials();
  initMap();
  initChatbot();

  // زر العودة للأعلى
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 150 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // التعامل مع حالة الاتصال
  window.addEventListener('offline', () => {
    Swal.fire('غير متصل', 'أنت غير متصل بالإنترنت. يمكنك تصفح المحتوى المخزن.', 'warning');
  });
  window.addEventListener('online', () => {
    Swal.fire('متصل', 'تم استعادة الاتصال بالإنترنت!', 'success');
  });
});

// قائمة التنقل في الجوال
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

document.addEventListener('scroll', () => {
  if (navMenu.classList.contains('active')) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// تبديل الوضع الليلي
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

// عرض الخدمات
const servicesContainer = document.getElementById('services-container');
const serviceSelect = document.getElementById('service-select');

function displayServices() {
  servicesContainer.innerHTML = '';
  serviceSelect.innerHTML = '<option value="">اختر الخدمة</option>';
  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service-card');
    serviceCard.setAttribute('data-aos', 'fade-up');
    serviceCard.innerHTML = `
      <img src="${service.image}" alt="${service.name} - مركز ريفولي لطب الأسنان" loading="lazy">
      <h3>${service.name}</h3>
      <div class="details">
        <p>${service.description}</p>
        <p><strong>المدة:</strong> ${service.duration}</p>
        <p><strong>الفوائد:</strong> ${service.benefits}</p>
        <button class="more-info neon-button" onclick="showServiceDetails(${service.id})" aria-label="مزيد من المعلومات عن ${service.name}">مزيد من المعلومات</button>
      </div>
    `;
    servicesContainer.appendChild(serviceCard);

    const option = document.createElement('option');
    option.value = service.id;
    option.textContent = service.name;
    serviceSelect.appendChild(option);
  });
}

// عرض تفاصيل الخدمة
function showServiceDetails(serviceId) {
  const service = services.find(s => s.id === serviceId);
  if (!service) {
    Swal.fire({
      title: 'خطأ',
      text: 'الخدمة غير موجودة',
      icon: 'error',
      confirmButtonColor: '#4FC3F7',
      width: '95%',
      padding: '1rem'
    });
    return;
  }
  const sliderId = `swiper-${service.id}`;
  Swal.fire({
    title: service.name,
    html: `
      <p style="font-size: clamp(0.9rem, 2.5vw, 1.1rem); margin-bottom: 1rem; text-align: right;">${service.details}</p>
      <iframe src="${service.video}" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="swiper" id="${sliderId}">
        <div class="swiper-wrapper">
          ${service.images.map(img => `<div class="swiper-slide"><img src="${img}" alt="صورة ${service.name}" onclick="showFullImage('${img}')"></div>`).join('')}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
      <button class="cta-button neon-button" onclick="bookService(${service.id})" aria-label="حجز خدمة ${service.name}">احجز الآن</button>
    `,
    showConfirmButton: false,
    showCloseButton: true,
    width: '95%',
    maxWidth: '900px',
    customClass: { popup: 'swal2-service-details' },
    didOpen: () => {
      new Swiper(`#${sliderId}`, {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true },
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        touchRatio: 1.5
      });
    }
  });
}

// عرض الصورة بالحجم الكامل
function showFullImage(imageUrl) {
  Swal.fire({
    imageUrl: imageUrl,
    imageAlt: 'صورة بالحجم الكامل - مركز ريفولي',
    showConfirmButton: false,
    showCloseButton: true,
    background: 'rgba(0, 0, 0, 0.9)',
    imageWidth: '90%',
    imageHeight: 'auto',
    width: '95%',
    padding: '1rem'
  });
}

// الانتقال إلى قسم الحجز
function bookService(serviceId) {
  const serviceSelect = document.getElementById('service-select');
  const bookingSection = document.getElementById('booking');
  if (!serviceSelect || !bookingSection) {
    Swal.fire({
      title: 'خطأ',
      text: 'قسم الحجز أو قائمة الخدمات غير موجودة',
      icon: 'error',
      confirmButtonColor: '#4FC3F7',
      width: '95%',
      padding: '1rem'
    });
    return;
  }
  Swal.close();
  serviceSelect.value = serviceId;
  bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => document.getElementById('patient-name').focus(), 500);
}

// تهيئة معرض الصور
function initGallery() {
  new Swiper('.gallery-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    touchRatio: 1.5,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 20 }
    }
  });

  document.querySelectorAll('.gallery-slider .swiper-slide img').forEach(img => {
    img.addEventListener('click', () => showFullImage(img.src));
  });
}

// تهيئة قسم الآراء
function initTestimonials() {
  new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    touchRatio: 1.5,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 20 }
    }
  });
}

// جدول الحجوزات
let selectedSlot = null;
function displaySchedule() {
  const scheduleBody = document.getElementById('schedule-body');
  const times = ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'];
  const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

  times.forEach(time => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${time}</td>`;
    days.forEach(day => {
      const isAvailable = weekSchedule[day].includes(time);
      row.innerHTML += `
        <td>
          ${isAvailable ? `<button class="available" data-day="${day}" data-time="${time}" aria-label="اختيار موعد ${time} يوم ${day}">متاح</button>` : 'غير متاح'}
        </td>`;
    });
    scheduleBody.appendChild(row);
  });

  document.querySelectorAll('.available').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.available').forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      selectedSlot = { day: button.dataset.day, time: button.dataset.time };
      document.getElementById('confirm-booking').disabled = false;
    });
  });

  document.getElementById('clear-selection').addEventListener('click', () => {
    document.querySelectorAll('.available').forEach(btn => btn.classList.remove('selected'));
    selectedSlot = null;
    document.getElementById('confirm-booking').disabled = true;
  });

  document.getElementById('confirm-booking').addEventListener('click', () => {
    const name = document.getElementById('patient-name').value.trim();
    const phone = document.getElementById('patient-phone').value.trim();
    const serviceId = document.getElementById('service-select').value;

    if (!name || !phone || !serviceId || !selectedSlot) {
      Swal.fire({
        title: 'خطأ',
        text: 'يرجى ملء جميع الحقول واختيار موعد',
        icon: 'error',
        confirmButtonColor: '#4FC3F7',
        width: '95%',
        padding: '1rem'
      });
      return;
    }

    const service = services.find(s => s.id === parseInt(serviceId));
    Swal.fire({
      title: 'تم الحجز بنجاح!',
      html: `
        <p style="font-size: clamp(0.9rem, 2.5vw, 1rem); text-align: right;">
          <strong>الاسم:</strong> ${name}<br>
          <strong>رقم الهاتف:</strong> ${phone}<br>
          <strong>الخدمة:</strong> ${service.name}<br>
          <strong>الموعد:</strong> ${selectedSlot.day} - ${selectedSlot.time}
        </p>
      `,
      icon: 'success',
      confirmButtonText: 'موافق',
      confirmButtonColor: '#4FC3F7',
      width: '95%',
      padding: '1rem'
    }).then(() => {
      document.getElementById('booking-form').reset();
      document.querySelectorAll('.available').forEach(btn => btn.classList.remove('selected'));
      selectedSlot = null;
      document.getElementById('confirm-booking').disabled = true;
    });
  });
}

// تهيئة الخريطة
function initMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoieG9uYXJ0aXN0cyIsImEiOiJjbTJ2cTVtMW8wM2V0MnJwc2EyM3Q1azA0In0.9W0qENSA4O-4--q-3v0qQQ';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [31.241054, 30.052856],
    zoom: 15,
    pitch: 45,
    bearing: 0,
    interactive: true
  });

  // إضافة أدوات التحكم في التنقل
  map.addControl(new mapboxgl.NavigationControl());

  // إضافة علامة مخصصة
  const marker = new mapboxgl.Marker({
    color: '#4FC3F7',
    draggable: false
  })
    .setLngLat([31.241054, 30.052856])
    .setPopup(new mapboxgl.Popup().setHTML('<div class="map-marker-label">مركز ريفولي لطب الأسنان</div>'))
    .addTo(map);

  // دوران الخريطة
  let bearing = 0;
  let isRotating = true;
  function rotateMap() {
    if (isRotating) {
      bearing += 0.1;
      map.setBearing(bearing % 360);
    }
    requestAnimationFrame(rotateMap);
  }
  rotateMap();

  // التحكم في دوران الخريطة
  document.getElementById('toggle-rotation').addEventListener('click', () => {
    isRotating = !isRotating;
    document.getElementById('toggle-rotation').textContent = isRotating ? 'إيقاف الدوران' : 'تشغيل الدوران';
  });

  // الذهاب إلى موقع المركز
  document.getElementById('go-to-center').addEventListener('click', () => {
    map.flyTo({
      center: [31.241054, 30.052856],
      zoom: 15,
      pitch: 45,
      bearing: 0,
      speed: 0.8,
      curve: 1
    });
    marker.togglePopup();
  });

  // تحسين إمكانية الوصول
  document.getElementById('map').setAttribute('tabindex', '0');
  document.getElementById('map').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      map.flyTo({ center: [31.241054, 30.052856], zoom: 15 });
      marker.togglePopup();
    }
  });
}

// تهيئة الشات بوت
function initChatbot() {
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');
  const chatbotResponse = document.getElementById('chatbot-response');

  chatbotToggle.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
    if (chatbotWindow.style.display === 'block') {
      chatbotInput.focus();
    }
  });

  chatbotSend.addEventListener('click', () => {
    const question = chatbotInput.value.trim();
    if (!question) {
      chatbotResponse.innerHTML = '<p style="color: #ff4444;">يرجى كتابة سؤال!</p>';
      return;
    }

    const response = Object.keys(faqResponses).find(key => question.includes(key)) || 'default';
    chatbotResponse.innerHTML = response !== 'default'
      ? `<p>${faqResponses[response]}</p>`
      : `<p>عذرًا، لم أفهم سؤالك. يرجى التواصل معنا على <a href="tel:+201030956097">+201030956097</a> للمزيد من المساعدة.</p>`;
    chatbotInput.value = '';
    chatbotResponse.scrollTop = chatbotResponse.scrollHeight;
  });

  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      chatbotSend.click();
    }
  });
}

// تحسين إمكانية الوصول للوحة المفاتيح
document.querySelectorAll('button, a, input, select').forEach(element => {
  element.addEventListener('focus', () => {
    element.style.outline = '2px solid #4FC3F7';
  });
  element.addEventListener('blur', () => {
    element.style.outline = 'none';
  });
});

// تحسين الأداء مع Intersection Observer لتحميل المحتوى الكسول
const lazyLoadSections = () => {
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
};
lazyLoadSections();