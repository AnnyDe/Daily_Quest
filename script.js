// Seeded Random Generator für konsistente tägliche Aufgaben
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Heutiges Datum als Seed verwenden
function getDailySeed() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return year * 10000 + month * 100 + day;
}

// Element aus Array mit Seed auswählen
function getRandomFromArray(arr, seed) {
    const index = Math.floor(seededRandom(seed) * arr.length);
    return arr[index];
}

// Tägliche Aufgabe generieren
function generateDailyTask() {
    const seed = getDailySeed();
    
    // Wähle zufällige Basiskategorie
    const kategorieKeys = Object.keys(basisKategorien);
    const kategorie = getRandomFromArray(kategorieKeys, seed);
    const kategorieData = basisKategorien[kategorie];
    
    // Wähle zufälliges Item aus der Kategorie
    const basis = getRandomFromArray(kategorieData.items, seed + 1);
    
    // Wähle passende Eigenschaft zur Kategorie
    const eigenschaft = getRandomFromArray(kategorieData.eigenschaften, seed + 2);
    
    // Wähle zufälliges Extra aus allen möglichen
    const extra = getRandomFromArray(alleExtras, seed + 3);
    
    // Stimmtraining-Aufgabe
    const stimmmerkmal = getRandomFromArray(stimmmerkmale, seed + 4);
    const rolle = getRandomFromArray(rollen, seed + 5);
    
    return {
        kategorie: kategorie,
        basis: basis,
        eigenschaft: eigenschaft,
        extra: extra,
        stimmmerkmal: stimmmerkmal,
        rolle: rolle
    };
}

// Aufgabe anzeigen
function displayTask() {
    const task = generateDailyTask();
    
    // Datum anzeigen
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = today.toLocaleDateString('de-DE', options);
    
    // Aufgabe anzeigen
    document.getElementById('basis').textContent = `${task.kategorie} - ${task.basis}`;
    document.getElementById('eigenschaft').textContent = task.eigenschaft;
    document.getElementById('extra').textContent = task.extra;
    
    // Feminine Wörter (Artikel: eine, Endung: -e)
    const femininWoerter = [
        'Höhle', 'Brücke', 'Schmiede', 'Taverne', 'Bibliothek',
        'Chimäre', 'Sphinx', 'Nymphe', 'Fee', 'Mumie',
        'Magierin', 'Kriegerin', 'Händlerin', 'Bardin', 'Diebin',
        'Heilerin', 'Gelehrtin', 'Schmiedin', 'Alchemistin', 'Priesterin',
        'Assassine', 'Köchin', 'Forscherin', 'Künstlerin',
        'Axt', 'Sense', 'Armbrust', 'Keule', 'Peitsche',
        'Blume', 'Ranke', 'Orchidee', 'Rose', 'Lilie',
        'Kutsche', 'Gondel', 'Kristallkugel', 'Wolke', 'Sänfte',
        'Heilung', 'Teleportation', 'Illusion', 'Verwandlung',
        'Beschwörung', 'Levitation', 'Unsichtbarkeit',
        'Zeitmanipulation', 'Elementarwelle',
        'Maske', 'Robe',
        'Sonnengottheit', 'Mondgottheit', 'Kriegsgottheit',
        'Liebesgottheit', 'Todesgottheit', 'Naturgottheit',
        'Weisheitsgottheit', 'Chaosgottheit', 'Meeresgottheit',
        'Feuergottheit', 'Erdmutter', 'Sturmgottheit',
        'Traumgottheit', 'Schicksalsgottheit',
        'Krone', 'Münze', 'Sanduhr', 'Laterne', 'Karte'
    ];
    
    // Maskuline Wörter (Artikel: einen, Endung: -en)
    const maskulinWoerter = [
        'Wald', 'Turm', 'Tempel', 'Marktplatz', 'Friedhof',
        'Vulkan', 'Wasserfall', 'Palast',
        'Drache', 'Phönix', 'Greif', 'Elementar', 'Geist',
        'Golem', 'Basilisk', 'Troll', 'Zwerg', 'Gnom',
        'Werwolf', 'Vampir', 'Mantikore', 'Kentaur',
        'Magier', 'Krieger', 'Händler', 'Barde', 'Dieb',
        'Heiler', 'Gelehrter', 'Schmied', 'Alchemist', 'Priester',
        'Koch', 'Forscher', 'Künstler',
        'Bogen', 'Stab', 'Dolch', 'Hammer', 'Speer',
        'Schild', 'Streitkolben',
        'Baum', 'Pilz', 'Farn', 'Strauch', 'Kaktus',
        'Lotus', 'Efeu', 'Bambus',
        'Ballon', 'Teppich', 'Wagen', 'Gleiter', 'Schlitten',
        'Feuerball', 'Eissturm', 'Blitz', 'Schutzschild',
        'Brustpanzer', 'Helm', 'Umhang', 'Schulterpanzer',
        'Schuppenpanzer', 'Gürtel', 'Harnisch',
        'Ring', 'Kelch', 'Spiegel', 'Kristall', 'Schlüssel', 'Kompass'
    ];
    
    // Artikel und Endung bestimmen
    let artikel = 'ein';
    let eigenschaftForm = task.eigenschaft;
    
    if (femininWoerter.includes(task.basis)) {
        artikel = 'eine';
        eigenschaftForm = task.eigenschaft + 'e';
    } else if (maskulinWoerter.includes(task.basis)) {
        artikel = 'einen';
        eigenschaftForm = task.eigenschaft + 'en';
    } else {
        // Neutrum (ein, -es)
        artikel = 'ein';
        eigenschaftForm = task.eigenschaft + 'es';
    }
    
    document.getElementById('finalTask').textContent = 
        `Zeichne, beschreibe oder gestalte ${artikel} ${eigenschaftForm} ${task.basis} ${task.extra}!`;
    
    // Stimmtraining-Aufgabe
    document.getElementById('stimmmerkmal').textContent = task.stimmmerkmal;
    document.getElementById('rolle').textContent = task.rolle;
    
    document.getElementById('voiceTask').textContent = 
        `Sprich als ${task.rolle} mit ${task.stimmmerkmal}er Stimme über deine kreative Aufgabe!`;
}

// Aufgabe beim Laden anzeigen
displayTask();
