/**
 * Created by Joe on 17-Mar-17.
 */
// function header() {
//      document.getElementById('about').style.display = "none";
//     document.getElementById('mysocial').style.display = "block";
//     document.getElementById('portfolio').style.display = "none";

// }
// function social() {
//      document.getElementById('about').style.display = "none";
//     document.getElementById('mysocial').style.display = "none";
//     document.getElementById('portfolio').style.display = "block";
//     document.getElementById('contact').style.display = "none";

// }
// function portfolio() {
//      document.getElementById('about').style.display = "none";
//     document.getElementById('mysocial').style.display = "none";
//     document.getElementById('portfolio').style.display = "none";
//     document.getElementById('contact').style.display = "block";

// }
// function allReset() {
//     document.getElementById('about').style.display = "block";
//     document.getElementById('mysocial').style.display = "none";
//     document.getElementById('portfolio').style.display = "none";
//     document.getElementById('contact').style.display = "none";
// }
//     var arr = [allReset, header,social,portfolio];
//     var x = 0;
//     function next() {
//         x++;
//         if (x >= arr.length) {
//             x = 0;
//         }
//         return arr[x]();
//     }
//     function prev() {
//         x--;
//         if (x < 0) {
//             x = arr.length - 1;
//         }
//         return arr[x]();
//     }

var allSections  = document.querySelectorAll('.section');
var newSection  = allSections.forEach(phaseThrough);
function phaseThrough (section, index) {
    // body... 
    var button = section.querySelector('.phase');
    button.addEventListener('click', nextSection);
    function nextSection() {
        // body... 
        if (index < 3) {
            section.style.display = 'none';
            section.nextElementSibling.style.display = 'block';
        } else{
            section.style.display = 'none';
            allSections[0].style.display = 'block'
        };
    }
    function prevSections(){
        
    }
}