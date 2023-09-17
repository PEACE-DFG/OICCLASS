fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(response=>{
    console.log(response)
    const image=response.products[0].images[2]
    const title=response.products[0].title
    const description=response.products[0].description
    console.log(image)
    console.log(title)
    console.log(description)
    document.getElementById('product-image-1').src=image
    document.getElementById('product-title-1').innerHTML=title
    document.getElementById('product-description-1').innerHTML=description
    // 
});