// ==========================================
// CARNET D'EXPLORATEUR - DONNÉES
// ==========================================

const explorerData = {
  missions: {
    "Golden Gate Bridge": {
      icon: "🌉",
      badge: "Gardien du Golden Gate",
      before: {
        funFact: "Le Golden Gate Bridge n'est pas doré ! Il est orange international, une couleur choisie pour être bien visible dans le brouillard.",
        question: "À ton avis, combien de voitures peuvent passer sur le pont en même temps ?",
        answer: "Environ 6 voitures de large !"
      },
      during: [
        "Trouve la couleur orange du pont",
        "Regarde un bateau passer sous le pont",
        "Cherche le brouillard (fog) de San Francisco",
        "Fais une grande photo du pont"
      ],
      after: {
        prompt: "Qu'est-ce qui t'a le plus impressionné sur ce grand pont ?"
      }
    },
    
    "Exploratorium": {
      icon: "🔬",
      badge: "Scientifique en Herbe",
      before: {
        funFact: "L'Exploratorium a plus de 600 expériences où tu peux TOUT toucher ! C'est un musée fait pour jouer et apprendre.",
        question: "À ton avis, qu'est-ce qui flotte : une orange avec sa peau ou une orange pelée ?",
        answer: "Avec la peau ! La peau a des bulles d'air."
      },
      during: [
        "Touche quelque chose de très froid",
        "Fais une expérience avec de la lumière",
        "Trouve une illusion d'optique rigolote",
        "Écoute un son bizarre"
      ],
      after: {
        prompt: "Quelle expérience était la plus cool ? Pourquoi ?"
      }
    },
    
    "Muir Woods National Monument": {
      icon: "🌲",
      badge: "Ami des Géants",
      before: {
        funFact: "Les séquoias de Muir Woods peuvent vivre plus de 1000 ans ! Certains arbres étaient déjà là quand Christophe Colomb a découvert l'Amérique.",
        question: "À ton avis, quelle hauteur font ces arbres géants ?",
        answer: "Jusqu'à 79 mètres ! Plus haut qu'un immeuble de 20 étages !"
      },
      during: [
        "Fais un câlin à un très gros arbre",
        "Cherche un écureuil ou un oiseau",
        "Sens l'odeur de la forêt",
        "Lève la tête tout en haut d'un séquoia"
      ],
      after: {
        prompt: "Si tu étais un arbre, qu'est-ce que tu verrais pendant 1000 ans ?"
      }
    },
    
    "Alcatraz Island": {
      icon: "🏛️",
      badge: "Gardien d'Alcatraz",
      before: {
        funFact: "Alcatraz veut dire 'Pélican' en espagnol. L'île était pleine de pélicans avant la prison !",
        question: "À ton avis, est-ce que des prisonniers ont réussi à s'échapper d'Alcatraz ?",
        answer: "Peut-être ! 3 prisonniers ont disparu en 1962 et on ne les a jamais retrouvés."
      },
      during: [
        "Trouve une cellule de prisonnier",
        "Cherche un oiseau (pélican, mouette...)",
        "Regarde San Francisco par la fenêtre",
        "Écoute l'audio-guide raconter une histoire"
      ],
      after: {
        prompt: "Comment tu te sentirais si tu vivais dans une petite cellule ?"
      }
    },
    
    "Monterey Bay Aquarium": {
      icon: "🐠",
      badge: "Explorateur des Océans",
      before: {
        funFact: "Les loutres de mer dorment en se tenant la main pour ne pas dériver ! Elles utilisent aussi des pierres comme outils pour ouvrir les coquillages.",
        question: "À ton avis, combien de poissons vivent dans l'aquarium ?",
        answer: "Plus de 80 000 animaux marins !"
      },
      during: [
        "Trouve une loutre de mer trop mignonne",
        "Cherche une méduse qui brille",
        "Touche quelque chose dans le bassin tactile",
        "Regarde la grande forêt de kelp géante"
      ],
      after: {
        prompt: "Quel animal marin était ton préféré ? Pourquoi ?"
      }
    },
    
    "17-Mile Drive": {
      icon: "🚗",
      badge: "Pilote de la Côte",
      before: {
        funFact: "Le Lone Cypress (cyprès solitaire) est l'arbre le plus photographié du monde ! Il pousse sur un rocher depuis plus de 250 ans.",
        question: "À ton avis, pourquoi certains arbres poussent tout tordus près de l'océan ?",
        answer: "À cause du vent ! Le vent de l'océan pousse les branches toujours du même côté."
      },
      during: [
        "Trouve le Lone Cypress (arbre solitaire)",
        "Cherche un phoque ou un lion de mer",
        "Compte combien de terrains de golf tu vois",
        "Trouve une maison de rêve au bord de l'eau"
      ],
      after: {
        prompt: "Si tu vivais dans une maison ici, qu'est-ce que tu ferais tous les jours ?"
      }
    },
    
    "Big Sur - Bixby Bridge": {
      icon: "🌊",
      badge: "Aventurier de Big Sur",
      before: {
        funFact: "Le pont Bixby est haut de 85 mètres ! C'est l'un des ponts les plus photographiés au monde car il est spectaculaire.",
        question: "À ton avis, combien de temps a-t-il fallu pour construire ce pont géant ?",
        answer: "18 mois ! De 1931 à 1932."
      },
      during: [
        "Fais une photo du grand pont",
        "Regarde l'océan Pacifique bleu",
        "Cherche des vagues qui se cassent",
        "Trouve un endroit où faire un super pique-nique"
      ],
      after: {
        prompt: "Qu'est-ce qui était le plus impressionnant : le pont ou l'océan ?"
      }
    },
    
    "McWay Falls": {
      icon: "💦",
      badge: "Découvreur de Cascade",
      before: {
        funFact: "McWay Falls est l'une des rares cascades au monde qui tombent directement sur une plage ! L'eau fait 24 mètres de chute.",
        question: "À ton avis, d'où vient l'eau de la cascade ?",
        answer: "D'une petite rivière dans la montagne !"
      },
      during: [
        "Regarde la cascade tomber sur la plage",
        "Trouve l'eau turquoise de la crique",
        "Cherche des rochers dans l'eau",
        "Fais une photo magique"
      ],
      after: {
        prompt: "Si tu pouvais nager dans cette crique, qu'est-ce que tu ferais ?"
      }
    },
    
    "San Diego Zoo Safari Park": {
      icon: "🦒",
      badge: "Ranger du Safari",
      before: {
        funFact: "Au Safari Park, les animaux vivent presque comme en Afrique ! Les girafes, éléphants et rhinocéros se promènent en liberté dans de grands espaces.",
        question: "À ton avis, quelle est la taille du cou d'une girafe ?",
        answer: "2 mètres ! Aussi grand qu'un adulte !"
      },
      during: [
        "Compte combien de girafes tu vois",
        "Trouve un animal avec des rayures",
        "Cherche le plus gros animal du parc",
        "Regarde un animal manger"
      ],
      after: {
        prompt: "Si tu pouvais être un animal du safari, lequel tu choisirais ?"
      }
    },
    
    "Griffith Observatory": {
      icon: "🔭",
      badge: "Astronome Junior",
      before: {
        funFact: "Depuis Griffith Observatory, on peut voir le fameux panneau HOLLYWOOD ! Et la nuit, on peut observer les étoiles avec de vrais télescopes.",
        question: "À ton avis, combien d'étoiles peut-on voir dans le ciel ?",
        answer: "Des milliards ! Mais on en voit environ 2500 à l'œil nu."
      },
      during: [
        "Trouve le panneau HOLLYWOOD",
        "Regarde dans un télescope",
        "Cherche la planète Terre sur une maquette",
        "Compte combien de villes tu vois en bas"
      ],
      after: {
        prompt: "Si tu pouvais voyager sur une planète, laquelle tu choisirais ?"
      }
    },
    
    "La Jolla Cove": {
      icon: "🦭",
      badge: "Ami des Phoques",
      before: {
        funFact: "Les phoques et les otaries se reposent sur les rochers de La Jolla ! On peut les approcher de très près, mais il ne faut jamais les toucher.",
        question: "À ton avis, quelle est la différence entre un phoque et une otarie ?",
        answer: "Les otaries ont des petites oreilles et peuvent marcher sur leurs nageoires !"
      },
      during: [
        "Compte combien de phoques tu vois",
        "Écoute les otaries faire du bruit",
        "Cherche un bébé phoque",
        "Regarde l'eau super claire et bleue"
      ],
      after: {
        prompt: "Quel était le phoque le plus rigolo ? Qu'est-ce qu'il faisait ?"
      }
    }
  }
};