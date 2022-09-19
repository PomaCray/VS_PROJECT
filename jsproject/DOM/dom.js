// const blur = document.getElementById('task-title')
// console.log(document.getElementById('task-title'));
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);
// blur.style.background = '#333'
// blur.style.color = '#fff'
// blur.style.padding = '5px'
// // blur.style.display = 'none'
// blur.textContent = 'Task List'
// blur.innerText = 'My Task List'
// blur.innerHTML = '<span style="color:red">Task list</span>'

//QUERY SELECTOR
// const queque = document.querySelector('#task-title')
// console.log(queque)

// document.querySelector('li').style.color = 'Blue'
// document.querySelector('li:last-child').style.color = 'Red'
// document.querySelector('li:nth-child(3)').style.color = 'Blue'
// document.querySelector('li:nth-child(4)').innerText = 'Hello world wide'
// document.querySelector('li:nth-child(odd)').style.background = '#ccc'
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'

//MULTIPLE SELECTOR
// const items = document.getElementsByClassName('collection-item');
// console.log(items)
// console.log(items[0])
// items[1].style.color = 'orange'
// items[4].innerText = 'Hello world'

// const listItems = document.querySelector('ul').getElementsByClassName('collection-items')

// console.log(listItem)

//GET ELEMENT BY TAGNAME
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0])
// lis[0].style.color = 'orange';
// lis[4].innerText = 'Hello world';

// lis = Array.from(lis)

// lis.reverse()

// lis.forEach(function(li, index){
//     console.log(li.className)
//     li.innerText = `${index}: Hello`;
    
// });

// console.log(lis);

// const items = document.querySelectorAll('ul.collection li.collection-item')

// items.forEach(function(items, index){
//       console.log(items.className)
//     items.innerText = `${index}: Hello`;
// })

// const liOdd = document.querySelectorAll('li:nth-child(odd)')
// const liEven = document.querySelectorAll('li:nth-child(even)')

// liOdd.forEach(function(li, index){
//      li.style.background = '#ccc'
// })

// liEven.forEach(function(li, index){
//     li.style.background = '#f4f4f4'
// })

// console.log(items)

// let val;
// const list = document.querySelector('ul.collection');
// const listItems = document.querySelector('li.collection-item:first-child');

// val = listItems;
// val = list;

// //Get children/ child Nodes
// val = list.childNodes
// val = list.children
// val = list.childNodes[0]
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;
// list.children[1].innerText = 'Hello'

// list.children[3].children[0].id = 'test-links'
// val = list.children[3].children[0];

// //first/last child
// val = list.firstChild
// val = list.firstElementChild

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype
// val = list.childElementCount

// //GET PARENTS
// val = listItems.parentNode
// val = listItems.parentElement.parentElement

// //GET NEXT SIBLING
// val = listItems.nextSibling
// val = listItems.nextElementSibling.nextElementSibling

// console.log(val)

//CREATING ELEMENT

// const li = document.createElement('li')
// li.className = 'collection-item'
// li.id = 'new-item'
// li.setAttribute('title', 'New Item')
// li.appendChild(document.createTextNode('Hello world'))
// //Create a link tag
// link = document.createElement('a')
// link.className = 'delete-item secondary-content'
// link.innerHTML = '<i class="fa fa-remove"></i>'
// li.appendChild(link)
// document.querySelector('ul.collection').appendChild(li)
// console.log(li)

//REMOVING|REPLACING ELEMENT
//REPLACING:
// const newHeading = document.createElement('h2')
// newHeading.id = 'task-title'
// newHeading.appendChild(document.createTextNode('Task-list'))
// const OldHeading = document.querySelector('#task-title')
// const CardAction = document.querySelector('.card-action')
// CardAction.replaceChild(newHeading, OldHeading)
// // console.log(newHeading)

// let lis = document.querySelectorAll('li')
// let list = document.querySelector('ul')
// lis[1].remove()
// list.removeChild(lis[4])
// const firstLi = document.querySelector('li:first-child')
// const link = firstLi.children[0]
// let val;
// val = link.className
// val = link.classList
// val = link.classList[0]
// link.classList.add('test')
// link.classList.remove('test')
// val = link

// //ATR
// val = link.getAttribute('href')
// val = link.setAttribute('href', 'http://google.com')
// val = link.hasAttribute('title')
// console.log(val)

// EVENT LISTENER

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello World')
//     // e.preventDefault()
// })

// document.querySelector('.clear-tasks').addEventListener('click', Onclick)
// function Onclick(e){
//     // console.log('Clicked')
//     let val;
//     val = e;
//     // Event target
//     val = e.target
//     val = e.target.id
//     val = e.target.className
//     e.target.innerText = 'Hello'
//     val = e.type
//     val = e.timeStamp
//     val = e.clientY
//     val = e.clientX
//     val = e.offsetY
//     val = e.offsetX
//     console.log(val)
// }

//MOUSE_EVENT
// const clearBtn = document.querySelector('.clear-tasks')
// const card = document.querySelector('.card')
// const Heading = document.querySelector('h5')
// clearBtn.addEventListener('click', runEvent)
// clearBtn.addEventListener('dblclick', runEvent)
// clearBtn.addEventListener('mousedown', runEvent)
// clearBtn.addEventListener('mouseup', runEvent)
// card.addEventListener('mouseenter', runEvent)
// card.addEventListener('mouseleave', runEvent)
// card.addEventListener('mouseover', runEvent)
// card.addEventListener('mouseout', runEvent)
// card.addEventListener('mousemove', runEvent)
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`)
//     Heading.innerHTML = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`
//     document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 50)`
// }

// KEYBOARD INPUT EVENTS

const form = document.querySelector('form')
const taskInput  = document.querySelector('#task')
const Heading  = document.querySelector('h5')

taskInput.value = '' 
// form.addEventListener('submit', runEvent)
//taskInput.addEventListener('keydown', runEvent)
taskInput.addEventListener('keyup', runEvent)

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`)
    //console.log(e.target.value)
    //Heading.innerText = e.target.value 
    // console.log(taskInput.value)

    // e.preventDefault()
}





