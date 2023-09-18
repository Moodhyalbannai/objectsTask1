/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
let person =
{
    name: "Ali",
    age: 28,
    city: "Kuwait"
};

console.log(person);

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "ali91@gmail.com";

console.log (person);
//person["email"]="test@gmail.com" ---> correct
//person[person]="test@gmail.com"  ---> wrong! because it will look for a missing variable


/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/

function hasKey (object, key){

//return key in object

    if (object[key]){
        return "Contains Key!"
    }else{
        return "No key Found!"
    }
    }
    console.log(hasKey(person, "name"));
/*
Teacher Solution:

    //const p = {name: `John}, age: 25};
     function hasKey(obj, key) {
        if (obj[key]) return true;
        else return false;
    }
 hasKey(p1, "age");   ---> True

 i can chage this 
 hasKey(p1, "city");  ---> false
*/




const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];

  
  /******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/
  
  function printTitles(x){
    console.log(x.title)
  }

movies.forEach(printTitles);


  
  /******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
  
  function filterYear1994(x){
    return x.year == 1994;
  }
  let filtered = movies.filter(filterYear1994).length;
  console.log(filtered);

  
  /******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
  function updateName(){
    movies[3].genre="Action/Drama";
    return movies;
  }
  
  updateName();

  /*
solve using forEach

function updateName(arr){
    const newArray = arr;
    newArray.forEach( (x) => {
        if (x.title == "The Dark Knight"){
        return 
        }
    })
}

function updateName(arr){
    const newArray = arr.map((x) => ); // <-- use this
    newArray.forEach ((x) => {
        x.year = 2023 // all years will change to 2023
        
        if(x.title == "The Dark Knight"){
            x.genre = "Action/Drama";
        }

        return x;    //type "test" or "epic" it will print it 5 times
    });
console.log(newArray);
return newArray;
}
    updateName(movies);
  */