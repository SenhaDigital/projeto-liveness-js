// Importar a biblioteca
const aes256 = require("aes-everywhere");

// Texto criptografado (exemplo dado)
// const nunes =
//   "U2FsdGVkX19689BSfnyQTjhzBiazy7sc%2FcyqOE5HElI3TXGI%2BKMF%2BRMzsT524YmGEMEoa8DmMMfTJQrtvm5%2BLPKJGO8ikviIYOTFYKxYY6zAQZSy3lJjUkjhIcBhnSo2InWMBWP6YE2ZZ8sQ9aJvbGWONfpl2UcKx7z8eH3tPVS2vKO6cmY%2BE9qXWPx51PSJnKttqDO03Wo6y67zoXo4r%2FPz2zH0mzTJHTieVC02Ej%2Boh%2F3HAmGFX1B98OPC3DbG";

let client = {
    nome: "Leonardo Pimentel Lopes Filho",
    cpf: "097.455.299-23",
    nascimento: "12/11/2001",
    idExternoCliente: "1PROVADV",
    workflow: "L",
    accessKey: "Dnge3jUSawtJ88NXwVEGKg==",
    urlCallback: "https://testes-api-liveness.onrender.com/Callback",
}

// Chave de criptografia
const chave = "AWLiveness050924";

let message = JSON.stringify(client);

const clientEncrypted = aes256.encrypt(message, "AWLiveness050924");

// Decodificar o texto criptografado
// const decodedCiphertext = decodeURIComponent(nunes);
// Descriptografar o texto
// const decryptedMessage = aes256.decrypt(decodedCiphertext, chave);

// Exibir a mensagem descriptografada
const livenessUrl = `https://validahomol.sdsign.com.br/#/liveness?token=${clientEncrypted}`;
console.log("URL Gerada para o Liveness:", livenessUrl);