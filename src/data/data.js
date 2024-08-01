import llmimage from '../assets/LLMi.jpg';
import circus from '../assets/circus.PNG';
import appli from '../assets/appli.PNG';
import biblio from '../assets/uijn.PNG';
import portfo from '../assets/capp.PNG';

export const projects = [
    {
        id: 1,
        title: 'Projet de Scraping Automatisé avec GPT-Neo',
        description: `Ce projet vise à automatiser la collecte et l'analyse de données web à l'aide de GPT-Neo. En utilisant les flux RSS de divers médias, le système extrait des articles, génère des résumés intelligents, et les stocke dans une base de données PostgreSQL. Une interface Flask permet de visualiser les résultats, optimisant la veille informationnelle.`,
        image: llmimage,
        github: 'https://github.com/Aboubakar1234/LLM_project',
    },
    {
        id: 2,
        title: 'Développement d\'un site web pour une boutique avec Vue.js',
        description: `Dans ce projet, il s'agissait de développer un site web pour une boutique de vente de vêtements, avec l'objectif de digitaliser et optimiser le processus de vente. Les principales fonctionnalités implémentées incluent la gestion de l'inventaire, la visualisation des produits. Le tout est intégré à une base de données SQL pour le stockage sécurisé des données. Vue.js a été utilisé pour développer une interface utilisateur interactive et réactive.`,
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
        github: 'https://github.com/Aboubakar1234/Brothershop',
    },
    {
        id: 3,
        title: 'Developpment d\'un jeu de clicker avec Vue.js',
        description: `Ce projet consistait à développer un jeu de clicker en utilisant Vue.js. Le jeu est simple: le joueur clique sur un bouton pour gagner des points, et peut ensuite dépenser ces points pour améliorer ses gains. Le jeu est conçu pour être addictif, avec des graphismes colorés et une progression rapide. Vue.js a été utilisé pour gérer l'interface utilisateur et les interactions avec l'utilisateur.`,
        image: circus,
        github: 'https://github.com/Aboubakar1234/Project_Circus_clicker',
    },
    {
        id: 4,
        title: 'Développement d\'une Application de Gestion de Bibliothèque avec JAVA et JavaFX',
        description: `Ce projet a impliqué la création d'une application de gestion de bibliothèque exhaustive, conçue pour améliorer et automatiser les processus quotidiens d'une bibliothèque. Les fonctionnalités clés de l'application incluent l'ajout et l'affichage de livres, la gestion des emprunts et des retours, ainsi que la sauvegarde automatique des données dans un fichier. L'application est développée en utilisant JAVA, exploitant les principes de la programmation orientée objet pour une architecture de code modulaire et facile à maintenir. L'interface utilisateur, réalisée avec JavaFX, offre une expérience interactive et intuitive, enrichissant l'engagement utilisateur grâce à des visualisations claires des informations et des données de transaction.`,
        image: biblio,
        github: 'https://github.com/Aboubakar1234/GestionBibliothequeJavaFX',
    },
    {
        id: 5,
        title: "Développement d'une application de gestion de pizzeria avec C#",
        description: `Ce projet consistait à développer une application de gestion pour une pizzeria en utilisant C#. L'application permet de gérer les commandes, le stock des ingrédients, et le suivi des clients. Elle est conçue pour faciliter le quotidien des restaurateurs en automatisant plusieurs tâches administratives et opérationnelles. C# a été utilisé pour structurer le backend avec des classes dédiées à chaque fonctionnalité principale, et une interface utilisateur intuitive a été mise en place pour assurer une navigation fluide et une utilisation efficace.`,
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg', 
        github: 'https://github.com/Aboubakar1234/Projet_pizza',
    },
    {
        id: 6,
        title : "Développement d'une application mobile de Reconnaissance de micro-organismes avec Flutter",
        description: `Ce projet a impliqué le développement d'une application mobile de reconnaissance de micro-organismes, conçue pour aider les biologistes et les chercheurs à identifier rapidement et précisément les espèces de micro-organismes à partir d'images. L'application utilise un modèle de machine learning pré-entraîné pour analyser les images et générer des résultats en temps réel. Flutter a été utilisé pour développer l'interface utilisateur, offrant une expérience utilisateur fluide et intuitive sur les appareils mobiles iOS et Android.`,
        image: appli,
        github: 'https://github.com/RicArduino/IA-for-microscopy-EFREI',
    },
    {
        id: 7,
        title: "Développement d'une application de gestion d'une laverie avec C++",
        description: `Ce projet consistait à développer une application de gestion pour une laverie  en utilisant C++. L'application permet de gérer les  clients, et le suivi des stocks de produits. Elle est conçue pour faciliter le quotidien des propriétaires de laverie en automatisant plusieurs tâches administratives et opérationnelles. C++ a été utilisé pour structurer le backend avec des classes dédiées à chaque fonctionnalité principale, et une interface utilisateur intuitive a été mise en place pour assurer une navigation fluide et une utilisation efficace.`,
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
        github: 'https://github.com/Aboubakar1234/Smart_DRY_CLEANER',
    },
    {
        id: 8,
        title: "Développement d'un RBAC(Role-Based Access Control) pour un hopital avec python Django", 
        description: `Ce projet consistait à développer un système de contrôle d'accès basé sur les rôles (RBAC) pour un hôpital en utilisant Python et Django. Le système permet de définir des rôles et des permissions pour les différents utilisateurs de l'hôpital, en fonction de leur rôle et de leurs responsabilités. Les fonctionnalités clés incluent la gestion des utilisateurs, des rôles, des permissions, et des affectations de rôles. Le système est conçu pour garantir la sécurité et la confidentialité des données sensibles de l'hôpital, en limitant l'accès aux informations en fonction des besoins et des autorisations de chaque utilisateur.`,
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg',
        github: 'https://github.com/Aboubakar1234/GestionPermission',
    },
    {
        id: 9,
        title: "Développement d'un portfolio personnel avec React",
        description: `Ce projet consistait à développer un portfolio personnel pour présenter mes compétences, mes projets et mon parcours professionnel. Le portfolio est conçu pour offrir une expérience utilisateur interactive et intuitive, en mettant en valeur mes réalisations et mes compétences clés. React a été utilisé pour développer l'interface utilisateur, en utilisant des composants réutilisables et des animations pour améliorer l'engagement de l'utilisateur.`,
        //image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        image: portfo,
        github:'https://github.com/Aboubakar1234/Portfolio',
    },
    
];

export const experience = [
    {
        id: 1,
        title: 'Stage en Développement Web Junior chez Jordan Hospital',
        date: 'juin 2021 - août 2021',
        description: `En tant que stagiaire en développement web junior chez Jordan Hospital, j'ai activement participé à la modernisation du site web de l'établissement, notamment par l'ajout d'une fonctionnalité cruciale de prise de rendez-vous en ligne. Cette amélioration a non seulement optimisé l'expérience utilisateur mais a également amélioré l'efficacité opérationnelle de l'hôpital. Grâce à ce projet, j'ai renforcé mes compétences en HTML, CSS, JavaScript, PHP et MySQL, tout en appliquant ces technologies pour concevoir des interfaces utilisateur intuitives et sécuriser les interactions avec les bases de données. Ce stage a été une excellente opportunité pour moi de mettre en pratique mes connaissances académiques dans un environnement professionnel exigeant, prouvant ma capacité à apprendre rapidement et à contribuer efficacement en tant que membre junior de l'équipe de développement.`,
    },  
    {
        id: 2,
        title: 'Equipier polyvalent chez KFC',
        date: 'Octobre 2023 - Mars 2024',
        //preparation des commandes, service client, nettoyage des locaux, gestion des stocks
        description: `Equipier polyvalent chez KFC, où j'ai acquis de l'expérience dans la préparation des commandes, le service client, le nettoyage des locaux, et la gestion des stocks. J'ai développé des compétences en travail d'équipe, en gestion du temps, et en service client, tout en contribuant à assurer une expérience positive pour les clients et à maintenir des normes élevées de qualité et d'hygiène.`,
    }
];

export const educations = [
    {
        id: 1,
        title: 'Master 1 Software Engineering',
        name: 'EFREI Paris - Ecole d\'ingénieurs généraliste en informatique',
    },
    {
        id: 2,
        title:'Bachelor of engineering science',
        name: 'EFREI Paris - Ecole d\'ingénieurs généraliste en informatique',
    },
    {
        id: 3,  
        title: 'Baccalauréat Informatique',
        name: 'Collège Vogt ',
    }
]
