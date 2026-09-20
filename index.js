// CMSC 100 - Web Programming Laboratory Exercise
// Exercise 04: JavaScript Basics Part 2
// Name: Gewell Piñano
//
// This file contains the functions needed to generate a unique ID
// and add a valid user account to users.txt.
//
// No Regular Expressions are used in this program.


// Import the file system module from Node.js.
// The fs module allows the program to create and write to files.
import fs from "fs";

// Import the uuid package.
// This package is used to generate a unique string.
import { v4 as uuidv4 } from "uuid";

// Import the validator package.
// This package is used to check if an email has a valid format.
import validator from "validator";


// ============================================================
// FUNCTION 1: generateUniqueID()
// ============================================================

// This function generates a unique ID for a user.
//
// The parameters are:
// firstName - the user's first name
// lastName - the user's last name
//
// The unique ID contains:
// 1. The first letter of the first name in lowercase.
// 2. The last name in lowercase.
// 3. An 8-character unique string.
//
// Example:
// generateUniqueID("Alan", "Turing")
// returns an ID similar to:
// aturing5133f34e

function generateUniqueID(firstName, lastName) {

    // Get the first letter of the first name.
    // charAt(0) gets the character at index 0.
    // toLowerCase() changes it to lowercase.
    const firstLetter = firstName.charAt(0).toLowerCase();

    // Convert the entire last name to lowercase.
    const lowerLastName = lastName.toLowerCase();

    // Generate a UUID using the uuid package.
    const generatedUUID = uuidv4();

    // Remove the hyphens from the UUID.
    // split("-") separates the UUID at every hyphen.
    // join("") combines the separated parts without hyphens.
    //
    // This does not use Regular Expressions.
    const uniqueString = generatedUUID.split("-").join("").slice(0, 8);

    // Combine the first letter, last name,
    // and 8-character unique string.
    const uniqueID = firstLetter + lowerLastName + uniqueString;

    // Return the generated unique ID.
    return uniqueID;
}


// ============================================================
// FUNCTION 2: addAccount()
// ============================================================

// This function checks the information of a user account.
//
// The account parameter is an array containing:
// [first name, last name, email, age]
//
// If all requirements are satisfied:
// - The account is saved to users.txt.
// - The function returns true.
//
// If any requirement is not satisfied:
// - The account is not saved.
// - The function returns false.

function addAccount(account) {

    // Check if the input is an array
    // and contains exactly four values.
    if (!Array.isArray(account) || account.length !== 4) {
        return false;
    }

    // Store each value from the account array
    // in a separate variable.
    const firstName = account[0];
    const lastName = account[1];
    const email = account[2];
    const age = account[3];


    // ========================================================
    // VALIDATION 1: FIRST NAME
    // ========================================================

    // The first name must be a string
    // and must not be empty.
    if (typeof firstName !== "string" || firstName.trim() === "") {
        return false;
    }


    // ========================================================
    // VALIDATION 2: LAST NAME
    // ========================================================

    // The last name must be a string
    // and must not be empty.
    if (typeof lastName !== "string" || lastName.trim() === "") {
        return false;
    }


    // ========================================================
    // VALIDATION 3: EMAIL
    // ========================================================

    // The email must be a string
    // and must not be empty.
    if (typeof email !== "string" || email.trim() === "") {
        return false;
    }

    // Use validator.isEmail() to check
    // if the email follows a valid email format.
    if (!validator.isEmail(email)) {
        return false;
    }


    // ========================================================
    // VALIDATION 4: AGE
    // ========================================================

    // The age must be a number.
    if (typeof age !== "number" || Number.isNaN(age)) {
        return false;
    }

    // The user must be at least 18 years old.
    if (age < 18) {
        return false;
    }


    // ========================================================
    // GENERATE UNIQUE ID
    // ========================================================

    // Call generateUniqueID() to create
    // a unique ID for the user.
    const uniqueID = generateUniqueID(firstName, lastName);


    // ========================================================
    // PREPARE THE USER DATA
    // ========================================================

    // Arrange the information in the required format:
    //
    // first name,last name,email,age,uniqueID
    //
    // "\n" adds a new line after the account.
    const userData =
        firstName + "," +
        lastName + "," +
        email + "," +
        age + "," +
        uniqueID + "\n";


    // ========================================================
    // SAVE THE ACCOUNT
    // ========================================================

    // appendFileSync() adds the account to users.txt.
    // If users.txt does not exist, it will be created.
    fs.appendFileSync("users.txt", userData);


    // Return true because the account was successfully saved.
    return true;
}


// ============================================================
// EXPORT FUNCTIONS
// ============================================================

// Export both functions so that they can be imported
// and tested in test.js.
export { generateUniqueID, addAccount };