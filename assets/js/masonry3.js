var msnry = new Masonry( '.grid', {
    itemSelector: '.grid-item',
    columnWidth:280, //column의 너비, gutter(여백)와 합쳐서 총 너비가 된다.
    // columnWidth: '.grid-sizer',
    // percentPosition: true, //%단위를 적용할것인가
    gutter : 20, //여백
});

let count = 20;
const btn = document.querySelector('button');
const gridContainer = document.querySelector('.grid');
btn.addEventListener('click',e=>{
    let elems = [];
    let fragment = document.createDocumentFragment();
    for(let i=0;i<20;i++){
        let elem = getItemElement();
        count++;
        fragment.appendChild(elem);
        elems.push(elem);
    }
    gridContainer.appendChild(fragment);
    msnry.appended(elems);
    msnryLayout();

});
function getItemElement() {
    let elem = document.createElement('div');
    let divClass = "grid-item"; 
    let img = document.createElement('img');
    let src = `https://source.unsplash.com/collection/${count}`
    elem.className = divClass;
    img.src= src;
    elem.append(img);
    return elem;
}
function msnryLayout(){
    imagesLoaded( '.grid' ).on( 'progress', function() {
        msnry.layout();
    });
}
msnryLayout();
