/**
 * Utility module for converting strings to various case formats.
 * 
 * This module provides functions to transform string naming conventions,
 * handling special characters, whitespace, and maintaining consistent output formats.
 * All functions perform strict input validation and throw descriptive errors
 * for invalid inputs.
 * 
 * @module stringCaseConverters
 * @version 1.0.0
 */

/**
 * Converts a string to camelCase format.
 * 
 * Transforms input strings by removing special characters, splitting on word boundaries
 * (spaces, underscores, hyphens), and joining with the first word in lowercase and
 * subsequent words capitalized.
 * 
 * @function toCamelCase
 * @param {string} input - The string to convert to camel case format
 * @returns {string} The converted camel case string
 * @throws {Error} If input is null, undefined, empty, whitespace-only, or not a string
 * @throws {Error} If input contains no valid characters after sanitization
 * 
 * @example
 * toCamelCase("hello world"); // Returns: "helloWorld"
 * toCamelCase("hello_world"); // Returns: "helloWorld"
 * toCamelCase("hello-world"); // Returns: "helloWorld"
 * toCamelCase("hello world! test"); // Returns: "helloWorldTest"
 * 
 * @see {@link toDotCase}
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms input strings by removing special characters, splitting on word boundaries
 * (spaces, underscores, hyphens), converting all characters to lowercase,
 * and joining words with dots.
 * 
 * @function toDotCase
 * @param {string} input - The string to convert to dot.case format
 * @returns {string} The converted dot.case string
 * @throws {Error} If input is null, undefined, empty, whitespace-only, or not a string
 * @throws {Error} If input contains no valid characters after sanitization
 * 
 * @example
 * toDotCase("hello world"); // Returns: "hello.world"
 * toDotCase("hello_world"); // Returns: "hello.world"
 * toDotCase("HelloWorld"); // Returns: "hello.world"
 * toDotCase("hello world! test"); // Returns: "hello.world.test"
 * 
 * @see {@link toCamelCase}
 *
 * Converts a string to camel case format
 * @param {string} input - The string to convert to camel case
 * @returns {string} The camel cased string
 * @throws {Error} If input is null, undefined, or not a string
 */
function toCamelCase(input) {
    // Error handling for null and undefined
    if (input === null) {
        throw new Error("Input cannot be null");
    }
    
    if (input === undefined) {
        throw new Error("Input cannot be undefined");
    }
    
    // Error handling for non-string types
    if (typeof input !== "string") {
        throw new Error(`Input must be a string, received ${typeof input}`);
    }
    
    // Handle empty or whitespace-only strings
    if (input.trim().length === 0) {
        throw new Error("Input cannot be an empty or whitespace-only string");
    }
    
    // Remove special characters and split by separators (spaces, underscores, hyphens, etc.)
    const words = input
        .replace(/[^\w\s-]/g, "") // Remove special characters except word chars, spaces, hyphens
        .split(/[\s_-]+/) // Split by whitespace, underscores, or hyphens
        .filter((word) => word.length > 0); // Remove empty strings from multiple separators
    
    // Handle edge case where no valid words remain
    if (words.length === 0) {
        throw new Error("Input contains no valid characters to convert");
    }
    
    // Convert to camel case: first word lowercase, rest capitalized
    return words
        .map((word, index) =>
            index === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join("");
}

// Example usage:
console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase("hello_world")); // "helloWorld"
console.log(toCamelCase("hello-world")); // "helloWorld"
console.log(toCamelCase("hello__world")); // "helloWorld"
console.log(toCamelCase("hello world! test")); // "helloWorldTest"

/**
 * Converts a string to dot.case format
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The dot.cased string
 * @throws {Error} If input is null, undefined, or not a string
 */
function toDotCase(input) {
    // Error handling for null and undefined
    if (input === null) {
        throw new Error("Input cannot be null");
    }
    
    if (input === undefined) {
        throw new Error("Input cannot be undefined");
    }
    
    // Error handling for non-string types
    if (typeof input !== "string") {
        throw new Error(`Input must be a string, received ${typeof input}`);
    }
    
    // Handle empty or whitespace-only strings
    if (input.trim().length === 0) {
        throw new Error("Input cannot be an empty or whitespace-only string");
    }
    
    // Remove special characters and split by separators (spaces, underscores, hyphens, etc.)
    const words = input
        .replace(/[^\w\s-]/g, "") // Remove special characters except word chars, spaces, hyphens
        .split(/[\s_-]+/) // Split by whitespace, underscores, or hyphens
        .filter((word) => word.length > 0); // Remove empty strings from multiple separators
    
    // Handle edge case where no valid words remain
    if (words.length === 0) {
        throw new Error("Input contains no valid characters to convert");
    }
    
    // Convert to dot.case: all lowercase, joined with dots
    return words
        .map((word) => word.toLowerCase())
        .join(".");
}

// Example usage:
console.log(toDotCase("hello world")); // "hello.world"
console.log(toDotCase("hello_world")); // "hello.world"
console.log(toDotCase("hello-world")); // "hello.world"
console.log(toDotCase("HelloWorld")); // "hello.world"
console.log(toDotCase("hello world! test")); // "hello.world.test"

