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
        "ABOUT": "about",
        "HOME": "Home",
        "GAMES": "Games",
        "RELEASES": "Releases",
        "MEMBERS": "Members",
        "CONTACT": "Contact",
        'ABOUT_INFO': 'PVic Games is a game studio founded in late 2023. Based in Brazil, with additional members from all around the world, the team strives to develop fun and fresh games that stand the test of time.',
        'ED_INTRO': 'Welcome to Ednaldo Pereira: Mescladasso DX!',
        'ED_DESC': "Ednaldo Pereira: Mescladasso is a video game based on Ednaldo Pereira's audiovisual experience and all the stories and cultures that are encompassed involving such a person. The game presents an original story in which Ednaldo Pereira and his friend Fleig The BassPlayer defend the universe from a robot invasion created by The Dark Elite.",
        'ED_OST_INTRODUCTION': 'The soundtrack to our Ednaldo Titles, all in one great album!',
        'EDMOB_INTRO':"🌟 Welcome to the exciting world of Ednaldo Pereira: Mobile! Get ready to embark on a unique and fun-filled adventure in this amazing game. 🌟",
        'EDMOB_DESC':"Ednaldo Mobile is a captivating platform game inspired by platforming classics that offers an engaging and challenging gaming experience. Explore different stages filled with obstacles, enemies, and treasures to unlock. Overcome thrilling challenges, collect golden notes, and improve your skills while enjoying vibrant graphics and an exciting soundtrack with remixes of Ednaldo's classics.",
        'COMING_SOON':"more info coming soon...",
        'INSTA_GALLERY':"Check out our Instagram Gallery!",
        'MEMBERS':'members',
        'DIRECTOR_TITLE': 'Director',
        'DIRECTOR_1_NAME': 'Pizza Tower',
        'DIRECTOR_1_DESC': "The Director's Dog",
        'DIRECTOR_2_NAME': 'PVic',
        'DIRECTOR_2_DESC': 'Game Designer, Director & Programmer',
        'DIRECTOR_3_NAME': 'Black Tower',
        'DIRECTOR_3_DESC': "The Director's Dog's Brother",
        'ARTISTS_TITLE': 'Artists',
        'ARTIST_1_NAME': 'NekuuShin',
        'ARTIST_1_DESC': 'Pixel Artist',
        'ARTIST_2_NAME': 'Bitto',
        'ARTIST_2_DESC': 'Pixel Artist',
        'ARTIST_3_NAME': 'Pablo',
        'ARTIST_3_DESC': 'Key Artist',
        'CODERS_TITLE': 'Coders',
        'CODER_1_NAME': 'Casanova',
        'CODER_1_DESC': 'Programmer, Web Designer & Team Manager',
        'CODER_2_NAME': 'Kevin Macedo',
        'CODER_2_DESC': 'Lead Programmer',
        'CODER_3_NAME': 'Zazon',
        'CODER_3_DESC': 'Programmer, Web Designer',
        'MUSICIANS_TITLE': 'Musicians',
        'MUSICIAN_1_NAME': 'Glace Sue',
        'MUSICIAN_1_DESC': 'Musician & Level Designer',
        'MUSICIAN_2_NAME': 'Speed',
        'MUSICIAN_2_DESC': 'Lead Musician & Sound Designer',
        'MUSICIAN_3_NAME': 'Luan Maziero',
        'MUSICIAN_3_DESC': 'Musician',
        'CONTACT_TITLE': 'get in touch!!',
        'CONTACT_EMAIL': 'contact us over at ',
        'CONTACT_OPEN': "we're always open!",
        'FOLLOW_US': 'follow us at:',
        'FOOTER': 'website designed by gabriel casanova, zasus & pedro victor.'
      },
      br: {
          "ABOUT": "sobre",
          "HOME": "Início",
          "GAMES": "Jogos",
          "RELEASES": "Lançamentos",
          "MEMBERS": "Membros",
          "CONTACT": "Contato",
          'ABOUT_INFO': 'PVic Games é um estúdio de jogos fundado no final de 2023. Com base no Brasil, e com membros adicionais de todo o mundo, a equipe se esforça para desenvolver jogos divertidos e inovadores que resistem ao teste do tempo.',
          'ED_INTRO': 'Bem-vindo a Ednaldo Pereira: Mescladasso DX!',
          'ED_DESC': "Ednaldo Pereira: Mescladasso é um videogame baseado na experiência audiovisual de Ednaldo Pereira e todas as histórias e culturas que envolvem tal pessoa. O jogo apresenta uma história original na qual Ednaldo Pereira e seu amigo Fleig The BassPlayer defendem o universo de uma invasão de robôs criada pela The Dark Elite.",
          'ED_OST_INTRODUCTION': 'A trilha sonora dos nossos títulos do Ednaldo, tudo em um grande álbum!',
          'EDMOB_INTRO': "🌟 Bem-vindo ao emocionante mundo de Ednaldo Pereira: Mobile! Prepare-se para embarcar em uma aventura única e divertida neste incrível jogo. 🌟",
          'EDMOB_DESC': "Ednaldo Mobile é um cativante jogo de plataforma inspirado nos clássicos do gênero que oferece uma experiência de jogo envolvente e desafiadora. Explore diferentes estágios cheios de obstáculos, inimigos e tesouros para desbloquear. Supere desafios emocionantes, colete notas douradas e melhore suas habilidades enquanto desfruta de gráficos vibrantes e uma trilha sonora empolgante com remixes dos clássicos de Ednaldo.",
          'COMING_SOON': "mais informações em breve...",
          'INSTA_GALLERY': "Confira nossa galeria do Instagram!",
          'MEMBERS': 'membros',
          'ED_OST_INTRODUCTION': 'A trilha sonora dos nossos jogos do Ednaldo, em um único álbum.'
          'DIRECTOR_TITLE': 'Diretor',
          'DIRECTOR_1_NAME': 'Pizza Tower',
          'DIRECTOR_1_DESC': 'O cachorro do diretor',
          'DIRECTOR_2_NAME': 'PVic',
          'DIRECTOR_2_DESC': 'Designer de Jogos, Diretor & Programador',
          'DIRECTOR_3_NAME': 'Black Tower',
          'DIRECTOR_3_DESC': 'O irmão do cachorro do diretor',
          'ARTISTS_TITLE': 'Artistas',
          'ARTIST_1_NAME': 'NekuuShin',
          'ARTIST_1_DESC': 'Pixel Artist',
          'ARTIST_2_NAME': 'Bitto',
          'ARTIST_2_DESC': 'Pixel Artist',
          'ARTIST_3_NAME': 'Pablo',
          'ARTIST_3_DESC': 'Key Artist',
          'CODERS_TITLE': 'Coders',
          'CODER_1_NAME': 'Casanova',
          'CODER_1_DESC': 'Programador, Web Designer & Team Manager',
          'CODER_2_NAME': 'Kevin Macedo',
          'CODER_2_DESC': 'Lead Programmer',
          'CODER_3_NAME': 'Zazon',
          'CODER_3_DESC': 'Programador, Web Designer',
          'MUSICIANS_TITLE': 'Musicians',
          'MUSICIAN_1_NAME': 'Glace Sue',
          'MUSICIAN_1_DESC': 'Músico & Level Designer',
          'MUSICIAN_2_NAME': 'Speed',
          'MUSICIAN_2_DESC': 'Lead Musician & Sound Designer',
          'MUSICIAN_3_NAME': 'Luan Maziero',
          'MUSICIAN_3_DESC': 'Músico',
          'CONTACT_TITLE': 'Entre em contato!!',
          'CONTACT_EMAIL': 'Contate-nos em ',
          'CONTACT_OPEN': 'Estamos sempre abertos!',
          'FOLLOW_US': 'Siga-nos em:',
          'FOOTER': 'site feito por gabriel casanova, zasus & pedro victor.'
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
