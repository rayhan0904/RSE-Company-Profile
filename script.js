// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 50,
  disable: 'mobile'
});

// ==================== TRANSLATIONS ====================
const translations = {
  id: {
    // Navbar
    navHome: 'Beranda',
    navAbout: 'Tentang',
    navServices: 'Layanan',
    navManageService: 'Manage Service',
    navNetwork: 'Network Infrastructure',
    navSecurity: 'Security Infrastructure',
    navWebsite: 'Jasa Pembuatan Website',
    navIot: 'IOT Solutions',
    navProcurement: 'Pengadaan Barang',
    navProjects: 'Portofolio',
    navContact: 'Kontak',
    
    // Hero
    heroTitle: 'Reliable IT Solutions & Professional Services',
    heroSubtitle: 'Memberdayakan Bisnis Anda dengan Teknologi yang Aman, Skalabel & Cerdas',
    heroYears: 'Tahun Pengalaman',
    heroProjects: 'Proyek Selesai',
    heroSupport: 'Dukungan',
    heroConsultation: 'Konsultasi Gratis',
    heroServices: 'Layanan Kami',
    heroSecure: 'Aman',
    heroCloud: 'Cloud',
    heroNetwork: 'Jaringan',
    
    // About
    aboutSubtitle: 'Tentang Perusahaan',
    aboutTitle: 'RSE Digital Solution',
    aboutDescription: 'Kami adalah tim yang terdiri dari ahli strategi teknologi, arsitek jaringan, dan pakar keamanan siber yang berdedikasi untuk mempersiapkan masa depan perusahaan Anda. Dengan pengalaman lebih dari 12 tahun dalam mendesain, menerapkan, dan mengelola infrastruktur IT yang tangguh untuk mendorong pertumbuhan bisnis.',
    aboutVision: 'Visi',
    aboutVisionText: 'Menjadi mitra terpercaya dalam transformasi digital di Indonesia.',
    aboutMission: 'Misi',
    aboutMissionText: 'Memberikan solusi yang aman, inovatif, dan skalabel dengan layanan prima.',
    aboutWhyTitle: 'Mengapa Memilih Kami',
    aboutWhy1Title: 'Engineer Berpengalaman',
    aboutWhy1Desc: 'Tim profesional dengan sertifikasi',
    aboutWhy2Title: 'Respon Cepat',
    aboutWhy2Desc: 'Response time < 15 menit',
    aboutWhy3Title: 'Aman & Terpercaya',
    aboutWhy3Desc: '99.9% Uptime, enkripsi data',
    aboutWhy4Title: 'Harga Bersaing',
    aboutWhy4Desc: 'Solusi sesuai budget Anda',
    
    // Projects
    projectsSubtitle: 'Portofolio',
    projectsTitle: 'Proyek Kami',
    projectsTestimonials: 'Apa Kata Klien Kami',
    
    // Testimonials
    testimonial1Text: 'Tim RSE sangat profesional dan responsif. Implementasi jaringan berjalan lancar.',
    testimonial1Author: 'Andi Wijaya - PT Maju Jaya',
    testimonial2Text: 'Layanan maintenance sangat membantu. Respon cepat saat ada masalah.',
    testimonial2Author: 'Budi Santoso - CV Karya Mandiri',
    testimonial3Text: 'Website yang dibuat bagus dan sesuai keinginan. Recommended!',
    testimonial3Author: 'Citra Dewi - Toko Online',
    
    // Contact
    contactSubtitle: 'Hubungi Kami',
    contactTitle: 'Let\'s Connect',
    contactName: 'Nama Lengkap',
    contactEmail: 'Email',
    contactPhone: 'Nomor Telepon',
    contactCompany: 'Perusahaan',
    contactMessage: 'Pesan',
    contactSend: 'Kirim Pesan',
    contactPhoneLabel: 'Telepon',
    contactEmailLabel: 'Email',
    contactOffice: 'Kantor',
    
    // Form Status
    formSending: 'Mengirim...',
    formSuccess: 'Terima kasih! Pesan Anda telah terkirim.',
    formError: 'Maaf, terjadi kesalahan. Silakan coba lagi.',
    formRequired: 'Harap isi semua field yang wajib diisi',
    
    // Footer
    footerTagline: 'Aman · Cepat · Terpercaya',
    footerDescription: 'Solusi IT terpercaya untuk infrastruktur, keamanan, dan pengadaan barang.',
    footerQuickLinks: 'Tautan Cepat',
    footerHome: 'Beranda',
    footerAbout: 'Tentang',
    footerProjects: 'Proyek',
    footerContact: 'Kontak',
    footerServices: 'Layanan',
    footerManageService: 'Manage Service',
    footerNetwork: 'Network Infrastructure',
    footerSecurity: 'Security Infrastructure',
    footerWebsite: 'Jasa Pembuatan Website',
    footerIot: 'IOT Solutions',
    footerProcurement: 'Pengadaan Barang',
    footerContactTitle: 'Kontak',
    footerHours: 'Senin - Jumat, 09:00 - 18:00',
    footerCopyright: '© 2025 RSE Digital Solution. Hak Cipta Dilindungi.',
    
    // Service Page
    serviceDetailSubtitle: 'Layanan Kami',
    serviceDetailTitle: 'Layanan Profesional',
    ctaTitle: 'Siap Meningkatkan Infrastruktur IT Anda?',
    ctaDesc: 'Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik',
    ctaContact: 'Hubungi Kami',
    ctaWA: 'WhatsApp',
    
    // Service Menu
    serviceMenuTitle: 'Daftar Layanan',
    serviceMenuManage: 'Manage Service',
    serviceMenuNetwork: 'Network Infrastructure',
    serviceMenuSecurity: 'Security Infrastructure',
    serviceMenuWebsite: 'Jasa Pembuatan Website',
    serviceMenuIot: 'IOT Solutions',
    serviceMenuProcurement: 'Pengadaan Barang',
    serviceMenuHelp: 'Butuh Bantuan?',
    serviceMenuHelpDesc: 'Konsultasi gratis dengan tim kami',
    
    // Service Descriptions
    serviceManageDesc: 'Layanan pengelolaan IT menyeluruh yang mencakup pemeliharaan preventif dan korektif untuk memastikan infrastruktur teknologi Anda selalu dalam kondisi optimal.',
    serviceNetworkDesc: 'Kami merancang, membangun, dan mengelola infrastruktur jaringan yang handal, scalable, dan aman untuk mendukung konektivitas bisnis Anda dengan performa tinggi.',
    serviceSecurityDesc: 'Melindungi aset digital dan infrastruktur kritis perusahaan Anda dengan pendekatan keamanan berlapis yang mencakup pencegahan, deteksi, dan respons terhadap ancaman siber.',
    serviceWebsiteDesc: 'Kami membantu Anda membangun website profesional yang responsif, cepat, dan SEO-friendly untuk meningkatkan visibilitas bisnis Anda di dunia digital.',
    serviceIoTDesc: 'Menghubungkan perangkat fisik ke internet untuk mengumpulkan data, mengotomatisasi proses, dan memberikan insight real-time yang membantu pengambilan keputusan bisnis yang lebih cerdas.',
    serviceProcurementDesc: 'Layanan pengadaan perangkat keras, perangkat lunak, dan perlengkapan IT dengan harga kompetitif dan garansi resmi untuk mendukung kebutuhan operasional bisnis Anda.',
    
    // Feature Titles
    featurePreventive: 'Preventive Maintenance',
    featureCorrective: 'Corrective Maintenance',
    featureMainFeatures: 'Fitur Utama',
    featureAdvantages: 'Keunggulan',
    featureSecurityLayers: 'Lapisan Keamanan',
    featureSecurityServices: 'Layanan Keamanan',
    featureWebsiteTypes: 'Jenis Website',
    featureWebsiteFeatures: 'Fitur Yang Kami Tawarkan',
    featureIoTApps: 'Aplikasi IoT',
    featureIoTComponents: 'Komponen IoT',
    featureProductCategories: 'Kategori Produk',
    featureProcess: 'Proses Pengadaan',
    
    // Support Titles
    supportTitle: 'Teknologi & Brand Yang Kami Dukung',
    benefitsTitle: 'Keuntungan Layanan',
    
    // Common
    and: 'dan'
  },
  
  en: {
    // Navbar
    navHome: 'Home',
    navAbout: 'About',
    navServices: 'Services',
    navManageService: 'Manage Service',
    navNetwork: 'Network Infrastructure',
    navSecurity: 'Security Infrastructure',
    navWebsite: 'Website Development',
    navIot: 'IOT Solutions',
    navProcurement: 'IT Procurement',
    navProjects: 'Portfolio',
    navContact: 'Contact',
    
    // Hero
    heroTitle: 'Reliable IT Solutions & Professional Services',
    heroSubtitle: 'Empowering Your Business with Secure, Scalable & Smart Technology',
    heroYears: 'Years Experience',
    heroProjects: 'Projects Done',
    heroSupport: 'Support',
    heroConsultation: 'Free Consultation',
    heroServices: 'Our Services',
    heroSecure: 'Secure',
    heroCloud: 'Cloud',
    heroNetwork: 'Network',
    
    // About
    aboutSubtitle: 'About Us',
    aboutTitle: 'RSE Digital Solution',
    aboutDescription: 'We are a team of tech strategists, network architects, and cybersecurity experts dedicated to future-proofing your enterprise. With 12+ years of experience in designing, deploying, and managing robust IT infrastructures.',
    aboutVision: 'Vision',
    aboutVisionText: 'To be a trusted partner in digital transformation in Indonesia.',
    aboutMission: 'Mission',
    aboutMissionText: 'Deliver secure, innovative & scalable solutions with excellent service.',
    aboutWhyTitle: 'Why Choose Us',
    aboutWhy1Title: 'Experienced Engineers',
    aboutWhy1Desc: 'Professional certified team',
    aboutWhy2Title: 'Fast Response',
    aboutWhy2Desc: 'Response time < 15 minutes',
    aboutWhy3Title: 'Secure & Trusted',
    aboutWhy3Desc: '99.9% Uptime, data encryption',
    aboutWhy4Title: 'Competitive Price',
    aboutWhy4Desc: 'Solutions within your budget',
    
    // Projects
    projectsSubtitle: 'Portfolio',
    projectsTitle: 'Our Projects',
    projectsTestimonials: 'What Our Clients Say',
    
    // Testimonials
    testimonial1Text: 'RSE team is very professional and responsive. Network implementation went smoothly.',
    testimonial1Author: 'Andi Wijaya - PT Maju Jaya',
    testimonial2Text: 'Maintenance service is very helpful. Fast response when issues arise.',
    testimonial2Author: 'Budi Santoso - CV Karya Mandiri',
    testimonial3Text: 'The website is well-built and matches our wishes. Recommended!',
    testimonial3Author: 'Citra Dewi - Online Store',
    
    // Contact
    contactSubtitle: 'Contact Us',
    contactTitle: 'Let\'s Connect',
    contactName: 'Full Name',
    contactEmail: 'Email',
    contactPhone: 'Phone Number',
    contactCompany: 'Company',
    contactMessage: 'Message',
    contactSend: 'Send Message',
    contactPhoneLabel: 'Phone',
    contactEmailLabel: 'Email',
    contactOffice: 'Office',
    
    // Form Status
    formSending: 'Sending...',
    formSuccess: 'Thank you! Your message has been sent.',
    formError: 'Sorry, an error occurred. Please try again.',
    formRequired: 'Please fill in all required fields',
    
    // Footer
    footerTagline: 'Secure · Fast · Trusted',
    footerDescription: 'Trusted IT solutions for infrastructure, security, and procurement.',
    footerQuickLinks: 'Quick Links',
    footerHome: 'Home',
    footerAbout: 'About',
    footerProjects: 'Projects',
    footerContact: 'Contact',
    footerServices: 'Services',
    footerManageService: 'Manage Service',
    footerNetwork: 'Network Infrastructure',
    footerSecurity: 'Security Infrastructure',
    footerWebsite: 'Website Development',
    footerIot: 'IOT Solutions',
    footerProcurement: 'IT Procurement',
    footerContactTitle: 'Contact',
    footerHours: 'Monday - Friday, 09:00 - 18:00',
    footerCopyright: '© 2025 RSE Digital Solution. All rights reserved.',
    
    // Service Page
    serviceDetailSubtitle: 'Our Services',
    serviceDetailTitle: 'Professional Services',
    ctaTitle: 'Ready to Upgrade Your IT Infrastructure?',
    ctaDesc: 'Contact us now for free consultation and best offers',
    ctaContact: 'Contact Us',
    ctaWA: 'WhatsApp',
    
    // Service Menu
    serviceMenuTitle: 'Services List',
    serviceMenuManage: 'Manage Service',
    serviceMenuNetwork: 'Network Infrastructure',
    serviceMenuSecurity: 'Security Infrastructure',
    serviceMenuWebsite: 'Website Development',
    serviceMenuIot: 'IOT Solutions',
    serviceMenuProcurement: 'IT Procurement',
    serviceMenuHelp: 'Need Help?',
    serviceMenuHelpDesc: 'Free consultation with our team',
    
    // Service Descriptions
    serviceManageDesc: 'Comprehensive IT management service covering preventive and corrective maintenance to ensure your technology infrastructure is always in optimal condition.',
    serviceNetworkDesc: 'We design, build, and manage reliable, scalable, and secure network infrastructure to support your business connectivity with high performance.',
    serviceSecurityDesc: 'Protect your digital assets and critical infrastructure with a layered security approach covering prevention, detection, and response to cyber threats.',
    serviceWebsiteDesc: 'We help you build professional, responsive, fast, and SEO-friendly websites to increase your business visibility in the digital world.',
    serviceIoTDesc: 'Connect physical devices to the internet to collect data, automate processes, and provide real-time insights for smarter business decisions.',
    serviceProcurementDesc: 'Hardware, software, and IT equipment procurement services with competitive prices and official warranty to support your business operations.',
    
    // Feature Titles
    featurePreventive: 'Preventive Maintenance',
    featureCorrective: 'Corrective Maintenance',
    featureMainFeatures: 'Main Features',
    featureAdvantages: 'Advantages',
    featureSecurityLayers: 'Security Layers',
    featureSecurityServices: 'Security Services',
    featureWebsiteTypes: 'Website Types',
    featureWebsiteFeatures: 'Features We Offer',
    featureIoTApps: 'IoT Applications',
    featureIoTComponents: 'IoT Components',
    featureProductCategories: 'Product Categories',
    featureProcess: 'Procurement Process',
    
    // Support Titles
    supportTitle: 'Technologies & Brands We Support',
    benefitsTitle: 'Service Benefits',
    
    // Common
    and: 'and'
  }
};

// ==================== SERVICE FEATURES ====================
const serviceFeatures = {
  manage: {
    preventive: [
      'Regular hardware & software checks',
      'Security patch & antivirus updates',
      'Scheduled data backup',
      '24/7 performance monitoring',
      'Periodic security audit'
    ],
    corrective: [
      'Emergency response < 1 hour',
      'Hardware/software repair',
      'Data recovery',
      'Root cause analysis',
      'Reporting & recommendations'
    ],
    support: ['Server', 'Network', 'Database', 'Workstation', 'Printer', 'Cloud', 'Security', 'Mobile Device'],
    benefits: [
      'Minimize downtime up to 99.9%',
      'More predictable operational costs',
      'Focus on core business',
      '24/7 professional support team'
    ]
  },
  
  network: {
    mainFeatures: [
      'Enterprise-grade network design',
      'Redundancy & high availability',
      'Quality of Service (QoS)',
      'Network segmentation',
      'Real-time monitoring & analytics'
    ],
    advantages: [
      'High scalability',
      'Layered security',
      '99.9% availability',
      'Centralized management'
    ],
    support: ['LAN/WAN', 'Wireless', 'Firewall', 'Load Balancer', 'VPN', 'SD-WAN', 'CCTV Network', 'Fiber Optic'],
    benefits: [
      'Design according to business needs',
      'High scalability',
      '24/7 monitoring',
      'Certified engineer team'
    ]
  },
  
  security: {
    layers: [
      'Prevent - Firewall & Antivirus',
      'Detect - IDS/IPS & Monitoring',
      'Respond - Incident Response',
      'Recover - Backup & Recovery'
    ],
    services: [
      'Firewall Management',
      'Endpoint Protection',
      'Vulnerability Assessment',
      'DDoS Protection'
    ],
    support: ['Firewall', 'Antivirus', 'Endpoint', 'Monitoring', 'VA Scanner', 'DDoS', 'Encryption', 'IAM'],
    benefits: [
      '24/7 protection',
      'Real-time threat updates',
      'Incident response team',
      'Compliance & audit ready'
    ]
  },
  
  website: {
    types: [
      'Company Profile - Professional company website',
      'E-Commerce - Online store + payment gateway',
      'CMS Website - Easy-to-update content',
      'Web Application - Custom web application'
    ],
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Loading',
      'SSL Security',
      'CMS Included',
      'Google Analytics'
    ],
    support: ['HTML5/CSS3', 'JavaScript', 'PHP/Laravel', 'WordPress', 'MySQL', 'Bootstrap', 'React.js', 'Vue.js'],
    benefits: [
      'Modern & responsive design',
      'SEO friendly',
      '1 month free maintenance',
      '1 year free domain & hosting'
    ]
  },
  
  iot: {
    applications: [
      'Smart Manufacturing',
      'Smart Building',
      'Temperature Monitoring',
      'Fleet Tracking',
      'Smart Agriculture',
      'Healthcare IoT'
    ],
    components: [
      'Sensors & Devices',
      'Connectivity (WiFi/LoRa/4G)',
      'IoT Platform',
      'Dashboard & Analytics'
    ],
    support: ['ESP32/8266', 'Arduino', 'Raspberry Pi', 'LoRaWAN', 'MQTT', 'Node-RED', 'AWS IoT', 'ThingsBoard'],
    benefits: [
      'Real-time monitoring',
      'Easy integration',
      'Scalable for industry',
      'Operational efficiency'
    ]
  },
  
  procurement: {
    categories: [
      'Hardware: Server, PC, Network, Printer',
      'Software: License, Antivirus, ERP',
      'Accessories: HDD, RAM, Cable, UPS',
      'Cloud Services: VPS, Hosting, Email'
    ],
    process: [
      'Needs consultation',
      'Competitive price quote',
      'Fast order process',
      'Flexible payment',
      'Guaranteed delivery',
      'Warranty & support'
    ],
    support: ['Cisco', 'MikroTik', 'Dell', 'HP', 'Lenovo', 'Synology', 'Fortinet', 'Ubiquiti'],
    benefits: [
      'Competitive prices',
      'Official warranty',
      'Fast delivery',
      'Technical support',
      'After sales service'
    ]
  }
};

// ==================== VARIABEL GLOBAL ====================
let currentLang = 'id';

// ==================== FUNGSI GET SERVICE FROM URL ====================
function getServiceFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('service') || 'manage';
}

// ==================== FUNGSI SET ACTIVE MENU ====================
function setActiveMenu(service) {
  document.querySelectorAll('.service-menu-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.service === service) {
      item.classList.add('active');
    }
  });
}

// ==================== FUNGSI RENDER SERVICE CONTENT ====================
function renderServiceContent(service, lang) {
  const t = translations[lang];
  const features = serviceFeatures[service];
  
  if (!features) return;
  
  let content = '';
  
  // Description
  const descKey = `service${service.charAt(0).toUpperCase() + service.slice(1)}Desc`;
  content += `
    <div class="service-description">
      <p>${t[descKey]}</p>
    </div>
    
    <div class="service-features">
  `;
  
  // Dynamic features based on service type
  if (service === 'manage') {
    content += `
      <div class="feature-card">
        <h4><i class="fas fa-calendar-check"></i> ${t.featurePreventive}</h4>
        <ul>
          ${features.preventive.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
      <div class="feature-card">
        <h4><i class="fas fa-tools"></i> ${t.featureCorrective}</h4>
        <ul>
          ${features.corrective.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  } else if (service === 'network') {
    content += `
      <div class="feature-card">
        <h4><i class="fas fa-cog"></i> ${t.featureMainFeatures}</h4>
        <ul>
          ${features.mainFeatures.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
      <div class="feature-card">
        <h4><i class="fas fa-star"></i> ${t.featureAdvantages}</h4>
        <ul>
          ${features.advantages.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  } else if (service === 'security') {
    content += `
      <div class="feature-card">
        <h4><i class="fas fa-layer-group"></i> ${t.featureSecurityLayers}</h4>
        <ul>
          ${features.layers.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
      <div class="feature-card">
        <h4><i class="fas fa-shield-alt"></i> ${t.featureSecurityServices}</h4>
        <ul>
          ${features.services.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  } else if (service === 'website') {
    content += `
      <div class="feature-card">
        <h4><i class="fas fa-laptop"></i> ${t.featureWebsiteTypes}</h4>
        <ul>
          ${features.types.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
      <div class="feature-card">
        <h4><i class="fas fa-star"></i> ${t.featureWebsiteFeatures}</h4>
        <ul>
          ${features.features.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  } else if (service === 'iot') {
    content += `
      <div class="feature-card">
        <h4><i class="fas fa-microchip"></i> ${t.featureIoTApps}</h4>
        <ul>
          ${features.applications.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
      <div class="feature-card">
        <h4><i class="fas fa-cog"></i> ${t.featureIoTComponents}</h4>
        <ul>
          ${features.components.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  } else if (service === 'procurement') {
    content += `
      <div class="feature-card">
        <h4><i class="fas fa-box"></i> ${t.featureProductCategories}</h4>
        <ul>
          ${features.categories.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
      <div class="feature-card">
        <h4><i class="fas fa-clock"></i> ${t.featureProcess}</h4>
        <ul>
          ${features.process.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  
  // Close features div
  content += `</div>`;
  
  // Support section
  content += `
    <div class="service-support mb-4">
      <h4><i class="fas fa-headset me-2"></i> ${t.supportTitle}</h4>
      <div class="support-grid">
        ${features.support.map(item => `<div class="support-item">${item}</div>`).join('')}
      </div>
    </div>
    
    <div class="benefits-list">
      <h4><i class="fas fa-medal me-2"></i> ${t.benefitsTitle}</h4>
      <ul>
        ${features.benefits.map(benefit => `<li><i class="fas fa-check-circle text-success"></i> ${benefit}</li>`).join('')}
      </ul>
    </div>
  `;
  
  const contentDiv = document.getElementById('serviceContent');
  if (contentDiv) {
    contentDiv.innerHTML = content;
  }
}

// ==================== FUNGSI UPDATE ALL TEXTS ====================
function updateAllTexts(lang) {
  const t = translations[lang];
  
  // Update semua elemen dengan ID
  for (const [key, value] of Object.entries(t)) {
    const elements = document.querySelectorAll(`[id="${key}"]`);
    elements.forEach(element => {
      if (element) {
        // Handle special cases
        if (key === 'footerCopyright') {
          const year = new Date().getFullYear();
          element.textContent = value.replace('2025', year);
        } else if (key.includes('testimonial') && key.includes('Text')) {
          element.textContent = `"${value}"`;
        } else if (key.includes('testimonial') && key.includes('Author')) {
          const parts = value.split(' - ');
          if (parts.length === 2) {
            element.innerHTML = `<strong>${parts[0]}</strong> - ${parts[1]}`;
          } else {
            element.textContent = value;
          }
        } else {
          element.textContent = value;
        }
      }
    });
  }
  
  // Update dropdown services text
  const servicesDropdown = document.getElementById('servicesDropdown');
  if (servicesDropdown) {
    servicesDropdown.textContent = t.navServices;
  }
  
  // Update selected language
  const selectedLangSpan = document.getElementById('selected-language');
  if (selectedLangSpan) {
    selectedLangSpan.textContent = lang === 'id' ? 'Indonesia' : 'English';
  }
  
  // Update active state in language dropdown
  document.querySelectorAll('.language-item').forEach(item => {
    item.classList.remove('active');
    const icon = item.querySelector('i');
    
    if (item.dataset.lang === lang) {
      item.classList.add('active');
      if (icon) icon.style.opacity = '1';
    } else {
      if (icon) icon.style.opacity = '0';
    }
  });
  
  // Update service page content if on services.html
  if (window.location.pathname.includes('services.html')) {
    const currentService = getServiceFromUrl();
    
    // Update service menu items
    document.querySelectorAll('.service-menu-item').forEach(item => {
      const service = item.dataset.service;
      const menuKey = `serviceMenu${service.charAt(0).toUpperCase() + service.slice(1)}`;
      if (t[menuKey]) {
        const icon = item.querySelector('i').outerHTML;
        item.innerHTML = icon + ' ' + t[menuKey];
      }
    });
    
    // Update service menu title
    const menuTitle = document.getElementById('serviceMenuTitle');
    if (menuTitle) menuTitle.textContent = t.serviceMenuTitle;
    
    // Update service menu help
    const menuHelp = document.getElementById('serviceMenuHelp');
    if (menuHelp) menuHelp.textContent = t.serviceMenuHelp;
    
    const menuHelpDesc = document.getElementById('serviceMenuHelpDesc');
    if (menuHelpDesc) menuHelpDesc.textContent = t.serviceMenuHelpDesc;
    
    const menuWA = document.getElementById('serviceMenuWA');
    if (menuWA) menuWA.innerHTML = `<i class="fab fa-whatsapp me-2"></i> ${t.ctaWA}`;
    
    // Update service detail title
    const serviceTitle = document.getElementById('serviceDetailTitle');
    const titleKey = `nav${currentService.charAt(0).toUpperCase() + currentService.slice(1)}`;
    if (serviceTitle && t[titleKey]) {
      serviceTitle.textContent = t[titleKey];
    }
    
    // Update CTA section
    const ctaTitle = document.getElementById('ctaTitle');
    if (ctaTitle) ctaTitle.textContent = t.ctaTitle;
    
    const ctaDesc = document.getElementById('ctaDesc');
    if (ctaDesc) ctaDesc.textContent = t.ctaDesc;
    
    const ctaContact = document.getElementById('ctaContact');
    if (ctaContact) ctaContact.textContent = t.ctaContact;
    
    const ctaWA = document.getElementById('ctaWA');
    if (ctaWA) ctaWA.textContent = t.ctaWA;
    
    // Render service content with new language
    renderServiceContent(currentService, lang);
  }
}

// ==================== FUNGSI CHANGE LANGUAGE ====================
function changeLanguage(lang) {
  currentLang = lang;
  updateAllTexts(lang);
  localStorage.setItem('preferredLanguage', lang);
}

// ==================== FUNGSI HANDLE FORM SUBMIT ====================
async function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const submitBtn = document.getElementById('submitBtn');
  const submitSpan = document.getElementById('contactSend');
  const statusDiv = document.getElementById('formStatus');
  
  // Validasi
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (!name || !email || !message) {
    showStatus('danger', translations[currentLang].formRequired);
    return;
  }
  
  // Loading
  if (submitBtn) submitBtn.disabled = true;
  if (submitSpan) submitSpan.textContent = translations[currentLang].formSending;
  if (statusDiv) statusDiv.classList.add('d-none');
  
  try {
    // Ganti dengan endpoint Formspree Anda
    const response = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
      showStatus('success', translations[currentLang].formSuccess);
      form.reset();
    } else {
      throw new Error('Failed');
    }
  } catch (error) {
    showStatus('danger', translations[currentLang].formError);
  } finally {
    if (submitBtn) submitBtn.disabled = false;
    if (submitSpan) submitSpan.textContent = translations[currentLang].contactSend;
  }
}

function showStatus(type, message) {
  const statusDiv = document.getElementById('formStatus');
  if (!statusDiv) return;
  
  statusDiv.className = `alert alert-${type}`;
  statusDiv.textContent = message;
  statusDiv.classList.remove('d-none');
  
  setTimeout(() => {
    statusDiv.classList.add('d-none');
  }, 5000);
}

// ==================== EVENT LISTENERS ====================

// Language dropdown
document.querySelectorAll('.language-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = item.dataset.lang;
    changeLanguage(lang);
  });
});

// Navbar scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// Help button
const helpButton = document.getElementById('helpButton');
if (helpButton) {
  helpButton.addEventListener('click', () => {
    alert(currentLang === 'id' 
      ? 'Halo! Ada yang bisa kami bantu? Silakan hubungi kami via WhatsApp.' 
      : 'Hello! How can we help you? Please contact us via WhatsApp.');
  });
}

// Active nav link
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    
    if (navLink) {
      if (scrollY > sectionTop && scrollY < sectionBottom) {
        navLink.style.color = 'var(--orange-accent)';
      } else {
        navLink.style.color = 'rgba(255,255,255,0.85)';
      }
    }
  });
});

// ==================== DOM CONTENT LOADED ====================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
    disable: window.innerWidth < 768
  });

  // Initialize Bootstrap Carousel
  const carouselElement = document.getElementById('projectsCarousel');
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 3000,
      wrap: true,
      pause: false
    });
  }

  // Load saved language preference
  const savedLang = localStorage.getItem('preferredLanguage') || 'id';
  
  // Set bahasa awal
  changeLanguage(savedLang);
  
  // Close mobile menu on link click
  const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse?.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Service page specific initialization
  if (window.location.pathname.includes('services.html')) {
    const service = getServiceFromUrl();
    setActiveMenu(service);
    
    // Handle menu clicks
    document.querySelectorAll('.service-menu-item').forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const service = this.dataset.service;
        
        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('service', service);
        window.history.pushState({}, '', url);
        
        // Update active menu
        setActiveMenu(service);
        
        // Update title
        const titleKey = `nav${service.charAt(0).toUpperCase() + service.slice(1)}`;
        const titleEl = document.getElementById('serviceDetailTitle');
        if (titleEl && translations[currentLang][titleKey]) {
          titleEl.textContent = translations[currentLang][titleKey];
        }
        
        // Render new content with current language
        renderServiceContent(service, currentLang);
        
        // Scroll ke atas
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
    
    // Handle browser back/forward
    window.addEventListener('popstate', function() {
      const service = getServiceFromUrl();
      setActiveMenu(service);
      
      const titleKey = `nav${service.charAt(0).toUpperCase() + service.slice(1)}`;
      const titleEl = document.getElementById('serviceDetailTitle');
      if (titleEl && translations[currentLang][titleKey]) {
        titleEl.textContent = translations[currentLang][titleKey];
      }
      
      renderServiceContent(service, currentLang);
    });
  }
});