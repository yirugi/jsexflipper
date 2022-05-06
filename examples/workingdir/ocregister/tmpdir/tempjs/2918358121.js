function checkTest() {
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('test')
return product;
}checkTest();