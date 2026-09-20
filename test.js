// CMSC 100 - Web Programming Laboratory Exercise
// Exercise 04: JavaScript Basics Part 2
// Name: Gewell Piñano
//
// This file is used to test the functions
// created in index.js.
//
// The functions being tested are:
// 1. generateUniqueID()
// 2. addAccount()


// Import the functions from index.js.
import { generateUniqueID, addAccount } from "./index.js";


// ============================================================
// TEST 1: generateUniqueID()
// ============================================================

// Generate a unique ID using a sample first name and last name.
const sampleID = generateUniqueID("Alan", "Turing");

// Display the generated ID in the terminal.
console.log("Generated Unique ID:");
console.log(sampleID);


// ============================================================
// TEST 2: addAccount() - VALID ACCOUNT
// ============================================================

// Create a valid account.
// The first name, last name, and email are non-empty strings.
// The age is a number that is at least 18.
const validAccount = [
    "Gewell",
    "Pinano",
    "gpinano@w3c.com",
    20
];

// Call addAccount() using the valid account.
const validResult = addAccount(validAccount);

// Display the result.
console.log("\nValid Account Result:");
console.log(validResult);


// ============================================================
// TEST 3: addAccount() - INVALID EMAIL
// ============================================================

// Create an account with an invalid email address.
const invalidEmailAccount = [
    "Test",
    "User",
    "invalid-email",
    20
];

// Call addAccount() using the invalid account.
const invalidEmailResult = addAccount(invalidEmailAccount);

// Display the result.
console.log("\nInvalid Email Result:");
console.log(invalidEmailResult);


// ============================================================
// TEST 4: addAccount() - UNDER 18
// ============================================================

// Create an account where the user is younger than 18.
const underageAccount = [
    "Young",
    "User",
    "younguser@example.com",
    17
];

// Call addAccount() using the underage account.
const underageResult = addAccount(underageAccount);

// Display the result.
console.log("\nUnder 18 Result:");
console.log(underageResult);


// ============================================================
// TEST 5: addAccount() - EMPTY FIRST NAME
// ============================================================

// Create an account with an empty first name.
const emptyNameAccount = [
    "",
    "User",
    "user@example.com",
    25
];

// Call addAccount() using the account.
const emptyNameResult = addAccount(emptyNameAccount);

// Display the result.
console.log("\nEmpty First Name Result:");
console.log(emptyNameResult);