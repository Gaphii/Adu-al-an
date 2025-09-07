document.addEventListener('DOMContentLoaded', function() {
  // Modal functionality
  const modal = document.getElementById('memberModal');
  const closeModal = document.getElementById('modalClose');
  const viewProfileButtons = document.querySelectorAll('.view-profile');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const members = document.querySelectorAll('.member');
  
  // Team member data
  const teamData = {
    ahmet: {
      name: "Ahmet Yılmaz",
      role: "Yazılım Geliştirici",
      bio: "Full-stack geliştirici, React ve Node.js uzmanı. 8 yılı aşkın tecrübesiyle birçok projeye imza attı. JavaScript, TypeScript, React, Node.js, MongoDB ve AWS konularında uzman. Enerjik ve yenilikçi yaklaşımıyla takım arkadaşlarına ilham veriyor.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      projects: "80+",
      experience: "8+",
      clients: "65+",
      awards: "15"
    },
    elif: {
      name: "Elif Demir",
      role: "UI/UX Tasarımcı",
      bio: "Modern ve kullanıcı dostu arayüz tasarımlarında uzman. Kullanıcı deneyimini ön planda tutar. Figma, Adobe XD, Sketch ve Photoshop'ta yetenekli. Müşteri ihtiyaçlarını anlama ve bunları estetik ve işlevsel tasarımlara dönüştürme konusunda üstün becerilere sahip.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      projects: "120+",
      experience: "6+",
      clients: "90+",
      awards: "22"
    },
    mehmet: {
      name: "Mehmet Kaya",
      role: "Proje Yöneticisi",
      bio: "Takım yönetimi ve proje planlamasında deneyimli. 50'den fazla projeyi başarıyla tamamladı. Agile, Scrum ve Waterfall metodolojilerinde uzman. Müşteri ilişkileri yönetimi ve risk yönetimi konularında güçlü yeteneklere sahip.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      projects: "50+",
      experience: "10+",
      clients: "45+",
      awards: "18"
    },
    zeynep: {
      name: "Zeynep Şahin",
      role: "Veri Analisti",
      bio: "Büyük veri ve istatistiksel analiz konularında uzman. Verilerden anlamlı içgörüler çıkarır. Python, R, SQL ve Tableau'da yetenekli. Makine öğrenmesi algoritmaları ve veri görselleştirme konularında deneyimli. Karmaşık veri kümelerini anlaşılır öngörülere dönüştürmede başarılı.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      projects: "75+",
      experience: "7+",
      clients: "55+",
      awards: "14"
    },
    ali: {
      name: "Ali Koç",
      role: "Sistem Mühendisi",
      bio: "Altyapı, ağ ve güvenlik sistemlerinde tecrübeli. Kritik sistemleri yönetme konusunda uzman. AWS, Azure, Linux ve network security konularında derin bilgi sahibi. Sistem optimizasyonu ve sorun giderme konularında üstün becerilere sahip.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      projects: "60+",
      experience: "9+",
      clients: "40+",
      awards: "11"
    },
    ayse: {
      name: "Ayşe Yıldız",
      role: "Dijital Pazarlama Uzmanı",
      bio: "SEO, sosyal medya ve reklam kampanyalarında uzman. Marka bilinirliği artırma konusunda başarılı. Google Analytics, Facebook Ads, Instagram Pazarlama ve içerik stratejisi konularında deneyimli. Müşteriler için etkili dijital pazarlama stratejileri geliştirmede yetenekli.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      projects: "95+",
      experience: "5+",
      clients: "70+",
      awards: "19"
    }
  };
  
  // Open modal
  viewProfileButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const member = this.getAttribute('data-member');
      showMemberDetails(member);
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal
  closeModal.addEventListener('click', function() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });
  
  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      members.forEach(member => {
        if (filter === 'all' || member.getAttribute('data-category') === filter) {
          member.style.display = 'block';
        } else {
          member.style.display = 'none';
        }
      });
    });
  });
  
  // Show member details in modal
  function showMemberDetails(memberId) {
    const member = teamData[memberId];
    
    if (member) {
      document.getElementById('modalImg').src = member.image;
      document.getElementById('modalName').textContent = member.name;
      document.getElementById('modalRole').textContent = member.role;
      document.getElementById('modalBio').textContent = member.bio;
      document.getElementById('statProjects').textContent = member.projects;
      document.getElementById('statExperience').textContent = member.experience;
      document.getElementById('statClients').textContent = member.clients;
      document.getElementById('statAwards').textContent = member.awards;
      
      // Update modal header background with member's image
      const modalHeader = document.querySelector('.modal-header');
      modalHeader.style.background = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${member.image}) center/cover`;
    }
  }
  
  // Add animation on scroll
  function checkScroll() {
    const members = document.querySelectorAll('.member');
    
    members.forEach(member => {
      const memberPosition = member.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (memberPosition < screenPosition) {
        member.style.opacity = 1;
        member.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Initial check on page load
  window.addEventListener('load', checkScroll);
  // Check on scroll
  window.addEventListener('scroll', checkScroll);
});
