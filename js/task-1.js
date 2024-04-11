'use strict';
function slugify(title) {
    let slug;
    slug = title.toLowerCase().split(' ');
    return slug = slug.join('-');
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));