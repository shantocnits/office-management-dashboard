// Datatable Start..
$(document).ready(function () {
  var table = $("#example").DataTable({
    dom: "Bfrtip",
    buttons: [
      {
        extend: "copyHtml5",
        text: "Copy",
        className: "dt-button",
      },
      {
        extend: "csvHtml5",
        text: "CSV",
        className: "dt-button",
      },
      {
        extend: "excelHtml5",
        text: "Excel",
        className: "dt-button",
      },
      {
        extend: "pdfHtml5",
        text: "PDF",
        className: "dt-button",
      },
      {
        extend: "print",
        text: "Print",
        className: "dt-button",
      },
    ],
    paging: true,
    pageLength: parseInt($("#entriesPerPage").val()), // Set initial entries displayed
    searching: true,
    order: [], // Disable initial sorting
  });

  // Hide default DataTables buttons and pagination
  $(".dt-buttons").hide();
  $(".dataTables_filter").hide();
  $(".dataTables_paginate").hide();

  // Event listeners for custom buttons
  $("#copyButton").on("click", function () {
    table.button(".buttons-copy").trigger();
  });
  $("#csvButton").on("click", function () {
    table.button(".buttons-csv").trigger();
  });
  $("#excelButton").on("click", function () {
    table.button(".buttons-excel").trigger();
  });
  $("#pdfButton").on("click", function () {
    table.button(".buttons-pdf").trigger();
  });
  $("#printButton").on("click", function () {
    table.button(".buttons-print").trigger();
  });

  // Update DataTable page length when selection changes
  $("#entriesPerPage").change(function () {
    var length = parseInt($(this).val());
    table.page.len(length).draw();
    updatePaginationButtons();
  });

  // Custom search box
  $("#customSearchBox").on("keyup", function () {
    table.search($(this).val()).draw();
    updatePaginationButtons();
  });

  // Custom pagination buttons
  $("#prevPage").on("click", function () {
    table.page("previous").draw("page");
    updatePaginationButtons();
  });

  $("#nextPage").on("click", function () {
    table.page("next").draw("page");
    updatePaginationButtons();
  });

  // Function to update pagination buttons
  function updatePaginationButtons() {
    var pageInfo = table.page.info();
    $("#prevPage").toggleClass("disabled", pageInfo.page === 0);
    $("#nextPage").toggleClass(
      "disabled",
      pageInfo.page === pageInfo.pages - 1
    );
    createPageButtons(pageInfo.pages, pageInfo.page);
  }

  // Function to create page buttons with a dynamic range
  function createPageButtons(totalPages, currentPage) {
    var pageNumbersContainer = $("#pageNumbers");
    pageNumbersContainer.empty();
    var numToShow = 3; // Define how many page numbers to show
    var start = Math.max(0, currentPage - Math.floor(numToShow / 2));
    var end = Math.min(totalPages - 1, start + numToShow - 1);

    for (var i = start; i <= end; i++) {
      var pageButton = $('<button class="page-number"></button>')
        .text(i + 1)
        .data("page", i)
        .toggleClass("active", i === currentPage)
        .on("click", function () {
          var pageIndex = $(this).data("page");
          table.page(pageIndex).draw("page");
          updatePaginationButtons();
        });
      pageNumbersContainer.append(pageButton);
    }
  }

  // Initial pagination setup
  updatePaginationButtons();

  // Dropdown button click event
  $("#filterDropdownButton").click(function (event) {
    var menu = $("#dropdownMenuCustom");
    var isVisible = menu.is(":visible");

    if (isVisible) {
      menu.hide(); // Hide menu if already visible
    } else {
      menu.show(); // Show menu
      event.stopPropagation(); // Prevent closing the menu when clicking outside
    }
  });

  $(document).click(function () {
    $("#dropdownMenuCustom").hide(); // Hide menu when clicking outside the dropdown area
  });

  // Dropdown item click handling
  $(".dropdown-item-custom").click(function () {
    var value = $(this).data("value");
    var today = new Date();
    var startDate;

    switch (value) {
      case "7days":
        startDate = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 7
        );
        break;
      case "month":
        startDate = new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          today.getDate()
        );
        break;
      case "year":
        startDate = new Date(
          today.getFullYear() - 1,
          today.getMonth(),
          today.getDate()
        );
        break;
      default:
        startDate = null;
    }

    table.draw();

    $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
      if (!startDate) return true; // Show all rows if no date filter
      var date = new Date(data[4]); // Assuming the date column is the 5th column (index 4)
      return date >= startDate;
    });
    table.draw();
    $.fn.dataTable.ext.search.pop();

    $("#dropdownMenuCustom").hide(); // Hide menu after selection
  });
});
// Datatable End..
