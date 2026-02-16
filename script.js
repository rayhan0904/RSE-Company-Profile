// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Translations
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
    heroTrusted: 'Terpercaya sejak 2024',
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
    aboutTitle: 'RSE IT Solution Services',
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
    
    // Manage Service
    manageSubtitle: 'Layanan Utama',
    manageTitle: 'Manage Service',
    manageDescription: 'Layanan pengelolaan IT menyeluruh yang mencakup pemeliharaan preventif dan korektif untuk memastikan infrastruktur teknologi Anda selalu dalam kondisi optimal.',
    managePreventive: 'Preventive Maintenance',
    manageCorrective: 'Corrective Maintenance',
    managePrev1: 'Pemeriksaan rutin hardware & software',
    managePrev2: 'Update security patch & antivirus',
    managePrev3: 'Backup data terjadwal',
    managePrev4: 'Monitoring performa 24/7',
    managePrev5: 'Audit keamanan berkala',
    manageCorr1: 'Response darurat < 1 jam',
    manageCorr2: 'Perbaikan hardware/software',
    manageCorr3: 'Data recovery',
    manageCorr4: 'Root cause analysis',
    manageCorr5: 'Reporting & rekomendasi',
    manageSupported: 'Yang Kami Dukung:',
    manageBenefits: 'Keuntungan:',
    manageBenefit1: 'Minimalkan downtime hingga 99.9%',
    manageBenefit2: 'Biaya operasional lebih terprediksi',
    manageBenefit3: 'Fokus pada bisnis inti',
    
    // Network
    networkSubtitle: 'Infrastruktur Jaringan',
    networkTitle: 'Network Infrastructure',
    networkDescription: 'Kami merancang, membangun, dan mengelola infrastruktur jaringan yang handal, scalable, dan aman untuk mendukung konektivitas bisnis Anda dengan performa tinggi.',
    networkFeatures: 'Fitur Utama',
    networkFeature1: 'Desain jaringan enterprise-grade',
    networkFeature2: 'Redundancy & high availability',
    networkFeature3: 'Quality of Service (QoS)',
    networkFeature4: 'Network segmentation',
    networkFeature5: 'Monitoring & analytics real-time',
    networkSupported: 'Yang Kami Sediakan:',
    networkSolutions: 'Solusi Lengkap:',
    networkSol1: 'LAN/WAN Design & Implementation',
    networkSol2: 'Wireless & Mobility Solutions',
    networkSol3: 'Network Security & Firewall',
    networkSol4: 'Network Monitoring & Management',
    
    // Security
    securitySubtitle: 'Keamanan Infrastruktur',
    securityTitle: 'Security Infrastructure',
    securityDescription: 'Melindungi aset digital dan infrastruktur kritis perusahaan Anda dengan pendekatan keamanan berlapis yang mencakup pencegahan, deteksi, dan respons terhadap ancaman siber.',
    securityLayer1: 'Cegah',
    securityLayer2: 'Deteksi',
    securityLayer3: 'Respon',
    securityLayer4: 'Pulihkan',
    securitySupported: 'Layanan Keamanan:',
    securityServ1: 'Firewall & IPS/IDS',
    securityServ2: 'Antivirus & Antimalware',
    securityServ3: 'Endpoint Protection',
    securityServ4: 'Security Monitoring',
    securityServ5: 'Vulnerability Assessment',
    securityServ6: 'DDoS Protection',
    
    // Website
    websiteSubtitle: 'Jasa Pembuatan Website',
    websiteTitle: 'Website Development',
    websiteDescription: 'Kami membantu Anda membangun website profesional yang responsif, cepat, dan SEO-friendly untuk meningkatkan visibilitas bisnis Anda di dunia digital.',
    websiteTypes: 'Jenis Website:',
    websiteType1: 'Company Profile',
    websiteType1Desc: 'Website profesional untuk memperkenalkan perusahaan Anda',
    websiteType2: 'E-Commerce',
    websiteType2Desc: 'Toko online dengan sistem pembayaran terintegrasi',
    websiteType3: 'CMS Website',
    websiteType3Desc: 'Website dengan konten yang mudah diupdate',
    websiteType4: 'Web Application',
    websiteType4Desc: 'Aplikasi web custom sesuai kebutuhan bisnis',
    websiteFeatures: 'Fitur Yang Kami Tawarkan:',
    websiteFeature1: 'Responsive Design (Mobile Friendly)',
    websiteFeature2: 'SEO Optimization',
    websiteFeature3: 'Fast Loading & Performance',
    websiteFeature4: 'SSL Security & HTTPS',
    websiteFeature5: 'Content Management System',
    websiteFeature6: 'Integration with Social Media',
    websiteFeature7: 'Google Analytics & Tracking',
    websiteFeature8: 'Maintenance & Support',
    websiteTech: 'Teknologi:',
    
    // IOT
    iotSubtitle: 'Internet of Things',
    iotTitle: 'IOT Solutions',
    iotDescription: 'Menghubungkan perangkat fisik ke internet untuk mengumpulkan data, mengotomatisasi proses, dan memberikan insight real-time yang membantu pengambilan keputusan bisnis yang lebih cerdas.',
    iotApplications: 'Aplikasi IoT:',
    iotApp1: 'Smart Manufacturing',
    iotApp2: 'Smart Building',
    iotApp3: 'Monitoring Suhu',
    iotApp4: 'Fleet Tracking',
    iotApp5: 'Smart Agriculture',
    iotApp6: 'Healthcare IoT',
    iotSupported: 'Komponen IoT:',
    iotComp1: 'Sensor & Device',
    iotComp2: 'Konektivitas',
    iotComp3: 'IoT Platform',
    iotComp4: 'Dashboard & Analytics',
    
    // Procurement
    procurementSubtitle: 'Pengadaan Barang',
    procurementTitle: 'IT Procurement',
    procurementDescription: 'Layanan pengadaan perangkat keras, perangkat lunak, dan perlengkapan IT dengan harga kompetitif dan garansi resmi untuk mendukung kebutuhan operasional bisnis Anda.',
    procurementCategories: 'Kategori Produk:',
    procurementHardware: 'Perangkat Keras (Hardware)',
    procurementHard1: 'Server & Storage',
    procurementHard2: 'PC, Laptop & Workstation',
    procurementHard3: 'Switch, Router & Access Point',
    procurementHard4: 'Firewall & Security Appliance',
    procurementHard5: 'Printer & Scanner',
    procurementHard6: 'CCTV & Access Control',
    procurementHard7: 'Kabel & Connector',
    procurementHard8: 'Rack & Enclosure',
    procurementSoftware: 'Perangkat Lunak (Software)',
    procurementSoft1: 'Lisensi Windows & Office',
    procurementSoft2: 'Antivirus & Keamanan',
    procurementSoft3: 'Software Server',
    procurementSoft4: 'Database & Backup',
    procurementSoft5: 'Aplikasi Bisnis & ERP',
    procurementSoft6: 'Software Desain',
    procurementAccessories: 'Aksesoris & Sparepart',
    procurementAcc1: 'Hardisk SSD/HDD',
    procurementAcc2: 'RAM & Processor',
    procurementAcc3: 'Power Supply & UPS',
    procurementAcc4: 'Kabel & Adaptor',
    procurementAcc5: 'Mouse, Keyboard & Webcam',
    procurementAcc6: 'Tinta & Toner Printer',
    procurementProcess: 'Proses Pengadaan:',
    procurementStep1: 'Konsultasi Kebutuhan',
    procurementStep2: 'Quote & Negosiasi',
    procurementStep3: 'Pemesanan',
    procurementStep4: 'Pembayaran',
    procurementStep5: 'Pengiriman',
    procurementStep6: 'Garansi & Dukungan',
    procurementBenefits: 'Keuntungan:',
    procurementBenefit1: 'Harga kompetitif',
    procurementBenefit2: 'Garansi resmi',
    procurementBenefit3: 'Pengiriman cepat',
    procurementBenefit4: 'Dukungan teknis',
    
    // Projects
    projectsSubtitle: 'Portofolio & Testimoni',
    projectsTitle: 'Proyek & Ulasan Klien',
    projectsProject1: 'SD-WAN Implementation',
    projectsProject1Desc: 'Implementasi jaringan SD-WAN untuk perusahaan retail',
    projectsProject2: 'Security System',
    projectsProject2Desc: 'Instalasi firewall dan keamanan jaringan',
    projectsProject3: 'Company Website',
    projectsProject3Desc: 'Pembuatan website perusahaan',
    projectsTestimonials: 'Apa Kata Klien Kami',
    projectsTesti1: '"Tim RSE sangat profesional dan responsif. Implementasi jaringan berjalan lancar."',
    projectsTesti2: '"Layanan maintenance sangat membantu. Respon cepat saat ada masalah."',
    projectsTesti3: '"Website yang dibuat bagus dan sesuai keinginan. Recommended!"',
    
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
    
    // Help
    helpButton: 'Bantuan',
    helpTitle: 'Pusat Bantuan',
    helpQuickContact: 'Kontak Cepat',
    helpFAQ: 'FAQ',
    helpFAQ1Q: 'Bagaimana cara memulai konsultasi?',
    helpFAQ1A: 'Klik tombol "Konsultasi Gratis" atau hubungi kami via WhatsApp.',
    helpFAQ2Q: 'Berapa lama waktu respon?',
    helpFAQ2A: 'Kami merespon dalam 15 menit pada jam kerja.',
    helpSupport: 'Support 24/7',
    helpSupportText: 'Layanan darurat 24 jam sehari, 7 hari seminggu',
    
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
    footerCopyright: '© 2025 RSE IT Solution Services. Hak Cipta Dilindungi.',
    footerPrivacy: 'Kebijakan Privasi',
    footerTerms: 'Syarat & Ketentuan'
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
    navProjects: 'Projects & Testimonials',
    navContact: 'Contact',
    
    // Hero
    heroTrusted: 'Trusted since 2024',
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
    aboutTitle: 'RSE IT Solution Services',
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
    
    // Manage Service
    manageSubtitle: 'Main Service',
    manageTitle: 'Manage Service',
    manageDescription: 'Comprehensive IT management service covering preventive and corrective maintenance to ensure your technology infrastructure is always in optimal condition.',
    managePreventive: 'Preventive Maintenance',
    manageCorrective: 'Corrective Maintenance',
    managePrev1: 'Regular hardware & software checks',
    managePrev2: 'Security patch & antivirus updates',
    managePrev3: 'Scheduled data backup',
    managePrev4: '24/7 performance monitoring',
    managePrev5: 'Periodic security audit',
    manageCorr1: 'Emergency response < 1 hour',
    manageCorr2: 'Hardware/software repair',
    manageCorr3: 'Data recovery',
    manageCorr4: 'Root cause analysis',
    manageCorr5: 'Reporting & recommendations',
    manageSupported: 'We Support:',
    manageBenefits: 'Benefits:',
    manageBenefit1: 'Minimize downtime up to 99.9%',
    manageBenefit2: 'More predictable operational costs',
    manageBenefit3: 'Focus on core business',
    
    // Network
    networkSubtitle: 'Network Infrastructure',
    networkTitle: 'Network Infrastructure',
    networkDescription: 'We design, build, and manage reliable, scalable, and secure network infrastructure to support your business connectivity with high performance.',
    networkFeatures: 'Key Features',
    networkFeature1: 'Enterprise-grade network design',
    networkFeature2: 'Redundancy & high availability',
    networkFeature3: 'Quality of Service (QoS)',
    networkFeature4: 'Network segmentation',
    networkFeature5: 'Real-time monitoring & analytics',
    networkSupported: 'We Provide:',
    networkSolutions: 'Complete Solutions:',
    networkSol1: 'LAN/WAN Design & Implementation',
    networkSol2: 'Wireless & Mobility Solutions',
    networkSol3: 'Network Security & Firewall',
    networkSol4: 'Network Monitoring & Management',
    
    // Security
    securitySubtitle: 'Security Infrastructure',
    securityTitle: 'Security Infrastructure',
    securityDescription: 'Protect your digital assets and critical infrastructure with a layered security approach covering prevention, detection, and response to cyber threats.',
    securityLayer1: 'Prevent',
    securityLayer2: 'Detect',
    securityLayer3: 'Respond',
    securityLayer4: 'Recover',
    securitySupported: 'Security Services:',
    securityServ1: 'Firewall & IPS/IDS',
    securityServ2: 'Antivirus & Antimalware',
    securityServ3: 'Endpoint Protection',
    securityServ4: 'Security Monitoring',
    securityServ5: 'Vulnerability Assessment',
    securityServ6: 'DDoS Protection',
    
    // Website
    websiteSubtitle: 'Website Development',
    websiteTitle: 'Website Development',
    websiteDescription: 'We help you build professional, responsive, fast, and SEO-friendly websites to increase your business visibility in the digital world.',
    websiteTypes: 'Website Types:',
    websiteType1: 'Company Profile',
    websiteType1Desc: 'Professional website to introduce your company',
    websiteType2: 'E-Commerce',
    websiteType2Desc: 'Online store with integrated payment system',
    websiteType3: 'CMS Website',
    websiteType3Desc: 'Website with easy-to-update content',
    websiteType4: 'Web Application',
    websiteType4Desc: 'Custom web application for your business needs',
    websiteFeatures: 'Features We Offer:',
    websiteFeature1: 'Responsive Design (Mobile Friendly)',
    websiteFeature2: 'SEO Optimization',
    websiteFeature3: 'Fast Loading & Performance',
    websiteFeature4: 'SSL Security & HTTPS',
    websiteFeature5: 'Content Management System',
    websiteFeature6: 'Integration with Social Media',
    websiteFeature7: 'Google Analytics & Tracking',
    websiteFeature8: 'Maintenance & Support',
    websiteTech: 'Technology:',
    
    // IOT
    iotSubtitle: 'Internet of Things',
    iotTitle: 'IOT Solutions',
    iotDescription: 'Connect physical devices to the internet to collect data, automate processes, and provide real-time insights for smarter business decisions.',
    iotApplications: 'IoT Applications:',
    iotApp1: 'Smart Manufacturing',
    iotApp2: 'Smart Building',
    iotApp3: 'Temperature Monitoring',
    iotApp4: 'Fleet Tracking',
    iotApp5: 'Smart Agriculture',
    iotApp6: 'Healthcare IoT',
    iotSupported: 'IoT Components:',
    iotComp1: 'Sensors & Devices',
    iotComp2: 'Connectivity',
    iotComp3: 'IoT Platform',
    iotComp4: 'Dashboard & Analytics',
    
    // Procurement
    procurementSubtitle: 'IT Procurement',
    procurementTitle: 'IT Procurement',
    procurementDescription: 'Hardware, software, and IT equipment procurement services with competitive prices and official warranty to support your business operations.',
    procurementCategories: 'Product Categories:',
    procurementHardware: 'Hardware',
    procurementHard1: 'Server & Storage',
    procurementHard2: 'PC, Laptop & Workstation',
    procurementHard3: 'Switch, Router & Access Point',
    procurementHard4: 'Firewall & Security Appliance',
    procurementHard5: 'Printer & Scanner',
    procurementHard6: 'CCTV & Access Control',
    procurementHard7: 'Cables & Connectors',
    procurementHard8: 'Rack & Enclosure',
    procurementSoftware: 'Software',
    procurementSoft1: 'Windows & Office License',
    procurementSoft2: 'Antivirus & Security',
    procurementSoft3: 'Server Software',
    procurementSoft4: 'Database & Backup',
    procurementSoft5: 'Business Apps & ERP',
    procurementSoft6: 'Design Software',
    procurementAccessories: 'Accessories & Spareparts',
    procurementAcc1: 'SSD/HDD',
    procurementAcc2: 'RAM & Processor',
    procurementAcc3: 'Power Supply & UPS',
    procurementAcc4: 'Cables & Adapters',
    procurementAcc5: 'Mouse, Keyboard & Webcam',
    procurementAcc6: 'Printer Ink & Toner',
    procurementProcess: 'Procurement Process:',
    procurementStep1: 'Needs Consultation',
    procurementStep2: 'Quote & Negotiation',
    procurementStep3: 'Order',
    procurementStep4: 'Payment',
    procurementStep5: 'Delivery',
    procurementStep6: 'Warranty & Support',
    procurementBenefits: 'Benefits:',
    procurementBenefit1: 'Competitive prices',
    procurementBenefit2: 'Official warranty',
    procurementBenefit3: 'Fast delivery',
    procurementBenefit4: 'Technical support',
    
    // Projects
    projectsSubtitle: 'Portfolio & Testimonials',
    projectsTitle: 'Projects & Client Reviews',
    projectsProject1: 'SD-WAN Implementation',
    projectsProject1Desc: 'SD-WAN network implementation for retail company',
    projectsProject2: 'Security System',
    projectsProject2Desc: 'Firewall installation and network security',
    projectsProject3: 'Company Website',
    projectsProject3Desc: 'Corporate website development',
    projectsTestimonials: 'What Our Clients Say',
    projectsTesti1: '"The RSE team is very professional and responsive. Network implementation went smoothly."',
    projectsTesti2: '"Maintenance service is very helpful. Fast response when problems occur."',
    projectsTesti3: '"The website is well-built and matches the requirements. Recommended!"',
    
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
    footerCopyright: '© 2025 RSE IT Solution Services. All rights reserved.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms & Conditions'
  }
};

// Language switching
let currentLang = 'id';

function changeLanguage(lang) {
  currentLang = lang;
  
  // Update all elements with IDs that match translation keys
  for (const [key, value] of Object.entries(translations[lang])) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = value;
    }
  }
  
  // Update dropdown toggle text
  const servicesDropdown = document.getElementById('servicesDropdown');
  if (servicesDropdown) {
    servicesDropdown.textContent = translations[lang].navServices;
  }
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(btn => {
    btn.classList.add('active');
  });
}

// Language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    changeLanguage(btn.dataset.lang);
  });
});

// Navbar scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (!name || !email || !message) {
    alert(currentLang === 'id' ? 'Harap isi semua field yang wajib diisi' : 'Please fill in all required fields');
    return;
  }
  
  alert(currentLang === 'id' 
    ? 'Terima kasih! Pesan Anda telah terkirim.' 
    : 'Thank you! Your message has been sent.');
  this.reset();
});

// WhatsApp
document.querySelectorAll('#helpWhatsApp, #contactWhatsApp').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const phoneNumber = '628123456789';
    const message = currentLang === 'id' 
      ? 'Halo RSE IT Solution Services, saya ingin berkonsultasi tentang layanan Anda.'
      : 'Hello RSE IT Solution Services, I would like to inquire about your services.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  });
});

// Active nav link
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    
    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.style.color = 'var(--orange-accent)';
      } else {
        navLink.style.color = 'rgba(255,255,255,0.85)';
      }
    }
  });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  changeLanguage('id');
  
  // Update copyright year
  const year = new Date().getFullYear();
  document.querySelectorAll('.copyright span').forEach(el => {
    if (el.id === 'footerCopyright') {
      const text = el.textContent;
      el.textContent = text.replace('2025', year);
    }
  });
});