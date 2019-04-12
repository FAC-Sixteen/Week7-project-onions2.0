# Lost and Found[ers & Coders]

### Team
![us](https://66.media.tumblr.com/eb93cd5c834fd19f1a9d43d19d5e3c31/tumblr_po9yed58uP1xr12cso1_r2_500.gif)
* Kate [@dubacait](https://github.com/dubhcait)
* Anna [@tloth](https://github.com/tloth)
* Joko [@jokosanyang](https://github.com/jokosanyang)
* Sylvia [@seabasshoang](https://github.com/seabasshoang)

## Overview
SGC actions and opinions tracker! 
Submit your opinions to actions discussed during SGC

This project is hosted on Heroku : https://lost-and-founders.herokuapp.com/

## Built with:
* html
* css
* javascript
* node.js
* heroku
* postgresql
* travis

## How to set up?
- git clone this repo
- in the terminal run `npm i` to install all dependecies 
- run `npm start` and view on localhost:7007 in your browser
- You can run `npm test` to see JSHINT but we are going to write tests during the time we have to review our code .

## 🎯 Goals
- [x] connect with heroku
- [x] use GitHub naming convention
- [x] build script (.sql)
- [x] use GitHub projects
- [x] 1 table
## 🎳 Stretch Goals
- [ ] testing
- [x] 2 tables
- [x] continuous integration (travis)
- [ ] code coverage
- [ ] heroku pipeline
- [ ] CSS
- [ ] deleteData.js query
- [x] onion error page
- [ ] delete opinion functionality

## 📝 Planning & Process
### Day 1
* brainstormed ideas
* separated goals and stretch goals
* drew out file structure and user journey
![1](https://i.imgur.com/YplWc1Y.jpg)
![2](https://i.imgur.com/7JhmswH.jpg)
![schema](https://i.imgur.com/4qDfeLq.jpg)
![user journey w/ us](https://i.imgur.com/Br8VYZ8.jpg)
![user journey](https://i.imgur.com/CnwtICM.jpg)
![kate](https://i.imgur.com/7Phd2Yn.jpg)

### Day 2
* set-up index.html and server stuff
* deployed to heroku
* set up travis
* created our database
* Set up Post and Get quries 
* dom stuff to populate our tables

### Day 3
* testing
* issues
* css

## 💡 Problems/What we learnt
![](https://media.giphy.com/media/fNtPh5RhVnANq/giphy.gif)
#### "Let's not count our chickens before they hatch." - Joko

* spelling 'table' and 'opinion'
    * I have an opintion.
* naming functions --> 'action' to action **and** table --> action vs actionList --> input and inputRow
* using fetch! so much easier than xhr requests!
* things take time!

### CI
* travis caught all our jshint issues that prevented travis from passing the test checks

![](https://i.imgur.com/cVjsEVe.png)
