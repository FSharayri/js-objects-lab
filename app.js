// const pokemon = require('./data.js')


const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  console.dir(pokemon, { maxArrayLength: null })
console.log(pokemon[59-1].name)

// console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = 'Med'


/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

const starterPokemons = []
pokemon.forEach((creature)=>{
if (creature.starter) starterPokemons.push(creature)
})
 
const starterPokemon = starterPokemons[3] // chose pikachu
game.party.push(starterPokemon)
console.log(game.party)


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

pokemon.forEach((creature)=> {
 if (creature.name==="Mew" || creature.name==="Magmar" ||creature.name==="Chansey" )
    game.party.unshift(creature)

})



/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
game.gyms.forEach((gym)=>{
if (gym.difficulty<3)
    gym.completed = true
})


// console.dir(game.gyms)




/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
const evolvedCreature = pokemon[26-1] 
const starterPokemonIndex = game.party.indexOf(starterPokemon)
game.party.splice(starterPokemonIndex,1,evolvedCreature)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach((creature)=>{
    console.log(creature)
    
    })


/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
pokemon.forEach((creature)=>{
    if (creature.starter) 
        console.log(creature)  
})

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. 
You should not need to edit the original game object directly. 
This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the
 `pokemon` data to catch it.

Solve Exercise 10 here:
*/
game.catchPokemon = function(pokemonObj) {
game.party.push(pokemonObj)
}
// game.catchPokemon(pokemon[149])

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. 
Modify it so that it also decreases the number of pokeballs in your inventory
 each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from 
the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.


Solve Exercise 11 here:
*/

// game.catchPokemon = function(pokemonObj) {
//     game.party.push(pokemonObj)
//     game.items.forEach((item)=>{if (item.name==="pokeball") item.quantity--})
//     console.log(game.items)
//     }
// // below is trial to check if pokeballs are decreasing and check if pokemons are being added to party 
//     game.catchPokemon(pokemon[100])
//     game.catchPokemon(pokemon[50])
//     game.catchPokemon(pokemon[1])
//     console.log(game.party)
    


    /*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/


game.gyms.forEach((gym)=>{
    if (gym.difficulty<6)
        gym.completed = true
    })
    // console.log(game.gyms)


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus= function(){
    const gymTally = {
        completed  : 0,
        incomplete : 0
    }
    game.gyms.forEach((gym)=>{
        if (gym.completed)
            gymTally.completed++
        else
            gymTally.incomplete++

    })
    console.log(gymTally)

}
game.gymStatus()

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function(){
    return game.party.length

}

console.log(game.partyCount())



/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
game.gyms.forEach((gym)=>{
    if (gym.difficulty<8)
        gym.completed = true
    })
game.gymStatus() /* this made me realize that my previous work was incorrect 
so i resolved it by putting gymTally inside the function so its redeclared everytime 
funciton is called */

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game)



// level ups :




/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/
 // to sort them as numbers i used the explanation of the doc in MDN
 // also used this for reference https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value
// i commented out the thing below because it was just a mimick of sth i didnt quite understand
//  game.party.sort(function(a, b) {
//     let keyA = a.hp
//     let keyB = b.hp;
//     // Compare the 2 dates
//     if (keyA < keyB) return -1;
//     if (keyA > keyB) return 1;
//     return 0;
//   })
//this i made with comprehension of what is going on 
// learned this with by reading the mdn and seeing exmaples online !
sortByHP = (a,b)=> b.hp - a.hp
game.party.sort(sortByHP) 
console.log(game.party)




/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/


game.collection = []
game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemonObj)
  game.items.forEach((item)=>{
    if (item.name==="pokeball") {
      item.quantity-=1 
      console.log(game.items)
    }
  })
  
  
  if (game.party.length> 6)
    game.collection.push(game.party.splice(6,1))
}
console.log("catching pokemons 3 times in a row to see")
// game.catchPokemon(pokemon[130])
// game.catchPokemon(pokemon[57])
// game.catchPokemon(pokemon[13])
// console.log(game.party)
// console.log("again: ")
// game.catchPokemon(pokemon[110])
// game.catchPokemon(pokemon[81])
// game.catchPokemon(pokemon[19])
// console.log(game.party)

/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

game.catchPokemon = function(pokemonObj) {
  game.items.forEach((item)=>{
    if (item.name==="pokeball") {
      if (item.quantity >0){
        item.quantity-=1 
        console.log(game.items[1])
        game.party.unshift(pokemonObj)
        if (game.party.length > 6)
          game.collection.push(game.party.splice(6,1))
      }
      else {
        console.log("There are not enough pokeballs to catch the desired Pokemon")
        return 
      }
    }
  
  
  })
  
}

console.log(game.party.length)
console.log("catching pokemons 3 times in a row to see")

game.catchPokemon(pokemon[131])
game.catchPokemon(pokemon[41])
game.catchPokemon(pokemon[23])
game.catchPokemon(pokemon[76])
game.catchPokemon(pokemon[19])
game.catchPokemon(pokemon[131])
game.catchPokemon(pokemon[41])
game.catchPokemon(pokemon[23])
game.catchPokemon(pokemon[76])
console.log(game.party)
console.log(game.collection)
console.log(game.party.length)

