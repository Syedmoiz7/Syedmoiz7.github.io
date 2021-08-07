// Answer 1 //
// var itemsArray=[
//     {name:"Juice", price: 50, Quantity: 3},
//     {name:"Cookies", price: 30, Quantity: 9},
//     {name:"Shirt", price: 880, Quantity: 1},
//     {name:"Pen", price: 110, Quantity: 2,}
// ]
// for (var i=0; i<itemsArray.length; i++){
//     var price =itemsArray[i].price*itemsArray[i].Quantity
//     console.log(itemsArray[i].name+" = "+price)
// }
// console.log(" Total Price "+ (itemsArray[0].price+itemsArray[1].price+itemsArray[2].price+itemsArray[3].price)
// *(itemsArray[0].Quantity+itemsArray[1].Quantity+itemsArray[2].Quantity+itemsArray[3].Quantity))

// Answer 2 //

// var obj={
//    name:"moiz",
//    email:"syedzada7866@gmail.com",
//    password:"webdevelopment",
//    age:"19",
//    gender:"Male",
//    City:"Karachi",
//    Country:"Pakistan"
// }

// console.log("age" in obj)
// console.log("Country" in obj)
// console.log("firstName" in obj)
// console.log("lastName" in obj)

// Answer 3 //

// function Data(name,email,age,gender,city,country){
//     this.name=name
//     this.email=email
//     this.age=age
//     this.gender=gender
//     this.city=city
//     this.country=country
// }

// var boys=[
// new Data("moiz","syedzada7866@gmail.com","19","male","karachi","Pakistan"),
// new Data("ali","aligamingyt9@gmail.com","19","male","karachi","Pakistan"),
// new Data("umer","umersiddiqui@gmail.com","18","male","karachi","Pakistan")

// ]

// for(i=0;i<=boys.length;i++){
// console.log(boys[i])}








// Answer 4 //




function populationData(name,gender,address,educattion,profession,)
{
    this.name=name;
    this.gender=gender;
    this.address=address;
    this.educattion=educattion;
    this.profession=profession;
}
    
