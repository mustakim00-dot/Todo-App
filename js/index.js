const callApi = async () => {
    const response = await fetch("https://dummyjson.com/products");
   const data = await response.json();
   console.log(data);
   
    
}
callApi();

// json data install url 
// https://dummyjson.com/docs/products#products-all
