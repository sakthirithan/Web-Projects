const scriptURL = 'https://script.google.com/macros/s/AKfycbzsbmYteGm148jXMaekD2vXGOKsX7MkwmWDfe-2i3UoYgXuzRVPTYsQDia5f5OzvewhCA/exec';
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()

    fetch("https://script.google.com/macros/s/AKfycbzsbmYteGm148jXMaekD2vXGOKsX7MkwmWDfe-2i3UoYgXuzRVPTYsQDia5f5OzvewhCA/exec", {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData(form)
    })
    .then(() => {

        console.log('Form submitted successfully!');

    })
    .catch(error => {
        console.error('Error!', error)
    })
})
