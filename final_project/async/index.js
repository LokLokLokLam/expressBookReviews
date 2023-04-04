const axios = require('axios').default;

//Get Book List using async
const connectToURLBookList = async(url)=>{
    try{
        const outcome = axios.get(url);
        let bookList = (await outcome).data;
        console.log(bookList);
    }
    catch(err)
    {
        console.log(err);
    }
}
// Get the book list
connectToURLBookList('https://loklokloklam-5000.theiadocker-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/');

//Get Book Details based on ISBN using Promises
const connectToURLBookISBN = (url)=>{
    let req = axios.get(url);
    req.then(resp => {
        let data = resp.data;
        console.log(data);
      })
    .catch(err => {
        console.log(err.toString())
    });
}
//Get Book Details based on ISBN
connectToURLBookISBN('https://loklokloklam-5000.theiadocker-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/isbn/2');

//Get Book Details based on Author using async
const connectToURLBookAuthor = async(url)=>{
    try{
        const outcome = axios.get(url);
        let bookList = (await outcome).data;
        console.log(bookList);
    }
    catch(err)
    {
        console.log(err);
    }
}
//Get Book Details based on Author
connectToURLBookAuthor('https://loklokloklam-5000.theiadocker-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/author/Samuel%20Beckett');

//Get Book Details based on Title using async
const connectToURLBookTitle = async(url)=>{
    try{
        const outcome = axios.get(url);
        let bookList = (await outcome).data;
        console.log(bookList);
    }
    catch(err)
    {
        console.log(err);
    }
}

connectToURLBookTitle('https://loklokloklam-5000.theiadocker-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/title/Things Fall Apart');