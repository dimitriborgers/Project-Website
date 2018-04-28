/* ---------------------------------------------- */
/*                  Variables                     */
/* ---------------------------------------------- */
// var muscles = [
//     "Lats",
//     "Middle Back",
//     "Lower Back",
// ]
/* ---------------------------------------------- */
/*              Submission on Home                */
/* ---------------------------------------------- */
// function find() {
//     var input1 = document.getElementById("search").value;
//     var temp = muscles.includes(input1);
//     var input = input1.replace(/\s+/g,'').trim();
//     if (input1 == "") {
//         document.getElementById("search").focus();
//     }
//     else if (temp == true) {
//         document.location.href = input + ".html";
//     }
// };
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

function refresh() {
    location.reload();
}
/* ---------------------------------------------- */
/*                  Doc.ready                     */
/* ---------------------------------------------- */
$(document).ready(function(){
    var video = document.getElementById("lats1");
    var video1 = document.getElementById("lats2");
    var video2 = document.getElementById("middleBack2");
    var video3 = document.getElementById("middleBack2");
    var video4 = document.getElementById("middleBack2");
    var video5 = document.getElementById("middleBack2");
    //make autocomplete possible
    // $(function() {
    //     $("#search").autocomplete({
    //         source: muscles
    //     });
    // });

    //make pressing enter possible
    // $("#search").keyup(function(event) {
    //     if (event.keyCode === 13) {
    //         $("#submit").click();
    //     }
    // });
    $(".title").click(function(){
        $("#introduction").show();
        $("#images").show();
        $("#schedule").hide();
        $("#lats").hide();
        $("#middleBack").hide();
        $("#lowerBack").hide();
        var video = document.getElementById("lats1");
        var video1 = document.getElementById("lats2");
        var video2 = document.getElementById("middleBack1");
        var video3 = document.getElementById("middleBack2");
        var video4 = document.getElementById("lowerBack1");
        var video5 = document.getElementById("lowerBack2");
        video.pause();
        video1.pause();
        video2.pause();
        video3.pause();
        video4.pause();
        video5.pause();
    });
    $(".title").trigger('click');
    //alternate between Videos and Clipboard
    $(".btn1").click(function(){
        $("#introduction").show();
        $("#images").hide();
        $("#schedule").hide();
        $("#lats").show();
        $("#middleBack").hide();
        $("#lowerBack").hide();
        var video = document.getElementById("lats1");
        var video1 = document.getElementById("lats2");
        var video2 = document.getElementById("middleBack1");
        var video3 = document.getElementById("middleBack2");
        var video4 = document.getElementById("lowerBack1");
        var video5 = document.getElementById("lowerBack2");
        video.pause();
        video1.pause();
        video2.pause();
        video3.pause();
        video4.pause();
        video5.pause();
    });

    $(".btn2").click(function(){
        $("#introduction").show();
        $("#images").hide();
        $("#schedule").hide();
        $("#lats").hide();
        $("#middleBack").show();
        $("#lowerBack").hide();
        var video = document.getElementById("lats1");
        var video1 = document.getElementById("lats2");
        var video2 = document.getElementById("middleBack1");
        var video3 = document.getElementById("middleBack2");
        var video4 = document.getElementById("lowerBack1");
        var video5 = document.getElementById("lowerBack2");
        video.pause();
        video1.pause();
        video2.pause();
        video3.pause();
        video4.pause();
        video5.pause();
    });

    $(".btn3").click(function(){
        $("#introduction").show();
        $("#images").hide();
        $("#schedule").hide();
        $("#lats").hide();
        $("#middleBack").hide();
        $("#lowerBack").show();
        var video = document.getElementById("lats1");
        var video1 = document.getElementById("lats2");
        var video2 = document.getElementById("middleBack1");
        var video3 = document.getElementById("middleBack2");
        var video4 = document.getElementById("lowerBack1");
        var video5 = document.getElementById("lowerBack2");
        video.pause();
        video1.pause();
        video2.pause();
        video3.pause();
        video4.pause();
        video5.pause();
    });
    // document.getElementById("lats1").currentTime = 5;

    //switch active nav bar buttons
    // $(".nav li").click(function() {
    //     $(".nav li").removeClass("active");
    //     $(this).addClass("active");
    // });
});
