var lastScrollTop=0;
navbar=document.getElementById("navbar");
window.addEventListener("scroll",function(){
  var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top="-80px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop=scrollTop;
});

// for parallex

let dec1=document.getElementById("dec1");
let dec2=document.getElementById("dec2");
window.addEventListener('scroll',function(){
  var value=window.scrollY;
  dec1.style.top=value * 0.65 +"px";
  dec2.style.top=value * 0.5 +"px";
})

// SmoothScroll
$('#header a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },1000);
  }
});


//nav bar
var marker=document.querySelector('#marker');
var item=document.querySelectorAll('#header a');

function indicator(e){
  marker.style.left = e.offsetLeft+"px";
  marker.style.width = e.offsetWidth+"px";
}

item.forEach(link => {
  link.addEventListener('click',(e)=>{
    indicator(e.target);
  })
})

//navbar

//header
  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })
//header
