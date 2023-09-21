function compareArrays(arr1, arr2) {
  if(arr1.length === arr2.length && arr1.every((elem, index) => elem === arr2[index])){

        
    return true ;
    } else {
        return false;
    }
  
}

function getUsersNamesInAgeRange(users, gender) {

    if(users.filter(user => user.gender === gender).length !== 0) {
        return  users.filter(user => user.gender === gender).reduce((acc, user) => acc + user.age, 0) / users.filter(user => user.gender === gender).length
               }
           return 0;
}