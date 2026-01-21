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
    
    return {
        kategorie: kategorie,
        basis: basis,
        eigenschaft: eigenschaft,
        extra: extra
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
    
    // Finale Aufgabe zusammensetzen mit korrekten deutschen Artikeln
    let artikel = 'ein';
    const femininKategorien = ['Waffe', 'Pflanze', 'Rüstung', 'Gottheit'];
    const maskulinKategorien = ['Ort', 'Zauber'];
    
    if (femininKategorien.includes(task.kategorie)) {
        artikel = 'eine';
    } else if (maskulinKategorien.includes(task.kategorie)) {
        artikel = 'einen';
    }
    
    // Eigenschaftsform anpassen
    let eigenschaftForm = task.eigenschaft;
    if (femininKategorien.includes(task.kategorie)) {
        eigenschaftForm = task.eigenschaft + 'e';
    } else if (maskulinKategorien.includes(task.kategorie)) {
        eigenschaftForm = task.eigenschaft + 'en';
    } else {
        eigenschaftForm = task.eigenschaft + 'es';
    }
    
    document.getElementById('finalTask').textContent = 
        `Erarbeite eine ${artikel} ${eigenschaftForm} ${task.basis} ${task.extra}!`;
}

// Aufgabe beim Laden anzeigen
displayTask();
