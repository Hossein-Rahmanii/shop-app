import axios from "axios"


export const getProducts = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    console.log(data,"aa")   
    return data.data
}

export const getSingleProduct = async (id) => {
    // console.log(id)
    const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(data.data)
    return data.data
}