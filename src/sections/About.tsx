import React from 'react';
import { Calendar, MapPin, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const educationHistory = [
    {
      year: '2022 - Hiện nay',
      title: 'Kỹ sư Công nghệ Thông tin',
      institution: 'Trường Đại học Đà Lạt',
      description: 'Chuyên ngành Kỹ thuật phần mềm'
    },
    {
      year: '2019 - 2022',
      title: 'Tốt nghiệp THPT',
      institution: 'Trường THPT Chu Văn An',
      description: 'Ninh Thuận'
    }
  ];

 
  return (
    <section id="about" className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500">
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
          Về <motion.span 
            className="text-blue-600 dark:text-blue-400"
            animate={{ color: ["#2563eb", "#7c3aed", "#2563eb"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Tôi
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Tìm hiểu thêm về hành trình học tập, kinh nghiệm và định hướng nghề nghiệp của tôi
        </motion.p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        <div className="space-y-8">
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 transition-colors duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          >
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4 transition-colors duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Calendar className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Tiểu sử cá nhân</h2>
            </motion.div>
            <motion.p 
              className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Tôi là sinh viên năm cuối ngành Công nghệ Thông tin tại Trường Đại học Đà Lạt. 
              Tôi có niềm đam mê với công nghệ và máy tính, tôi quyết định theo đuổi 
              con đường lập trình để biến đam mê thành nghề nghiệp.
            </motion.p>
            <motion.p 
              className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Trong suốt quá trình học tập, tôi luôn tìm cách áp dụng kiến thức lý thuyết 
              vào thực tế thông qua các dự án cá nhân và nhóm. Tôi tin rằng việc học không 
              bao giờ dừng lại và luôn cố gắng cập nhật những xu hướng công nghệ mới nhất.
            </motion.p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 transition-colors duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          >
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mr-4 transition-colors duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Target className="w-6 h-6 text-teal-600" />
              </motion.div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Mục tiêu nghề nghiệp</h2>
            </motion.div>
            <div className="space-y-4">
              <motion.div 
                className="border-l-4 border-blue-500 pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <h3 className="font-semibold text-slate-800 dark:text-white transition-colors duration-300">Ngắn hạn (1- 3 năm)</h3>
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                  Trở thành Frontend Developer hoặc Designer tại một công ty công nghệ, 
                  tích lũy kinh nghiệm thực tế và hoàn thiện kỹ năng chuyên môn.
                </p>
              </motion.div>
              <motion.div 
                className="border-l-4 border-teal-500 pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <h3 className="font-semibold text-slate-800 dark:text-white transition-colors duration-300">Trung hạn (3.5-6.5 năm)</h3>
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                  Phát triển thành Full-stack Developer, có khả năng xử lý cả frontend 
                  và backend, đồng thời phát triển bản thân hơn trong lĩnh vực công nghệ.
                </p>
              </motion.div>
              <motion.div 
                className="border-l-4 border-orange-500 pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <h3 className="font-semibold text-slate-800 dark:text-white transition-colors duration-300">Dài hạn (7+ năm)</h3>
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                 Có thể đảm nhận được nhiều vai trò khác nhau trong công việc.Phát triển hơn trong lĩnh vực công nghệ.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 transition-colors duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          >
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4 transition-colors duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="w-6 h-6 text-orange-600" />
              </motion.div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Quá trình học tập</h2>
            </motion.div>
            <div className="space-y-6">
              {educationHistory.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start">
                    <motion.div 
                      className="flex-shrink-0 w-20 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg px-2 py-1 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.year}
                    </motion.div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white transition-colors duration-300">{item.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">{item.institution}</p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 transition-colors duration-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl shadow-lg p-8 text-white transition-colors duration-300"
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
              Danh ngôn tôi thích
            </motion.h3>
            <motion.blockquote 
              className="text-lg italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              “Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” – Albert Einstein
            </motion.blockquote>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Workspace"
          className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </motion.div>
      </div>
    </section>
  );
};

export default About;