document.getElementById('complaintform').addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(document.getElementById('Visit').value);
    console.log(document.getElementById('Location').value);
    console.log(document.getElementById('Email').value);
    console.log(document.getElementById('Message').value);

});