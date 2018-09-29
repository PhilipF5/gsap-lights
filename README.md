# gsap-lights
This is a demo project designed to showcase how the [GreenSock Animation Platform](https://greensock.com) can be integrated with the [Angular](https://angular.io) front-end framework.

## Gameplay

This is a recreation of the *Lights Out* puzzle popularized by Tiger Electronics and reused in plenty of video games since then. The player is given a grid of lights, some of which are lit. Clicking any light toggles both it and all of the immediately adjacent lights, meaning any of those lights that are on will turn off, and any that are off will turn on. The objective is to reach a state where all of the lights are off.

The default configuration uses a 6x6 grid, which means all possible puzzles are inherently solvable (it's a math thing). If you modify the project to produce different grid sizes, the randomizer may generate unsolvable puzzles.
