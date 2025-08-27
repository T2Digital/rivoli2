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

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);

  Swal.fire({
    title: 'مرحبًا بكم في مركز ريفولي لطب الأسنان!',
    text: 'اكتشف خدماتنا المتقدمة واحجز موعدك الآن للحصول على ابتسامة مثالية.',
    icon: 'info',
    confirmButtonText: 'موافق',
    confirmButtonColor: '#4FC3F7'
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
  }

  AOS.init({
    duration: 1000,
    once: true,
    offset: 80
  });

  displayServices();
  displaySchedule();
  initGallery();
  initTestimonials();
  initMap();
  initChatbot();

  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('offline', () => {
    Swal.fire('غير متصل', 'أنت غير متصل بالإنترنت. يمكنك تصفح المحتوى المخزن.', 'warning');
  });
});

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
        <button class="more-info neon-button" onclick="showServiceDetails(${service.id})">مزيد من المعلومات</button>
      </div>
    `;
    servicesContainer.appendChild(serviceCard);

    const option = document.createElement('option');
    option.value = service.id;
    option.textContent = service.name;
    serviceSelect.appendChild(option);
  });
}

function showServiceDetails(serviceId) {
  const service = services.find(s => s.id === serviceId);
  if (!service) {
    Swal.fire('خطأ', 'الخدمة غير موجودة', 'error');
    return;
  }
  const sliderId = `swiper-${service.id}`;
  Swal.fire({
    title: service.name,
    html: `
      <p style="font-size: 1.1rem; margin-bottom: 1rem; text-align: right;">${service.details}</p>
      <iframe src="${service.video}" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="swiper" id="${sliderId}">
        <div class="swiper-wrapper">
          ${service.images.map(img => `<div class="swiper-slide"><img src="${img}" alt="صورة ${service.name}" onclick="showFullImage('${img}')"></div>`).join('')}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
      <button class="cta-button neon-button" onclick="bookService(${service.id})">احجز الآن</button>
    `,
    showConfirmButton: false,
    showCloseButton: true,
    width: '95%',
    maxWidth: '900px',
    didOpen: () => {
      new Swiper(`#${sliderId}`, {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    },
    customClass: {
      popup: 'swal2-service-details'
    }
  });
}

function showFullImage(imageUrl) {
  Swal.fire({
    imageUrl: imageUrl,
    imageAlt: 'صورة بالحجم الكامل - مركز ريفولي',
    showConfirmButton: false,
    showCloseButton: true,
    background: 'rgba(0, 0, 0, 0.9)',
    imageWidth: '90%',
    imageHeight: 'auto',
  });
}

function bookService(serviceId) {
  const serviceSelect = document.getElementById('service-select');
  const bookingSection = document.getElementById('booking');
  if (!serviceSelect || !bookingSection) {
    Swal.fire('خطأ', 'قسم الحجز أو قائمة الخدمات غير موجودة', 'error');
    return;
  }
  Swal.close();
  serviceSelect.value = serviceId;
  bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => {
    document.getElementById('patient-name').focus();
  }, 500);
}

function initGallery() {
  new Swiper('.gallery-slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  });

  document.querySelectorAll('.gallery-slider .swiper-slide img').forEach(img => {
    img.addEventListener('click', () => showFullImage(img.src));
  });
}

function initTestimonials() {
  new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  });
}

let selectedSlot = null;
function displaySchedule() {
  const scheduleBody = document.getElementById('schedule-body');
  const times = ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'];
  scheduleBody.innerHTML = '';
  times.forEach(time => {
    const row = document.createElement('tr');
    const timeCell = document.createElement('td');
    timeCell.textContent = time;
    row.appendChild(timeCell);
    ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].forEach(day => {
      const button = document.createElement('button');
      button.textContent = time;
      button.classList.add('available');
      button.setAttribute('aria-label', `حجز موعد يوم ${day} الساعة ${time}`);
      button.addEventListener('click', () => selectSlot(day, time, button));
      const td = document.createElement('td');
      td.appendChild(button);
      row.appendChild(td);
    });
    scheduleBody.appendChild(row);
  });
}

function selectSlot(day, time, button) {
  const serviceSelect = document.getElementById('service-select');
  if (!serviceSelect.value) {
    Swal.fire('خطأ', 'يرجى اختيار الخدمة أولاً', 'error');
    return;
  }

  document.querySelectorAll('.schedule-table button.selected').forEach(btn => {
    btn.classList.remove('selected');
    btn.classList.add('available');
  });

  button.classList.remove('available');
  button.classList.add('selected');
  selectedSlot = { day, time };
  document.getElementById('confirm-booking').disabled = false;

  Swal.fire({
    title: 'تم اختيار الموعد',
    text: `يوم ${day} الساعة ${time}`,
    icon: 'info',
    confirmButtonText: 'موافق',
    confirmButtonColor: '#4FC3F7'
  });
}

document.getElementById('clear-selection').addEventListener('click', () => {
  document.querySelectorAll('.schedule-table button.selected').forEach(btn => {
    btn.classList.remove('selected');
    btn.classList.add('available');
  });
  selectedSlot = null;
  document.getElementById('confirm-booking').disabled = true;
  Swal.fire('تم الإلغاء', 'تم إلغاء اختيار الموعد', 'info');
});

document.getElementById('confirm-booking').addEventListener('click', async () => {
  const name = document.getElementById('patient-name').value.trim();
  const phone = document.getElementById('patient-phone').value.trim();
  const serviceId = document.getElementById('service-select').value;

  if (!name || !phone || !serviceId || !selectedSlot) {
    Swal.fire('خطأ', 'يرجى إدخال جميع البيانات واختيار موعد', 'error');
    return;
  }

  if (!/^\d{11}$/.test(phone)) {
    Swal.fire('خطأ', 'يرجى إدخال رقم هاتف صحيح (11 رقم)', 'error');
    return;
  }

  const service = services.find(s => s.id === parseInt(serviceId));
  const bookingDate = new Date();
  bookingDate.setDate(bookingDate.getDate() + 7);
  const formattedDate = bookingDate.toLocaleDateString('ar-EG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const message = encodeURIComponent(
    `حجز جديد:\n` +
    `الاسم: ${name}\n` +
    `رقم الهاتف: ${phone}\n` +
    `الخدمة: ${service.name}\n` +
    `اليوم: ${selectedSlot.day}\n` +
    `الساعة: ${selectedSlot.time}\n` +
    `التاريخ: ${formattedDate}`
  );

  try {
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, service: service.name, day: selectedSlot.day, time: selectedSlot.time })
    });
    if (!response.ok) throw new Error('فشل في تسجيل الحجز');
  } catch (error) {
    Swal.fire('خطأ', 'تعذر تسجيل الحجز في النظام', 'error');
    return;
  }

  Swal.fire({
    title: 'ملخص الحجز',
    html: `
      <p><strong>الاسم:</strong> ${name}</p>
      <p><strong>رقم الهاتف:</strong> ${phone}</p>
      <p><strong>الخدمة:</strong> ${service.name}</p>
      <p><strong>اليوم:</strong> ${selectedSlot.day}</p>
      <p><strong>الساعة:</strong> ${selectedSlot.time}</p>
      <p><strong>التاريخ:</strong> ${formattedDate}</p>
    `,
    icon: 'success',
    iconHtml: '<i class="fab fa-whatsapp"></i>',
    confirmButtonText: 'إرسال إلى واتساب',
    cancelButtonText: 'إلغاء',
    showCancelButton: true,
    confirmButtonColor: '#4FC3F7',
    cancelButtonColor: '#D32F2F'
  }).then(result => {
    if (result.isConfirmed) {
      window.open(`https://wa.me/+201030956097?text=${message}`, '_blank');
      document.getElementById('patient-name').value = '';
      document.getElementById('patient-phone').value = '';
      document.getElementById('service-select').value = '';
      selectedSlot = null;
      document.getElementById('confirm-booking').disabled = true;
      document.querySelectorAll('.schedule-table button.selected').forEach(btn => {
        btn.classList.remove('selected');
        btn.classList.add('available');
      });
      Swal.fire({
        title: 'تم الحجز!',
        text: 'تم إرسال الحجز عبر واتساب.',
        icon: 'success',
        iconHtml: '<i class="fab fa-whatsapp"></i>',
        confirmButtonText: 'موافق',
        confirmButtonColor: '#4FC3F7'
      });
    }
  });
});

function initMap() {
  mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
  const revoliLocation = [31.241054, 30.052856];
  const highCourtLocation = [31.240834, 30.052645];

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: revoliLocation,
    zoom: 17,
    pitch: 60,
    bearing: -30,
    antialias: true
  });

  map.on('load', () => {
    const revoliLabel = document.createElement('div');
    revoliLabel.className = 'map-marker-label';
    revoliLabel.textContent = 'مركز ريفولي لطب الأسنان';
    revoliLabel.style.direction = 'rtl';
    revoliLabel.style.textAlign = 'right';

    const revoliMarker = new mapboxgl.Marker({ color: '#4FC3F7', scale: 1.2 })
      .setLngLat(revoliLocation)
      .setPopup(new mapboxgl.Popup({ offset: 30, closeButton: false }).setDOMContent(revoliLabel))
      .addTo(map);

    let scale = 1.2;
    setInterval(() => {
      scale = scale === 1.2 ? 1.4 : 1.2;
      revoliMarker.getElement().style.transform = `scale(${scale})`;
      revoliMarker.getElement().style.transition = 'transform 0.5s ease';
    }, 1000);

    const courtLabel = document.createElement('div');
    courtLabel.className = 'map-marker-label';
    courtLabel.textContent = 'دار القضاء العالي';
    courtLabel.style.direction = 'rtl';
    courtLabel.style.textAlign = 'right';

    new mapboxgl.Marker({ color: '#FF5733', scale: 1 })
      .setLngLat(highCourtLocation)
      .setPopup(new mapboxgl.Popup({ offset: 30, closeButton: false }).setDOMContent(courtLabel))
      .addTo(map);

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
  });

  let bearing = -30;
  let isRotating = true;
  const rotationInterval = setInterval(() => {
    if (isRotating) {
      bearing -= 0.3;
      map.setBearing(bearing);
    }
  }, 50);

  const toggleRotationButton = document.getElementById('toggle-rotation');
  if (toggleRotationButton) {
    toggleRotationButton.style.display = 'block';
    toggleRotationButton.addEventListener('click', () => {
      isRotating = !isRotating;
      toggleRotationButton.textContent = isRotating ? 'إيقاف الدوران' : 'تشغيل الدوران';
    });
  }

  const goToCenterButton = document.getElementById('go-to-center');
  if (goToCenterButton) {
    goToCenterButton.style.display = 'block';
    goToCenterButton.addEventListener('click', () => {
      const googleMapsUrl = 'https://maps.app.goo.gl/nomPXakQ9DuhC8Lx8';
      try {
        const newWindow = window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          Swal.fire({
            title: 'خطأ',
            html: `
              تعذر فتح جوجل مابس. قد يكون المتصفح يحظر النوافذ المنبثقة.<br>
              <a href="${googleMapsUrl}" target="_blank" style="color: #4FC3F7; text-decoration: underline;">اضغط هنا لفتح الموقع يدويًا</a><br>
              أو انسخ الرابط: <input type="text" value="${googleMapsUrl}" readonly style="width: 100%; margin-top: 10px; padding: 5px;">
            `,
            icon: 'error',
            confirmButtonText: 'موافق',
            confirmButtonColor: '#4FC3F7'
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'خطأ',
          html: `
            تعذر فتح جوجل مابس. يرجى التحقق من الاتصال بالإنترنت أو إعدادات المتصفح.<br>
            <a href="${googleMapsUrl}" target="_blank" style="color: #4FC3F7; text-decoration: underline;">اضغط هنا لفتح الموقع يدويًا</a><br>
            أو انسخ الرابط: <input type="text" value="${googleMapsUrl}" readonly style="width: 100%; margin-top: 10px; padding: 5px;">
          `,
          icon: 'error',
          confirmButtonText: 'موافق',
          confirmButtonColor: '#4FC3F7'
        });
      }
    });
  }
}

function initChatbot() {
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');
  const chatbotResponse = document.getElementById('chatbot-response');

  chatbotToggle.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
  });

  chatbotSend.addEventListener('click', () => {
    const message = chatbotInput.value.trim();
    if (!message) return;

    let response = 'آسف، لا أفهم. جرب سؤال آخر.';
    if (message.includes('خدمات')) {
      response = 'خدماتنا تشمل: استشارة، تنظيف الأسنان، تبييض الأسنان، زراعة الأسنان، وأكثر. اطلع على قسم الخدمات!';
    } else if (message.includes('حجز')) {
      response = 'يمكنك الحجز من قسم "احجز موعدك". اختر الخدمة، اليوم، والساعة!';
    }

    chatbotResponse.innerHTML += `<p><strong>أنت:</strong> ${message}</p><p><strong>ريفولي:</strong> ${response}</p>`;
    chatbotInput.value = '';
    chatbotResponse.scrollTop = chatbotResponse.scrollHeight;
  });
}