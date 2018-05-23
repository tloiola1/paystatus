// import axios from "axios";
$(document).ready( function(){
    $("#add_transaction").click( function(){
        $("#content").empty();
        $("#userpage_header").text("Add a new Transaction");

        $(`<form class="form-group" role="form" id="post_transaction">

            Paid To
            <input class="form-control" name="paid-to" type="text"  id="paid-to"/>
            
            <label for="amount">Amount</label>
            <input class="form-control" name="amount" type="text"  id="amount"/>
                      
            <label for="category">Category</label>
            <input class="form-control" name="category" type="text"  id="category"/>
                        
            <label for="note">Note</label>
            <input class="form-control" name="note" type="phone" id="note"/>
            
            <button class="btn btn-primary add-transaction" onClick="post_transaction()">Submit</buttom>

        </form>`).appendTo("#content");
});

    $("#all_transactions").click( function(){
        console.log("All Transactions");
    });
});

function all_transactions(){
    console.log("All Transactions");

    axios.get("/get_all_transactions", {
        params: {
            foreignkey: 1
        }
    })
    .then( function(response){
        console.log("All Trans Response");
        console.log(response);
    }).catch(function(err){
        console.log(err);
    });
}


function post_transaction(){

    console.log("Add Transaction");

    const paidTo = $("#paidTo").val().trim();
    const amount = $("#amount").val().trim();
    const category = $("#category").val().trim();
    const note = $("#note").val().trim();

    // axios.post("/post_transaction", {
    //     paidTo,
    //     amount,
    //     category,
    //     note
    // })
    // .then(function (response) {
    //     console.log(response);
    //     res.innerHTML = response.data[0].name;
    // })
    // .catch(function (error) {
    //     res.innerHTML = error;
    // });

}