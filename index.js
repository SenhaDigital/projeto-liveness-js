const aes256 = require("aes-everywhere");

// const nunes =
//   "U2FsdGVkX19689BSfnyQTjhzBiazy7sc%2FcyqOE5HElI3TXGI%2BKMF%2BRMzsT524YmGEMEoa8DmMMfTJQrtvm5%2BLPKJGO8ikviIYOTFYKxYY6zAQZSy3lJjUkjhIcBhnSo2InWMBWP6YE2ZZ8sQ9aJvbGWONfpl2UcKx7z8eH3tPVS2vKO6cmY%2BE9qXWPx51PSJnKttqDO03Wo6y67zoXo4r%2FPz2zH0mzTJHTieVC02Ej%2Boh%2F3HAmGFX1B98OPC3DbG";

let client = {
    nome: "Leonardo Pimentel Lopes Filho",
    cpf: "09745529923",
    nascimento: "12/11/2001",
    idExternoCliente: "1PROVADV",
    workflow: "LB",
    accessKey: "Dnge3jUSawtJ88NXwVEGKg==",
    urlCallback: "https://testes-api-liveness.onrender.com/Callback",
}

const chave = "AWLiveness050924";

let message = JSON.stringify(client);

const clientEncrypted = encodeURIComponent(aes256.encrypt(message, "AWLiveness050924")); 


// const decodedCiphertext = decodeURIComponent(nunes);
// const decryptedMessage = aes256.decrypt(decodedCiphertext, chave);

const livenessUrl = `https://validahomol.sdsign.com.br/#/liveness?token=${clientEncrypted}`;
console.log("URL Gerada para o Liveness:", livenessUrl);
