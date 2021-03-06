// A $( document ).ready() block.
"use strict";

$( document ).ready(function() {
    console.log( "ready!" );
    $('ul.tabs').tabs('select_tab', 'tab_id');
    $('select').material_select();
    $('.collapsible').collapsible();
    $(".button-collapse").sideNav();
    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// Function for sending all of the forms... kinda
// window.addEventListener("load", function () {
//   function sendData() {
//     let XHR = new XMLHttpRequest();
//
//     // Bind the FormData object and the form element
//     let FD1 = new FormData(form1);
//     let FD2 = new FormData(form2);
//     let FD3 = new FormData(form3);
//     let FD4 = new FormData(form4);
//
//     // Define what happens on successful data submission
//     XHR.addEventListener("load", function(event) {
//       alert(event.target.responseText);
//     });
//
//     // Define what happens in case of error
//     XHR.addEventListener("error", function(event) {
//       alert('Oops! Something went wrong.');
//     });
//
//     // Set up our request
//     XHR.open("POST", "https://requestb.in/1f84cwu1");
//
//     // The data sent is what the user provided in the form
//     XHR.send(FD1);
//     XHR.send(FD2);
//     XHR.send(FD3);
//     XHR.send(FD4);
//   }
//   console.log("listening!");
//
//   // Access the form element...
//   let form1 = document.querySelector("#form1");
//   let form2 = document.querySelector("#form2");
//   let form3 = document.querySelector("#form3");
//   let form4 = document.querySelector("#form4");
//
//   // ...and take over its submit event.
//   form1.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("intercepting form 1");
//     sendData();
//   });
//   form2.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("intercepting form 2");
//     sendData();
//   });
//   form3.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("intercepting form 3");
//     sendData();
//   });
//   form4.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("intercepting form 4");
//     sendData();
//   });
// });


//
//
// submitForms = function(){
//
//
//     let formObj = {
//
//
//     }
//
//     myobj['name']
//     myobj.name
//
//     // get each input field, get the value using .val()
//     // put all that into one giant javascript object
//     // use ajax to submit the data
//
//
//
//
//     // for (let i=1; i<7; ++i) {
//     //     let form = $('#form'+i);
//     //     form.attr('action', 'https://requestb.in/1f84cwu1');
//     //     form.attr('method', 'post');
//     //     form[0].submit();
//     // }
//
//
//         $.ajax({
//         type: "POST",
//         url: "https://requestb.in/1f84cwu1",
//         data: formObj
//     });
// }
//



// Another unction for sending all of the forms... hopefully
$('#submit_all_bt').on('click', function() {
    console.log("Place your order pressed")

    // let data = {};
    // $('input').each(function() {
    //     data[$(this).attr('name')] = $(this).val();
    // });
    // console.log(data);
    // alert(data);

    let tortilla_val = $('input[name="group1"]:checked').val();
    let rice_val = $('input[name="group2"]:checked').val();
    let bean_val = $('input[name="group3"]:checked').val();
    let meat_val = $("#meat option:selected").val();
    let options_val = $('input[name="group4"]:checked').val();
    let user_name = $('#user_name').val();
    let password = $('#password').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    let dob = $('#dob').val();
    let social = $('#social').val();
    let address = $('#address').val();
    let city = $("#city option:selected").val();
    let zip_val = $('#zip').val();
    console.log("collected data");

    let order_results = document.querySelector('#order_results');
    order_results.innerHTML = "Tortilla: " + tortilla_val +
        "<br>" + "Rice: " + rice_val +
        "<br>" + "Beans: " + bean_val +
        "<br>" + "Meat: " + meat_val +
        "<br>" + "Additional options: " + options_val +
        "<br>" +
        "<br>" + "<h5>Your burrito will be delivered to: </h5>" +
        "<br>" + first_name + " " + last_name +
        "<br>" + "<h5>At the address: </h5>" +
        "<br>" + address +
        "<br>" + city + ", " + zip_val +
        "<br>" +
        "<br>" + "<h4>Thank you for your order!</h4>";
    console.log("order printed");

    $.ajax({
        type: "POST",
        url: "https://requestb.in/1f84cwu1",
        data: {
            tortilla: tortilla_val,
            rice: rice_val,
            bean: bean_val,
            meat: meat_val,
            additions: options_val,
            user: user_name,
            pw: password,
            email: email,
            phone_numer: phone,
            first_name: first_name,
            last_name: last_name,
            date_of_birth: dob,
            social_security: social,
            address: address,
            city: city,
            zip: zip_val
        }
        // },
        // success: function() {
        //     alert('Your order has been placed. Burritos await!');
        // },
        // error: function() {
        //     alert('Your order was lost amongst the atoms... no burrito for you!');
        // }
    });
});

