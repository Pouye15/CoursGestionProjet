        // Tableau de dégradés aléatoires
        const themes = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
            'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
        ];

        let themeIndex = 0;

        function changerTheme() {
            themeIndex = (themeIndex + 1) % themes.length;
            document.body.style.background = themes[themeIndex];
        }

        function mettreAJourHorloge() {
            const maintenant = new Date();
            
            // Heures, minutes, secondes formatés sur 2 chiffres
            const heures = maintenant.getHours().toString().padStart(2, '0');
            const minutes = maintenant.getMinutes().toString().padStart(2, '0');
            const secondes = maintenant.getSeconds().toString().padStart(2, '0');
            
            // Affichage de l'heure
            document.getElementById('heure').textContent = `${heures}:${minutes}:${secondes}`;
            
            // Date complète
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            document.getElementById('dateComplete').textContent = 
                maintenant.toLocaleDateString('fr-FR', options);
            
            // Salutation selon l'heure
            const heure = maintenant.getHours();
            let salutation = '';
            if (heure < 12) salutation = '☀️ Bonne matinée !';
            else if (heure < 18) salutation = '🌤️ Bon après-midi !';
            else salutation = '🌙 Bonne soirée !';
            document.getElementById('salutation').textContent = salutation;
        }
        
        // Mise à jour chaque seconde
        setInterval(mettreAJourHorloge, 1000);
        
        // Premier appel
        mettreAJourHorloge();
        
        // Animation aléatoire supplémentaire : changement de couleur automatique toutes les 30s
        setInterval(() => {
            themeIndex = Math.floor(Math.random() * themes.length);
            document.body.style.background = themes[themeIndex];
        }, 30000);
