import fs from 'fs';

export function addNote(title: string, content: string, user: string): void {
  // Lese die aktuellen Notizen aus der JSON-Datei
  const notes = JSON.parse(fs.readFileSync('notes.json', 'utf-8'));

  // Erstelle eine neue Notiz mit einer eindeutigen ID
  const newNote = {
    id: notes.length + 1, // Annahme: Die ID ist die Anzahl der vorhandenen Notizen + 1
    title,
    content,
    user
  };

  // Füge die neue Notiz zum Array der Notizen hinzu
  notes.push(newNote);

  // Schreibe die aktualisierten Notizen zurück in die JSON-Datei
  fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));
}