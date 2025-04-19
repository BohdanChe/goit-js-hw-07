const itemListElem = document.querySelector('#categories');
const catListItems = itemListElem.querySelectorAll('.item');

console.log(`Кількість категорій : ${catListItems.length}`);

catListItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('li').length;

    console.log(`Категорія : ${title}`);
    console.log(`кількість : ${elementsCount}`);
});



