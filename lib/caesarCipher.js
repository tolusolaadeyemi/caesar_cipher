
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
        var encryptedMsg = "";
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

            encryptedMsg += String.fromCharCode(code);
        }

        return encryptedMsg;

    }

    static decrypt(text,shift) {
        var decryptedMsg = "";
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

            decryptedMsg += String.fromCharCode(code);
        }

        return decryptedMsg;

    }
}

module.exports = CaesarCipher;