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