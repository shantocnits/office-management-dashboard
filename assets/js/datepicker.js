$(document).ready(function() {
    $("#datepicker-input").datepicker({
        dateFormat: "mm/dd/yy",
        beforeShow: function(input, inst) {
            setTimeout(function() {
                positionDatepicker(input, inst);
            }, 0);
        },
        onSelect: function(dateText) {
            $(this).val(dateText);
            $("#datepicker").hide();
        }
    });

    function positionDatepicker(input, inst) {
        var datepickerDiv = inst.dpDiv;
        var inputOffset = $(input).offset();
        var inputHeight = $(input).outerHeight();
        var datepickerHeight = datepickerDiv.outerHeight();
        var modalOffset = $('#popup-modal').offset();
        var modalHeight = $('#popup-modal').height();
        
        var spaceBelow = (modalOffset.top + modalHeight) - (inputOffset.top + inputHeight);
        var spaceAbove = inputOffset.top - modalOffset.top;

        if (spaceBelow < datepickerHeight && spaceAbove > datepickerHeight) {
            // Position above
            datepickerDiv.css({
                top: inputOffset.top - datepickerHeight,
                left: inputOffset.left,
                display: 'block'
            });
        } else {
            // Default to below
            datepickerDiv.css({
                top: inputOffset.top + inputHeight,
                left: inputOffset.left,
                display: 'block'
            });
        }
    }

    $("#datepicker-input").click(function() {
        $("#datepicker").datepicker("show");
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('#datepicker-input').length && !$(event.target).closest('#datepicker').length) {
            $("#datepicker").hide();
        }
    });
});
