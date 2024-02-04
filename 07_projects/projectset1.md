# Projects related to DOM

## Project link
[Click here](https://dom-project-chaiaurcode-3nx7io.stackblitz.io)

# Solution code

## Project 1 : Color Changer

```javascript
console.log("hello world");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('mouseover', function (e) {
    console.log(e);
    console.log(e.target);
    //1st way with if loop
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }

    //without loop
    body.style.backgroundColor = btn.id;
  });
});

```

## Project 2 : BMI Calculator

```javascript 
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) 
  {
    result.innerHTML = `Please enter valid height ${height}`;
  } 
  else if (weight === '' || weight < 0 || isNaN(weight)) 
  {
    result.innerHTML = `Please enter valid weight ${weight}`;
  } 
  else 
  {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  }

  //to display in result
  result.innerHTML = `<span>${bmi}</span>`;

  //to display range of result bmi
    function language(addLang) {
      const p = document.createElement('p');
      p.appendChild(document.createTextNode(addLang));
      document.querySelector('#results').appendChild(p);
    }
    if (bmi < 18.6) 
    {
      language('under weight');
    } 
    else if (bmi >= 18.6 && bmi <= 24.9)
    {
      language('normal range');
    } 
    else if (bmi > 24.9) 
    {
      language('overweight');
    }
  }
);

```

## Project 3 : Digital Clock

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  // clock.appendChild(document.createTextNode(date.toLocaleTimeString()));

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```