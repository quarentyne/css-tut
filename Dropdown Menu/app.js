"use strict"

const card = document.querySelector('.card');
const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
    card.classList.toggle('active');
}