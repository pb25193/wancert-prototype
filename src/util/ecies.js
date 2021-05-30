import { encrypt, decrypt, PrivateKey } from 'eciesjs';

const createPublicKey = () => {
    const keystore = new PrivateKey();
    return keystore.publicKey.toHex();
};

const encryptString = (word, publicKey) => {
    const data = Buffer.from(word);
    return encrypt(publicKey, data).toString();
};

const decryptString = (word, privateKey) => {
    const data = Buffer.from(word);
    return decrypt(privateKey, data).toString();
};

const createKeystore = () => {
    const keystore = new PrivateKey();
    return keystore;
};

const createPrivateKey = () => {
    const keystore = new PrivateKey();
    return keystore.toHex();
};

export { createPublicKey, createPrivateKey, encryptString, decryptString, createKeystore };