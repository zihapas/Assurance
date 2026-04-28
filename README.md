# DocVerify - Site de vérification

Projet statique HTML/CSS/JS prêt à héberger gratuitement.

## Fichiers
- `index.html`
- `style.css`
- `script.js`

## Tester en local
Ouvre simplement `index.html` dans ton navigateur.

## Déployer gratuitement avec GitHub Pages
1. Crée un nouveau dépôt GitHub.
2. Ajoute les 3 fichiers du projet.
3. Va dans `Settings` > `Pages`.
4. Dans `Branch`, choisis `main` puis `/root`.
5. Clique sur `Save`.
6. GitHub va te donner un lien public du site.

## Modifier les documents
Dans `script.js`, ajoute ou modifie les entrées dans l'objet `documents`.

Exemple :
```js
"8076BS01": {
  authority: "Certificat de responsabilité civile automobile",
  plate: "8076BS01",
  chassis: "KE2AW-100172",
  trailer: "Non",
  seats: "4",
  startDate: "25/07/2026",
  endDate: "25/07/2027"
}
```

Note : ce projet est un prototype. Pour un vrai système officiel, il faut connecter une base de données et une authentification admin.
