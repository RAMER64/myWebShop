document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#register"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#register').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#register').style.marginLeft = '0px';
  });
  document.querySelector('[href="#registerComplite"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#register').style.marginLeft = '0px';
    window.open("main2.html", "_self");
  });

  document.querySelector('[href="#sigin"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#sigin').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close2"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#sigin').style.marginLeft = '0px';
  });
  document.querySelector('[href="#siginComplite"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#sigin').style.marginLeft = '0px';
    window.open("main.html", "_self");
  });
  
  document.querySelector('[href="#productsModal"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#productsModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close3"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#productsModal').style.marginLeft = '0px';
  });
  document.querySelector('[href="#siginComplite1"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#productsModal').style.marginLeft = '0px';
    window.open("main.html", "_self");
  });
  
});

document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#productsModal2"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#productsModal2').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close4"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#productsModal2').style.marginLeft = '0px';
    });
    document.querySelector('[href="#siginComplite2"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#productsModal2').style.marginLeft = '0px';
      window.open("main.html", "_self");
    });
});

document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#productsModal3"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#productsModal3').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close5"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#productsModal3').style.marginLeft = '0px';
    });
    document.querySelector('[href="#siginComplite3"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#productsModal3').style.marginLeft = '0px';
      window.open("main.html", "_self");
    });
});

document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#productsModal4"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#productsModal4').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close6"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#productsModal4').style.marginLeft = '0px';
    });
    document.querySelector('[href="#siginComplite4"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#productsModal4').style.marginLeft = '0px';
      window.open("main.html", "_self");
    });
});
