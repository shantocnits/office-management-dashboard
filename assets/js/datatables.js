
    $(document).ready(function() {
        var table = $('#example').DataTable({
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'copyHtml5',
                    text: 'Copy',
                    className: 'dt-button'
                },
                {
                    extend: 'csvHtml5',
                    text: 'CSV',
                    className: 'dt-button'
                },
                {
                    extend: 'excelHtml5',
                    text: 'Excel',
                    className: 'dt-button'
                },
                {
                    extend: 'pdfHtml5',
                    text: 'PDF',
                    className: 'dt-button'
                },
                {
                    extend: 'print',
                    text: 'Print',
                    className: 'dt-button'
                }
            ],
            paging: true,
            pageLength: parseInt($('#entriesPerPage').val()), // Set initial entries displayed
            searching: true
        });

        // Event listeners for custom buttons
        $('#copyButton').on('click', function() {
            table.button('.buttons-copy').trigger();
        });
        $('#csvButton').on('click', function() {
            table.button('.buttons-csv').trigger();
        });
        $('#excelButton').on('click', function() {
            table.button('.buttons-excel').trigger();
        });
        $('#pdfButton').on('click', function() {
            table.button('.buttons-pdf').trigger();
        });
        $('#printButton').on('click', function() {
            table.button('.buttons-print').trigger();
        });

        // Update DataTable page length when selection changes
        $('#entriesPerPage').change(function() {
            var length = parseInt($(this).val());
            table.page.len(length).draw();
        });
    });
