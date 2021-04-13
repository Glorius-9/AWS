# AWS
Développer une application web pour un jeu en ligne de type combat carte 1v1 qui offre plusieurs fonctionnalités.


## Consignes du projets

### generation de La carte
Créez une carte de [taille: X*X] représentant le monde du jeu et elle sera genéré aléatoirement à chaque nouvelle partie. 
 chaque case soit:
- Vide
- Inaccessible (grisée)

### Les armes
Sur la carte, un nombre limité d'armes  sera placé aléatoirement et pourra être récolté par les joueurs qui passeraient dessus.

Vous inventerez au moins 4 types d'arme dans le jeu, avec des dégâts différents. L'arme par défaut qui équipe les joueurs doit infliger 10 points de dégâts. Chaque arme a un nom et un visuel associé.

### Le placement initial
Le placement des deux joueurs est lui aussi aléatoire sur la carte au chargement de la partie. Ils ne doivent pas se toucher.

### Les déplacements
A chaque tour, un joueur peut se déplacer d’une  case (horizontalement ou verticalement) avant de terminer son tour.

### Le changement d'armes
Si un joueur passe sur une case contenant une arme, il laisse son arme actuelle sur place et la remplace par la nouvelle.

### La rencontre entre 2 joueurs
Si les joueurs se croisent sur des cases adjacentes (horizontalement ou verticalement), un combat  s’engage.

### La situation de combat
- Chacun attaque à son tour
- Les dégâts infligés dépendent de l’arme possédée par le joueur
- Le joueur peut choisir d’attaquer ou de se défendre contre le prochain coup
- Lorsque le joueur se défend, il encaisse 50% de dégâts en moins qu’en temps normal
- Dès que les points de vie d’un joueur (initialement à 100) tombent à 0 , celui-ci a perdu. Un message s’affiche et la partie est terminée.

