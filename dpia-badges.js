/* =============================================================================
 * dpia-badges.js
 * Bollini di conformità GDPR/AI Act per il portale Sacra Famiglia
 * 
 * Generato automaticamente da DPIA Studio il 2026-04-30
 * 79 applicazioni classificate
 * 
 * Ogni link nel portale che corrisponde a un'app classificata riceve un piccolo
 * badge colorato accanto al nome, indicante il cluster di rischio.
 * 
 * Cluster:
 *   A = Profilazione studenti (ALTO)
 *   B = Monitoraggio comportamentale (ALTO-MEDIO)
 *   C = IA generativa (MEDIO)
 *   D = Senza dati personali (MINIMO)
 *   E = Raccolta dati studenti (BASSO-MEDIO)
 *   F = Strumenti professionali docenti (BASSO)
 * ============================================================================= */

(function() {
  'use strict';
  
  const URL_MAP = {
  "https://sondaggiostudenti.vercel.app": {
    "cluster": "E",
    "name": "TI ASCOLTO!"
  },
  "https://calibro.neocities.org": {
    "cluster": "F",
    "name": "Calibro"
  },
  "https://pattodigitale.neocities.org": {
    "cluster": "D",
    "name": "Patto Digitale di Famiglia"
  },
  "https://genitori.neocities.org": {
    "cluster": "D",
    "name": "Guida per Genitori"
  },
  "https://scuolaipad.neocities.org": {
    "cluster": "D",
    "name": "Scuola Digitale"
  },
  "https://chatbotai.neocities.org": {
    "cluster": "D",
    "name": "Didattica e AI"
  },
  "https://ineai.neocities.org": {
    "cluster": "D",
    "name": "IN + IA"
  },
  "https://guglielmoildentone.neocities.org": {
    "cluster": "D",
    "name": "L'Occhio Critico"
  },
  "https://manipolazione.neocities.org": {
    "cluster": "D",
    "name": "Riconosci la Manipolazione"
  },
  "https://socialschool.neocities.org": {
    "cluster": "D",
    "name": "Social sotto la Lente"
  },
  "https://comportamentismo.neocities.org": {
    "cluster": "E",
    "name": "Sei un Piccione?"
  },
  "https://aiconsumi.vercel.app": {
    "cluster": "D",
    "name": "Quanto consuma l'AI?"
  },
  "https://sicofante.vercel.app": {
    "cluster": "D",
    "name": "Il Sicofante Digitale"
  },
  "https://famigliaaccorti.neocities.org": {
    "cluster": "D",
    "name": "Famiglia Accorti"
  },
  "https://socialguide.neocities.org": {
    "cluster": "D",
    "name": "Navigare Sicuri"
  },
  "https://pizzeriagoogle.neocities.org": {
    "cluster": "D",
    "name": "Pizzeria Google"
  },
  "https://securepassword.neocities.org": {
    "cluster": "D",
    "name": "Generatore di Password"
  },
  "https://cyberbullismo.neocities.org": {
    "cluster": "D",
    "name": "Stop Cyberbullismo"
  },
  "https://missionedigitale.neocities.org": {
    "cluster": "D",
    "name": "Indagine Digitale 2026"
  },
  "https://cyberescape.neocities.org": {
    "cluster": "D",
    "name": "CyberEscape"
  },
  "https://truffa-ballerina.vercel.app": {
    "cluster": "D",
    "name": "Il Voto che Ruba"
  },
  "https://attacchinformatici.neocities.org": {
    "cluster": "D",
    "name": "Cyber Sentinel"
  },
  "https://polizia-postale.vercel.app": {
    "cluster": "D",
    "name": "Commissariato Digitale"
  },
  "https://mattoncini.neocities.org": {
    "cluster": "D",
    "name": "I Mattoncini del Testo"
  },
  "https://errore.neocities.org": {
    "cluster": "D",
    "name": "Trasformiamo l'Errore in Opportunita"
  },
  "https://fattopinione.vercel.app": {
    "cluster": "D",
    "name": "Fatto o Opinione?"
  },
  "https://scrivere.neocities.org": {
    "cluster": "D",
    "name": "Le 3 Forme del Testo"
  },
  "https://laboratorioscrittura2.neocities.org": {
    "cluster": "D",
    "name": "Testo Descrittivo"
  },
  "https://immagine.neocities.org": {
    "cluster": "D",
    "name": "Scrivere con le Immagini"
  },
  "https://insegnareapensare.vercel.app": {
    "cluster": "D",
    "name": "La Bottega dell'Argomentazione"
  },
  "https://laboratorioscrittura.neocities.org": {
    "cluster": "D",
    "name": "Testo Argomentativo"
  },
  "https://argomentor.vercel.app": {
    "cluster": "D",
    "name": "ArgoMentor"
  },
  "https://ascolto.neocities.org": {
    "cluster": "D",
    "name": "Scrivere dall'Ascolto"
  },
  "https://mentalcoach.neocities.org": {
    "cluster": "D",
    "name": "Mental Coaching"
  },
  "https://videoshorts.neocities.org": {
    "cluster": "D",
    "name": "Video Shorts"
  },
  "https://schooldebate.neocities.org": {
    "cluster": "D",
    "name": "Debate in Classe"
  },
  "https://laboscrittura.vercel.app": {
    "cluster": "E",
    "name": "BottegaScrivi"
  },
  "https://tracciatema.neocities.org": {
    "cluster": "D",
    "name": "ScriviMeglio"
  },
  "https://fakehunter.neocities.org": {
    "cluster": "D",
    "name": "Fake Hunter"
  },
  "https://truffe.neocities.org": {
    "cluster": "D",
    "name": "Truffe & Phishing"
  },
  "https://stampa3d.neocities.org": {
    "cluster": "D",
    "name": "Stampa 3D"
  },
  "https://keyboardmac.neocities.org": {
    "cluster": "D",
    "name": "Scorciatoie Mac"
  },
  "https://glossarioinfo.neocities.org": {
    "cluster": "D",
    "name": "Glossario Digitale"
  },
  "https://typegame.neocities.org": {
    "cluster": "D",
    "name": "Sfida di Videoscrittura"
  },
  "https://tastiera.neocities.org": {
    "cluster": "D",
    "name": "Allenamento Tastiera"
  },
  "https://pesodigitale.neocities.org": {
    "cluster": "D",
    "name": "La Scala Digitale"
  },
  "https://barscuola.neocities.org": {
    "cluster": "D",
    "name": "Bar della Scuola"
  },
  "https://genalfa.neocities.org": {
    "cluster": "D",
    "name": "Algoritmi e Reti Neurali"
  },
  "https://escapecity.vercel.app": {
    "cluster": "D",
    "name": "Guarda Due Volte"
  },
  "https://geografiamaps.neocities.org": {
    "cluster": "D",
    "name": "Gite Virtuali"
  },
  "https://sacrafamiglialabinfo.neocities.org": {
    "cluster": "D",
    "name": "Ciro il Dinosauro"
  },
  "https://dinosauri.neocities.org": {
    "cluster": "D",
    "name": "Il Mondo dei Dinosauri"
  },
  "https://apparati.neocities.org": {
    "cluster": "D",
    "name": "Il Corpo Umano"
  },
  "https://pontremoli.neocities.org": {
    "cluster": "D",
    "name": "Pontremoli - Tesina"
  },
  "https://esame.neocities.org": {
    "cluster": "D",
    "name": "Esame di Stato"
  },
  "https://invalsi.neocities.org": {
    "cluster": "D",
    "name": "Missione INVALSI 2026"
  },
  "https://debaterrore.neocities.org": {
    "cluster": "D",
    "name": "Debate sull'Errore"
  },
  "https://notebooklmstyle.neocities.org": {
    "cluster": "D",
    "name": "Infografiche con Notebook LM"
  },
  "https://teamdebate.neocities.org": {
    "cluster": "D",
    "name": "Arena del Pensiero"
  },
  "https://labinfo.my.canva.site/canto3": {
    "cluster": "D",
    "name": "Canto III - Divina Commedia"
  },
  "https://garagevalley.neocities.org": {
    "cluster": "D",
    "name": "I Geni della Tecnologia"
  },
  "https://labscienze.vercel.app": {
    "cluster": "D",
    "name": "Laboratorio Scientifico"
  },
  "https://sintesiproteica.vercel.app": {
    "cluster": "D",
    "name": "Sintesi Proteica"
  },
  "https://100anni.neocities.org": {
    "cluster": "D",
    "name": "100 Anni di Storia in Musica"
  },
  "https://sfida.neocities.org": {
    "cluster": "D",
    "name": "Il Gioco delle Case"
  },
  "https://autovalutazione.neocities.org": {
    "cluster": "E",
    "name": "Autovalutazione Lezione"
  },
  "https://sacrafamiglia.neocities.org": {
    "cluster": "D",
    "name": "Le Mascotte delle Case"
  },
  "https://santapaola.neocities.org": {
    "cluster": "D",
    "name": "S. Paola Elisabetta"
  },
  "https://quizzonespaola.neocities.org": {
    "cluster": "D",
    "name": "Quizzone S. Paola"
  },
  "https://randomecase.neocities.org": {
    "cluster": "D",
    "name": "Consegna alle Case"
  },
  "https://studiomusicale.neocities.org": {
    "cluster": "D",
    "name": "Studio Musicale"
  },
  "https://giamaica.neocities.org": {
    "cluster": "D",
    "name": "Cool Runnings"
  },
  "https://labinfo.my.canva.site/c17sxqtedy2jyaw7": {
    "cluster": "D",
    "name": "Milano Cortina"
  },
  "https://olimpictech.neocities.org": {
    "cluster": "D",
    "name": "Tech & Olimpiadi"
  },
  "https://milanocortina.neocities.org": {
    "cluster": "D",
    "name": "Milano-Cortina 2026"
  },
  "https://sacrafamigliatornei.neocities.org": {
    "cluster": "E",
    "name": "Gestione Tornei"
  },
  "https://sacrafamigliagames.neocities.org": {
    "cluster": "D",
    "name": "Word Games"
  },
  "https://profemon.neocities.org": {
    "cluster": "D",
    "name": "Profemon"
  }
};
  
  const CLUSTER_META = {
  "A": {
    "label": "A",
    "name": "Profilazione studenti",
    "risk": "ALTO",
    "color": "#8B4A3C",
    "bg": "#F4E6E2"
  },
  "B": {
    "label": "B",
    "name": "Monitoraggio comportamentale",
    "risk": "ALTO-MEDIO",
    "color": "#B8860B",
    "bg": "#FBF3DC"
  },
  "C": {
    "label": "C",
    "name": "IA generativa",
    "risk": "MEDIO",
    "color": "#1E4A8A",
    "bg": "#E4EAF3"
  },
  "D": {
    "label": "D",
    "name": "Senza dati personali",
    "risk": "MINIMO",
    "color": "#6B7280",
    "bg": "#EDEFF2"
  },
  "E": {
    "label": "E",
    "name": "Raccolta dati studenti",
    "risk": "BASSO-MEDIO",
    "color": "#4A5160",
    "bg": "#F1F3F7"
  },
  "F": {
    "label": "F",
    "name": "Strumenti professionali docenti",
    "risk": "BASSO",
    "color": "#2C5F8D",
    "bg": "#E4EAF3"
  }
};
  
  // Inietta CSS dei badge
  function injectStyles() {
    if (document.getElementById('dpia-badges-style')) return;
    const css = `
      .dpia-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 18px;
        height: 18px;
        padding: 0 5px;
        margin-left: 6px;
        font-family: 'IBM Plex Sans Condensed', system-ui, sans-serif;
        font-size: 10.5px;
        font-weight: 700;
        letter-spacing: 0.04em;
        border-radius: 3px;
        vertical-align: 1px;
        cursor: help;
        transition: transform 0.15s ease;
      }
      .dpia-badge:hover {
        transform: translateY(-1px);
      }
      .dpia-badge::after {
        content: attr(data-tip);
        position: absolute;
        bottom: calc(100% + 6px);
        left: 50%;
        transform: translateX(-50%) scale(0.95);
        background: #1a1f2e;
        color: #fff;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0;
        padding: 6px 10px;
        border-radius: 6px;
        white-space: nowrap;
        max-width: 280px;
        white-space: normal;
        line-height: 1.4;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.15s ease, transform 0.15s ease;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }
      .dpia-badge:hover::after {
        opacity: 1;
        transform: translateX(-50%) scale(1);
      }
      .dpia-badge { position: relative; }
      .dpia-A { background: #F4E6E2; color: #8B4A3C; }
      .dpia-B { background: #FBF3DC; color: #B8860B; }
      .dpia-C { background: #E4EAF3; color: #1E4A8A; }
      .dpia-D { background: #EDEFF2; color: #6B7280; }
      .dpia-E { background: #F1F3F7; color: #4A5160; }
      .dpia-F { background: #E4EAF3; color: #2C5F8D; }
      
      /* Legenda fissa in basso a destra */
      .dpia-legend {
        position: fixed;
        bottom: 16px;
        right: 16px;
        background: #FFFFFF;
        border: 1px solid #DDE1E7;
        border-radius: 4px;
        padding: 12px 14px;
        font-family: 'IBM Plex Sans', system-ui, sans-serif;
        font-size: 11.5px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        z-index: 9999;
        max-width: 280px;
        opacity: 0;
        transform: translateY(8px);
        transition: opacity 0.2s, transform 0.2s;
      }
      .dpia-legend.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .dpia-legend-toggle {
        position: fixed;
        bottom: 16px;
        right: 16px;
        width: 36px;
        height: 36px;
        background: #1E4A8A;
        color: #fff;
        border: none;
        border-radius: 50%;
        font-family: 'IBM Plex Sans Condensed', system-ui, sans-serif;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        z-index: 9999;
        transition: transform 0.15s ease, background 0.15s;
      }
      .dpia-legend-toggle:hover { background: #142E5A; transform: scale(1.05); }
      .dpia-legend-toggle.hidden { display: none; }
      .dpia-legend-title {
        font-weight: 700;
        color: #142E5A;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 8px;
        padding-bottom: 6px;
        border-bottom: 1px solid #DDE1E7;
      }
      .dpia-legend-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 4px;
        line-height: 1.4;
      }
      .dpia-legend-row:last-child { margin-bottom: 0; }
      .dpia-legend-close {
        position: absolute;
        top: 6px;
        right: 8px;
        background: none;
        border: none;
        color: #5A6270;
        font-size: 16px;
        cursor: pointer;
        line-height: 1;
        padding: 2px 6px;
      }
      .dpia-legend-close:hover { color: #1E4A8A; }
      .dpia-legend-footer {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px dotted #DDE1E7;
        font-size: 10px;
        color: #5A6270;
        font-style: italic;
      }
    `;
    const style = document.createElement('style');
    style.id = 'dpia-badges-style';
    style.textContent = css;
    document.head.appendChild(style);
  }
  
  // Normalizza URL per il match
  function normalizeUrl(url) {
    return url.replace(/\/$/, '').toLowerCase();
  }
  
  // Inietta il badge accanto al testo
  function injectBadge(linkElement, cluster) {
    const meta = CLUSTER_META[cluster];
    if (!meta) return;
    
    // Cerca il contenitore del nome (gestisce diverse strutture HTML del portale)
    const nameEl = linkElement.querySelector('.link-name') || linkElement;
    
    // Evita doppi badge
    if (nameEl.querySelector('.dpia-badge')) return;
    
    const badge = document.createElement('span');
    badge.className = 'dpia-badge dpia-' + cluster;
    badge.textContent = meta.label;
    badge.setAttribute('data-tip', 'Cluster ' + cluster + ': ' + meta.name + ' — Rischio ' + meta.risk + '. Classificato secondo GDPR e AI Act.');
    
    nameEl.appendChild(badge);
  }
  
  // Crea legenda flottante
  function createLegend() {
    const counts = {};
    Object.values(URL_MAP).forEach(item => {
      counts[item.cluster] = (counts[item.cluster] || 0) + 1;
    });
    
    const toggle = document.createElement('button');
    toggle.className = 'dpia-legend-toggle';
    toggle.textContent = 'i';
    toggle.title = 'Legenda bollini conformità';
    toggle.setAttribute('aria-label', 'Mostra legenda bollini DPIA');
    
    const legend = document.createElement('div');
    legend.className = 'dpia-legend';
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'dpia-legend-close';
    closeBtn.textContent = '×';
    closeBtn.setAttribute('aria-label', 'Chiudi legenda');
    
    const title = document.createElement('div');
    title.className = 'dpia-legend-title';
    title.textContent = 'Bollini conformità GDPR / AI Act';
    
    legend.appendChild(closeBtn);
    legend.appendChild(title);
    
    Object.keys(CLUSTER_META).forEach(cluster => {
      if (!counts[cluster]) return;
      const row = document.createElement('div');
      row.className = 'dpia-legend-row';
      const badge = document.createElement('span');
      badge.className = 'dpia-badge dpia-' + cluster;
      badge.textContent = cluster;
      const text = document.createElement('span');
      text.textContent = CLUSTER_META[cluster].name + ' (' + counts[cluster] + ')';
      row.appendChild(badge);
      row.appendChild(text);
      legend.appendChild(row);
    });
    
    const footer = document.createElement('div');
    footer.className = 'dpia-legend-footer';
    footer.textContent = 'Aggiornato al 2026-04-30 — ' + Object.keys(URL_MAP).length + ' applicazioni';
    legend.appendChild(footer);
    
    document.body.appendChild(toggle);
    document.body.appendChild(legend);
    
    toggle.addEventListener('click', () => {
      legend.classList.add('visible');
      toggle.classList.add('hidden');
    });
    closeBtn.addEventListener('click', () => {
      legend.classList.remove('visible');
      toggle.classList.remove('hidden');
    });
  }
  
  // Funzione principale: scansiona i link del portale e inietta i badge
  function applyBadges() {
    injectStyles();
    
    let injected = 0;
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('http')) return;
      
      const norm = normalizeUrl(href);
      const item = URL_MAP[norm];
      if (item) {
        injectBadge(link, item.cluster);
        injected++;
      }
    });
    
    if (injected > 0) {
      createLegend();
    }
    
    console.log('[DPIA Badges] ' + injected + ' bollini iniettati su ' + Object.keys(URL_MAP).length + ' app classificate');
  }
  
  // Inizializza al DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyBadges);
  } else {
    applyBadges();
  }
})();
