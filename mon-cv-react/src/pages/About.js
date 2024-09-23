import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { FaReact, FaGitAlt, FaNpm, FaYarn, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiReactrouter, SiFramer, SiFontawesome, SiVisualstudiocode } from 'react-icons/si';

const SectionTitle = ({ children }) => (
  <motion.h3 
    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 inline-block"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.h3>
);

const Paragraph = ({ children }) => (
  <motion.p 
    className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    {children}
  </motion.p>
);

const SkillItem = ({ icon: Icon, skill }) => (
  <motion.li
    className="flex items-center space-x-2 text-base sm:text-lg lg:text-xl"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-xl sm:text-2xl" />
    <span>{skill}</span>
  </motion.li>
);

const SkillCategory = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <h4 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">{title}</h4>
    <ul className="space-y-2 sm:space-y-3">
      {skills.map((skill, index) => (
        <SkillItem key={index} icon={skill.icon} skill={skill.name} />
      ))}
    </ul>
  </motion.div>
);

const About = () => {
  const skillCategories = [
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ]
    },
    {
      title: "Bibliothèques",
      skills: [
        { name: "Redux", icon: SiRedux },
        { name: "React Router", icon: SiReactrouter },
        { name: "Framer Motion", icon: SiFramer },
        { name: "Font Awesome", icon: SiFontawesome },
      ]
    },
    {
      title: "Outils de développement",
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "NPM", icon: FaNpm },
        { name: "VS Code", icon: SiVisualstudiocode },
        { name: "Yarn", icon: FaYarn },
        { name: "Node.js", icon: FaNodeJs },
      ]
    }
  ];

  return (
    <PageTransition>
      <section className="min-h-screen py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            À propos
          </motion.h2>
          
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            <div>
              <SectionTitle>Présentation</SectionTitle>
              <Paragraph>
                Je suis Théo Rouillard, un développeur front-end passionné par la création d'expériences web innovantes et engageantes. Mon parcours dans le développement web m'a permis d'acquérir une solide expertise technique tout en cultivant un œil attentif pour le design et l'expérience utilisateur.
              </Paragraph>
            </div>

            <div>
              <SectionTitle>Objectifs professionnels</SectionTitle>
              <Paragraph>
                Mon objectif est de continuer à grandir en tant que développeur front-end, en travaillant sur des projets stimulants qui me permettent d'appliquer mes compétences et d'en acquérir de nouvelles. Je cherche à contribuer à des équipes dynamiques où je peux apporter ma créativité et mon expertise technique pour créer des solutions web innovantes.
              </Paragraph>
            </div>

            <div>
              <SectionTitle>Formation</SectionTitle>
              <Paragraph>
                J'ai suivi la formation d'Intégrateur Web chez OpenClassrooms, une expérience qui m'a permis d'acquérir une base solide en développement front-end et en intégration web. Cette formation m'a équipé des compétences nécessaires pour créer des sites web responsifs et accessibles, tout en suivant les meilleures pratiques de l'industrie.
              </Paragraph>
            </div>

            <div>
              <SectionTitle>Compétences techniques</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {skillCategories.map((category, index) => (
                  <SkillCategory 
                    key={index}
                    title={category.title} 
                    skills={category.skills} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 opacity-20" />
      </section>
    </PageTransition>
  );
};

export default About;