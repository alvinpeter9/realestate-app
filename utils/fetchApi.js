import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'b182963a65mshf1823736fa91f4bp1d526fjsn820b91af0c27'
          },
    });

    return data;
} 


