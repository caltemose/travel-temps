const tMin = 24;
const tMax = 105;
const tInc = 6;
const listEl = document.getElementById('temps');

const cFromF = function (f) {
    return Math.round((f - 32) * (5/9));
}
const getTempItem = function (f, c) {
    const li = document.createElement('li');
    const spanF = document.createElement('span');
    const spanC = document.createElement('span');
    spanF.innerHTML = f + '&deg;F';
    spanC.innerHTML = c + '&deg;C';
    li.appendChild(spanF);
    li.appendChild(spanC);
    return li;
}
const renderPage = function (parentEl) {
    for(var i=tMax; i>tMin; i=i-tInc) {
        parentEl.appendChild(getTempItem(i, cFromF(i)));
    }
}
const clearPage = function (parentEl) {
    parentEl.innerHTML = '';
}

renderPage(listEl);
