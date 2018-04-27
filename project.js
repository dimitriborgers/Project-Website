/* ---------------------------------------------- */
/*                  Variables                     */
/* ---------------------------------------------- */
var muscles = [
    "Lats",
    "Middle Back",
    "Lower Back",
]
/* ---------------------------------------------- */
/*              Submission on Home                */
/* ---------------------------------------------- */
function find() {
    var input = document.getElementById("search").value;
    var temp = muscles.includes(input);
    if (input == "") {
        document.getElementById("search").focus();
    }
    else if (temp == true) {
        document.location.href = input + ".html";
    }
};
/* ---------------------------------------------- */
/*               Adding to Clipboard              */
/* ---------------------------------------------- */
/*
function addVideo() {
    $("#browse").hide();
    $("#clipsFull").show();
    $("#clipsEmpty").hide();
    $('#clipsFull').append('<div class="row"><div class="col-lg-5 col-lg-offset-3"><iframe width="560" height="315" src="https://www.youtube.com/embed/UhdYCy-mkYk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></div>');
    $(".nav li").removeClass("active");
    $("#clipboard-lat").addClass("active");
}
*/
/* ---------------------------------------------- */
/*                  Doc.ready                     */
/* ---------------------------------------------- */
$(document).ready(function(){
    //make autocomplete possible
    $(function() {
        $("#search").autocomplete({
            source: muscles
        });
    });

    //make pressing enter possible
    $("#search").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#submit").click();
        }
    });

    //alternate between Videos and Clipboard
    $("#clipboard-lat").click(function(){
        $("#browse").hide();
        $("#clipsEmpty").show();
    });

    //switch active nav bar buttons
    $(".nav li").click(function() {
        $(".nav li").removeClass("active");
        $(this).addClass("active");
    });
});
