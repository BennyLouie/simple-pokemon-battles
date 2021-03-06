This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This project has been deployed to heroku: https://simple-pokemon-battles.herokuapp.com/

## Blog: https://medium.com/@bennylouie/mod-5-project-simple-pokemon-battles-355840b2a3cd

## Demo: https://youtu.be/D3-kOKQTeYc

## Tools used

This app is built using Rails [6.0] as a backend to store and retrieve data using a PostgreSQL database. Bcrypt and JWT Auths were utilized to manage secure passwords and user logins.

The frontend uses React JS to build user interfaces and Redux to manage user states. React Routers have also been utilized to control app navigation. React Semantic UI has been used to customize CSS.

## Before Starting up this project

Fork and clone from the following repository for the dependant backend 
(follow README for instructions):
https://github.com/BennyLouie/Simple-Pokemon-Battles-backend

Fork and clone from this repository.

### Then `npm i`

Installs all the dependant modules required to run this React App.

### `npm start`

Starts up this project. This app has been defaulted to run on PORT 3001.

### A Brief Summary

This is a very simple game that simulates a Pokemon Battle. There are no attributes or special attack moves.

User may login or signup.

User may also delete his/her account.

User can only choose to attack or defend.
Damage dealt is dependent on the attributes of the Pokemon which is not visible to the user.

After completing a battle, either a win or loss will be added to the user's battle history.

With each win, the selected Pokemon will gain 5 experience points.
Once the experience points reach the cap, the Pokemon levels up!
Upon leveling up, the Pokemon will receive 3 stat points the user may apply to anny of the current stats.

Once used up, the user will still be able to change his/her decisions provided he does not refresh or move to another page. Otherwise, the changes remain permanent.

User may enter the Safari to select a Pokemon from the first Generation to add to his/her team. (Upon initial signup the user has no Pokemon)

The team caps at 6.

User may also release a Pokemon from his/her team.

Error messages will display when a user attempts to add too many Pokemon to his/her team, as well when attempting to log in using incorrect information.
