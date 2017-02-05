//Problem: User when clicking on images goes to and dead end.
//Solution: Create an overlay with the larger image - Lightbox.

//Creating a DOM element by selecting a string of the element we want to create or append to the document.
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>")
var $caption = $("<p></p>");

//Add image to overlay 
$overlay.append($image);
// A caption to overlay
$overlay.append($caption);

// Add overlay
$("body").append($overlay);
 // An image
 


// Capture the click event on a link to and image
// event.preventDefault prevents the img from going to a dead end. 
$("#gallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    // Update overlay with the iamge linked in the link
    $image.attr("src", imageLocation);
    
    // Show the overlay
    $overlay.show();
 
 
 // Get child's alt attribute and set caption.
  var captionText = $(this).children("img").attr("alt"); 
  $caption.text(captionText);  
});    

// When overlay is clicked
$overlay.click(function(){
     // Hide the overlay
  $overlay.hide();  
});    

               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               