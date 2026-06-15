// Access required elements
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

// Function to get flags from checkboxes
function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";
  return flags;
}

// Event listener for test button
testButton.addEventListener("click", () => {
  const patternValue = regexPattern.value;
  const flags = getFlags();

  try {
    const regex = new RegExp(patternValue, flags);
    const testStr = stringToTest.innerHTML;

    // Run regex
    const matches = testStr.match(regex);

    if (matches) {
      // Highlight matches
      const highlighted = testStr.replace(regex, (match) => {
        return `<span class="highlight">${match}</span>`;
      });

      stringToTest.innerHTML = highlighted;

      // Display results
      if (globalFlag.checked) {
        const allMatches = testStr.match(new RegExp(patternValue, flags));
        testResult.innerText = allMatches.join(", ");
      } else {
        testResult.innerText = matches[0];
      }
    } else {
      // No match case
      testResult.innerText = "no match";
    }
  } catch (err) {
    testResult.innerText = "Invalid regex";
  }
});
