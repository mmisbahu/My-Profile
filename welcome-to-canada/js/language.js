// Welcome to Canada - Language Translation System

const translations = {
    en: {
        // Navigation
        home: 'Home',
        airport: 'Airport',
        checklist: 'First Week Checklist',
        documents: 'Documents',
        banking: 'Banking',
        housing: 'Housing',
        healthcare: 'Healthcare',
        employment: 'Employment',
        education: 'Education',
        help: 'Help & Support',
        
        // Home page
        welcomeTitle: 'Welcome to Canada',
        welcomeSubtitle: 'Your Complete Newcomer Guide',
        getStarted: 'Get Started',
        quickTips: 'Quick Tips for Your First Days',
        settleIn: 'We\'re here to help you settle in!',
        
        // General
        back: 'Back',
        next: 'Next',
        previous: 'Previous',
        print: 'Print',
        search: 'Search...',
        noResults: 'No results found',
        
        // Airport
        airportTitle: 'Arriving at a Canadian Airport',
        documentChecklistTitle: 'Essential Documents You\'ll Need',
        cbsaProcess: 'Canada Border Services Agency (CBSA) Process',
        whatToDeclaration: 'What to Declare to CBSA',
        airportTransportation: 'Getting from Airport to City',
        
        // Checklist
        taskCompleted: 'Task marked complete!',
        taskIncomplete: 'Task marked incomplete',
        tasksCompleted: '{completed} of {total} tasks completed',
        resetWarning: 'Are you sure you want to reset the checklist?',
        checklistReset: 'Checklist has been reset',
        exportSuccess: 'Checklist exported successfully',
        
        // Documents
        documentsTitle: 'Essential Canadian Documents',
        sin: 'Social Insurance Number (SIN)',
        prCard: 'PR Card',
        healthCard: 'Provincial Health Card',
        drivereLicense: 'Driver\'s License',
        craAccount: 'CRA My Account',
        
        // Banking
        bankingTitle: 'Setting Up a Canadian Bank Account',
        openAccount: 'How to Open a Bank Account',
        majorBanks: 'Major Canadian Banks',
        creditBuilding: 'Building Credit History',
        
        // Housing
        housingTitle: 'Finding Housing in Canada',
        temporaryHousing: 'Temporary Housing Options',
        permanentHousing: 'Finding Permanent Housing',
        rentalWebsites: 'Popular Rental Websites',
        tenantRights: 'Know Your Rights as a Tenant',
        
        // Healthcare
        healthcareTitle: 'Canadian Healthcare System',
        freeServices: 'Free Healthcare Services',
        paidServices: 'Services Not Covered',
        findDoctor: 'Finding a Family Doctor',
        urgentCare: 'Urgent Care Options',
        
        // Employment
        employmentTitle: 'Getting a Job in Canada',
        resumeTips: 'Canadian Resume Format',
        jobWebsites: 'Top Job Search Websites',
        credentialRecognition: 'Professional Credential Recognition',
        paySlip: 'Understanding Your Pay Stub',
        
        // Education
        educationTitle: 'Education & Language Programs',
        languagePrograms: 'Free Language Programs',
        schoolEnrollment: 'Enrolling Children in School',
        postSecondary: 'Post-Secondary Education',
        skillsTraining: 'Skills & Trades Training',
        
        // Help
        helpTitle: 'Help & Support Resources',
        emergencyNumbers: 'Emergency Numbers',
        governmentHotlines: 'Government Hotlines',
        settlementAgencies: 'Settlement Agencies by City',
        communityResources: 'Community Resources',
        
        // Messages
        successMessage: 'Operation completed successfully',
        errorMessage: 'An error occurred',
        welcomeMessage: 'Welcome! We\'re glad you\'re here.',
        helpMessage: 'Need help? Check the resources section.',
    },
    
    fr: {
        // Navigation
        home: 'Accueil',
        airport: 'Aéroport',
        checklist: 'Liste de contrôle de la première semaine',
        documents: 'Documents',
        banking: 'Services bancaires',
        housing: 'Logement',
        healthcare: 'Santé',
        employment: 'Emploi',
        education: 'Éducation',
        help: 'Aide et soutien',
        
        // Home page
        welcomeTitle: 'Bienvenue au Canada',
        welcomeSubtitle: 'Votre guide complet du nouvel arrivant',
        getStarted: 'Commencer',
        quickTips: 'Conseils rapides pour vos premiers jours',
        settleIn: 'Nous sommes ici pour vous aider à vous installer!',
        
        // General
        back: 'Retour',
        next: 'Suivant',
        previous: 'Précédent',
        print: 'Imprimer',
        search: 'Rechercher...',
        noResults: 'Aucun résultat trouvé',
        
        // Airport
        airportTitle: 'Arrivée à un aéroport canadien',
        documentChecklistTitle: 'Documents essentiels dont vous aurez besoin',
        cbsaProcess: 'Processus de l\'Agence des services frontaliers du Canada (ASFC)',
        whatToDeclaration: 'Ce que vous devez déclarer à l\'ASFC',
        airportTransportation: 'Se rendre de l\'aéroport à la ville',
        
        // Checklist
        taskCompleted: 'Tâche marquée comme terminée!',
        taskIncomplete: 'Tâche marquée comme incomplète',
        tasksCompleted: '{completed} sur {total} tâches terminées',
        resetWarning: 'Êtes-vous sûr de vouloir réinitialiser la liste de contrôle?',
        checklistReset: 'La liste de contrôle a été réinitialisée',
        exportSuccess: 'Liste de contrôle exportée avec succès',
        
        // Documents
        documentsTitle: 'Documents canadiens essentiels',
        sin: 'Numéro d\'identification sociale (NIS)',
        prCard: 'Carte RP',
        healthCard: 'Carte d\'assurance-maladie provinciale',
        driverLicense: 'Permis de conduire',
        craAccount: 'Mon compte ARC',
        
        // Banking
        bankingTitle: 'Ouverture d\'un compte bancaire canadien',
        openAccount: 'Comment ouvrir un compte bancaire',
        majorBanks: 'Grandes banques canadiennes',
        creditBuilding: 'Établir un antécédent de crédit',
        
        // Housing
        housingTitle: 'Trouver un logement au Canada',
        temporaryHousing: 'Options de logement temporaire',
        permanentHousing: 'Trouver un logement permanent',
        rentalWebsites: 'Sites Web de location populaires',
        tenantRights: 'Connaître vos droits en tant que locataire',
        
        // Healthcare
        healthcareTitle: 'Système de santé canadien',
        freeServices: 'Services de santé gratuits',
        paidServices: 'Services non couverts',
        findDoctor: 'Trouver un médecin de famille',
        urgentCare: 'Options de soins urgents',
        
        // Employment
        employmentTitle: 'Trouver un emploi au Canada',
        resumeTips: 'Format du curriculum vitae canadien',
        jobWebsites: 'Meilleurs sites de recherche d\'emploi',
        credentialRecognition: 'Reconnaissance des titres professionnels',
        paySlip: 'Comprendre votre feuille de paie',
        
        // Education
        educationTitle: 'Éducation et programmes de langue',
        languagePrograms: 'Programmes de langue gratuits',
        schoolEnrollment: 'Inscription des enfants à l\'école',
        postSecondary: 'Études postsecondaires',
        skillsTraining: 'Formation en compétences et métiers',
        
        // Help
        helpTitle: 'Ressources d\'aide et de soutien',
        emergencyNumbers: 'Numéros d\'urgence',
        governmentHotlines: 'Lignes d\'assistance gouvernementales',
        settlementAgencies: 'Organismes d\'établissement par ville',
        communityResources: 'Ressources communautaires',
        
        // Messages
        successMessage: 'Opération complétée avec succès',
        errorMessage: 'Une erreur est survenue',
        welcomeMessage: 'Bienvenue! Nous sommes heureux que vous soyez ici.',
        helpMessage: 'Besoin d\'aide? Consultez la section des ressources.',
    }
};

class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
        this.translations = translations;
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('preferredLanguage', lang);
            this.applyLanguage();
        }
    }

    getText(key) {
        return this.translations[this.currentLanguage][key] || this.translations['en'][key] || key;
    }

    applyLanguage() {
        // Update data attributes
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = this.getText(key);
            
            if (el.tagName === 'INPUT' && el.type === 'text') {
                el.placeholder = text;
            } else if (el.tagName === 'INPUT' && el.type === 'submit') {
                el.value = text;
            } else if (el.tagName === 'BUTTON') {
                el.textContent = text;
            } else {
                el.textContent = text;
            }
        });
        
        // Update titles and attributes
        const titleElements = document.querySelectorAll('[data-i18n-title]');
        titleElements.forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const text = this.getText(key);
            el.title = text;
        });
        
        // Update ARIA labels
        const ariaElements = document.querySelectorAll('[data-i18n-aria]');
        ariaElements.forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const text = this.getText(key);
            el.setAttribute('aria-label', text);
        });
    }

    toggleLanguage() {
        const newLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
        this.setLanguage(newLanguage);
        return newLanguage;
    }
}

// Initialize language manager
const languageManager = new LanguageManager();

// Set up on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    languageManager.applyLanguage();
    
    // Set up language toggle button
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            const newLang = languageManager.toggleLanguage();
            this.textContent = newLang === 'en' ? 'FR' : 'EN';
        });
        
        // Set initial button text
        languageToggle.textContent = languageManager.currentLanguage === 'en' ? 'FR' : 'EN';
    }
});

// Export for global access
window.languageManager = languageManager;
window.getTranslation = (key) => languageManager.getText(key);
