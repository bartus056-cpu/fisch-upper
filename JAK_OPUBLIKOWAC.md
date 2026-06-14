# Jak opublikowac Fisch Upper na GitHub Pages

1. Wejdz na https://github.com/new
2. Nazwa repozytorium: `fisch-upper`
3. Ustaw repo jako `Public`.
4. Kliknij `Create repository`.
5. W nowym repo kliknij `uploading an existing file`.
6. Przeciagnij do GitHuba wszystkie pliki z tego folderu:
   - `.nojekyll`
   - `index.html`
   - `styles.css`
   - `app.js`
   - `manifest.webmanifest`
   - folder `assets`
   - `README.md`
7. Kliknij `Commit changes`.
8. Wejdz w `Settings` -> `Pages`.
9. W `Build and deployment` wybierz:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
10. Kliknij `Save`.

Po kilku minutach strona bedzie dostepna pod adresem:

`https://bartus056-cpu.github.io/fisch-upper/`

Jesli kupisz wlasna domene, np. `fischupper.pl`, mozna ja pozniej podpiac w `Settings` -> `Pages` -> `Custom domain`.
