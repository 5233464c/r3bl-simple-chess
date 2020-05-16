# RBFL SIMPLE CHESS

## Ideen

- Konsolenvariante 
- GUI/Browser 

## 1. Step
* 32 Figuren ✔️
* 1 Spielbrett mit 8x8 Feldern ✔️
* Figuren können sich auf dem Spielfeld bewegen ✔️
* 2 Spieler können Figuren kontrollieren
* Jeder Spieler kann nur seine Figuren kontrollieren
* Das Spiel ist rundenbasiert


## Projekt einrichtne
* `git clone git@github.com:reneroboter/rbfl-simple-chess.git`
* `nvm use` (optional)
* `node .`

## Software
* NVM (https://github.com/nvm-sh/nvm)


## Notizen
/**
 * Spielzug von a1 nach a2 
 * 
 * input = 'a2';
 * ist a2 frei?
 * 
 * Boardzustand prüfen:
 * 
 * CollisionDetection(board)
 * function: isValid(position, figure) {
 *      position // a2 methode
 * 
 *       if( board.a.2) {
 *          ja: board.a.2 = true
 *          ja: figure.move(a2)
 *          ja: board.a.1 = false// alter zustand auf false ...
 *          return true;
 *       }    
 *     nein: new InvalidMoveException()
 
 *      
 * }
 * 

 *     
 *   
 * 
 * figure.move(a2) 
 * 
 * 
 */


// move a2 to a5

// a2 = false
// a5 = true

// initial figure position a1

// figure.move(a1, a2)
// 6 Unterschiedliche figuren 

// 8 Bauern
// 2 Tuerme
// 2 Laeufer
// 2 Pferde
// 1 Dame 
// 1 Koenig 