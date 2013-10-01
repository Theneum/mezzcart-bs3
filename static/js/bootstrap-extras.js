$(function()
{

    // Form css tweaks.
    $('.middle input:text, .middle input:password, textarea').not('[class]').addClass('input-xlarge');
    $('.control-group label').addClass('control-label');
    $('.controls').addClass('col-lg-3');
    $('#checkout-form .controls').removeClass('col-lg-3');
    $('#checkout-form .controls').addClass('col-lg-9');
    // $('.form-group input').addClass('form-control');
    $('.controls input').addClass('form-control');
    $('.controls select').addClass('form-control');

    // Put the right classes on the checkboxes in checkout steps
    $('.input_id_same_billing_shipping label').removeClass('col-lg-2');
    $('.input_id_same_billing_shipping label').addClass('col-lg-11 text-left');
    $('.input_id_same_billing_shipping div').removeClass('col-lg-9');
    $('.input_id_remember label').removeClass('col-lg-2');
    $('.input_id_remember label').addClass('col-lg-11 text-left');
    $('.input_id_remember div').removeClass('col-lg-9');
    // Payment page
    $('.input_id_card_type_0 input').addClass('radio-inline');
    $('.card-expiry-fields div').removeClass('col-lg-2 col-lg-9');
    $('.card-expiry-fields label').addClass('col-lg-3');
    // $('.input_id_card_type_0 div').removeClass('col-lg-9');
});
