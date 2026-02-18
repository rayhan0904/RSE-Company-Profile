// Service features data
const serviceFeatures = {
  manage: {
    title: 'Manage Service',
    description: 'Layanan pengelolaan IT menyeluruh yang mencakup pemeliharaan preventif dan korektif untuk memastikan infrastruktur teknologi Anda selalu dalam kondisi optimal.',
    features: [
      {
        title: 'Preventive Maintenance',
        icon: 'fa-calendar-check',
        items: [
          'Pemeriksaan rutin hardware & software',
          'Update security patch & antivirus',
          'Backup data terjadwal',
          'Monitoring performa 24/7',
          'Audit keamanan berkala'
        ]
      },
      {
        title: 'Corrective Maintenance',
        icon: 'fa-tools',
        items: [
          'Response darurat < 1 jam',
          'Perbaikan hardware/software',
          'Data recovery',
          'Root cause analysis',
          'Reporting & rekomendasi'
        ]
      }
    ],
    support: ['Server', 'Network', 'Database', 'Workstation', 'Printer', 'Cloud', 'Security', 'Mobile Device'],
    benefits: [
      'Minimalkan downtime hingga 99.9%',
      'Biaya operasional lebih terprediksi',
      'Fokus pada bisnis inti',
      'Tim support profesional 24/7'
    ]
  },
  
  network: {
    title: 'Network Infrastructure',
    description: 'Kami merancang, membangun, dan mengelola infrastruktur jaringan yang handal, scalable, dan aman untuk mendukung konektivitas bisnis Anda dengan performa tinggi.',
    features: [
      {
        title: 'Fitur Utama',
        icon: 'fa-cog',
        items: [
          'Desain jaringan enterprise-grade',
          'Redundancy & high availability',
          'Quality of Service (QoS)',
          'Network segmentation',
          'Monitoring & analytics real-time'
        ]
      },
      {
        title: 'Keunggulan',
        icon: 'fa-star',
        items: [
          'Skalabilitas tinggi',
          'Keamanan berlapis',
          'Ketersediaan 99.9%',
          'Manajemen terpusat'
        ]
      }
    ],
    support: ['LAN/WAN', 'Wireless', 'Firewall', 'Load Balancer', 'VPN', 'SD-WAN', 'CCTV Network', 'Fiber Optic'],
    benefits: [
      'Desain sesuai kebutuhan bisnis',
      'Skalabilitas tinggi',
      'Monitoring 24/7',
      'Tim engineer bersertifikasi'
    ]
  },
  
  security: {
    title: 'Security Infrastructure',
    description: 'Melindungi aset digital dan infrastruktur kritis perusahaan Anda dengan pendekatan keamanan berlapis yang mencakup pencegahan, deteksi, dan respons terhadap ancaman siber.',
    features: [
      {
        title: 'Lapisan Keamanan',
        icon: 'fa-layer-group',
        items: [
          'Cegah - Firewall & Antivirus',
          'Deteksi - IDS/IPS & Monitoring',
          'Respon - Incident Response',
          'Pulihkan - Backup & Recovery'
        ]
      },
      {
        title: 'Layanan Keamanan',
        icon: 'fa-shield-alt',
        items: [
          'Firewall Management',
          'Endpoint Protection',
          'Vulnerability Assessment',
          'DDoS Protection'
        ]
      }
    ],
    support: ['Firewall', 'Antivirus', 'Endpoint', 'Monitoring', 'VA Scanner', 'DDoS', 'Encryption', 'IAM'],
    benefits: [
      'Perlindungan 24/7',
      'Update ancaman real-time',
      'Tim response insiden',
      'Compliance & audit ready'
    ]
  },
  
  website: {
    title: 'Jasa Pembuatan Website',
    description: 'Kami membantu Anda membangun website profesional yang responsif, cepat, dan SEO-friendly untuk meningkatkan visibilitas bisnis Anda di dunia digital.',
    features: [
      {
        title: 'Jenis Website',
        icon: 'fa-laptop',
        items: [
          'Company Profile - Website profesional perusahaan',
          'E-Commerce - Toko online + payment gateway',
          'CMS Website - Konten mudah diupdate',
          'Web Application - Aplikasi web custom'
        ]
      },
      {
        title: 'Fitur Yang Kami Tawarkan',
        icon: 'fa-star',
        items: [
          'Responsive Design',
          'SEO Optimization',
          'Fast Loading',
          'SSL Security',
          'CMS Included',
          'Google Analytics'
        ]
      }
    ],
    support: ['HTML5/CSS3', 'JavaScript', 'PHP/Laravel', 'WordPress', 'MySQL', 'Bootstrap', 'React.js', 'Vue.js'],
    benefits: [
      'Desain modern & responsif',
      'SEO friendly',
      'Maintenance gratis 1 bulan',
      'Free domain & hosting 1 tahun'
    ]
  },
  
  iot: {
    title: 'IOT Solutions',
    description: 'Menghubungkan perangkat fisik ke internet untuk mengumpulkan data, mengotomatisasi proses, dan memberikan insight real-time yang membantu pengambilan keputusan bisnis yang lebih cerdas.',
    features: [
      {
        title: 'Aplikasi IoT',
        icon: 'fa-microchip',
        items: [
          'Smart Manufacturing',
          'Smart Building',
          'Temperature Monitoring',
          'Fleet Tracking',
          'Smart Agriculture',
          'Healthcare IoT'
        ]
      },
      {
        title: 'Komponen IoT',
        icon: 'fa-cog',
        items: [
          'Sensors & Devices',
          'Connectivity (WiFi/LoRa/4G)',
          'IoT Platform',
          'Dashboard & Analytics'
        ]
      }
    ],
    support: ['ESP32/8266', 'Arduino', 'Raspberry Pi', 'LoRaWAN', 'MQTT', 'Node-RED', 'AWS IoT', 'ThingsBoard'],
    benefits: [
      'Real-time monitoring',
      'Integrasi mudah',
      'Skalabel untuk industri',
      'Efisiensi operasional'
    ]
  },
  
  procurement: {
    title: 'Pengadaan Barang',
    description: 'Layanan pengadaan perangkat keras, perangkat lunak, dan perlengkapan IT dengan harga kompetitif dan garansi resmi untuk mendukung kebutuhan operasional bisnis Anda.',
    features: [
      {
        title: 'Kategori Produk',
        icon: 'fa-box',
        items: [
          'Hardware: Server, PC, Network, Printer',
          'Software: License, Antivirus, ERP',
          'Accessories: HDD, RAM, Cable, UPS',
          'Cloud Services: VPS, Hosting, Email'
        ]
      },
      {
        title: 'Proses Pengadaan',
        icon: 'fa-clock',
        items: [
          'Konsultasi kebutuhan',
          'Quote harga kompetitif',
          'Proses order cepat',
          'Pembayaran fleksibel',
          'Pengiriman terjamin',
          'Garansi & support'
        ]
      }
    ],
    support: ['Cisco', 'MikroTik', 'Dell', 'HP', 'Lenovo', 'Synology', 'Fortinet', 'Ubiquiti'],
    benefits: [
      'Harga kompetitif',
      'Garansi resmi',
      'Pengiriman cepat',
      'Technical support',
      'After sales service'
    ]
  }
};

// English translations for service page
const serviceFeaturesEn = {
  manage: {
    title: 'Manage Service',
    description: 'Comprehensive IT management service covering preventive and corrective maintenance to ensure your technology infrastructure is always in optimal condition.',
    features: [
      {
        title: 'Preventive Maintenance',
        icon: 'fa-calendar-check',
        items: [
          'Regular hardware & software checks',
          'Security patch & antivirus updates',
          'Scheduled data backup',
          '24/7 performance monitoring',
          'Periodic security audit'
        ]
      },
      {
        title: 'Corrective Maintenance',
        icon: 'fa-tools',
        items: [
          'Emergency response < 1 hour',
          'Hardware/software repair',
          'Data recovery',
          'Root cause analysis',
          'Reporting & recommendations'
        ]
      }
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
    title: 'Network Infrastructure',
    description: 'We design, build, and manage reliable, scalable, and secure network infrastructure to support your business connectivity with high performance.',
    features: [
      {
        title: 'Main Features',
        icon: 'fa-cog',
        items: [
          'Enterprise-grade network design',
          'Redundancy & high availability',
          'Quality of Service (QoS)',
          'Network segmentation',
          'Real-time monitoring & analytics'
        ]
      },
      {
        title: 'Advantages',
        icon: 'fa-star',
        items: [
          'High scalability',
          'Layered security',
          '99.9% availability',
          'Centralized management'
        ]
      }
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
    title: 'Security Infrastructure',
    description: 'Protect your digital assets and critical infrastructure with a layered security approach covering prevention, detection, and response to cyber threats.',
    features: [
      {
        title: 'Security Layers',
        icon: 'fa-layer-group',
        items: [
          'Prevent - Firewall & Antivirus',
          'Detect - IDS/IPS & Monitoring',
          'Respond - Incident Response',
          'Recover - Backup & Recovery'
        ]
      },
      {
        title: 'Security Services',
        icon: 'fa-shield-alt',
        items: [
          'Firewall Management',
          'Endpoint Protection',
          'Vulnerability Assessment',
          'DDoS Protection'
        ]
      }
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
    title: 'Website Development',
    description: 'We help you build professional, responsive, fast, and SEO-friendly websites to increase your business visibility in the digital world.',
    features: [
      {
        title: 'Website Types',
        icon: 'fa-laptop',
        items: [
          'Company Profile - Professional company website',
          'E-Commerce - Online store + payment gateway',
          'CMS Website - Easy-to-update content',
          'Web Application - Custom web application'
        ]
      },
      {
        title: 'Features We Offer',
        icon: 'fa-star',
        items: [
          'Responsive Design',
          'SEO Optimization',
          'Fast Loading',
          'SSL Security',
          'CMS Included',
          'Google Analytics'
        ]
      }
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
    title: 'IOT Solutions',
    description: 'Connect physical devices to the internet to collect data, automate processes, and provide real-time insights for smarter business decisions.',
    features: [
      {
        title: 'IoT Applications',
        icon: 'fa-microchip',
        items: [
          'Smart Manufacturing',
          'Smart Building',
          'Temperature Monitoring',
          'Fleet Tracking',
          'Smart Agriculture',
          'Healthcare IoT'
        ]
      },
      {
        title: 'IoT Components',
        icon: 'fa-cog',
        items: [
          'Sensors & Devices',
          'Connectivity (WiFi/LoRa/4G)',
          'IoT Platform',
          'Dashboard & Analytics'
        ]
      }
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
    title: 'IT Procurement',
    description: 'Hardware, software, and IT equipment procurement services with competitive prices and official warranty to support your business operations.',
    features: [
      {
        title: 'Product Categories',
        icon: 'fa-box',
        items: [
          'Hardware: Server, PC, Network, Printer',
          'Software: License, Antivirus, ERP',
          'Accessories: HDD, RAM, Cable, UPS',
          'Cloud Services: VPS, Hosting, Email'
        ]
      },
      {
        title: 'Procurement Process',
        icon: 'fa-clock',
        items: [
          'Needs consultation',
          'Competitive price quote',
          'Fast order process',
          'Flexible payment',
          'Guaranteed delivery',
          'Warranty & support'
        ]
      }
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

// Function to get service from URL
function getServiceFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('service') || 'manage';
}

// Function to set active menu
function setActiveMenu(service) {
  document.querySelectorAll('.service-menu-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.service === service) {
      item.classList.add('active');
    }
  });
}

// Function to get current language
function getCurrentLanguage() {
  const selectedLang = document.getElementById('selected-language')?.textContent || 'Indonesia';
  return selectedLang === 'Indonesia' ? 'id' : 'en';
}

// Function to render service content
function renderServiceContent(service) {
  const lang = getCurrentLanguage();
  const data = lang === 'id' ? serviceFeatures : serviceFeaturesEn;
  const content = data[service];
  
  if (!content) return;
  
  // Update title
  const titleElement = document.getElementById('serviceDetailTitle');
  if (titleElement) {
    titleElement.textContent = content.title;
  }
  
  // Build features HTML
  let featuresHtml = '';
  content.features.forEach(feature => {
    featuresHtml += `
      <div class="feature-card">
        <h4><i class="fas ${feature.icon}"></i> ${feature.title}</h4>
        <ul>
          ${feature.items.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i> ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  });
  
  // Build support grid
  const supportHtml = `
    <div class="support-grid">
      ${content.support.map(item => `<div class="support-item">${item}</div>`).join('')}
    </div>
  `;
  
  // Build benefits
  const benefitsHtml = `
    <div class="benefits-list">
      <h4><i class="fas fa-medal me-2"></i> ${lang === 'id' ? 'Keuntungan Layanan' : 'Service Benefits'}</h4>
      <ul>
        ${content.benefits.map(benefit => `<li><i class="fas fa-check-circle text-success"></i> ${benefit}</li>`).join('')}
      </ul>
    </div>
  `;
  
  // Combine all
  const fullHtml = `
    <div class="service-description">
      <p>${content.description}</p>
    </div>
    
    <div class="service-features">
      ${featuresHtml}
    </div>
    
    <div class="service-support mb-4">
      <h4><i class="fas fa-headset me-2"></i> ${lang === 'id' ? 'Teknologi & Brand Yang Kami Dukung' : 'Technologies & Brands We Support'}</h4>
      ${supportHtml}
    </div>
    
    ${benefitsHtml}
  `;
  
  const contentDiv = document.getElementById('serviceContent');
  if (contentDiv) {
    contentDiv.innerHTML = fullHtml;
  }
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get service from URL
  const service = getServiceFromUrl();
  
  // Set active menu
  setActiveMenu(service);
  
  // Render content
  renderServiceContent(service);
  
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
      
      // Render new content
      renderServiceContent(service);
      
      // Scroll ke atas
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  
  // Handle browser back/forward
  window.addEventListener('popstate', function() {
    const service = getServiceFromUrl();
    setActiveMenu(service);
    renderServiceContent(service);
  });
  
  // Listen for language changes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'characterData' || mutation.type === 'childList') {
        const service = getServiceFromUrl();
        renderServiceContent(service);
      }
    });
  });
  
  const selectedLang = document.getElementById('selected-language');
  if (selectedLang) {
    observer.observe(selectedLang, { characterData: true, childList: true, subtree: true });
  }
});