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