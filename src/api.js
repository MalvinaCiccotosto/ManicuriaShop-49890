import axios from "axios";


const searchImages = async (term)=>{

    const response =  await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization:"Client-ID 1CodBpvheYeC-krlNG1W0aDU-0_7iN_iRVh-GDEhD4o"
        },
        params:{
                query:term
            }
        })

        
    return response.data.results

}

export default searchImages;