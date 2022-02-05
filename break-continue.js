let products = [
    { name: 'iphone 12', price: 120000 },
    { name: 'xiomi 11', price: 70000 },
    { name: 'samsung 20', price: 30000 },
    { name: 'del laptop', price: 85000 },
    { name: 'hp probook laptop', price: 45000 },
    { name: 'apple watch', price: 20000 },
    { name: 'oppo', price: 17000 },

];
for (const product of products) {
    if (product.price < 50000) {
        break;
    }
    console.log(product);
}

// continue dile oi condision asle seta skip kore porer ta te jai 
for (const product of products) {
    if (product.price < 50000) {
        continue;
    }
    console.log(product);
}
