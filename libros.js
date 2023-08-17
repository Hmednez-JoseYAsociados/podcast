function searchBooks() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("bookTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    showNoResultsMessage();
}

function filterByGenre() {
    let select, option, table, tr, td, i, genre;
    select = document.getElementById("genre");
    genre = select.value;
    table = document.getElementById("bookTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            if (genre === "todos" || td.textContent.toUpperCase().indexOf(genre.toUpperCase()) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    showNoResultsMessage();
}

function showNoResultsMessage() {
    let table, tr, i, displayCount;
    table = document.getElementById("bookTable");
    tr = table.getElementsByTagName("tr");
    displayCount = 0;

    for (i = 1; i < tr.length; i++) {
        if (tr[i].style.display !== "none") {
            displayCount++;
        }
    }

    const noResultsMessage = document.getElementById("noResultsMessage");
    if (displayCount === 0) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
}

// Mostrar todos los libros al cargar la página
filterByGenre();

function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const genre = document.getElementById('bookGenre').value;

    if (title && author && genre) {
        const table = document.getElementById('bookTable');
        const newRow = table.insertRow(table.rows.length);
        const titleCell = newRow.insertCell(0);
        const authorCell = newRow.insertCell(1);
        const genreCell = newRow.insertCell(2);

        titleCell.innerHTML = title;
        authorCell.innerHTML = author;
        genreCell.innerHTML = genre;

        document.getElementById('bookTitle').value = '';
        document.getElementById('bookAuthor').value = '';
        document.getElementById('bookGenre').value = 'Ciencia Ficción'; // Valor predeterminado para el género

        // Ocultar el mensaje de "No se encontraron resultados"
        document.getElementById('noResultsMessage').style.display = 'none';
    }
}