document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. CONFIGURATION DU LOADER D'ACCUEIL (ORBIT)
    // ==========================================
    const techs = [
        { name: "JavaScript", color: "#f7df1e" },
        { name: "PHP", color: "#777bb4" },
        { name: "React", color: "#61dafb" },
        { name: "Python", color: "#3776ab" },
        { name: "SQL", color: "#00758f" },
        { name: "CSS3", color: "#1572b6" },
        { name: "HTML5", color: "#e34f26" },
        { name: "Flutter (Dart)", color: "#02569b" }
    ];

    const orbitSystem = document.getElementById("orbit-system");
    techs.forEach((tech, idx) => {
        const angle = (idx * 360) / techs.length;
        const techDiv = document.createElement("div");
        techDiv.className = "orbiting-tech";
        techDiv.style.setProperty('--start-angle', `${angle}deg`);
        techDiv.style.color = tech.color;
        techDiv.style.borderColor = `${tech.color}40`;
        techDiv.style.boxShadow = `0 0 15px ${tech.color}15`;
        techDiv.innerText = tech.name;
        orbitSystem.appendChild(techDiv);
    });

    // Masquage automatique du Loader après 2.5 secondes
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 2500);

    // ==========================================
    // 2. CONFIGURATION DES STATISTIQUES (ABOUT)
    // ==========================================
    const stats = [
        { value: "+5", label: "Langages Maîtrisés (PHP, HTML, CSS, SQL, JAVASCRIPT, PYTHON)", color: "#9d4edd" },
        { value: "En cours", label: "Stage Full Stack (Future Interns)", color: "#00d4ff" },
        { value: "100%", label: "Rigueur, Esprit d'équipe, Dynamique", color: "#00e676" },
        { value: "Langues", label: "Français (Maternelle) / Anglais (basique)", color: "#ffb300" }
    ];

    const statsGrid = document.getElementById("about-stats");
    statsGrid.style.display = "grid";
    statsGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
    statsGrid.style.gap = "20px";

    stats.forEach(stat => {
        const card = document.createElement("div");
        card.className = "stat-card-js";
        card.style.border = `1px solid ${stat.color}26`;
        
        card.innerHTML = `
            <h3 style="color: ${stat.color}; font-size: 2rem; margin-bottom: 10px; font-weight:700;">${stat.value}</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height: 1.4;">${stat.label}</p>
        `;

        card.addEventListener("mouseenter", () => {
            card.style.borderColor = stat.color;
            card.style.boxShadow = `0 10px 25px ${stat.color}26`;
            card.style.transform = "translateY(-5px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.borderColor = `${stat.color}26`;
            card.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
            card.style.transform = "translateY(0)";
        });

        statsGrid.appendChild(card);
    });

    // ==========================================
    // 3. SECTIONS COMPÉTENCES (SKILLS) AVEC FILTRE
    // ==========================================
    const skillCategories = [
        {
            title: "Langages de Programmation",
            subtitle: "ACADÉMIQUES & PRATIQUES",
            icon: "💻", themeColor: "#9d4edd", iconBg: "rgba(157, 78, 221, 0.1)",
            items: [
                { name: "JavaScript (ES6)", label: "Maîtrise - Dom APIs", type: "mastery" },
                { name: "PHP (Objet)", label: "Maîtrise - MVC", type: "mastery" },
                { name: "Python", label: "Pratique", type: "practical" },
                { name: "Java & C", label: "Académique", type: "academic" }
            ]
        },
        {
            title: "Développement Web",
            subtitle: "NORMES & CODE",
            icon: "🌐", themeColor: "#00d4ff", iconBg: "rgba(0, 212, 255, 0.1)",
            items: [
                { name: "HTML5 & CSS3", label: "Sémantique - Responsive", type: "mastery" },
                { name: "React.js", label: "Bases", type: "mastery" }
            ]
        },
        {
            title: "Persistance & Backend",
            subtitle: "SQL & RELATIONNEL",
            icon: "🗄️", themeColor: "#00e676", iconBg: "rgba(0, 230, 118, 0.1)",
            items: [
                { name: "XAMPP & MySQL", label: "Conception Merise / UML", type: "mastery" },
                { name: "SGBD Avancés", label: "Modélisation", type: "practical" }
            ]
        },
        {
            title: "Infrastructures & Réseaux",
            subtitle: "ROUTAGES",
            icon: "🖥️", themeColor: "#38bdf8", iconBg: "rgba(56, 189, 248, 0.1)",
            items: [
                { name: "Bases Réseaux", label: "Modèles OSI / TCP-IP", type: "academic" },
                { name: "Cisco Packet Tracer", label: "Simulation & Routage", type: "academic" }
            ]
        },
        {
            title: "Méthodologies & Écosystème",
            subtitle: "OUTILS PROS & COLLABORATIFS",
            icon: "🛡️", themeColor: "#ffb300", iconBg: "rgba(255, 179, 0, 0.1)",
            items: [
                { name: "Git & GitHub Workflow", label: "Contrôle de Version", type: "mastery" },
                { name: "UML & Modélisation", label: "Cahier des charges", type: "mastery" }
            ]
        }
    ];

    const filterContainer = document.getElementById("skills-filter");
    const skillsGrid = document.getElementById("skills-grid");

    function getLabelColor(type) {
        if (type === 'mastery') return '#00e676';
        if (type === 'practical') return '#ffb300';
        return '#8f9bb7';
    }

    function renderSkills(filterTitle) {
        skillsGrid.innerHTML = "";
        skillCategories.forEach(category => {
            if (filterTitle !== 'all' && category.title !== filterTitle) return;

            const card = document.createElement("div");
            card.className = "skill-card-detailed";
            card.style.border = `1px solid ${category.themeColor}1a`;

            let itemsHTML = "";
            category.items.forEach(item => {
                itemsHTML += `
                    <div class="skill-item-row" style="display:flex; justify-content:space-between; padding:10px 14px; background:rgba(255,255,255,0.02); margin-bottom:8px; border-radius:6px; border-left:3px solid ${category.themeColor}">
                        <span style="color:#e2e8f0; font-weight:500;">${item.name}</span>
                        <span style="font-size:0.8rem; font-weight:600; color:${getLabelColor(item.type)}">${item.label}</span>
                    </div>
                `;
            });

            card.innerHTML = `
                <div class="category-header" style="display:flex; align-items:center; margin-bottom:20px; gap:15px;">
                    <div style="background:${category.iconBg}; color:${category.themeColor}; width:40px; height:40px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.2rem;">${category.icon}</div>
                    <div>
                        <h3 style="margin:0; font-size:1.2rem; color:#fff;">${category.title}</h3>
                        <span style="font-size:0.75rem; color:var(--text-secondary); letter-spacing:1px;">${category.subtitle}</span>
                    </div>
                </div>
                <div class="category-items">${itemsHTML}</div>
            `;
            skillsGrid.appendChild(card);
        });
    }

    // Génération des boutons de filtrage
    const allBtn = document.createElement("button");
    allBtn.className = "filter-btn";
    allBtn.innerText = "Tout voir";
    allBtn.style.border = "1px solid #fff";
    allBtn.style.color = "#fff";
    filterContainer.appendChild(allBtn);

    allBtn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => { b.style.color = "var(--text-secondary)"; b.style.border = "1px solid rgba(255,255,255,0.08)"; b.style.background = "transparent"; });
        allBtn.style.border = "1px solid #fff"; allBtn.style.color = "#fff";
        renderSkills('all');
    });

    skillCategories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.innerText = cat.title;
        filterContainer.appendChild(btn);

        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => { b.style.color = "var(--text-secondary)"; b.style.border = "1px solid rgba(255,255,255,0.08)"; b.style.background = "transparent"; b.style.boxShadow = "none";});
            btn.style.color = cat.themeColor;
            btn.style.borderColor = cat.themeColor;
            btn.style.background = `${cat.themeColor}1a`;
            btn.style.boxShadow = `0 0 15px ${cat.themeColor}26`;
            renderSkills(cat.title);
        });
    });

    renderSkills('all');

    // ==========================================
    // 4. INJECTION DES 6 PROJETS DANS LA GRILLE
    // ==========================================
    const projectList = [
        {
            title: "Portfolio Professionnel Full Stack",
            description: "Conception et développement d'un portfolio web moderne et responsive en suivant l'architecture de composants React, optimisé pour l'accessibilité et le SEO.",
            tech: ["React.js", "JavaScript", "CSS3", "HTML5"],
            linkRepo: "https://github.com/Ketevi-Aaron/FUTURE_FS_01",
            img: "portfolio.png"
        },
        {
            title: "Gestion des emplois du temps",
            description: "Application permettant l'organisation des emplois du temps universitaires.",
            tech: ["PHP", "HTML", "CSS", "MySQL"],
            linkRepo: "https://github.com/brave-aaron/Gest-edt.git"
        },
        {
            title: "DINEASE",
            description: "Projet en cours d'une application mobile qui permet de manger en fonction de son budget (Réalisation de la partie Inscription).",
            tech: ["Flutter/Dart"],
            img: "dinease.png"
        },
        {
            title: "QuickChange",
            description: "QuickChange est une application web d'échange monétaire dynamique développée dans le cadre des projets de validation.",
            tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
            linkRepo: "https://github.com/brave-aaron/quick-change.git",
            img: "QuickChange.png"
        },
        {
            title: "AutoService",
            description: "Plateforme web permettant la publication et la consultation de véhicules en vente et en location.",
            tech: ["PHP", "HTML", "CSS", "MySQL"],
            linkRepo: "https://github.com/brave-aaron/auto-services.git",
            img: "Autoservice.png"
        },
        {
            title: "Application de Gestion Intégrée (SGBD)",
            description: "Développement d'une application logicielle interconnectée avec une base de données relationnelle MariaDB pour la gestion de données d'une bibliothèque.",
            tech: ["PHP", "SQL", "HTML", "CSS"],
            linkRepo: "https://github.com/brave-aaron/Gest-Biblio.git"
        }
    ];

    const projectsGrid = document.getElementById("projects-grid");
    projectList.forEach(project => {
        const article = document.createElement("article");
        article.className = "project-card";

        let imgHTML = "";
        if (project.img) {
            imgHTML = `<img src="${project.img}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentElement.innerHTML=getPlaceholderSVG();">`;
        } else {
            imgHTML = getPlaceholderSVG();
        }

        let techBadges = project.tech.map(t => `<span class="tech-badge">${t}</span>`).join("");
        let linkHTML = project.linkRepo ? `<div class="project-links"><a href="${project.linkRepo}" class="btn-link" target="_blank" rel="noopener noreferrer">Code Source</a></div>` : '';

        article.innerHTML = `
            <div class="project-image">${imgHTML}</div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${techBadges}</div>
                ${linkHTML}
            </div>
        `;
        projectsGrid.appendChild(article);
    });

    function getPlaceholderSVG() {
        return `
            <svg class="project-placeholder-svg" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="60" rx="5" fill="rgba(0, 212, 255, 0.05)" stroke="rgba(0, 212, 255, 0.2)" stroke-width="1" />
                <text x="50" y="35" fill="#00d4ff" font-size="6" font-family="monospace" text-anchor="middle">&lt;project /&gt;</text>
            </svg>
        `;
    }

    // ==========================================
    // 5. TIMELINE DU PARCOURS (JOURNEY)
    // ==========================================
    const timelineItems = [
        {
            role: "Stagiaire Développeur Full Stack",
            company: "Future Interns",
            period: "Juin 2026 - Juillet 2026",
            color: "#00d4ff", icon: "💻",
            projectsDetailed: [
                {
                    title: "Task 1 — Personal Professional Portfolio Website",
                    points: [
                        "Conception et modélisation d'une interface web moderne, optimisée pour mobile, tablette et desktop.",
                        "Présentation structurée et interactive des compétences clés, des projets terminés et du parcours académique.",
                        "Création d'un formulaire de contact asynchrone sécurisé avec validation instantanée côté client.",
                        "Optimisation fine du référencement naturel (SEO) et de la performance globale de chargement.",
                        "Amélioration de l'ergonomie utilisateur globale grâce à l'intégration de micro-animations fluides."
                    ]
                },
                {
                    title: "Task 2 — Client Lead Management System (Mini CRM)",
                    points: [
                        "Développement complet d'une application de gestion de prospects (Mini CRM) responsive.",
                        "Implémentation intégrale des opérations d'écriture et de lecture dans la base de données (CRUD complet).",
                        "Mise en place d'un tableau d'état dynamique pour suivre les opportunités commerciales selon leur statut.",
                        "Connexion asynchrone sécurisée avec le backend pour synchroniser l'affichage en temps réel.",
                        "Sécurisation des saisies et contrôle sémantique strict des formulaires pour éliminer les injections de données."
                    ]
                },
                {
                    title: "Task 3 — Local Business Website Project",
                    points: [
                        "Création sur-mesure d'un site vitrine haut de gamme et responsive pour le compte d'une entreprise locale.",
                        "Modélisation UX/UI moderne mettant en avant l'identité sémantique et les forces commerciales du client.",
                        "Présentation physique et démonstration directe de la solution technique au propriétaire de l'établissement.",
                        "Mise en avant stratégique de la valeur commerciale ajoutée par la transformation digitale du commerce."
                    ]
                }
            ]
        },
        {
            role: "Licence en Informatique",
            company: "ESIG GLOBAL SUCCESS / Formation Supérieure",
            period: "2024 - 2027",
            color: "#9d4edd", icon: "🎓",
            description: "Au cours de ma formation, j’ai acquis des compétences en développement web (HTML, CSS, JavaScript, PHP), en bases de données (MySQL/MariaDB) ainsi qu’en conception d’applications avec une architecture structurée (MVC). Je me forme également au développement mobile avec Flutter afin de créer des applications multiplateformes."
        }
    ];

    const timelineContainer = document.getElementById("timeline-container");
    timelineItems.forEach(item => {
        const row = document.createElement("div");
        row.className = "timeline-row";

        let detailedHTML = "";
        if (item.description) {
            detailedHTML = `<p style="margin: 0; color: #8f9bb7; line-height: 1.6; font-size: 0.95rem;">${item.description}</p>`;
        }
        if (item.projectsDetailed) {
            item.projectsDetailed.forEach(proj => {
                let pointsList = proj.points.map(p => `<li style="color: #8f9bb7; font-size: 0.9rem; line-height: 1.5; margin-bottom:4px;">${p}</li>`).join("");
                detailedHTML += `
                    <div class="timeline-task-card" style="border-left: 3px solid ${item.color}; background:rgba(255,255,255,0.01); padding:15px 20px; margin-bottom:20px; border-radius:0 8px 8px 0;">
                        <h5 style="color:#fff; margin:0 0 10px 0; font-size:1rem; font-weight:600;">${proj.title}</h5>
                        <ul style="margin:0; padding-left:18px;">${pointsList}</ul>
                    </div>
                `;
            });
        }

        row.innerHTML = `
            <div class="timeline-icon" style="border: 2px solid ${item.color}; box-shadow: 0 0 15px ${item.color}30;">${item.icon}</div>
            <div class="timeline-body">
                <span class="timeline-period" style="color:${item.color}">${item.period}</span>
                <h3>${item.role}</h3>
                <h4>${item.company}</h4>
                ${detailedHTML}
            </div>
        `;
        timelineContainer.appendChild(row);
    });

    // ==========================================
    // 6. SECTION HOBBIES & PASSIONS (INTERESTS)
    // ==========================================
    const passions = [
        {
            title: "Vidéaste", subtitle: "Production & Storytelling", icon: "🎥", color: "#ff3e3e",
            description: "Capturer des moments, structurer des récits visuels et réaliser le montage de vidéos dynamiques. Le montage vidéo demande une grande rigueur dans le rythme et le découpage, une compétence que je retrouve dans l'organisation et la structure logique de mes lignes de code."
        },
        {
            title: "Photographe", subtitle: "Composition & Lumière", icon: "📷", color: "#00d4ff",
            description: "Affiner mon regard à travers l'objectif pour capturer l'essence d'un instant, jouer avec les contrastes et maîtriser la colorimétrie. Cette passion développe mon sens du détail visuel, ce qui m'aide directement à concevoir des interfaces web UI/UX parfaitement équilibrées."
        },
        {
            title: "Design Graphique", subtitle: "Création Visuelle", icon: "🎨", color: "#00e676",
            description: "Conception de logos, d'affiches d'événements et exploration d'esthétiques visuelles modernes. J'aime travailler les contrastes et les typographies pour donner une âme et une identité graphique forte à chaque projet."
        }
    ];

    const interestsGrid = document.getElementById("interests-grid");
    interestsGrid.style.display = "grid";
    interestsGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(280px, 1fr))";
    interestsGrid.style.gap = "25px";

    passions.forEach(p => {
        const box = document.createElement("div");
        box.style.background = "rgba(10, 14, 39, 0.4)";
        box.style.border = `1px solid ${p.color}1a`;
        box.style.borderRadius = "12px";
        box.style.padding = "25px";
        box.style.transition = "all 0.3s ease";

        box.innerHTML = `
            <div style="display:flex; align-items:center; gap:15px; margin-bottom:15px;">
                <span style="font-size:2rem; background:${p.color}12; width:50px; height:50px; border-radius:10px; display:flex; align-items:center; justify-content:center; color:${p.color}">${p.icon}</span>
                <div>
                    <h3 style="margin:0; font-size:1.15rem; color:#fff; font-weight:600;">${p.title}</h3>
                    <span style="font-size:0.8rem; color:${p.color}; font-weight:500;">${p.subtitle}</span>
                </div>
            </div>
            <p style="margin:0; color:#8f9bb7; font-size:0.9rem; line-height:1.6;">${p.description}</p>
        `;

        box.addEventListener("mouseenter", () => { box.style.borderColor = p.color; box.style.transform = "translateY(-5px)"; box.style.boxShadow = `0 10px 20px ${p.color}15`; });
        box.addEventListener("mouseleave", () => { box.style.borderColor = `${p.color}1a`; box.style.transform = "translateY(0)"; box.style.boxShadow = "none"; });
        interestsGrid.appendChild(box);
    });

    // ==========================================
    // 7. FORMULAIRE DE CONTACT & TOAST NOTIFICATION
    // ==========================================
    const form = document.getElementById("contact-form");
    const toast = document.getElementById("notification");

    function triggerToast(msg, type) {
        toast.innerText = msg;
        toast.style.background = type === 'success' ? '#00d4ff' : '#ff6b6b';
        toast.style.color = type === 'success' ? '#0a0e27' : '#fff';
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 4000);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const submitBtn = document.getElementById("submit-btn");

        if (!name || !email || !subject || !message) {
            triggerToast("Veuillez remplir tous les champs", "error");
            return;
        }

        submitBtn.innerText = "Envoi en cours...";
        submitBtn.disabled = true;

        // Simulation asynchrone (identique à ton comportement React)
        setTimeout(() => {
            triggerToast("Message envoyé avec succès ! Je vous répondrai rapidement.", "success");
            form.reset();
            submitBtn.innerText = "Envoyer le Message";
            submitBtn.disabled = false;
        }, 1500);
    });

    // ==========================================
    // 8. ANIMATIONS AU DEFILEMENT (INTERSECTION OBSERVER)
    // ==========================================
    const animatedElements = document.querySelectorAll(".section-animate");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));

    // Gestion du bouton retour en haut (Back To Top)
    const scrollTopBtn = document.getElementById("scroll-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});