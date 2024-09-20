import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';
import OhmyfoodImage from '../assets/img/Ohmyfood.png';
import ArchiWebosImage from '../assets/img/ArchiWebos.png';
import KasaImage from '../assets/img/Kasa.png';

const Projects = () => {
  const projects = [
    {
      title: "Ohmyfood",
      image: OhmyfoodImage,
      description: "En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Finis, les temps d'attente au restaurant !",
      skills: [
        "Intégrer une maquette en mobile-first",
        "Mettre en œuvre des animations CSS",
        "Versionner son projet avec Git et Github"
      ],
      testimonial: "Projet validé avec succès. L'intégration mobile-first est bien réalisée, responsive et fidèle à la maquette. Les animations CSS sont correctement implémentées, y compris les animations inverses au survol. Le versionnage avec Git/Github suit les bonnes pratiques. L'utilisation de Sass et la validation W3C du CSS démontrent une bonne maîtrise technique. L'étudiant a fourni des explications détaillées à chaque étape, montrant une excellente compréhension du sujet.",
      link: "https://sinsizz.github.io/OhMyFood/",
      moveDirection: 'diagonal-left'
    },
    {
      title: "ArchiWebos",
      image: ArchiWebosImage,
      description: "Développement front-end d'un site portfolio pour une architecte d'intérieur, en renfort d'une équipe existante.",
      skills: [
        "Gérer les événements utilisateurs avec JavaScript",
        "Manipuler les éléments du DOM avec JavaScript",
        "Récupérer les données utilisateurs dans le JavaScript via des formulaires"
      ],
      testimonial: "Projet validé avec succès. Excellente présentation avec un timing parfaitement maîtrisé. Structure de code relativement bonne et ajout d'une nouvelle photo sans rafraîchissement.",
      link: "https://github.com/Sinsizz/ArchiWebos.git", 
      moveDirection: 'vertical'
    },
    {
      title: "Kasa",
      image: KasaImage,
      description: "Une entreprise de location d'appartements entre particuliers. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d'appartements entre particuliers en France.",
      skills: [
        "Initialiser une application avec Create React App",
        "Configurer la navigation entre les pages de l'application avec React Router",
        "Développer des éléments de l'interface d'un site web grâce à des composants React",
        "Mettre en œuvre des animations CSS",
        "Développer une interface web avec Sass"
      ],
      testimonial: "Projet validé avec succès. Les animations CSS sont conformes au prototype. L'utilisation de Sass pour le style CSS est bien implémentée. Le routing avec React Router est correctement géré, y compris la page 404. Les composants React sont bien développés et réutilisés efficacement. L'application est responsive et conforme à la maquette. L'étudiant démontre une bonne compréhension de React et de ses concepts clés.",
      link: "https://github.com/Sinsizz/Kasa.git", 
      moveDirection: 'diagonal-right'
    }
  ];

  return (
    <PageTransition>
      <section className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <motion.h2 
            className="text-5xl sm:text-6xl font-bold mb-12 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mes Projets
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 opacity-20" />
      </section>
    </PageTransition>
  );
};

export default Projects;