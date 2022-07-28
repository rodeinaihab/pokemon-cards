# Pokémon Cards App

For all Pokémon fans ✨

This app provides you a cool view of 10 Pokémon cards that you can scroll through. 🍄

Every card contains information about the pokémon's type, level and number. ⚡️

You can search for Pokémon names through the search bar by clicking on the search icon and reset your search by double clicking the Pokémon ball. 🔮

You can also filter the pokémons by their types and sort them by their number in an ascending and descending order. 🚀

For the data, I have used this public API (https://pokemontcg.io).

🧩 About the features: 

🧩 Search for pokémons: please click on the search icon to see the results.

🧩 Sort by types: When you are finished with selecting types, please close the dropdown by clicking on the home bar or outside the dropdown.

🧩 To reset your filtering & selection, double click the Pokémon ball.


### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.


## 1. Install through the Terminal

    $ git clone https://github.com/rodeinaihab/pokemon-cards.git
    $ cd pokemon-cards
    $ npm install
    
    Hint: If there are dependencies related errors after running npm install in the project directory,
    go to Step 2. If Step 2 worked: "Server is running on port 3000!", the errors of Step 1 can be ignored. 
    If not please re-check the Node installation. 

## 2. Run Backend (before Frontend)

    $ cd pokemon-cards/backend
    $ npm install
    $ npm start
    
    Hint: "Server is running on port 3000!" will appear if the backend is running

## 3. Run Frontend

    $ cd pokemon-cards/frontend
    $ npm install
    $ npm start
    
    Hint: If resolving React dependencies throws an error, try to handle with: 
    $ npm install --force
    
    The frontend opens the app on another port. 
