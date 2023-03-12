let personalData = [
{id: 1, icon: "bi-airplane", description: "Likes to travel somewhere warm and sunny.", info: "Bali is my favorite destination", 
  image: "https://i.pinimg.com/236x/2c/98/b0/2c98b00f3fcd8cee0ecf14c904d42adc.jpg"},
  {id: 2, icon: "bi-earbuds", description: "I don't play any instruments.", info: "Likes listening to Rock music", 
  image: "https://i.pinimg.com/236x/cf/e0/a8/cfe0a876c3a93d3a16f784df95229112.jpg"},
  {id: 3, icon: "bi-snow", description: "I'm more active during winter doing wintersports", info: "Skiing and skating are fun to do during winter", 
  image: "https://i.pinimg.com/236x/94/1e/66/941e6626002400ddb4e7dbb4d502382c.jpg"},
  {id: 4, icon: "bi-code", description: "Programming is fun and exciting", info: "Trying to learn different programming language", 
  image: "https://i.pinimg.com/236x/80/07/fb/8007fba76a4bcc4a7d3d0615ada7ae93.jpg"},
  {id: 5, icon: "bi-flower3", description: "During spring and summer, I like gardening.", info: "I love flowers", 
  image: "https://i.pinimg.com/236x/96/41/43/964143f4043754bf51fdd1fd19ac21db.jpg"}
];

let tableBody = document.querySelector("#personalTable tbody");

personalData.forEach(data => {
  let row = document.createElement("tr");
  row.innerHTML = `<td>${data.id}</td>
    <td><i class="${data.icon}"></i></td>
    <td>${data.description}</td>
    <td>${data.info}</td>
    <td><img src="${data.image}" alt="${data.description}"></td>`;
  
    tableBody.appendChild(row);
});

$(document).ready(function() {
  $("#personalTable tbody tr td:last-child img").on('click', function() {
    var src = $(this).attr('src');
    window.open(src);
  });
});

let oddRows = document.querySelectorAll("tr:nth-child(odd)");
oddRows.forEach(row => {
  row.addEventListener('mouseenter',()=>{
    row.style.color = 'yellow';
  });
  row.addEventListener('mouseleave',()=>{
    row.style.color = 'black';
  });
});

