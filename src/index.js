// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);


// Your code goes here ...

threeContacts.forEach((celeb)=>{
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <img src="${celeb.pictureUrl}" />
    </td>
    <td> ${celeb.name} </td>
    <td> ${celeb.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  
  tableBody.appendChild(newRow);
  
  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  const deleteBtn = newRow.querySelector (".btn-delete")
  deleteBtn.addEventListener("click", ()=> {
    console.log("Delete clicked");
    newRow.remove();
  });

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  const likeBtn = newRow.querySelector (".btn-like")
  likeBtn.addEventListener("click", ()=> {
    console.log("Like clicked");
    likeBtn.classList.toggle("selected");
  });


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...






})

buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
    let celeb = contacts[randomIndex];
    contacts.splice(randomIndex, 1)
    //console.log (newContact);
    const newRow2 = document.createElement("tr");
    newRow2.innerHTML = `
    <td>
      <img src="${celeb.pictureUrl}" />
    </td>
    <td> ${celeb.name} </td>
    <td> ${celeb.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  tableBody.appendChild(newRow2);



const deleteBtn = newRow2.querySelector (".btn-delete")
deleteBtn.addEventListener("click", ()=> {
  console.log("Delete clicked");
  newRow2.remove();
})

const likeBtn = newRow2.querySelector (".btn-like")
  likeBtn.addEventListener("click", ()=> {
    console.log("Like clicked");
    likeBtn.classList.toggle("selected");

})

})