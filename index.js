const crypto = require('crypto');
const readline = require("readline-sync");

const input = readline.question("Welcome to HashYourString.\n\nEnter Your String and Press Enter\n");

const choice = readline.question("\nEnter 1 to md5 Hashing\nEnter 2 for sha1 Hashing\nEnter 3 for sha256 Hashing\nEnter 4 for sha512 Hashing\n");

//using constants to avoid errors/bugs.
const md5 = 'md5';
const sha1 = 'sha1';
const sha256 = 'sha256';
const sha512 = 'sha512';

const md5Hash = (input) => crypto.createHash(md5).update("workat.tech").digest('hex');

const sha1Hash = (input) => crypto.createHash(sha1).update("workat.tech").digest('hex');

const sha256Hash = (input) => crypto.createHash(sha256).update("workat.tech").digest('hex');

const sha512Hash = (input) => crypto.createHash(sha512).update("workat.tech").digest('hex');

switch (choice)
{
case "1":
          console.log(md5Hash(input));
          break;
case "2":
          console.log(sha1Hash(input));
          break;
case "3":
          console.log(sha256Hash(input));
          break;
case "4": 
          console.log(sha512Hash(input));
          break;
default:
    console.log("Not a Valid Option! Please try again")
} 