// translations.js

// Function to translate the page content based on the selected language
function translatePage(lang) {
    // Use navigator language if no language is provided
    if (!lang) {
        const userLang = navigator.language || navigator.userLanguage;
        lang = userLang.split('-')[0]; // Extract the language code
    }

    // Get the translations for the selected language
    const translations = {
        en: {
            'ED_OST_INTRODUCTION': 'The soundtrack to our Ednaldo Titles, all in one great album!'
        },
        br: {
            'ED_OST_INTRODUCTION': 'A trilha sonora dos nossos jogos do Ednaldo, em um único álbum.'
        }
        // Add more translations as needed
    };

    // Update the content of elements with a data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Save the selected language in localStorage for persistence
    localStorage.setItem('preferredLang', lang);
}

// Function to toggle language
function toggleLanguage(lang) {
    // Apply the selected language
    translatePage(lang);
}

// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if a language preference is stored in localStorage
    const preferredLang = localStorage.getItem('preferredLang');

    // If a language preference is found, apply it
    if (preferredLang) {
        translatePage(preferredLang);
    } else {
        // Otherwise, use the default behavior (detecting browser language)
        translatePage();
    }
});
