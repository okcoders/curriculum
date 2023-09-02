# Day 3

## Agenda

### Demo Wireframes

- Team Leads present wire-frames and initial features ideas for their project to class

### Setup Github

- Team members clone the repo to their local machine (with the vscode source code extension), by clicking new window, then clicking the clone git repository button in the start section of the welcome page
- Paste the clone link, click clone from url, then select a folder to clone into (it will create a new folder with the name of the repo inside that folder), after doing that, click open repository

### Setup Next App

#### Teams follow these instructions to setup project on team leads machine

##### create a new next app in the project folder by

- `npx create-next-app@latest <name of your project>`
- don't use typescript, don't use app router, and don't use import alias, do use the src directory
- cd into the project folder

##### adding dependencies

```sh
npm i mongoose @mui/material @emotion/react @emotion/styled
```

##### adding starter files

- add the server folder inside the src folder from here: https://github.com/okcoders/curriculum/tree/main/Module-5/Day-08/final-coffee-shop/src/server
- add a .env file with your atla database connection string
- reference above final-coffee-shop repo as needed to remember how to setup things

#### start working

- pair as a team, with one person writing all the code, but everyone talking through and deciding what to do
- feel free to switch who is writing the code every so often
- people have different approaches to building apps, some like to start on the front-end, others the back-end. If you get stuck on one perhaps try the other
- if you get stuck, ask for help
- in next, each page is independent of the other, so for common layout items, make sure to just put them in a re-useable component and import it into each page
- start by creating the skeleton of your app, adding layout and stubbed functionality, OR
- start by creating the database models and api routes, OR
- do a little of one and then the other

#### push and sync your work

- with the source code extension, you can commit and push your code to github
- other team members will then be able to sync those changes to their machine
- click the source code extension icon on the left sidebar (it is the third from the top)
- type a message ("init repo", for example) click publish branch, click public repo (it should make a repo in your github account)
- open that github repo in your browser, click settings, click collaborators, add your team members as collaborator with read/write access

#### plan for wednesday

- each person identify an area to mess around with or work on before meeting Wednesday
- on Wednesday go through work done and incorporate it into the project through the team leads repo
- we will learn in a later class how to sync changes from multiple people into one repo
