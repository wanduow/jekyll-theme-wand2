function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue)))
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}

function toggleMenu() {
    var extendedItems = document.getElementsByClassName("extended");
    var nav = document.getElementsByTagName("nav");

    if(extendedItems.length > 0){
        var navItems = document.getElementsByClassName("navlink");
        nav[0].classList.remove("extendnav");
        for (i = 0; i < navItems.length; i++){
            navItems[i].classList.remove("extended");
        }
    }
    else {
        var navItems = document.getElementsByClassName("navlink");
        nav[0].classList.add("extendnav");
        for (i = 0; i < navItems.length; i++){
            navItems[i].classList.add("extended");
        }
    }
}

function checkScrollBars() {
  var clientHeight = document.getElementById('container').clientHeight;

  //console.log('Scroll height: ' + clientHeight + ' height: ' + document.body.clientHeight + ' width: ' + window.innerWidth);
  if(clientHeight > document.body.clientHeight && window.innerWidth > 750){
      document.getElementById('body').style.marginRight = '-' + getScrollBarWidth() + 'px';
  }
  else {
    document.getElementById('body').style.marginRight = '0';
  }
}

function getScrollBarWidth () {
  var inner = document.createElement('p');
  inner.style.width = "100%";
  inner.style.height = "200px";

  var outer = document.createElement('div');
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild (inner);

  document.body.appendChild (outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild (outer);

  return (w1 - w2);
}

window.addEventListener('resize', function(event){
  console.log('Testing 123');
  checkScrollBars();
});