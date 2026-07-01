function debounce(fn, delay) {
  let timer;

  return function (...args) {
    // Cancel the previous timer
    clearTimeout(timer);

    // Start a new timer
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Example usage
function search(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 1000);

// Simulating rapid typing
debouncedSearch("J");
debouncedSearch("Ja");
debouncedSearch("Jav");
debouncedSearch("Java");
debouncedSearch("JavaScript");

// Only this runs after 1 second:
// Searching for: JavaScript