import {Md5} from 'ts-md5';

const getApiParameters = () => {
    const ts = new Date().getTime();
    const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
    const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
    const hash = Md5.hashStr(`${ts}${privateKey}${publicKey}`);
    return `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
}

const getCharacters = () => {
    const params = getApiParameters();
    return `https://gateway.marvel.com:443/v1/public/characters?${params}`;
}

export default getCharacters;