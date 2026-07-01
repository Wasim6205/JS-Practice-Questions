class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Register a callback for an event
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  // Trigger an event
  emit(eventName, data) {
    if (!this.events[eventName]) return;

    this.events[eventName].forEach(callback => {
      callback(data);
    });
  }

  // Remove a previously registered callback
  off(eventName, callback) {
    if (!this.events[eventName]) return;

    this.events[eventName] = this.events[eventName].filter(
      cb => cb !== callback
    );

    // Optional: clean up empty event arrays
    if (this.events[eventName].length === 0) {
      delete this.events[eventName];
    }
  }
}

const emitter = new EventEmitter();

function greet(user) {
  console.log(`Hello, ${user}!`);
}

function welcome(user) {
  console.log(`Welcome, ${user}!`);
}

// Register listeners
emitter.on("login", greet);
emitter.on("login", welcome);

// Emit event
emitter.emit("login", "Alice");

// Output:
// Hello, Alice!
// Welcome, Alice!

// Remove one listener
emitter.off("login", greet);

// Emit again
emitter.emit("login", "Bob");

// Output:
// Welcome, Bob!