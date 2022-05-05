
import React from 'react';

const useApi2 = () => {

    const [emoji,setEmoji]= useState({})


const changeEmoji= () => {
    axios.get(`https://api.emojisworld.fr/v1/random?limit=1`)
    .then(res=>setEmoji(res))

    return ();
};

export default useApi2;