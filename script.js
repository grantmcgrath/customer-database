// console.log(customers);

// Internal Company Directory - title
let title = document.querySelector("body");
let header = document.createElement("header");
let h1 = document.createElement("h1");
let content = document.createTextNode("Internal Company Directory");

h1.appendChild(content);
header.appendChild(h1);
title.appendChild(header);

let bob = document.querySelector("body");
let section = document.createElement("section");

bob.appendChild(section);

// repeated
for (var i = 0; i < customers.results.length; i++) {
  console.log(customers.results[i].name.first);

  let section = document.querySelector("section");
  let div = document.createElement("div");

  const template = `
    <img src="${customers.results[i].picture.large}">
    <h2>${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
    <p class="email">${customers.results[i].email}</p>
    <p>${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</p>
    <p>${customers.results[i].phone}</p>
    <p>${customers.results[i].id.value}</p>
`;

  div.innerHTML += template;
  section.appendChild(div);

  console.log(template);
}

// Note: appendChild will not work with litteral, use innerHTML
