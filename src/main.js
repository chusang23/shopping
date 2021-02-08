function loadItems () {
    return fetch ('data/data.json').then(response => console.log(response));
}

loadItems()
.then(items => {
    // displayitems(items);
    // setEventListeners(items)
})
.catch(console.log)