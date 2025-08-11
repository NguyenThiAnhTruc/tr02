import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Website Thương mại Điện tử',
      description: 'Ứng dụng web bán hàng trực tuyến với đầy đủ tính năng giỏ hàng, thanh toán và quản lý đơn hàng.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: [ 'Node.js', 'Exsecti'],
      demoUrl: 'https://your-ecommerce-demo.netlify.app',
      githubUrl: 'https://github.com/yourusername/ecommerce-website',
      date: '2024'
    },
    {
      id: 2,
      title: 'Ứng dụng Quản lý Công việc',
      description: 'Ứng dụng di động giúp quản lý công việc cá nhân với tính năng nhắc nhở và theo dõi tiến độ.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      demoUrl: 'https://your-task-manager.netlify.app',
      githubUrl: 'https://github.com/yourusername/task-manager-app',
      date: '2024'
    },
    {
      id: 3,
      title: 'Ứng dụng Thời tiết',
      description: 'Ứng dụng dự báo thời tiết với giao diện đẹp mắt, hiển thị thông tin chi tiết và dự báo 7 ngày.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: [ 'Android Studio','Weather API','SQL Server'],
      demoUrl: 'https://your-weather-app.netlify.app',
      githubUrl: 'https://github.com/yourusername/weather-app',
      date: '2024'
    },
    {
      id: 4,
      title: 'Ứng dụng Quản lý Sự kiện',
      description: 'Hệ thống quản lý sự kiện với tính năng tạo, chỉnh sửa, và theo dõi các sự kiện cá nhân và công việc.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: [],
      demoUrl: 'https://your-event-manager.vecel.app',
      githubUrl: 'https://github.com/yourusername/event-manager',
      date: '2024'
    },
    {
      id: 5,
      title: 'Website Portfolio Cá nhân',
      description: 'Trang web giới thiệu bản thân với thiết kế responsive và hiệu ứng động đẹp mắt.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      demoUrl: 'https://your-portfolio.vecel.app',
      githubUrl: 'https://github.com/yourusername/personal-portfolio',
      date: '2023'
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500">
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
            Dự án <motion.span 
              className="text-blue-600 dark:text-blue-400"
              animate={{ color: ["#2563eb", "#7c3aed", "#2563eb"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Nổi bật
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Khám phá những dự án tôi đã thực hiện trong quá trình học tập và phát triển kỹ năng
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                scale: 1.02
              }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <motion.a
                      href={project.demoUrl}
                      className="bg-white/90 text-slate-800 p-2 rounded-full hover:bg-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="bg-white/90 text-slate-800 p-2 rounded-full hover:bg-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-end mb-3">
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <motion.h3 
                  className="text-xl font-bold text-slate-800 dark:text-white mb-3 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>

                <motion.p 
                  className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="inline-flex items-center px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-md transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 + 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Tag size={10} className="mr-1" />
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-2" size={20} />
            Xem thêm trên GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;