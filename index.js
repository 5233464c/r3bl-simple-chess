const ConsoleView = require("./src/view/console.js");
const board = require("./src/model/board.js");
const players = require("./src/factory/players.js");
const inquirer = require('inquirer');

const view = new ConsoleView();
const CollisionDetection = require("./src/collision.js");
const collision = new CollisionDetection(board);

const SHOW_BOARD_OPTION = 1;
const NEXT_TURN_OPTION = 2;

let player1 = players.player1;
let player2 = players.player2;

const initialPlayers = [
    {
        type: 'input',
        name: 'player1',
        message: "(Player 1) Enter your name:",
        default: function () {
            return 'Player 1';
        }
    },
    {
        type: 'input',
        name: 'player2',
        message: "(Player 2) Enter your name:",
        default: function () {
            return 'Player 2';
        }
    },
];
const selectFigureOption = [
    {
        type: 'input',
        name: 'selectedFigure',
        message: "Select your figure: ",
        validate(value) {
            const errorMessage = 'Please select a valid figure';
            try {
                if (collision.isValid(value)) {
                    return true;
                }
            } catch (e) {
                return errorMessage;
            }

            return errorMessage;
        }
    },
];
const turnOptions = [
    {
        type: 'list',
        name: 'theme',
        message: 'What do you want to do?',
        choices: [
            {
                name: 'Show Board',
                value: SHOW_BOARD_OPTION,
            },
            {
                name: 'Next turn',
                value: NEXT_TURN_OPTION,
            }
        ]
    },
];

inquirer.prompt(initialPlayers).then(selectedPlayers => {
    player1.name = selectedPlayers.player1;
    player2.name = selectedPlayers.player2;

    inquirer.prompt(turnOptions).then(answers => {
        if (answers.theme === SHOW_BOARD_OPTION) {
            console.log(view.view(board.Board))
        }

        if (answers.theme === NEXT_TURN_OPTION) {
            inquirer.prompt(selectFigureOption).then(selectedFigure => {
                console.log(selectedFigure)
            });
        }
    });
});


