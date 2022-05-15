// //NavBar
// function hideIconBar(){
//     var iconBar = document.getElementById("iconBar");
//     var navigation = document.getElementById("navigation");
//     iconBar.setAttribute("style", "display:none;");
//     navigation.classList.remove("hide");
// }

// function showIconBar(){
//     var iconBar = document.getElementById("iconBar");
//     var navigation = document.getElementById("navigation");
//     iconBar.setAttribute("style", "display:block;");
//     navigation.classList.add("hide");
// }

// //Comment
// function showComment(){
//     var commentArea = document.getElementById("comment-area");
//     commentArea.classList.remove("hide");
// }

// //Reply
// function showReply(){
//     var replyArea = document.getElementById("reply-area");
//     replyArea.classList.remove("hide");
// }
// var url = "http://127.0.0.1:5000/"


var name_post;
var text_to_display;
var post_tag;
var up_count;

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.setRequestHeader("Access-Control-Allow-Origin" ,"*");
    xmlHttp.setRequestHeader("Access-Control-Allow-Methods", "*");
    xmlHttp.setRequestHeader("Access-Control-Allow-Headers", "*");
    xmlHttp.send( null );
    res1 = xmlHttp.responseText;
    res2 = JSON.parse(res1);
    name_post = res2["post_title"];
    text_to_display = res2["content"];
    post_tag = res2["tag"];
    up_count = res2["up_count"];

    var newtext = `<div class="subforum1">
            <div class="subforum-title">
                <h1>${name_post}</h1>
            </div>
            <div class="subforum-row">
                <div class="subforum-icon subforum-column center">
                    <i class="fa fa-car center"></i>
                </div>
                <div class="subforum-description subforum-column">
                    <h4><a href="#">${post_tag}</a></h4>
                    <p>${text_to_display}</p>
                </div>
                <div class="subforum-stats subforum-column center">
                    <span>
                    <button type="button">Upvote</button>
                    <p>Upvote Count : ${up_count}</p>
                    </span>
                </div>
                <div class="subforum-info subforum-column">
                    <b><a href="">Last post</a></b> by <a href="">JustAUser</a> 
                    <br>on <small>12 Dec 2020</small>
                </div>
            </div>
        </div>`

    $(".container").append(newtext);
    console.log(res2);
}

function mytest(){
    var name = document.getElementById("post_title").value;
    var text_to_display = document.getElementById("newthread").value;
    var post_tag = document.getElementById("post_tag").value;
    var up_count = 24

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "http://127.0.0.1:5000/search", false ); // false for synchronous request
    xmlHttp.setRequestHeader("Access-Control-Allow-Origin" ,"*");
    xmlHttp.setRequestHeader("Access-Control-Allow-Methods", "*");
    xmlHttp.setRequestHeader("Access-Control-Allow-Headers", "*");
    xmlHttp.send( null );
    res1 = xmlHttp.responseText;
    res2 = JSON.parse(res1);

    if (res2['isValidContent'] != 1){
        alert("this is offensive content you can't post this")
    }
    else{

    var newtext = `<div class="subforum1">
            <div class="subforum-title">
                <h1>${name}</h1>
            </div>
            <div class="subforum-row">
                <div class="subforum-icon subforum-column center">
                    <i class="fa fa-car center"></i>
                </div>
                <div class="subforum-description subforum-column">
                    <h4><a href="#">${post_tag}</a></h4>
                    <p>${text_to_display}</p>
                </div>
                <div class="subforum-stats subforum-column center">
                    <span>
                    <button type="button">Upvote</button>
                    <p>Upvote Count : ${up_count}</p>
                    </span>
                </div>
                <div class="subforum-info subforum-column">
                    <b><a href="">Last post</a></b> by <a href="">JustAUser</a> 
                    <br>on <small>12 Dec 2020</small>
                </div>
            </div>
        </div>`

    $(".container").append(newtext);      // Append the new elements
    }

    // // Creating a div element
    //     var divElement = document.createElement("Div");
    //     divElement.id = "divID";

    //     // Styling it
    //     divElement.style.textAlign = "center";
    //     divElement.style.fontWeight = "bold";
    //     divElement.style.fontSize = "smaller";
    //     divElement.style.paddingTop = "15px";

    //     // Adding a paragraph to it
    //     var paragraph = document.createElement("P");
    //     var text = document.createTextNode(text_to_display);
    //     paragraph.appendChild(text);
    //     divElement.appendChild(paragraph);

    //     // Adding a button, cause why not!
    //     var button = document.createElement("Button");
    //     var textForButton = document.createTextNode("Release the alert");
    //     button.appendChild(textForButton);
    //     button.addEventListener("click", function(){
    //         alert("Hi!");
    //     });
    //     divElement.appendChild(button);

    //     // Appending the div element to body
    //     document.getElementsByTagName("body")[0].appendChild(divElement);
}

