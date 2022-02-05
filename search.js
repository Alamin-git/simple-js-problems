let products = [
    { name: 'iphone 12', price: 120000 },
    { name: 'xiomi 11', price: 70000 },
    { name: 'samsung 20', price: 30000 },
    { name: 'del laptop', price: 85000 },
    { name: 'hp probook laptop', price: 45000 },
    { name: 'apple watch', price: 20000 },
    { name: 'oppo', price: 17000 }

];

function searchProducts(products, searchText) {
    const result = [];
    for (const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product);
        }
    }
    return result;
}

const matched = searchProducts(products, 'laptop');
console.log(matched);

