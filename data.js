// Basis-Kategorien mit ihren Items und Eigenschaften
const basisKategorien = {
    'Ort': {
        items: [
            'Wald', 'Höhle', 'Turm', 'Brücke', 'Tempel', 'Schmiede', 
            'Taverne', 'Bibliothek', 'Marktplatz', 'Friedhof', 
            'Vulkan', 'Wasserfall', 'Labyrinth', 'Palast'
        ],
        eigenschaften: [
            'verflucht', 'verlassen', 'geheimnisvoll', 'leuchtend', 
            'schwebend', 'verborgen', 'antik', 'verwachsen', 
            'nebelverhangen', 'zeitvergessen', 'verzaubert', 'kristallen'
        ]
    },
    'Wesen': {
        items: [
            'Drache', 'Einhorn', 'Phönix', 'Greif', 'Elementar', 
            'Geist', 'Golem', 'Chimäre', 'Basilisk', 'Sphinx', 
            'Nymphe', 'Troll', 'Fee', 'Kentaur'
        ],
        eigenschaften: [
            'winzig', 'freundlich', 'mechanisch', 'ätherisch', 
            'kristallen', 'schattig', 'uralten', 'jugendlich', 
            'verspielt', 'majestätisch', 'schüchtern', 'neugierig'
        ]
    },
    'Person': {
        items: [
            'Magier', 'Krieger', 'Händler', 'Barde', 'Dieb', 
            'Heiler', 'Gelehrter', 'Schmied', 'Alchemist', 'Priester', 
            'Assassine', 'Koch', 'Forscher', 'Künstler'
        ],
        eigenschaften: [
            'vergesslich', 'wortkarg', 'exzentrisch', 'ängstlich', 
            'übermütig', 'weise', 'listig', 'tollpatschig', 
            'melancholisch', 'fröhlich', 'grimmig', 'verspielt'
        ]
    },
    'Waffe': {
        items: [
            'Schwert', 'Bogen', 'Stab', 'Axt', 'Dolch', 
            'Hammer', 'Sense', 'Speer', 'Armbrust', 'Keule', 
            'Peitsche', 'Schild', 'Streitkolben', 'Katana'
        ],
        eigenschaften: [
            'singend', 'flammend', 'eisig', 'sprechend', 
            'wachsend', 'unsichtbar', 'schwerelos', 'zeitverzerrend', 
            'heilend', 'verwandelt', 'summend', 'leuchtend'
        ]
    },
    'Pflanze': {
        items: [
            'Baum', 'Blume', 'Pilz', 'Ranke', 'Moos', 
            'Farn', 'Strauch', 'Kaktus', 'Orchidee', 'Lotus', 
            'Efeu', 'Rose', 'Lilie', 'Bambus'
        ],
        eigenschaften: [
            'wandernd', 'singend', 'leuchtend', 'fleischfressend', 
            'heilend', 'giftig', 'denkend', 'tanzend', 
            'sprechend', 'träumend', 'wachsam', 'schlafend'
        ]
    },
    'Fahrzeug': {
        items: [
            'Schiff', 'Kutsche', 'Ballon', 'Teppich', 'Wagen', 
            'Boot', 'Gondel', 'Gleiter', 'Luftschiff', 'Drachenschiff', 
            'Kristallkugel', 'Wolke', 'Sänfte', 'Schlitten'
        ],
        eigenschaften: [
            'fliegend', 'tauchend', 'unsichtbar', 'lebendig', 
            'sprechend', 'selbstfahrend', 'dimensionsreisend', 'verwandelnd', 
            'zeitreisend', 'schwebend', 'dampfbetrieben', 'magisch'
        ]
    },
    'Zauber': {
        items: [
            'Feuerball', 'Eissturm', 'Heilung', 'Teleportation', 'Illusion', 
            'Blitz', 'Schutzschild', 'Verwandlung', 'Beschwörung', 'Levitation', 
            'Gedankenlesen', 'Unsichtbarkeit', 'Zeitmanipulation', 'Elementarwelle'
        ],
        eigenschaften: [
            'wild', 'sanft', 'kontrolliert', 'chaotisch', 
            'präzise', 'mächtig', 'subtil', 'explosiv', 
            'fließend', 'kristallisiert', 'flüsternd', 'tosend'
        ]
    },
    'Rüstung': {
        items: [
            'Brustpanzer', 'Helm', 'Handschuhe', 'Stiefel', 'Umhang', 
            'Schulterpanzer', 'Beinschienen', 'Armschienen', 'Kettenhemd', 'Schuppenpanzer', 
            'Maske', 'Gürtel', 'Harnisch', 'Robe'
        ],
        eigenschaften: [
            'unzerstörbar', 'leicht wie Luft', 'regenerierend', 'tarnend', 
            'verstärkend', 'flammabweisend', 'eisgekühlt', 'lebend', 
            'atmend', 'pulsierend', 'schimmernd', 'wachsend'
        ]
    },
    'Gottheit': {
        items: [
            'Sonnengott', 'Mondgöttin', 'Kriegsgott', 'Liebesgöttin', 'Todesgott', 
            'Naturgottheit', 'Weisheitsgott', 'Chaos-Gottheit', 'Meeresgott', 'Feuergottheit', 
            'Erdmutter', 'Sturmherr', 'Traumgott', 'Schicksalsgöttin'
        ],
        eigenschaften: [
            'vergessen', 'wiedererwacht', 'schlafend', 'zornig', 
            'gütig', 'launisch', 'uralte', 'jung', 
            'verspielt', 'ernst', 'geheimnisvoll', 'offenbarend'
        ]
    },
    'Artefakt': {
        items: [
            'Ring', 'Amulett', 'Krone', 'Kelch', 'Spiegel', 
            'Buch', 'Kristall', 'Münze', 'Schlüssel', 'Sanduhr', 
            'Kompass', 'Laterne', 'Karte', 'Medaillon'
        ],
        eigenschaften: [
            'verfluchte', 'gesegnete', 'antike', 'zerbrochene', 
            'vollkommene', 'rätselhafte', 'sprechende', 'singende', 
            'leuchtende', 'dunkle', 'schwebende', 'pulsierende'
        ]
    }
};

// Globale Extra-Eigenschaften (aus allen Listen kombiniert)
const alleExtras = [
    'aus purem Gold',
    'mit Runen verziert',
    'die Musik spielt',
    'aus Mondlicht gewoben',
    'die Wünsche erfüllt',
    'aus Sternenlicht',
    'mit einem Bewusstsein',
    'aus lebendem Kristall',
    'die Geschichten erzählt',
    'aus gefrorener Zeit',
    'mit magischen Symbolen',
    'aus Traumstoff',
    'die Gefühle spürt',
    'aus Schatten gemacht',
    'mit eigenem Willen',
    'aus Regenbogen',
    'die nur bei Vollmond erscheint',
    'aus reinem Licht',
    'mit prophetischen Visionen',
    'aus gefrorenem Feuer',
    'die mit den Sternen spricht',
    'aus versteinertem Donner',
    'mit einem uralten Geheimnis',
    'die zwischen den Welten wandert',
    'aus vergessenem Wissen',
    'mit der Kraft der Ahnen',
    'die die Zeit überdauert hat',
    'aus der ersten Morgendämmerung',
    'mit einem Echo der Ewigkeit',
    'die in Legenden besungen wird'
];