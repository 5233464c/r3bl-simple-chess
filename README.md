# RBFL SIMPLE CHESS

## Projekt einrichten
* `git clone git@github.com:reneroboter/rbfl-simple-chess.git`
* `nvm use` (optional)
* `npm install`
* `node .`

## Sprint 1
* 32 Figuren ✔️
* 1 Spielbrett mit 8x8 Feldern ✔️
* Figuren können sich auf dem Spielfeld bewegen ✔️
* 1 Spieler kann seine Figuren kontrollieren ✔️
* 1 Spieler kann nur seine zugehörigen Figuren bewegen ✔️
* Das Spiel ist rundenbasiert ✔️

## Sprint 2
* CollisionDetection refactorn  ✔️
* Spielsteuerung abstrahieren (... wir sind unglaublich faule Säcke) ✔️
* Eine Darstellung des Spielfelds (optional) ✔️
* Pro Spieler kann ich 16 Figuren bewegen
* Regelwerk
* * Position von Gegner können angenommen werden (Schlagen)
* * Eine geschlagene Spielfigure wird aus dem Spiel genommen
* Ordnerstruktur festlegen(controller, view)

## Backlog
* Mehr Information im Board Objekt(Welche Figur)
* Historie der gemachten Spielzüge
* Spieler können beim Start einen Namen wählen
* AUF ENGLISH ALLES!
* ...

## Software
* NVM (https://github.com/nvm-sh/nvm)

## Spiefeld Skizze

f  f  f  f  f  f  f  f
f  f  f  f  f  f  f  f
.  .  .  .  .  .  .  .
.  .  .  .  .  .  .  .
.  .  .  .  .  .  .  .
.  .  .  .  .  .  .  .
f  f  f  f  f  f  f  f
f  f  f  f  f  f  f  f


view(Board board) {
    // the magic happen ... 
}
