class Button {
  constructor(width, height, color, type) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.type = type;
    this.props = { width, height, color, type };
  }
  onClick() {
    console.log(this.props);
  }
}

let chatButton = new Button(50, 60, "green", "button");
chatButton.onClick();

function assert(condition, testName) {
  if (!condition) {
    throw new Error(`Assertion for '${testName}' failed`);
  } else {
    console.log(`Test '${testName}' passed \u{1F31E}`);
  }
}

function testButton(button, param, value, test) {
  assert(button[param] === value, test);
}

testButton(chatButton, "width", 50, "Check width");
testButton(chatButton, "height", 60, "Check height");
testButton(chatButton, "color", "green", "Check color");
testButton(chatButton, "type", "button", "Check type");
