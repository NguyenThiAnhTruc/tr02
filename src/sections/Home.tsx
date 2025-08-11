import React from 'react';
import { Facebook, MessageCircle, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/yourprofile',
      color: 'text-blue-600',
    },
    {
      name: 'Zalo',
      icon: MessageCircle,
      url: 'https://zalo.me/yourprofile',
      color: 'text-blue-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourprofile',
      color: 'text-blue-700',
    },
    {
      name: 'Twitter',
      icon:  Twitter,
      url: 'https://twitter.com/yourprofile',
      color: 'text-sky-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/NguyenThiAnhTruc',
      color: 'text-gray-800',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:youremail@example.com',
      color: 'text-red-500',
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <motion.div 
            className="relative mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <img
              src="https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg"
              alt="Profile Picture"
              className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white dark:border-slate-700 object-cover transition-all duration-300"
            />
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold text-slate-800 dark:text-white mb-6 leading-tight transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Chào, tôi là <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Nguyễn Thị Ánh Trúc
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sinh viên năm cuối ngành <span className="font-semibold text-blue-600">Công nghệ thông tin</span>, 
            đang học chuyên ngành Kỹ Thuật Phần Mềm tại Trường Đại Học Đà Lạt
          </motion.p>
          
          <motion.div 
            className="flex justify-center flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {socialLinks.map((link,index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 ${link.color} dark:text-slate-300`}
                  aria-label={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={24} className="transition-transform duration-200" />
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Tìm hiểu thêm
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('skills-contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Liên hệ với tôi
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;