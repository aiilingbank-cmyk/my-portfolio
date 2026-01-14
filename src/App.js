import React, { useState, useEffect } from 'react';
import { User, Briefcase, Award, Mail, Phone, Linkedin, MapPin, Menu, X, ArrowRight, GraduationCap, BookOpen, Calendar, Target, Ruler, Brain, ExternalLink, Train } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null); // State for Lightbox

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to create SVG placeholder (Backup)
  const getPlaceholderImage = (text, color) => {
    const svg = `
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${color}" />
        <rect x="20" y="20" width="360" height="260" fill="none" stroke="white" stroke-width="2" stroke-dasharray="5,5" />
        <text x="50%" y="125" font-family="'Prompt', sans-serif" font-size="40" fill="white" text-anchor="middle" dy=".3em">🏆</text>
        <text x="50%" y="200" font-family="'Prompt', sans-serif" font-size="18" fill="white" text-anchor="middle" font-weight="bold">${text}</text>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
  };

  // ข้อมูลประสบการณ์
  const experiences = [
    {
      company: "Oliver Muscle & Olvr Club",
      role: "Freelance Brand Manager",
      period: "ก.ย. 2568 - ปัจจุบัน",
      details: [
        "Strategic Planning: วางกลยุทธ์ธุรกิจและแผนการตลาดปี 2026 วิเคราะห์เทรนด์ Active Lifestyle เพื่อขยายฐานลูกค้า",
        "Community Building: ก่อตั้ง 'olvr club' จัดกิจกรรม Run Club และแคมเปญ 'Road to Hyrox' สร้าง Brand Loyalty ที่แข็งแกร่ง",
        "Product Management: บริหารจัดการเปิดตัวคอลเลกชัน 'BASE COLLECTION' ตั้งแต่คอนเซปต์จนถึงงานเปิดตัวสินค้า",
        "Digital Ops: ประยุกต์ใช้ Web App สร้าง Loyalty Program และเครื่องมือทางการตลาดเพื่อเก็บข้อมูลลูกค้า"
      ]
    },
    {
      company: "บริษัท เดอะ 31 สตูดิโอ จำกัด (Retail/Startup)",
      role: "Senior Human Resources Officer",
      period: "มิ.ย. 2568 - พ.ย. 2568",
      details: [
        "System Implementation: เป็น HR คนแรกที่วางรากฐานระบบ HR ทั้งหมดให้กับ Startup",
        "HRIS: เปลี่ยนระบบ Time Attendance จาก Finger Scan เป็น Mobile App (Humansoft)",
        "HRD: ออกแบบระบบ Onboarding, Training และ Evaluation ครบวงจร",
        "Payroll: ดูแล Payroll (K-Clash), Commission และประกันสังคม"
      ]
    },
    {
      company: "บริษัท ริช สปอร์ต จำกัด (มหาชน)",
      role: "HR Specialist (Recruitment)",
      period: "มี.ค. 2567 - มี.ค. 2568",
      details: [
        "High-Volume Recruitment: สรรหาพนักงาน PC และ Office รวม 5 แบรนด์ (Converse, Havaianas, etc.)",
        "Compliance: จัดการงานกรมพัฒนาฝีมือแรงงาน และงานคนพิการ (ม.33, ม.35)",
        "Admin: ดูแลงานจัดซื้อส่วนกลาง (PR/GR) และกิจกรรมบริษัทตลอดปี"
      ]
    },
    {
      company: "บริษัท อาฟเตอร์ยู จำกัด (มหาชน)",
      role: "Recruitment Supervisor",
      period: "ต.ค. 2566 - ก.พ. 2567",
      details: [
        "Strategy: วางกลยุทธ์สรรหาผ่าน TikTok/Facebook และ Job Fair",
        "Management: ดูแลทีมงาน 4 คน และสรรหาพนักงานสาขา/สำนักงานใหญ่",
        "Visa/Work Permit: ดูแลเอกสารแรงงานต่างด้าว"
      ]
    },
    {
      company: "บริษัท เคดีเอ็น จำกัด (Krispy Kreme)",
      role: "HR Officer / Supervisor",
      period: "ธ.ค. 2563 - ก.ย. 2566",
      details: [
        "Manpower: ควบคุมอัตรากำลังพล 44 สาขา และ Head Office",
        "C&B: จัดทำข้อมูลเปรียบเทียบฐานเงินเดือน และประเมินผลงาน (KPIs)",
        "Audit: ลงพื้นที่ตรวจสอบการปฏิบัติงานหน้าร้าน"
      ]
    },
    {
      company: "บริษัท เจียเม้งมาร์เก็ตติ้ง จำกัด (ร้านใบเมี่ยง)",
      role: "เจ้าหน้าที่ฝ่ายบุคคล",
      period: "ม.ค. 2563 - ธ.ค. 2563",
      details: [
        "Recruitment: สรรหาพนักงาน PC สินค้าสุขภาพ 20 สาขา",
        "Manpower Planning: วิเคราะห์กำลังคนและกำหนด Aging ตำแหน่งงานว่างไม่เกิน 30 วัน",
        "Retention: ออกเยี่ยมสาขาเพื่อลดอัตราการลาออก"
      ]
    },
    {
      company: "บริษัท รอนนี่ อินเตอร์ เทรดดิ้ง จำกัด",
      role: "ผู้จัดการแผนกสรรหาและว่าจ้าง",
      period: "มี.ค. 2562 - ธ.ค. 2562",
      details: [
        "Achievement: สรรหาพนักงานครบตามกำหนดภายใน 15 วัน",
        "Operation: ดูแล Time Attendance, Payroll (ไม่รวมภาษี), และกฎระเบียบ",
        "Admin: ดูแลสัญญาจ้างและการตรวจประวัติอาชญากรรม"
      ]
    },
    {
      company: "บริษัท ทีจี เซลลูล่าร์ เวิร์ด จำกัด",
      role: "เจ้าหน้าที่ฝ่ายทรัพยากรมนุษย์",
      period: "ก.พ. 2560 - ก.พ. 2562",
      details: [
        "Achievement: สรรหาบุคลากรได้ตามเป้าหมาย 50 คน/เดือน",
        "Sourcing: ริเริ่มช่องทาง Line@, Facebook, Google Form",
        "Analysis: จัดทำรายงานวิเคราะห์ปัญหาการสรรหาเสนอผู้บริหาร"
      ]
    }
  ];

  // ข้อมูลใบรับรองพร้อมรูปภาพจริงจาก PostImg
  const certificates = [
    {
      title: "Body Language",
      issuer: "Mahidol University",
      link: "https://i.postimg.cc/ZKYK43tT/phas'a-kay.png", // รูปภาษากาย
      color: "#4F46E5" 
    },
    {
      title: "Welfare Fund",
      issuer: "Sprout Solutions",
      link: "https://i.postimg.cc/sDfDsSd3/1.jpg", // เรียงตามลำดับ 1
      color: "#059669"
    },
    {
      title: "Canva Certified",
      issuer: "Canva",
      link: "https://i.postimg.cc/KvcvxLSF/3.jpg", // เรียงตามลำดับ 2
      color: "#7C3AED" 
    },
     {
      title: "HRM Practices",
      issuer: "Chulalongkorn",
      link: "https://i.postimg.cc/xTjTnHDn/56.jpg", // เรียงตามลำดับ 3
      color: "#DB2777"
    },
    {
      title: "Interview Tech.",
      issuer: "Prof. Training Sol.",
      link: "https://i.postimg.cc/4N4Nstkk/image.jpg", // เรียงตามลำดับ 4
      color: "#EA580C"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#2D2D2D]">
      {/* CSS Styles - Import Font Here */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@200;300;400;500;600;700&display=swap');
          
          /* Force Font Application */
          body, button, input, textarea, select {
            font-family: 'Prompt', sans-serif !important;
          }
          
          .font-prompt {
            font-family: 'Prompt', sans-serif !important;
          }
        `}
      </style>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate Fullscreen" 
              className="w-full h-full object-contain rounded-lg shadow-2xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed w-full bg-[#FDFBF9]/95 backdrop-blur-md z-50 border-b border-[#E5E5E5] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer hover:opacity-80 transition" onClick={() => scrollToSection('home')}>
              <span className="font-bold text-2xl tracking-tighter text-[#1F1F1F]">TY.</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              {['About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 relative group ${
                    activeSection === item.toLowerCase() 
                      ? 'text-[#A68A64]' 
                      : 'text-[#757575] hover:text-[#2D2D2D]'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A68A64] transition-all duration-300 group-hover:w-full ${activeSection === item.toLowerCase() ? 'w-full' : ''}`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-[#2D2D2D] hover:text-[#A68A64] transition">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-fade-in-down">
            <div className="px-6 py-6 space-y-4">
              {['Home', 'About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-lg font-medium text-[#2D2D2D] hover:text-[#A68A64] py-2 border-b border-gray-50 last:border-0"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          
          <div className="md:w-1/2 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-[#A68A64]/10 text-[#A68A64] rounded-full text-xs font-bold tracking-widest uppercase mb-2">
                Open to Work
              </div>
              <span className="block text-[#5D5D5D] font-medium tracking-wider text-sm uppercase">Senior Human Resources Officer</span>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1F1F1F] mb-2">
                  ธชาทัช อยู่เจริญ
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-[#A68A64] tracking-wide mb-4 uppercase">
                  TACHATHAT YOOJAREAN
                </h2>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F5F5] rounded-full text-sm font-medium text-[#5D5D5D] hover:bg-[#E5E5E5] transition cursor-default">
                    <Brain size={18} className="text-[#A68A64]" />
                    <span>MBTI : ENFJ (The Protagonist)</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-[#5D5D5D] font-light leading-relaxed max-w-lg mt-4 border-l-4 border-[#A68A64] pl-4">
              ผู้เชี่ยวชาญด้านทรัพยากรบุคคลกว่า 12 ปี เชี่ยวชาญด้าน Recruitment, System Implementation และ HR Generalist พร้อมขับเคลื่อนองค์กรด้วยเทคโนโลยีและกลยุทธ์ที่ทันสมัย
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-[#1F1F1F] text-white font-medium rounded-full hover:bg-[#A68A64] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                ติดต่อร่วมงาน <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                 onClick={() => scrollToSection('experience')}
                 className="px-8 py-4 border border-[#D1D1D1] text-[#1F1F1F] font-medium rounded-full hover:border-[#1F1F1F] hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
              >
                ดูประสบการณ์
              </button>
            </div>

            <div className="pt-10 flex items-center gap-8 text-[#757575]">
                <div className="flex flex-col">
                    <span className="font-bold text-3xl text-[#1F1F1F]">12+</span>
                    <span className="text-xs uppercase tracking-wide mt-1">Years Exp.</span>
                </div>
                <div className="w-px h-12 bg-[#E5E5E5]"></div>
                <div className="flex flex-col">
                    <span className="font-bold text-3xl text-[#1F1F1F]">Full</span>
                    <span className="text-xs uppercase tracking-wide mt-1">Stack HR</span>
                </div>
                <div className="w-px h-12 bg-[#E5E5E5]"></div>
                <div className="flex flex-col">
                    <span className="font-bold text-3xl text-[#1F1F1F]">HRIS</span>
                    <span className="text-xs uppercase tracking-wide mt-1">Implementer</span>
                </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end relative">
             <div className="relative group">
                 <div className="w-[280px] h-[350px] md:w-[380px] md:h-[480px] bg-[#EBEBEB] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border-[8px] border-white transition-transform duration-500 group-hover:scale-[1.02]">
                    <img 
                        src="https://img2.pic.in.th/6b797c63-b4e8-46c3-b07c-c12531f682b4.jpg"
                        alt="Tachathat Yoojarean" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "https://placehold.co/400x500/e0e0e0/555555?text=Tachathat+Yoojarean";
                        }}
                    />
                 </div>
                 <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#A68A64] rounded-full opacity-20 z-0 blur-2xl group-hover:opacity-30 transition-opacity"></div>
                 <div className="absolute top-10 -right-10 w-24 h-24 border-4 border-[#A68A64]/30 rounded-full z-0 group-hover:rotate-45 transition-transform duration-700"></div>
             </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 z-0"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5">
               <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-8 flex flex-col">
                 <span className="text-[#A68A64] text-sm uppercase tracking-wider font-bold mb-3">About Me</span>
                 ข้อมูลส่วนตัว
               </h2>
               <div className="w-20 h-1.5 bg-[#1F1F1F] mb-8 rounded-full"></div>
               
               <div className="bg-[#F9FAFB] p-8 rounded-2xl border border-gray-100 space-y-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-[#A68A64]"><Target size={20} /></div>
                      <div>
                          <p className="text-xs text-gray-400 uppercase font-bold tracking-wide">Desired Job</p>
                          <p className="font-semibold text-[#2D2D2D] text-base mt-1">HR Supervisor</p>
                          <p className="font-medium text-[#5D5D5D] text-sm">Sr. HR Specialist (Recruitment)</p>
                      </div>
                  </div>

                  <div className="flex items-start gap-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-[#A68A64]"><Briefcase size={20} /></div>
                      <div>
                          <p className="text-xs text-gray-400 uppercase font-bold tracking-wide">Employment Type</p>
                          <p className="font-medium text-[#2D2D2D] text-sm mt-1">Freelance / Full-time / Hybrid</p>
                      </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-[#A68A64]"><Calendar size={20} /></div>
                      <div>
                          <p className="text-xs text-gray-400 uppercase font-bold tracking-wide">DOB / Age</p>
                          <p className="font-medium text-[#2D2D2D]">8 ก.ค. 2530 (38 ปี)</p>
                      </div>
                  </div>

                   <div className="flex items-center gap-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-[#A68A64]"><Ruler size={20} /></div>
                      <div>
                          <p className="text-xs text-gray-400 uppercase font-bold tracking-wide">Height / Weight</p>
                          <p className="font-medium text-[#2D2D2D]">169 ซม. / 64 กก.</p>
                      </div>
                  </div>

                  <div className="flex items-start gap-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-[#A68A64]"><MapPin size={20} /></div>
                      <div>
                          <p className="text-xs text-gray-400 uppercase font-bold tracking-wide">Preferred Location</p>
                          <p className="font-semibold text-[#2D2D2D] text-sm mt-1">กรุงเทพมหานคร</p>
                          <p className="font-medium text-[#16a34a] text-xs flex items-center gap-1 mt-1 bg-green-50 px-2 py-1 rounded-md w-fit">
                             <Train size={12}/> BTS / MRT Accessible
                          </p>
                      </div>
                  </div>
               </div>
            </div>
            
            <div className="md:col-span-7 text-[#5D5D5D] space-y-8 leading-loose font-light pt-4">
                <blockquote className="text-xl font-medium text-[#1F1F1F] italic border-l-4 border-[#A68A64] pl-6 py-2 bg-gray-50 rounded-r-lg">
                  "HR ที่สร้างคุณค่าให้กับองค์กรด้วยกลยุทธ์และการจัดการที่มีประสิทธิภาพ"
                </blockquote>
                <div className="space-y-6 text-lg">
                  <p>
                    ผมมีประสบการณ์กว่า <strong className="text-[#1F1F1F]">12 ปี</strong> ในสายงานทรัพยากรบุคคล (Retail, F&B, Startup) เชี่ยวชาญในการบริหารจัดการแบบครบวงจร (Full-Loop HR) ตั้งแต่การวางแผนกำลังคน การสรรหา (Recruitment) ไปจนถึงการดูแลพนักงาน (Retention)
                  </p>
                  <p>
                    จุดแข็งสำคัญคือการ <strong className="text-[#A68A64]">System Implementation</strong> ผมมีประสบการณ์ตรงในการวางระบบ HR ให้กับบริษัท Startup เป็นคนแรก และเปลี่ยนผ่านระบบการทำงานสู่ดิจิทัล (Digital Transformation) เช่น การใช้ Humansoft และ AI Tools เพื่อเพิ่มประสิทธิภาพและความแม่นยำ
                  </p>
                  <p>
                    ผมพร้อมที่จะนำทักษะ <strong className="text-[#A68A64]">Leadership</strong> และความรู้ด้านกฎหมายแรงงาน/Compliance มาช่วยขับเคลื่อนทีมและองค์กรให้เติบโตอย่างยั่งยืน
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F]">
                 <span className="text-[#A68A64] text-sm uppercase tracking-wider font-bold block mb-3">Career Path</span>
                 ประสบการณ์ทำงาน
             </h2>
             <span className="text-[#757575] text-sm mt-4 md:mt-0 font-medium bg-white px-4 py-2 rounded-full shadow-sm">
               เส้นทางการเติบโตในสายอาชีพ HR (12 ปี+)
             </span>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Icon Marker */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 group-hover:bg-[#A68A64] transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                   <Briefcase size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#A68A64]/30 relative">
                  {/* Arrow for Desktop */}
                  <div className="hidden md:block absolute top-1/2 -mt-2 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45 md:group-odd:-right-2.5 md:group-odd:rotate-[135deg] md:group-even:-left-2.5 md:group-even:-rotate-45 z-0 group-hover:border-[#A68A64]/30 transition-colors"></div>
                  
                  <div className="flex flex-col mb-4">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-lg font-bold text-[#1F1F1F] group-hover:text-[#A68A64] transition-colors leading-tight">{exp.role}</h3>
                       <span className="inline-block px-3 py-1 bg-[#F5F5F5] text-[#5D5D5D] text-xs font-semibold rounded-full whitespace-nowrap ml-2">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-md text-[#5D5D5D] font-medium">{exp.company}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-[#5D5D5D] text-sm font-light leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mt-2 mr-3 flex-shrink-0 opacity-60"></span>
                            <span>{detail}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section id="skills" className="py-24 bg-[#1F1F1F] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ทักษะและความเชี่ยวชาญ</h2>
            <p className="text-[#A0A0A0] font-light text-lg">เครื่องมือและความสามารถที่ผมพร้อมนำมาใช้พัฒนาองค์กร</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2D2D2D] p-8 rounded-2xl border border-[#3D3D3D] hover:border-[#A68A64] transition-colors duration-500 hover:-translate-y-2 transform">
                <div className="flex items-center mb-6">
                    <div className="p-4 bg-[#A68A64]/10 rounded-xl text-[#A68A64]"><User size={28}/></div>
                    <h3 className="ml-4 text-xl font-bold">HR Management</h3>
                </div>
                <ul className="space-y-4 text-[#D4D4D4] font-light text-sm">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mr-3"></span>End-to-End Recruitment</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mr-3"></span>Manpower Planning</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mr-3"></span>Payroll & Compensation</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mr-3"></span>Labor Law Compliance</li>
                </ul>
            </div>

            <div className="bg-[#2D2D2D] p-8 rounded-2xl border border-[#3D3D3D] hover:border-[#A68A64] transition-colors duration-500 hover:-translate-y-2 transform">
                <div className="flex items-center mb-6">
                    <div className="p-4 bg-[#A68A64]/10 rounded-xl text-[#A68A64]"><Briefcase size={28}/></div>
                    <h3 className="ml-4 text-xl font-bold">HRIS & Tools</h3>
                </div>
                <ul className="space-y-4 text-[#D4D4D4] font-light text-sm">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mr-3"></span>Humansoft (Mobile App)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mr-3"></span>K-Clash (Payroll)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mr-3"></span>TigerSoft / B-plus</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mr-3"></span>Google Workspace Pro</li>
                </ul>
            </div>

            <div className="bg-[#2D2D2D] p-8 rounded-2xl border border-[#3D3D3D] hover:border-[#A68A64] transition-colors duration-500 hover:-translate-y-2 transform">
                <div className="flex items-center mb-6">
                    <div className="p-4 bg-[#A68A64]/10 rounded-xl text-[#A68A64]"><Award size={28}/></div>
                    <h3 className="ml-4 text-xl font-bold">Digital & Creative</h3>
                </div>
                <ul className="space-y-4 text-[#D4D4D4] font-light text-sm">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mr-3"></span>Canva (Certified)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mr-3"></span>AI Tools (ChatGPT/Gemini)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mr-3"></span>Recruitment Marketing</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#A68A64] rounded-full mr-3"></span>Ps / Ai / CapCut</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Training Section */}
      <section id="education" className="py-24 bg-[#FDFBF9]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-4">
              การศึกษาและการฝึกอบรม
            </h2>
            <div className="w-16 h-1.5 bg-[#A68A64] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
             {/* University */}
             <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A68A64]/5 rounded-bl-full group-hover:bg-[#A68A64]/10 transition-colors"></div>
                <div className="flex items-start gap-5">
                    <div className="p-3 bg-[#A68A64]/10 rounded-full text-[#A68A64] mt-1 shrink-0">
                        <GraduationCap size={32} />
                    </div>
                    <div>
                        <span className="text-sm font-bold text-[#A68A64] tracking-wider uppercase block mb-1">2553</span>
                        <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">ปริญญาตรี</h3>
                        <p className="text-[#5D5D5D] font-medium mb-1">สาขาเทคโนโลยีและการสื่อสารการศึกษา</p>
                        <p className="text-[#757575] text-sm">มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี</p>
                        <div className="mt-4 inline-block px-3 py-1 bg-[#F5F5F5] rounded-full text-xs text-[#5D5D5D] font-semibold">
                            GPA 2.74
                        </div>
                    </div>
                </div>
             </div>

             {/* Vocational */}
             <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5D5D5D]/5 rounded-bl-full group-hover:bg-[#5D5D5D]/10 transition-colors"></div>
                <div className="flex items-start gap-5">
                    <div className="p-3 bg-[#5D5D5D]/10 rounded-full text-[#5D5D5D] mt-1 shrink-0">
                        <BookOpen size={32} />
                    </div>
                    <div>
                        <span className="text-sm font-bold text-[#5D5D5D] tracking-wider uppercase block mb-1">2551</span>
                        <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">ปวช. (พาณิชยกรรม)</h3>
                        <p className="text-[#5D5D5D] font-medium mb-1">สาขาคอมพิวเตอร์ธุรกิจ</p>
                        <p className="text-[#757575] text-sm">วิทยาลัยเทคนิคพณิชยการอยุธยา</p>
                    </div>
                </div>
             </div>
          </div>
          
          {/* Certifications Gallery */}
           <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1F1F1F] mb-10 flex items-center justify-center">
                  <Award className="mr-3 text-[#A68A64]" size={28} /> 
                  Certificates & Professional Training
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {certificates.map((cert, i) => (
                      <div 
                        key={i} 
                        onClick={() => setSelectedImage(cert.link)} 
                        className="group block cursor-pointer"
                      >
                          <div className="relative overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 aspect-[4/3] bg-gray-50">
                              <img 
                                src={cert.link}
                                alt={cert.title}
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = getPlaceholderImage(cert.title.split(' ').slice(0, 2).join(' '), cert.color);
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                  <span className="text-white font-medium text-sm flex items-center gap-2">
                                    <ExternalLink size={16} /> View Certificate
                                  </span>
                              </div>
                          </div>
                          <div className="mt-4 text-center">
                              <h4 className="font-semibold text-[#1F1F1F] text-base leading-tight group-hover:text-[#A68A64] transition-colors">
                                  {cert.title}
                              </h4>
                              <p className="text-xs text-[#757575] mt-1 uppercase tracking-wide">{cert.issuer}</p>
                          </div>
                      </div>
                  ))}
              </div>
           </div>
        </div>
      </section>

       {/* Contact Section */}
       <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-3xl p-10 md:p-16 shadow-lg border border-gray-100 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1F1F1F] to-[#A68A64]"></div>
             
             <span className="text-[#A68A64] font-bold tracking-widest text-xs uppercase mb-4 block">Get In Touch</span>
             <h2 className="text-3xl md:text-5xl font-bold text-[#1F1F1F] mb-8">สนใจร่วมงานกันไหมครับ?</h2>
             <p className="text-gray-500 mb-12 max-w-lg mx-auto font-light">
               พร้อมเริ่มงานทันที และสามารถเดินทางด้วยรถไฟฟ้า BTS/MRT ได้สะดวก
             </p>
             
             <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                <a href="tel:0979289910" className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-[#5D5D5D] hover:text-[#A68A64] border border-gray-50 min-w-[200px] justify-center group">
                    <Phone size={20} className="group-hover:animate-pulse" />
                    <span className="font-medium">097-928-9910</span>
                </a>
                <a href="mailto:tachathat.bk@hotmail.com" className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-[#5D5D5D] hover:text-[#A68A64] border border-gray-50 min-w-[200px] justify-center group">
                    <Mail size={20} className="group-hover:animate-bounce" />
                    <span className="font-medium">Send Email</span>
                </a>
                <a href="https://www.linkedin.com/in/tachathat-bk" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-[#0A66C2] rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-white hover:bg-[#004182] min-w-[200px] justify-center">
                    <Linkedin size={20} />
                    <span className="font-medium">LinkedIn Profile</span>
                </a>
             </div>

             <div className="text-sm text-[#9CA3AF] font-light flex items-center justify-center gap-2 bg-gray-50 py-3 px-6 rounded-full w-fit mx-auto">
                 <MapPin size={16} className="text-[#A68A64]" />
                 959/233 ซ.ลาดพร้าว 71 แขวงสะพานสอง เขตวังทองหลาง กทม. 10310
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F1F1F] text-white py-12 border-t border-[#333]">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-2">TACHATHAT YOOJAREAN</h2>
            <p className="text-[#A0A0A0] text-sm font-light mb-8">Senior Human Resources Officer</p>
            <div className="w-12 h-1 bg-[#A68A64] mx-auto mb-8 rounded-full"></div>
            <p className="text-[#555] text-xs font-light">© 2026 Tachathat Yoojarean. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;