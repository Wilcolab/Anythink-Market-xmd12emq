function toSnakeCase(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '_');
}

// Example usage
console.log(toSnakeCase("this is an example")); // Output: "this_is_an_example"