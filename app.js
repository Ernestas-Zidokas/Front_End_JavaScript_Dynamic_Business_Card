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
    container.classList.add("card");
    const credentials = [];

    let p_name = document.createElement('p');
    p_name.textContent = 'Name: ' + data.name;
    credentials.push(p_name);

    let p_lastname = document.createElement('p');
    p_lastname.textContent = 'Last Name: ' + data.lastname;
    credentials.push(p_lastname);

    let p_email = document.createElement('p');
    p_email.textContent = 'Email: ' + data.email;
    credentials.push(p_email);

    let p_phone = document.createElement('p');
    p_phone.textContent = 'Phone Nr.: ' + data.phone;
    credentials.push(p_phone);

    let p_description = document.createElement('p');
    p_description.textContent = 'Description: ' + data.description;
    credentials.push(p_description);

    credentials.forEach((para)=>{
      container.appendChild(para);
    });

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
