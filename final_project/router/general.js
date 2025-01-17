const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!isValid(username)) { 
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User successfully registred. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});    
    }
  } 
  return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  res.send(JSON.stringify(books,null,4));
  //return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  let isbn = req.params.isbn;
  res.send(JSON.stringify(books[isbn]));
  //return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  let author = req.params.author;
  let keys = Object.keys(books);
  for (let i = 0; i < keys.length; i++){
      let aBook = books[keys[i]];
      if (aBook.author === author)
      {
          return res.send(JSON.stringify(aBook));
      }
  }
  return res.send(`Book not find.`);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  let title = req.params.title;
  let keys = Object.keys(books);
  for (let i = 0; i < keys.length; i++){
      let aBook = books[keys[i]];
      if (aBook.title === title)
      {
          return res.send(JSON.stringify(aBook));
      }
  }
  return res.send(`Book not find.`);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  let isbn = req.params.isbn;
  let aBook = books[isbn];
  if (aBook)
  {
    return res.send(JSON.stringify(aBook.reviews));
  }
  else return res.send(`Book not find.`);
  //return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
