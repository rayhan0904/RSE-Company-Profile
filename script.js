// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Initialize Bootstrap Carousel
document.addEventListener('DOMContentLoaded', function() {
  var carousel = new bootstrap.Carousel(document.getElementById('projectsCarousel'), {
    interval: 3000,
    wrap: true,
    pause: false
  });
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
    
    // Modal Service Translations - ID
    modalManageTitle: 'Manage Service',
    modalManageDesc: 'Layanan pengelolaan IT menyeluruh yang mencakup pemeliharaan preventif dan korektif untuk memastikan infrastruktur teknologi Anda selalu dalam kondisi optimal.',
    modalManagePrev: 'Preventive Maintenance',
    modalManageCorr: 'Corrective Maintenance',
    modalManagePrev1: 'Pemeriksaan rutin hardware & software',
    modalManagePrev2: 'Update security patch & antivirus',
    modalManagePrev3: 'Backup data terjadwal',
    modalManagePrev4: 'Monitoring performa 24/7',
    modalManagePrev5: 'Audit keamanan berkala',
    modalManageCorr1: 'Response darurat < 1 jam',
    modalManageCorr2: 'Perbaikan hardware/software',
    modalManageCorr3: 'Data recovery',
    modalManageCorr4: 'Root cause analysis',
    modalManageCorr5: 'Reporting & rekomendasi',
    modalManageSupported: 'Yang Kami Dukung:',
    modalManageBenefits: 'Keuntungan:',
    modalManageBenefit1: 'Minimalkan downtime hingga 99.9%',
    modalManageBenefit2: 'Biaya operasional lebih terprediksi',
    modalManageBenefit3: 'Fokus pada bisnis inti',
    
    modalNetworkTitle: 'Network Infrastructure',
    modalNetworkDesc: 'Kami merancang, membangun, dan mengelola infrastruktur jaringan yang handal, scalable, dan aman untuk mendukung konektivitas bisnis Anda dengan performa tinggi.',
    modalNetworkFeatures: 'Fitur Utama',
    modalNetworkFeature1: 'Desain jaringan enterprise-grade',
    modalNetworkFeature2: 'Redundancy & high availability',
    modalNetworkFeature3: 'Quality of Service (QoS)',
    modalNetworkFeature4: 'Network segmentation',
    modalNetworkFeature5: 'Monitoring & analytics real-time',
    modalNetworkAdvantages: 'Keunggulan',
    modalNetworkAdv1: 'Skalabilitas tinggi',
    modalNetworkAdv2: 'Keamanan berlapis',
    modalNetworkAdv3: 'Ketersediaan 99.9%',
    modalNetworkAdv4: 'Manajemen terpusat',
    modalNetworkProvided: 'Yang Kami Sediakan:',
    
    modalSecurityTitle: 'Security Infrastructure',
    modalSecurityDesc: 'Melindungi aset digital dan infrastruktur kritis perusahaan Anda dengan pendekatan keamanan berlapis yang mencakup pencegahan, deteksi, dan respons terhadap ancaman siber.',
    modalSecurityLayers: 'Lapisan Keamanan',
    modalSecurityLayer1: 'Cegah',
    modalSecurityLayer2: 'Deteksi',
    modalSecurityLayer3: 'Respon',
    modalSecurityLayer4: 'Pulihkan',
    modalSecurityServices: 'Layanan Keamanan',
    
    modalWebsiteTitle: 'Website Development',
    modalWebsiteDesc: 'Kami membantu Anda membangun website profesional yang responsif, cepat, dan SEO-friendly untuk meningkatkan visibilitas bisnis Anda di dunia digital.',
    modalWebsiteTypes: 'Jenis Website',
    modalWebsiteFeatures: 'Fitur Yang Kami Tawarkan',
    
    modalIoTTitle: 'IoT Solutions',
    modalIoTDesc: 'Menghubungkan perangkat fisik ke internet untuk mengumpulkan data, mengotomatisasi proses, dan memberikan insight real-time yang membantu pengambilan keputusan bisnis yang lebih cerdas.',
    modalIoTApplications: 'Aplikasi IoT',
    modalIoTComponents: 'Komponen IoT',
    
    modalProcurementTitle: 'IT Procurement',
    modalProcurementDesc: 'Layanan pengadaan perangkat keras, perangkat lunak, dan perlengkapan IT dengan harga kompetitif dan garansi resmi untuk mendukung kebutuhan operasional bisnis Anda.',
    modalProcurementCategories: 'Kategori Produk',
    modalProcurementProcess: 'Proses Pengadaan',
    modalProcurementBenefits: 'Keuntungan'
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
    footerCopyright: '© 2025 RSE Digital Solution. All rights reserved.',
    
    // Modal Service Translations - EN
    modalManageTitle: 'Manage Service',
    modalManageDesc: 'Comprehensive IT management service covering preventive and corrective maintenance to ensure your technology infrastructure is always in optimal condition.',
    modalManagePrev: 'Preventive Maintenance',
    modalManageCorr: 'Corrective Maintenance',
    modalManagePrev1: 'Regular hardware & software checks',
    modalManagePrev2: 'Security patch & antivirus updates',
    modalManagePrev3: 'Scheduled data backup',
    modalManagePrev4: '24/7 performance monitoring',
    modalManagePrev5: 'Periodic security audit',
    modalManageCorr1: 'Emergency response < 1 hour',
    modalManageCorr2: 'Hardware/software repair',
    modalManageCorr3: 'Data recovery',
    modalManageCorr4: 'Root cause analysis',
    modalManageCorr5: 'Reporting & recommendations',
    modalManageSupported: 'We Support:',
    modalManageBenefits: 'Benefits:',
    modalManageBenefit1: 'Minimize downtime up to 99.9%',
    modalManageBenefit2: 'More predictable operational costs',
    modalManageBenefit3: 'Focus on core business',
    
    modalNetworkTitle: 'Network Infrastructure',
    modalNetworkDesc: 'We design, build, and manage reliable, scalable, and secure network infrastructure to support your business connectivity with high performance.',
    modalNetworkFeatures: 'Key Features',
    modalNetworkFeature1: 'Enterprise-grade network design',
    modalNetworkFeature2: 'Redundancy & high availability',
    modalNetworkFeature3: 'Quality of Service (QoS)',
    modalNetworkFeature4: 'Network segmentation',
    modalNetworkFeature5: 'Real-time monitoring & analytics',
    modalNetworkAdvantages: 'Advantages',
    modalNetworkAdv1: 'High scalability',
    modalNetworkAdv2: 'Layered security',
    modalNetworkAdv3: '99.9% availability',
    modalNetworkAdv4: 'Centralized management',
    modalNetworkProvided: 'We Provide:',
    
    modalSecurityTitle: 'Security Infrastructure',
    modalSecurityDesc: 'Protect your digital assets and critical infrastructure with a layered security approach covering prevention, detection, and response to cyber threats.',
    modalSecurityLayers: 'Security Layers',
    modalSecurityLayer1: 'Prevent',
    modalSecurityLayer2: 'Detect',
    modalSecurityLayer3: 'Respond',
    modalSecurityLayer4: 'Recover',
    modalSecurityServices: 'Security Services',
    
    modalWebsiteTitle: 'Website Development',
    modalWebsiteDesc: 'We help you build professional, responsive, fast, and SEO-friendly websites to increase your business visibility in the digital world.',
    modalWebsiteTypes: 'Website Types',
    modalWebsiteFeatures: 'Features We Offer',
    
    modalIoTTitle: 'IoT Solutions',
    modalIoTDesc: 'Connect physical devices to the internet to collect data, automate processes, and provide real-time insights for smarter business decisions.',
    modalIoTApplications: 'IoT Applications',
    modalIoTComponents: 'IoT Components',
    
    modalProcurementTitle: 'IT Procurement',
    modalProcurementDesc: 'Hardware, software, and IT equipment procurement services with competitive prices and official warranty to support your business operations.',
    modalProcurementCategories: 'Product Categories',
    modalProcurementProcess: 'Procurement Process',
    modalProcurementBenefits: 'Benefits'
  }
};

// ==================== VARIABEL GLOBAL ====================
let currentLang = 'id';

// ==================== FUNGSI GET MODAL CONTENT ====================
function getModalContent(service, lang) {
  const t = translations[lang];
  
  const contents = {
    manage: {
      title: t.modalManageTitle,
      content: `
        <!-- DESKRIPSI -->
        <div class="service-description">
          <p class="service-desc-text">${t.modalManageDesc}</p>
        </div>
        
        <!-- LAYANAN SPLIT (Preventive vs Corrective) -->
        <div class="service-split mb-4">
          <div class="split-card preventive">
            <h4><i class="fas fa-calendar-check"></i> ${t.modalManagePrev}</h4>
            <ul>
              <li>${t.modalManagePrev1}</li>
              <li>${t.modalManagePrev2}</li>
              <li>${t.modalManagePrev3}</li>
              <li>${t.modalManagePrev4}</li>
              <li>${t.modalManagePrev5}</li>
            </ul>
          </div>
          <div class="split-card corrective">
            <h4><i class="fas fa-tools"></i> ${t.modalManageCorr}</h4>
            <ul>
              <li>${t.modalManageCorr1}</li>
              <li>${t.modalManageCorr2}</li>
              <li>${t.modalManageCorr3}</li>
              <li>${t.modalManageCorr4}</li>
              <li>${t.modalManageCorr5}</li>
            </ul>
          </div>
        </div>
        
        <!-- YANG KAMI SUPPORT -->
        <div class="service-support mb-4">
          <h4><i class="fas fa-headset me-2"></i> ${t.modalManageSupported}</h4>
          <div class="support-grid">
            <div class="support-item"><i class="fas fa-server"></i> Server</div>
            <div class="support-item"><i class="fas fa-network-wired"></i> Network</div>
            <div class="support-item"><i class="fas fa-database"></i> Database</div>
            <div class="support-item"><i class="fas fa-desktop"></i> Workstation</div>
            <div class="support-item"><i class="fas fa-print"></i> Printer</div>
            <div class="support-item"><i class="fas fa-cloud"></i> Cloud</div>
            <div class="support-item"><i class="fas fa-shield-alt"></i> Security</div>
            <div class="support-item"><i class="fas fa-mobile-alt"></i> Mobile Device</div>
          </div>
        </div>
        
        <!-- KEUNGGULAN -->
        <div class="service-benefits">
          <h4><i class="fas fa-medal me-2"></i> ${t.modalManageBenefits}</h4>
          <ul>
            <li><i class="fas fa-check-circle text-success"></i> ${t.modalManageBenefit1}</li>
            <li><i class="fas fa-check-circle text-success"></i> ${t.modalManageBenefit2}</li>
            <li><i class="fas fa-check-circle text-success"></i> ${t.modalManageBenefit3}</li>
          </ul>
        </div>
      `
    },
    
    network: {
      title: t.modalNetworkTitle,
      content: `
        <!-- DESKRIPSI -->
        <div class="service-description">
          <p class="service-desc-text">${t.modalNetworkDesc}</p>
        </div>
        
        <!-- FITUR UTAMA & KEUNGGULAN -->
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <div class="split-card">
              <h4><i class="fas fa-cog"></i> ${t.modalNetworkFeatures}</h4>
              <ul>
                <li>${t.modalNetworkFeature1}</li>
                <li>${t.modalNetworkFeature2}</li>
                <li>${t.modalNetworkFeature3}</li>
                <li>${t.modalNetworkFeature4}</li>
                <li>${t.modalNetworkFeature5}</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="split-card">
              <h4><i class="fas fa-star"></i> ${t.modalNetworkAdvantages}</h4>
              <ul>
                <li>${t.modalNetworkAdv1}</li>
                <li>${t.modalNetworkAdv2}</li>
                <li>${t.modalNetworkAdv3}</li>
                <li>${t.modalNetworkAdv4}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- YANG KAMI SUPPORT -->
        <div class="service-support mb-4">
          <h4><i class="fas fa-box me-2"></i> ${t.modalNetworkProvided}</h4>
          <div class="support-grid">
            <div class="support-item">LAN/WAN</div>
            <div class="support-item">Wireless</div>
            <div class="support-item">Firewall</div>
            <div class="support-item">Load Balancer</div>
            <div class="support-item">VPN</div>
            <div class="support-item">SD-WAN</div>
            <div class="support-item">CCTV Network</div>
            <div class="support-item">Fiber Optic</div>
          </div>
        </div>
        
        <!-- KEUNGGULAN (SINGKAT) -->
        <div class="service-benefits">
          <h4><i class="fas fa-medal me-2"></i> Keunggulan Layanan</h4>
          <ul>
            <li><i class="fas fa-check-circle text-success"></i> Desain sesuai kebutuhan bisnis</li>
            <li><i class="fas fa-check-circle text-success"></i> Skalabilitas tinggi</li>
            <li><i class="fas fa-check-circle text-success"></i> Monitoring 24/7</li>
          </ul>
        </div>
      `
    },
    
    security: {
      title: t.modalSecurityTitle,
      content: `
        <!-- DESKRIPSI -->
        <div class="service-description">
          <p class="service-desc-text">${t.modalSecurityDesc}</p>
        </div>
        
        <!-- LAPISAN KEAMANAN -->
        <div class="mb-4">
          <h4 class="mb-3"><i class="fas fa-layer-group me-2"></i> ${t.modalSecurityLayers}</h4>
          <div class="security-layers">
            <div class="layer-item">
              <span class="layer-icon"><i class="fas fa-shield"></i></span>
              <span>${t.modalSecurityLayer1}</span>
            </div>
            <div class="layer-item">
              <span class="layer-icon"><i class="fas fa-eye"></i></span>
              <span>${t.modalSecurityLayer2}</span>
            </div>
            <div class="layer-item">
              <span class="layer-icon"><i class="fas fa-bolt"></i></span>
              <span>${t.modalSecurityLayer3}</span>
            </div>
            <div class="layer-item">
              <span class="layer-icon"><i class="fas fa-sync-alt"></i></span>
              <span>${t.modalSecurityLayer4}</span>
            </div>
          </div>
        </div>
        
        <!-- YANG KAMI SUPPORT -->
        <div class="service-support mb-4">
          <h4><i class="fas fa-shield-alt me-2"></i> ${t.modalSecurityServices}</h4>
          <div class="support-grid">
            <div class="support-item"><i class="fas fa-fire"></i> Firewall</div>
            <div class="support-item"><i class="fas fa-virus"></i> Antivirus</div>
            <div class="support-item"><i class="fas fa-desktop"></i> Endpoint</div>
            <div class="support-item"><i class="fas fa-eye"></i> Monitoring</div>
            <div class="support-item"><i class="fas fa-search"></i> VA</div>
            <div class="support-item"><i class="fas fa-cloud"></i> DDoS Protection</div>
          </div>
        </div>
        
        <!-- KEUNGGULAN -->
        <div class="service-benefits">
          <h4><i class="fas fa-medal me-2"></i> Keunggulan Keamanan</h4>
          <ul>
            <li><i class="fas fa-check-circle text-success"></i> Perlindungan 24/7</li>
            <li><i class="fas fa-check-circle text-success"></i> Update ancaman real-time</li>
            <li><i class="fas fa-check-circle text-success"></i> Tim response insiden</li>
          </ul>
        </div>
      `
    },
    
    website: {
      title: t.modalWebsiteTitle,
      content: `
        <!-- DESKRIPSI -->
        <div class="service-description">
          <p class="service-desc-text">${t.modalWebsiteDesc}</p>
        </div>
        
        <!-- JENIS WEBSITE & FITUR -->
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <div class="split-card">
              <h4><i class="fas fa-laptop"></i> ${t.modalWebsiteTypes}</h4>
              <ul>
                <li><strong>Company Profile</strong> - ${lang === 'id' ? 'Website profesional perusahaan' : 'Professional company website'}</li>
                <li><strong>E-Commerce</strong> - ${lang === 'id' ? 'Toko online + payment gateway' : 'Online store + payment gateway'}</li>
                <li><strong>CMS Website</strong> - ${lang === 'id' ? 'Konten mudah diupdate' : 'Easy-to-update content'}</li>
                <li><strong>Web Application</strong> - ${lang === 'id' ? 'Aplikasi web custom' : 'Custom web application'}</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="split-card">
              <h4><i class="fas fa-star"></i> ${t.modalWebsiteFeatures}</h4>
              <ul>
                <li>✓ Responsive Design</li>
                <li>✓ SEO Optimization</li>
                <li>✓ Fast Loading</li>
                <li>✓ SSL Security</li>
                <li>✓ CMS Included</li>
                <li>✓ Google Analytics</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- YANG KAMI SUPPORT -->
        <div class="service-support mb-4">
          <h4><i class="fas fa-code me-2"></i> Teknologi Yang Kami Gunakan</h4>
          <div class="support-grid">
            <div class="support-item">HTML5/CSS3</div>
            <div class="support-item">JavaScript</div>
            <div class="support-item">PHP/Laravel</div>
            <div class="support-item">WordPress</div>
            <div class="support-item">MySQL</div>
            <div class="support-item">Bootstrap</div>
          </div>
        </div>
        
        <!-- KEUNGGULAN -->
        <div class="service-benefits">
          <h4><i class="fas fa-medal me-2"></i> Keunggulan Website Kami</h4>
          <ul>
            <li><i class="fas fa-check-circle text-success"></i> Desain modern & responsif</li>
            <li><i class="fas fa-check-circle text-success"></i> SEO friendly</li>
            <li><i class="fas fa-check-circle text-success"></i> Maintenance gratis 1 bulan</li>
          </ul>
        </div>
      `
    },
    
    iot: {
      title: t.modalIoTTitle,
      content: `
        <!-- DESKRIPSI -->
        <div class="service-description">
          <p class="service-desc-text">${t.modalIoTDesc}</p>
        </div>
        
        <!-- APLIKASI & KOMPONEN -->
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <div class="split-card">
              <h4><i class="fas fa-microchip"></i> ${t.modalIoTApplications}</h4>
              <ul>
                <li>Smart Manufacturing</li>
                <li>Smart Building</li>
                <li>Temperature Monitoring</li>
                <li>Fleet Tracking</li>
                <li>Smart Agriculture</li>
                <li>Healthcare IoT</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="split-card">
              <h4><i class="fas fa-cog"></i> ${t.modalIoTComponents}</h4>
              <ul>
                <li>Sensors & Devices</li>
                <li>Connectivity (WiFi/LoRa/4G)</li>
                <li>IoT Platform</li>
                <li>Dashboard & Analytics</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- YANG KAMI SUPPORT -->
        <div class="service-support mb-4">
          <h4><i class="fas fa-wifi me-2"></i> Konektivitas & Hardware</h4>
          <div class="support-grid">
            <div class="support-item">ESP32/8266</div>
            <div class="support-item">Arduino</div>
            <div class="support-item">Raspberry Pi</div>
            <div class="support-item">LoRaWAN</div>
            <div class="support-item">MQTT</div>
            <div class="support-item">Node-RED</div>
          </div>
        </div>
        
        <!-- KEUNGGULAN -->
        <div class="service-benefits">
          <h4><i class="fas fa-medal me-2"></i> Keunggulan IoT Kami</h4>
          <ul>
            <li><i class="fas fa-check-circle text-success"></i> Real-time monitoring</li>
            <li><i class="fas fa-check-circle text-success"></i> Integrasi mudah</li>
            <li><i class="fas fa-check-circle text-success"></i> Skalabel untuk industri</li>
          </ul>
        </div>
      `
    },
    
    procurement: {
      title: t.modalProcurementTitle,
      content: `
        <!-- DESKRIPSI -->
        <div class="service-description">
          <p class="service-desc-text">${t.modalProcurementDesc}</p>
        </div>
        
        <!-- KATEGORI & PROSES -->
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <div class="split-card">
              <h4><i class="fas fa-box"></i> ${t.modalProcurementCategories}</h4>
              <ul>
                <li><strong>Hardware:</strong> Server, PC, Network, Printer</li>
                <li><strong>Software:</strong> License, Antivirus, ERP</li>
                <li><strong>Accessories:</strong> HDD, RAM, Cable, UPS</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="split-card">
              <h4><i class="fas fa-clock"></i> ${t.modalProcurementProcess}</h4>
              <ul>
                <li>1. Konsultasi kebutuhan</li>
                <li>2. Quote harga</li>
                <li>3. Proses order</li>
                <li>4. Pembayaran</li>
                <li>5. Pengiriman</li>
                <li>6. Garansi & support</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- BRAND YANG KAMI SUPPORT -->
        <div class="service-support mb-4">
          <h4><i class="fas fa-building me-2"></i> Brand Ternama</h4>
          <div class="support-grid">
            <div class="support-item">Cisco</div>
            <div class="support-item">MikroTik</div>
            <div class="support-item">Dell</div>
            <div class="support-item">HP</div>
            <div class="support-item">Lenovo</div>
            <div class="support-item">Synology</div>
            <div class="support-item">Fortinet</div>
            <div class="support-item">Ubiquiti</div>
          </div>
        </div>
        
        <!-- KEUNGGULAN -->
        <div class="service-benefits">
          <h4><i class="fas fa-medal me-2"></i> ${t.modalProcurementBenefits}</h4>
          <ul>
            <li><i class="fas fa-check-circle text-success"></i> Harga kompetitif</li>
            <li><i class="fas fa-check-circle text-success"></i> Garansi resmi</li>
            <li><i class="fas fa-check-circle text-success"></i> Pengiriman cepat</li>
            <li><i class="fas fa-check-circle text-success"></i> Technical support</li>
          </ul>
        </div>
      `
    }
  };
  
  return contents[service];
}

// ==================== FUNGSI CHANGE LANGUAGE ====================
function changeLanguage(lang) {
  currentLang = lang;
  
  // Update semua elemen dengan ID
  for (const [key, value] of Object.entries(translations[lang])) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = value;
    }
  }
  
  // Update dropdown services text
  const servicesDropdown = document.getElementById('servicesDropdown');
  if (servicesDropdown) {
    servicesDropdown.textContent = translations[lang].navServices;
  }
  
  // Mapping service ke property translations
  const serviceMap = {
    'manage': 'navManageService',
    'network': 'navNetwork',
    'security': 'navSecurity',
    'website': 'navWebsite',
    'iot': 'navIot',
    'procurement': 'navProcurement'
  };
  
  // Update semua dropdown item
  document.querySelectorAll('.dropdown-item[data-service]').forEach(item => {
    const service = item.getAttribute('data-service');
    const translationKey = serviceMap[service];
    if (translationKey) {
      item.textContent = translations[lang][translationKey];
    }
  });
  
  // Update selected language text di dropdown
  const selectedLangSpan = document.getElementById('selected-language');
  if (selectedLangSpan) {
    selectedLangSpan.textContent = lang === 'id' ? 'Indonesia' : 'English';
  }
  
  // Update active state di dropdown items
  document.querySelectorAll('.language-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.lang === lang) {
      item.classList.add('active');
      // Update icon check
      const icon = item.querySelector('i');
      if (icon) icon.style.opacity = '1';
    } else {
      const icon = item.querySelector('i');
      if (icon) icon.style.opacity = '0';
    }
  });
  
  // Update modal if open
  const modalElement = document.getElementById('serviceModal');
  if (modalElement.classList.contains('show')) {
    const modalTitle = document.getElementById('serviceModalLabel').textContent.toLowerCase();
    let service = 'manage';
    if (modalTitle.includes('network')) service = 'network';
    else if (modalTitle.includes('security')) service = 'security';
    else if (modalTitle.includes('website')) service = 'website';
    else if (modalTitle.includes('iot')) service = 'iot';
    else if (modalTitle.includes('procurement')) service = 'procurement';
    
    const content = getModalContent(service, lang);
    document.getElementById('serviceModalLabel').textContent = content.title;
    document.getElementById('serviceModalBody').innerHTML = content.content;
  }
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
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
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
    contactForm.reset();
  });
}

// Help button
const helpButton = document.getElementById('helpButton');
if (helpButton) {
  helpButton.addEventListener('click', () => {
    alert(currentLang === 'id' 
      ? 'Halo! Ada yang bisa kami bantu? Silakan hubungi kami via WhatsApp.' 
      : 'Hello! How can we help you? Please contact us via WhatsApp.');
  });
}

// Service Modal - Open
document.querySelectorAll('.service-link, .dropdown-item[data-service]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const service = link.getAttribute('data-service');
    
    if (service) {
      const content = getModalContent(service, currentLang);
      document.getElementById('serviceModalLabel').textContent = content.title;
      document.getElementById('serviceModalBody').innerHTML = content.content;
      
      const modal = new bootstrap.Modal(document.getElementById('serviceModal'));
      modal.show();
    }
  });
});

// Active nav link
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  if (sections.length === 0) return;
  
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
  const copyrightEl = document.getElementById('footerCopyright');
  if (copyrightEl) {
    copyrightEl.textContent = copyrightEl.textContent.replace('2025', year);
  }
  
  // Tutup navbar mobile saat link diklik
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});