function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector)
  return firstSelector
}

function nestedTarget() {
  const getId = document.getElementsByTagName('div')[3]
  return getId
}

function deepestChild() {
  const deepestChild = document.querySelector('div#grand-node div div div div')
  return deepestChild
}

function increaseRankBy(n) {
  let list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    console.log(parseInt(list[i].innerHTML) + n)
  }
}
