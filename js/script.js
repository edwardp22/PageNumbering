const itemsPerPage = 10;
const contactListContainer = Array.from(
  document.getElementsByClassName("contact-list")
);
const contactListItems = Array.from(
  document.getElementsByClassName("contact-item")
);
const paginationContainer = Array.from(
  document.getElementsByClassName("pagination")
);
const numberOfPages = Math.ceil(contactListItems.length / itemsPerPage);

/**
 * Creates buttons at the end of the page to navigate
 */
function printPaginationLinks() {
  // Validate if container exists before accessing by index
  if (!Array.isArray(paginationContainer) || !paginationContainer.length)
    return;

  for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    paginationContainer[0].innerHTML += `
        <li>
            <a onclick="printPageItems('${pageNumber}')">${pageNumber}</a>
        </li>
    `;
  }
}

/**
 * Populate list container with grouped records
 * @param {number} page
 */
function printPageItems(page) {
  // Validate if container exists before accessing by index
  if (!Array.isArray(contactListContainer) || !contactListContainer.length)
    return;

  contactListContainer[0].innerHTML = "";
  contactListItems.forEach((item, index) => {
    const maxRecord = page * itemsPerPage;

    if (index + 1 > maxRecord - itemsPerPage && index + 1 <= maxRecord) {
      contactListContainer[0].innerHTML += item.outerHTML;
    }
  });
}

printPaginationLinks();
printPageItems(1);
