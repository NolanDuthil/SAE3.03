IUT du Limousin / Département MMI / BUT2
SA3 3.03 | Concevoir des visualisations de données
pour le web et une application interactive
Compétences ciblées
Comprendre les écosystèmes, les besoins des utilisateurs et les dispositifs de communication numérique
Exprimer un message avec les médias numériques pour informer et communiquer
Développer pour le web et les médias numériques
Objectifs et problématique professionnelle
Objectifs : les données sont de plus en plus présentes dans le monde de l’entreprise ou des services.
Elles permettent d’enrichir une information, mais servent aussi d’outil de communication.
A partir de jeux de données, cette SAE mobilise les ressources liées à l’analyse de données, à la
production graphique, à l’intégration et au développement front et amène les étudiants à :
● Analyser des données pour en extraire des indicateurs ou les informations pertinentes ;
● Proposer un site web permettant la visualisation de ces données ;
● Compléter ce site web par la production d'une application interactive permettant une navigation
au sein des données.
Les étudiants doivent mener un travail d'analyse et d'interprétation d'un jeu de données, une réflexion
sur les éléments caractéristiques de ces données et produire des visualisations afin d'appuyer un
message de communication. Les étudiants réalisent les contenus et les présentent au commanditaire en
répondant à la question : Comment concevoir des visualisations de données apportant une information
pertinente et appuyant une communication ?
Ressources mobilisées et combinées
R3.09 | Création et design interactif (UI)
R3.10 | Culture artistique
R3.12 | Intégration et développement front
R3.15 | Représentation et traitement de l'information
Descriptif générique
Il s'agit de comprendre et analyser des jeux de données bruts issus de sources de données ouvertes,
éventuellement géolocalisées, puis d'en extraire des indicateurs statistiques pertinents, répondant à un
objectif de communication.
Les données et indicateurs sont ensuite utilisés pour obtenir une représentation visuelle pertinente qui
doit faciliter la compréhension des données, donner du sens aux données, voire aider à la prise de
décision.
Les étudiants doivent choisir entre les différents types de représentations (courbes, diagrammes,
animations, cartes…).
Les étudiants conçoivent ensuite un site web permettant la diffusion des données tout en les mettant en
valeur.
[Parcours Créa. ] Le travail est complété par la production d'éléments de communication visuelle en
veillant à la qualité et la diversité des productions proposées, tant sur le plan visuel et esthétique que sur
la lisibilité des informations.
[Parcours Dweb] Le travail est complété par la mise en place d'une application avec des interactions
simples permettant de naviguer dans les données, de visualiser des informations complémentaires ou
de favoriser la compréhension des éléments.
1. Descriptif détaillée de la SAÉ
MODALITÉS
Cette SAE est à réaliser individuellement.
Elle est composée de 2 sprints d’une semaine chacun.
Chaque sprint fera l’objet d’un livrable en fin de semaine.
Chaque sprint fera l’objet d’un repo Git privé sur le compte Github de chaque étudiant.
Chaque étudiant ajoutera en collaborateur de ses 2 repos les enseignants suivants :
Frédéric Mora (frederic-mora), Benoit Crespin (BenoitCrespin), Jules Minier (MrAaaah)
SPRINT 1 : du lundi 11 décembre au vendredi 15 décembre
Pour ce premier sprint, la source de données à exploiter est celle que vous utilisez probablement déjà le
plus : les emplois du temps !
L’objectif est de concevoir une application web permettant de visualiser les emplois du temps ainsi que
d’en filtrer l’affichage selon différents critères. Vous disposez pour débuter d’un projet de base que vous
pouvez cloner depuis ce dépôt : https://github.com/frederic-mora/mmi-calendar
Le projet inclut les données des plannings des 3 années de formation au format iCalendar. A noter que
ce projet possède les dépendances suivantes :
ical pour lire les données depuis les fichiers ics (format iCalendarl)
Toast ui Calendar, une librairie avancée permettant l’affichage de plannings. Vous aurez besoin
de vous référer systématiquement à la documentation de cette librairie pour implémenter les
fonctionnalités demandées.
Voici à présent les itérations demandées :
ITÉRATION 1
L’application permet d’afficher le planning d’une année de formation. L’affichage se fait par semaine.
ITÉRATION 2
L’application présente 3 éléments de navigation. Un qui permet d’afficher la semaine en cours. Un pour
passer à la semaine précédente. Et un dernier pour passer à la semaine suivante.
ITÉRATION 3
L’application permet d’afficher le planning des 3 années de formation simultanément. Le mode
d’affichage est toujours à la semaine. Chaque planning bénéficie d’une couleur différente. Et vous ferez
varier cette couleur selon la nature de la séance (par exemple CM (rouge foncé), TD (rouge), TP (rouge
clair)).
ITÉRATION 4
L’application permet de choisir quelle(s) année(s) de formation est(sont) affichée(s). Attention à vos
choix en termes d’interface. Tenez compte que dans une prochaine itération, il faudra aussi supporter
une version mobile.
ITÉRATION 5
L’application permet de filtrer l’affichage par groupe ou demi-groupe de TP. Ce filtre est compatible avec
la sélection par année. On privilégiera la saisie du code du groupe de TP car il y en 12 au total, 3 par
année de formation (par exemple BUT1-G1, BUT1-G21, BUT1-G22, BUT1-G3)
ITÉRATION 6
L’application permet de filtrer l’affichage à l’aide d’un champ de recherche qui permet de saisir des mots
clefs recherchés dans toutes les caractéristiques de chaque séance (donc ce peut être un cours (R3.15),
une salle (ADM132), un enseignant etc…)
ITÉRATION 7
Il est possible de saisir plusieurs mots clefs dans le champ de recherche. Les séances affichées sont
celles qui possèdent tous les mots clefs saisis.
ITÉRATION 8
L’application supporte la visualisation par semaine, par jour et par mois. L’interface permet de choisir
celle que l’on veut. Le mode “semaine” demeure l’affichage par défaut. A noter qu’en mode semaine, les
boutons de navigation (précédent/suivant) permettent de passer à la semaine précédente ou suivante.
En mode jour, à la journée précédente ou suivante. En mode mois, au mois précédent ou suivant.
ITÉRATION 9
L’application supporte aussi bien un format desktop qu’un format mobile. L’affichage par défaut pour le
format desktop est à la semaine et pour le mobile, à la journée.
ITÉRATION 10
L’application sauvegarde en “local storage” les dernières sélections/filtres d’un utilisateur. Ces réglages
sont ceux appliqués par défaut lorsque l’utilisateur accède à l’application (par exemple si votre dernier
paramétrage correspondait à “afficher le planning de BUT2 filtré sur le groupe BUT2-G3”, ce
paramétrage doit être appliqué par défaut (desktop ou mobile).
ITÉRATION 11
Utilisez les possibilités de “customisation” offertes par Toast UI Calendar pour styliser votre application et
optimiser son ergonomie.
LIVRABLE
Votre livrable doit préalablement être analysé avec lightroom et, si des problèmes ou défauts de
performance apparaissent, ceux-ci doivent être corrigés.
Un dépôt sera ouvert sur Community (https://community-iut.unilim.fr/enrol/index.php?id=3526) vendredi
15 décembre. Il fermera à minuit. Vous y déposerez :
Un pdf avec :
● votre nom et prénom
● le lien vers votre dépot Github
● la dernière itération réalisée
● le rapport lightroom
● s'il y en a, les “problèmes” qui persistent sur votre application et que vous n’avez pas
réussi à totalement régler (notamment vis à vis de l’analyse lightroom). Expliquez alors
pourquoi selon vous.
Une archive de vos sources (typiquement le zip issu de votre repo GitHub).
SPRINT 2 : du lundi 18 décembre au vendredi 22 décembre
[contenu non disponible avant la fin du premier sprint !]
2. Evaluation
Globalement, votre note sera le résultat de la quantité de travail réalisé (nombre d’itérations
complétées) et de la qualité du travail réalisé (qualité des livrables, maîtrise des apprentissages mis
en œuvre).
Clairement, il vaut mieux en faire un peu moins mais très bien que beaucoup mais mal. Clairement
aussi, si vous en faites peu même très bien, ça ne “paiera” pas grand chose. Et bien sûr si vous
faites tout et parfaitement bien alors vous accéderez à l’univers des notes stratosphériques.
Donc vous aurez compris qu’il n’y a pas de réponse universelle à la traditionnelle question :
“Combien faut-il faire d’itérations pour avoir la moyenne ?”. Voici toutefois quelques indications sur
chaque évaluation :
5.1 Note quantitative :
La note quantitative est comprise entre 0 et 20. Elle est liée au nombre d’itérations réalisées.
Cependant toutes les itérations ne représentent pas la même quantité de travail et nous en
tiendrons compte. A titre (très) indicatif, les 10 premières itérations représentent la moitié de la
totalité du travail réalisable, les 6 dernières l’autre moitié.
5.2 Note qualitative :
La note qualitative est un pourcentage compris entre 0 (niveau de maîtrise inexistant) et 100%
(niveau de maîtrise conforme aux attentes de la formation). La note qualitative tient compte de la
qualité de votre application et de la qualité de sa réalisation.
Remarque : la note qualitative peut éventuellement dépasser 100% lorsque le niveau de maîtrise démontré va
au-delà des attentes de la formation.
Qualité de l’application :
C’est le point de vue utilisateur. Et il est toujours tranché. La seule chose qui importe à l’utilisateur
c’est que ça l’application réponde à son besoin, que tout fonctionne parfaitement et efficacement.
Peu importe comment.
● Convaincant et votre base d’évaluation sera de 75%.
C’est convaincant si le résultat est de qualité professionnelle en tout point. Tout fonctionne très bien.
Si des défauts existent, ils sont mineurs et aisément rectifiables.
● Mitigé et votre base d’évaluation sera de 50%.
C’est mitigé si le résultat est intéressant mais avec des défauts majeurs qui ne sont pas acceptables
dans une optique professionnelle. Un défaut majeur reste rectifiable mais demandera un travail
significatif.
● Insuffisant et votre base d’évaluation sera de 25%.
C’est insuffisant si le résultat n’est tout simplement pas utilisable et/ou ne répond pas à la demande.
Les défauts sont alors critiques, trop de mauvais choix ou d’erreurs ont été faites pour envisager
rectifier le tir sans reprendre le projet de zéro ou presque.
Qualité de la réalisation :
Ici c’est le “comment” que l’on va apprécier. Qualité de la conception (ergonomie des interfaces,
pertinence des choix de visualisation des données), qualité de vos développements (HTML/CSS,
JS/) et bon usage des librairies utilisées (Toas UI Calendar, chartjs, amschart ou autres..
5.2 Note globale :
Votre note globale est votre note quantitative pondérée par votre note qualitative.
Exemple :
Votre note quantitative est 15 et votre note qualitative est de 85%. Vous obtenez 15 x 0.85 = 12.75
 
 
