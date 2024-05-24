document.getElementById('btn').addEventListener('click', function() {
    fetch('/alert')
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error('Hello World', error);
        });
});
