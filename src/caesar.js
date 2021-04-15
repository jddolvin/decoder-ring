const caesarModule = (function () {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    input = input.toLowerCase();
    let final = [];

    for (let i = 0; i < input.length; i++) {
      let letter = input[i];
      let position = alphabet.indexOf(letter);

      if (position < 0) {
        final.push(letter);
      } else {
        if (encode) {
          let newPosition = position + shift;
          if (newPosition > 25) {
            newPosition = newPosition - 26;
          }
          if (newPosition < 0) {
            newPosition = newPosition + 26;
          }
          final.push(alphabet[newPosition]);
        } else {
          let newPosition = position - shift;
          if (newPosition > 25) {
            newPosition = newPosition - 26;
          }
          if (newPosition < 0) {
            newPosition = newPosition + 26;
          }
          final.push(alphabet[newPosition]);
        }
      }
    }

    return final.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
