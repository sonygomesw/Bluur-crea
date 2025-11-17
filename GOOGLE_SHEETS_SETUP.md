# Google Sheets Setup Instructions

## Étape 1 : Créer le Google Sheet

1. Va sur [Google Sheets](https://sheets.google.com)
2. Crée une nouvelle feuille de calcul
3. Nomme-la "Bluur Orders" (ou comme tu veux)
4. Dans la première ligne, ajoute ces colonnes :
   - A1: `Timestamp`
   - B1: `Email`
   - C1: `Spotify Link`
   - D1: `Plan`
   - E1: `Price`
   - F1: `Videos`

## Étape 2 : Créer le Google Apps Script

1. Dans ton Google Sheet, va dans `Extensions` → `Apps Script`
2. Supprime le code par défaut
3. Copie-colle ce code :

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Append a new row with the data
    sheet.appendRow([
      new Date(data.timestamp),
      data.email,
      data.spotifyLink,
      data.plan,
      data.price,
      data.videos
    ]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Sauvegarde le projet (Ctrl+S ou Cmd+S)

## Étape 3 : Déployer le script

1. Clique sur `Deploy` → `New deployment`
2. Clique sur l'icône engrenage ⚙️ à côté de "Select type"
3. Sélectionne `Web app`
4. Configure comme suit :
   - Description: "Bluur Orders API" (ou comme tu veux)
   - Execute as: `Me`
   - Who has access: `Anyone`
5. Clique sur `Deploy`
6. Autorise l'accès (tu devras peut-être cliquer sur "Advanced" puis "Go to [project name]")
7. **COPIE L'URL DU WEB APP** (ça ressemble à : `https://script.google.com/macros/s/AKfycby.../exec`)

## Étape 4 : Ajouter l'URL dans le code

1. Ouvre le fichier `src/components/OrderModal.tsx`
2. À la ligne 47, remplace `'YOUR_GOOGLE_APPS_SCRIPT_URL'` par l'URL que tu as copiée
3. Sauvegarde le fichier

Example:
```typescript
const response = await fetch('https://script.google.com/macros/s/AKfycby.../exec', {
```

## Étape 5 : Tester

1. Redémarre ton serveur de développement
2. Clique sur "Get Started" sur un des plans
3. Remplis le formulaire et soumets
4. Vérifie que les données apparaissent dans ton Google Sheet

## Notes importantes

- Chaque soumission ajoute une nouvelle ligne dans ton Google Sheet
- Tu recevras l'email, le lien Spotify, le plan choisi, et l'heure de soumission
- Les données sont envoyées AVANT la redirection vers Stripe
- Si l'utilisateur annule sur Stripe, les données seront quand même dans le Sheet

## Troubleshooting

Si ça ne marche pas :
1. Vérifie que le script est bien déployé avec "Anyone" has access
2. Vérifie que l'URL dans OrderModal.tsx est correcte
3. Ouvre la console du navigateur (F12) pour voir les erreurs
4. Vérifie que les colonnes dans le Sheet correspondent exactement
