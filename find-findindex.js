/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {//the usersArray is the array of objects youre searching through, the username parameter is the string youre searching for 
  return usersArray.find(function(user){//the find method iterates through the users array and applies the find function to each object 
    return user.username === username;//checking to see if the username property of user is the same as the username property 
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {//searching through the usersArray, and we are searching for username
  const index = usersArray.findIndex(function(user){//findIndex iterates through the the array and applies the function for each object in the array
    return user.username === username;//checks ifh the username property of the current object matches the username tag 
  });

  if (index !== -1) {//if there is a match
    return usersArray.splice(index,1)[0];//then remove that object from the array
  }
  return undefined;//if there is no  match, return undefined
}