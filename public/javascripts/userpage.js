// import axios from "axios";
$(document).ready( function(){
    
    $("#page-header").text(localStorage.getItem("email"));

    $("#add_transaction").click( function(){
    
        $("#content").empty();
    
        $("#userpage_header").text("Add a new Transaction");

        $(`<form class="form-group" role="form" id="post_transaction">

            <label for="paid_to">Paid To</label>
            <input class="form-control" name="paid-to" type="email"  id="paid_to"/>
            
            <label for="amount">Amount</label>
            <input class="form-control" name="amount" type="text"  id="amount"/>
                      
            <label for="category">Category</label>
            <input class="form-control" name="category" type="text"  id="category"/>
                        
            <label for="note">Note</label>
            <input class="form-control" name="note" type="text" id="note"/>

            <label for="shared_with">Share With</label>
            <input class="form-control" name="shared_with" type="email" id="shared_with"/>
            
            <div class="btn btn-primary" onClick="post_transaction()">Submit</div>

        </form>`).appendTo("#content");
});

    $("#all_transactions").click( function(){
        all_transactions();
    });
});

function all_transactions(){

    $("#content").empty();
    $("#userpage_header").text("Your Transactions");
        
    const email = localStorage.getItem("email");

    axios.get("/get_all_transactions/"+ email)

    .then( function(response){

        response.data.forEach(response => {
            $(`<p>Paid to: ${response.paid_to}</p>
            <p>Amount: $${response.amount}</p>
            <p>From: ${response.id}</p>
            <p>Category: ${response.category}</p>
            <p>Processed: ${new Date(response.createdAt).toDateString()} at ${new Date(response.createdAt).toLocaleTimeString()}</p>
            <p>Note: ${response.note}</p>`).appendTo("#content");
        });

    }).catch(function(err){
        console.log(err);
    });
}


function post_transaction(){

    console.log("Posting Transaction");

    paid_to = $("#paid_to").val().trim();
    amount = $("#amount").val().trim();
    category = $("#category").val().trim();
    note = $("#note").val().trim();
    shared_with = $("#shared_with").val().trim();
    user_email = localStorage.getItem("email");

    const Content = {
        paid_to,
        amount,
        category,
        note,
        shared_with,
        user_email
    };
    console.log(Content);

    $.ajax({
        url: "/post_transaction",
        method: "POST",
        data: Content
    })
    .done(function (response) {
        const clear_form = document.getElementById("post_transaction");
        $("#content").empty();
        $("#userpage_header").text("You have Submited a Transaction!\nClick on Add Transaction for more transactions to be added.");
        clear_form.reset();
    });

}

console.log(localStorage.getItem("email"));