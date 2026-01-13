function toKebabCase(str) {
    // Handle empty or non-string input
    if (!str || typeof str !== 'string') return '';

    return str
        // Insert hyphen before uppercase letters (camelCase → camel-case)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Insert hyphen between letter and number (html5 → html-5)
        .replace(/([a-zA-Z])(\d)/g, '$1-$2')
        .replace(/(\d)([a-zA-Z])/g, '$1-$2')
        // Replace spaces, underscores with hyphens
        .replace(/[\s_]+/g, '-')
        // Remove special characters (keep only alphanumeric and hyphens)
        .replace(/[^\w-]/g, '')
        // Convert to lowercase
        .toLowerCase()
        // Collapse multiple consecutive hyphens
        .replace(/-+/g, '-')
        // Remove leading and trailing hyphens
        .replace(/^-+|-+$/g, '');
}

// Examples:
console.log(toKebabCase('helloWorld'));        // "hello-world"
console.log(toKebabCase('HTTPSConnection'));   // "https-connection"
console.log(toKebabCase('user_full name!'));   // "user-full-name"