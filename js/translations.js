// translations.js

// Function to translate the page content based on the selected language
function translatePage(lang) {
    // Use English as the default language if no language is provided
    if (!lang) {
        const userLang = navigator.language || navigator.userLanguage;
        const langCode = userLang.split('-')[0].toLowerCase(); // Extract the language code

        // Check if the language is Portuguese (Brazil) or Portuguese (Portugal)
        if (langCode === 'pt' || langCode === 'pt-br' || langCode === 'br') {
            lang = 'br'; // Set language to 'br' for Portuguese
        } else {
            lang = 'en'; // Otherwise, default to English
        }
    }

    // Get the translations for the selected language
    const translations = {
        en: {
            'ABOUT_INFO': 'PVic Games is a game studio founded in late 2023. Based in Brazil, with additional members from all around the world, the team strives to develop fun and fresh games that stand the test of time.',

            'ED_OST_INTRODUCTION': 'The soundtrack to our Ednaldo Titles, all in one great album!'

        },
        br: {
            'ABOUT_INFO': 'PVic Games é um estúdio de jogos fundado no final de 2023. Com base no Brasil, e com membros adicionais de todo o mundo, a equipe se esforça para desenvolver jogos divertidos e inovadores que resistem ao teste do tempo.',

            'ED_OST_INTRODUCTION': 'A trilha sonora dos nossos jogos do Ednaldo, em um único álbum.'
        }
    };

    // Update the content of elements with a data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Save
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
        translatePage();
    }
});
