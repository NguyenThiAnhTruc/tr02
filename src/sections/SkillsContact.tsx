import React, { useState } from 'react';
import { Code, Database, Smartphone, Cloud, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'HTML/CSS', level: 80 },
        { name: 'JavaScript', level: 70 },
        { name: 'React.js', level: 65 },
        { name: 'TypeScript', level: 70 },
        { name: 'Tailwind CSS', level: 80 }
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js'},
        { name: 'Python'},
        { name: 'Java'},
        { name: 'Express.js'},
        { name: 'REST API' }
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Mobile & Other',
      icon: Smartphone,
      skills: [
        { name: 'React Native' },
        { name: 'Git/GitHub'},
        { name: 'MongoDB'},
        { name: 'MySQL'},
        
      ],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nguyentruc02092004@email.com',
      href: 'mailto:nguyentruc02092004@email.com',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      title: 'Điện thoại',
      value: '(+84) 792 920 904',
      href: 'tel:+84792920904',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Địa chỉ',
      value: 'Đà Lạt, Lâm Đồng, Việt Nam',
      href: '#',
      color: 'text-blue-500'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="skills-contact" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1 
          className="text-4xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Kỹ năng & <motion.span 
            className="text-blue-600 dark:text-blue-400"
            animate={{ color: ["#2563eb", "#7c3aed", "#2563eb"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Liên hệ
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Khám phá những kỹ năng của tôi và đừng ngần ngại liên hệ để thảo luận về cơ hội hợp tác
        </motion.p>
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center transition-colors duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Kỹ năng chuyên môn
        </motion.h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  scale: 1.02
                }}
              >
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300">{category.title}</h3>
                </motion.div>
<div className="space-y-2">
  {category.skills.map((skill, skillIndex) => (
    <motion.div 
      key={skillIndex}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 + skillIndex * 0.1 + 0.4 }}
      viewport={{ once: true }}
      className="flex items-center space-x-2"
    >
      <span className={`w-2 h-2 rounded-full inline-block bg-gradient-to-r ${category.color}`}></span>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300">
        {skill.name}
      </span>     
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Contact Section */}
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Thông tin liên hệ
            </motion.h2>
            <motion.p 
              className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Tôi luôn sẵn sàng lắng nghe những cơ hội mới và thảo luận về các dự án thú vị. 
              Hãy liên hệ với tôi qua các thông tin dưới đây.
            </motion.p>
          </motion.div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    x: 10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                    scale: 1.02
                  }}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center mr-4 transition-colors duration-300`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`w-6 h-6 ${info.color}`} />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors duration-300">{info.title}</p>
                    <p className="text-lg font-semibold text-slate-800 dark:text-white transition-colors duration-300">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div 
            className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl p-8 text-white transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Sẵn sàng hợp tác?
            </motion.h3>
            <motion.p 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Tôi luôn tìm kiếm những dự án thú vị và cơ hội học hỏi mới. 
              Hãy liên hệ để chúng ta cùng tạo ra những sản phẩm tuyệt vời!
            </motion.p>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-3 h-3 bg-green-400 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <span className="font-medium">Sẵn sàng nhận dự án mới</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 transition-colors duration-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
        >
          <motion.h2 
            className="text-2xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Gửi tin nhắn
          </motion.h2>
          
          <AnimatePresence>
            {isSubmitted && (
              <motion.div 
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg flex items-center transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.3 }}
              >
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-green-700 dark:text-green-400 transition-colors duration-300">Tin nhắn đã được gửi thành công!</span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Họ và tên *
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                placeholder="Nhập họ và tên của bạn"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email *
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                placeholder="Nhập email của bạn"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                Chủ đề
              </label>
              <motion.input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                placeholder="Chủ đề tin nhắn"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Tin nhắn *
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                placeholder="Nhập tin nhắn của bạn..."
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium flex items-center justify-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Send className="w-5 h-5" />
              </motion.div>
              <span>Gửi tin nhắn</span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default SkillsContact;