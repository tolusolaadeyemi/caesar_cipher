
class CaesarCipher {
    constructor (_text, _shift){
        this.text = _text;
        this.shift = _shift;

    }

    static modulus(a, b) {
        return ((a % b) + b) % b;
        //return a % b;
      }

    static encrypt(text,shift) {
        var encMsg = "";
        for (var i = 0; i < text.length; i++) {
            var code = text.charCodeAt(i);

            //for uppercase letters
            //26 bc A-Z indexed at 0

            if (code >= 65 && code <= 65 + 26 - 1) {
            code -= 65;
            code = CaesarCipher.modulus(code - shift, 26);
            code += 65;
            }

            //for lowercase letters
            if (code >= 97 && code <= 97 + 26 - 1) {
            code -= 97;
            code = CaesarCipher.modulus(code - shift, 26);
            code += 97;
            }

            encMsg += String.fromCharCode(code);
        }

        return encMsg;

    }

    static decrypt(text,shift) {
        var decMsg = "";
        for (var i = 0; i < text.length; i++) {
            var code = text.charCodeAt(i);

            if (code >= 65 && code <= 65 + 26 - 1) {
            code -= 65;
            code = CaesarCipher.modulus(code + shift, 26);
            code += 65;
            }
            if (code >= 97 && code <= 97 + 26 - 1) {
            code -= 97;
            code = CaesarCipher.modulus(code + shift, 26);
            code += 97;
            }

            decMsg += String.fromCharCode(code);
        }

        return decMsg;

    }
}

module.exports = CaesarCipher;