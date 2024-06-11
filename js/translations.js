// translations.js

// Function to translate the page content based on the selected language
function translatePage(lang) {
    // Use English as the default language if no language is provided
    if (!lang) {
        const userLang = navigator.language || navigator.userLanguage;
        const langCode = userLang.split('-')[0].toLowerCase(); // Extract the language code

        // Check if the language is Portuguese (Brazil) or Portuguese (Portugal)
        if (langCode === 'pt' || langCode === 'pt-br' || langCode === 'br') {
            lang = 'br';
        }
        else if (langCode === "jp" || langCode === "ja") {
          lang = 'jp';
        }
        else {
            lang = 'en'; // Otherwise, default to English
        }
    }
    // Get the translations for the selected language
    const translations = {
        en: {
          "MAIN_INTRO":"Indie game development team full of love to share. Sometimes our games are about a specific middle aged brazillian man called Ednaldo Pereira. Now moving onto other things!!",
          "MAIN_NEWSLETTER":"Make sure to subscribe to our newsletter!",
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
            'EDMOB_INTRO': "🌟 Welcome to the exciting world of Ednaldo Pereira: Mobile! Get ready to embark on a unique and fun-filled adventure in this amazing game. 🌟",
            'EDMOB_DESC': "Ednaldo Mobile is a captivating platform game inspired by platforming classics that offers an engaging and challenging gaming experience. Explore different stages filled with obstacles, enemies, and treasures to unlock. Overcome thrilling challenges, collect golden notes, and improve your skills while enjoying vibrant graphics and an exciting soundtrack with remixes of Ednaldo's classics.",
            'COMING_SOON': "more info coming soon...",
            'INSTA_GALLERY': "Check out our Instagram Gallery!",
            'MEMBERS_lowercase': 'members',
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
            'FOOTER': 'website designed by gabriel casanova, zasus & pedro victor.',
            'PLAY_NOW': 'play it now:'
        },
        br: {
          "MAIN_INTRO": "Equipe de desenvolvimento de jogos indie cheia de amor para compartilhar. Às vezes, nossos jogos são sobre um homem brasileiro de meia-idade chamado Ednaldo Pereira. Agora estamos avançando para outras coisas!!",
"MAIN_NEWSLETTER": "Não deixe de assinar nossa newsletter!",

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
            'MEMBERS_lowercase': 'membros',
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
            'ARTIST_3_DESC': 'Artista de Artes Chave',
            'CODERS_TITLE': 'Programadores',
            'CODER_1_NAME': 'Casanova',
            'CODER_1_DESC': 'Web Designer',
            'CODER_2_NAME': 'Kevin Macedo',
            'CODER_2_DESC': 'Programador',
            'CODER_3_NAME': 'Zazon',
            'CODER_3_DESC': 'Programador, Web Designer',
            'MUSICIANS_TITLE': 'Músicos',
            'MUSICIAN_1_NAME': 'Glace Sue',
            'MUSICIAN_1_DESC': 'Músico & Level Designer',
            'MUSICIAN_2_NAME': 'Speed',
            'MUSICIAN_2_DESC': 'Líder de Músicos & Designer de Som',
            'MUSICIAN_3_NAME': 'Luan Maziero',
            'MUSICIAN_3_DESC': 'Músico',
            'CONTACT_TITLE': 'entre em contato!!',
            'CONTACT_EMAIL': 'contate-nos em ',
            'CONTACT_OPEN': 'estamos sempre abertos!',
            'FOLLOW_US': 'siga-nos em:',
            'FOOTER': 'site feito por gabriel casanova, zasus & pedro victor.',
            'PLAY_NOW': 'jogue agora:'
        },
        jp:{
              "ABOUT": "アバウト",
              "HOME": "ホーム",
              "GAMES": "ゲーム",
              "RELEASES": "リリース",
              "MEMBERS": "メンバー",
              "CONTACT": "コンタクト",
              "ABOUT_INFO": "PVic Gamesは2023年末に設立されたゲームスタジオです。ブラジルに拠点を置き、世界中からメンバーを集めたチームは、時代を超えて楽しめる新鮮で楽しいゲームの開発に努めています。",
              "ED_INTRO": "ようこそ、エドナルド・ペレイラ：メスクラダッソ DXへ！",
              "ED_DESC": "エドナルド・ペレイラ：メスクラダッソは、エドナルド・ペレイラの視聴覚体験と彼に関わるすべての物語や文化に基づいたビデオゲームです。このゲームは、エドナルド・ペレイラと彼の友人フレイグ・ザ・ベースプレイヤーがダークエリートによって作られたロボットの侵略から宇宙を守るオリジナルの物語を紹介します。",
              "ED_OST_INTRODUCTION": "エドナルド・タイトルのサウンドトラック、素晴らしいアルバムで一挙に！",
              "EDMOB_INTRO": "🌟 エドナルド・ペレイラ：モバイルの興奮の世界へようこそ！この素晴らしいゲームでユニークで楽しい冒険に出かける準備をしてください。🌟",
              "EDMOB_DESC": "エドナルド・モバイルは、クラシックなプラットフォームゲームにインスパイアされた魅力的なプラットフォームゲームで、魅力的で挑戦的なゲーム体験を提供します。障害物、敵、宝物でいっぱいのさまざまなステージを探索し、スリリングなチャレンジを克服し、黄金のノートを収集し、スキルを向上させながら、エドナルドのクラシック曲のリミックスが楽しめる鮮やかなグラフィックとエキサイティングなサウンドトラックを楽しんでください。",
              "COMING_SOON": "詳細は近日公開...",
              "INSTA_GALLERY": "Instagramギャラリーをチェックしてください！",
              "MEMBERS_lowercase": "メンバー",
              "DIRECTOR_TITLE": "ディレクター",
              "DIRECTOR_1_NAME": "ピザタワー",
              "DIRECTOR_1_DESC": "ディレクターの犬",
              "DIRECTOR_2_NAME": "PVic",
              "DIRECTOR_2_DESC": "ゲームデザイナー、ディレクター & プログラマー",
              "DIRECTOR_3_NAME": "ブラックタワー",
              "DIRECTOR_3_DESC": "ディレクターの犬の兄弟",
              "ARTISTS_TITLE": "アーティスト",
              "ARTIST_1_NAME": "NekuuShin",
              "ARTIST_1_DESC": "ピクセルアーティスト",
              "ARTIST_2_NAME": "Bitto",
              "ARTIST_2_DESC": "ピクセルアーティスト",
              "ARTIST_3_NAME": "Pablo",
              "ARTIST_3_DESC": "キーアーティスト",
              "CODERS_TITLE": "プログラマー",
              "CODER_1_NAME": "カサノバ",
              "CODER_1_DESC": "プログラマー、ウェブデザイナー & チームマネージャー",
              "CODER_2_NAME": "ケビン・マセド",
              "CODER_2_DESC": "リードプログラマー",
              "CODER_3_NAME": "ザゾン",
              "CODER_3_DESC": "プログラマー、ウェブデザイナー",
              "MUSICIANS_TITLE": "ミュージシャン",
              "MUSICIAN_1_NAME": "グレース・スー",
              "MUSICIAN_1_DESC": "ミュージシャン & レベルデザイナー",
              "MUSICIAN_2_NAME": "スピード",
              "MUSICIAN_2_DESC": "リードミュージシャン & サウンドデザイナー",
              "MUSICIAN_3_NAME": "ルアン・マジエロ",
              "MUSICIAN_3_DESC": "ミュージシャン",
              "CONTACT_TITLE": "お問い合わせ！！",
              "CONTACT_EMAIL": "こちらでお問い合わせください ",
              "CONTACT_OPEN": "いつでも開いています！",
              "FOLLOW_US": "フォローはこちら:",
              "FOOTER": "ウェブサイトはガブリエル・カサノバ、ザスス & ペドロ・ビクターによってデザインされました。",
              "PLAY_NOW": "今すぐプレイ:"
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
