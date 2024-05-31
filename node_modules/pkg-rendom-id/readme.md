# Simple Random ID Generator

This is a JavaScript function that generates a random ID of specified length using uppercase letters, lowercase letters, and digits.

## Usage

1. Install the package:
   ```
   npm i pkg-rendom-id
   ```

2. Import the function into your code:
   ```javascript
   const generateRandomId = require("pkg-rendom-id");
   ```

3. Generate a random ID by calling the function:
   ```javascript
   const id = generateRandomId(8); // Generates an 8-character random ID
   console.log('Random ID:', id);
   ```

## Parameters

- `length`: The length of the random ID to generate.

## Return Value

- A string containing the randomly generated ID.

## Example

For example, calling `generateRandomId(8)` might return a random ID like `Ab3Fg7Hk`.
