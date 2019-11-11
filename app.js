var searchBtn = document.getElementById('search');

    var httpRequest;

    searchBtn.addEventListener('click', function(element) {
        element.preventDefault();

        httpRequest = new XMLHttpRequest();

        // GET Request
        var url = "superheroes.php";
        httpRequest.onreadystatechange = loadHeroes;
        httpRequest.open('GET', url);
        httpRequest.send();
    });

    function loadHeroes() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                alert('response')
            } else {
                alert('There was a problem with the request.');
            }
        }
    } 




/**
const getFirstStudentData = () => {
    return fetch('/students.json') // get student list
    .then(response => response.json()) // parse JSON
    .then(students => students[0]) // pick first student
    .then(student => fetch(`/students/${student.name}
   `)) // get user data
    .then(studentResponse => studentResponse.json()) //
   parse JSON
   }
*/