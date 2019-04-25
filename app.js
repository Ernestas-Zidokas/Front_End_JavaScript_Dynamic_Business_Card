document.querySelector('#submit').addEventListener('click', (event)=>{
  let name = getUserInput('#name');
  let lastname = getUserInput('#lastname');
  let email = getUserInput('#email');
  let phone = getUserInput('#phone');
  let description = getUserInput('#description');

  let credentialsObejct = {name: name, lastname: lastname,
    phone: phone, email: email, description: description};

    clearCard();
    card(credentialsObejct);

    window.localStorage.setItem('userInput', JSON.stringify(credentialsObejct));
  })

  function getUserInput(id) {
    return document.querySelector(id).value;
  }

  window.addEventListener('load', (event)=>{
    let data = window.localStorage.getItem('userInput');

    if(data != null) {
      data = JSON.parse(data)
      card(data);
      let name = document.querySelector('#name');
      let lastname = document.querySelector('#lastname');
      let email = document.querySelector('#email');
      let phone = document.querySelector('#phone');
      let description = document.querySelector('#description');

      name.value = data.name;
      lastname.value = data.lastname;
      email.value = data.email;
      phone.value = data.phone;
      description.value = data.description;
    }
  })

  function card(data) {
    let container = document.createElement('div');
    container.classList.add('card');
    //Creates HTMl element with given information and pushes it into array to insert into parent node

    container.appendChild(createHTMLElement('p', data.name, 'Name: '));
    container.appendChild(createHTMLElement('p', data.lastname, 'Last name: '));
    container.appendChild(createHTMLElement('p', data.email, 'Email: '));
    container.appendChild(createHTMLElement('p', data.phone, 'Phone: '));
    container.appendChild(createHTMLElement('p', data.description, 'Description: '));
    document.querySelector('#card').appendChild(container);
  };

  document.querySelector('#clear').addEventListener('click', (event)=>{
    clearInput();
    clearCard();
    removeLocalStorage('userInput');
  });

  function clearInput() {
    let name = document.querySelector('#name');
    let lastname = document.querySelector('#lastname');
    let email = document.querySelector('#email');
    let phone = document.querySelector('#phone');
    let description = document.querySelector('#description');

    name.value = '';
    lastname.value = '';
    email.value = '';
    phone.value = '';
    description.value = '';
  }

  function removeLocalStorage(key) {
    window.localStorage.removeItem(key);
  }

  function clearCard() {
    cardElement = document.querySelector('#card div');

    if(cardElement){
      cardElement.parentNode.removeChild(cardElement);
    }
  }

  function createHTMLElement(tag, userData, string) {
    let element = document.createElement(tag);
    element.textContent = string + userData;
    return element;
  }
