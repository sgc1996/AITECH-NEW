// Navigation megamenu
function Menu(e) {
    let list = document.querySelector("#mainMenuTitle");
  
    e.name === "menu-outline"
      ? ((e.name = "close-outline"),
        list.classList.add("top-[80px]"),
        list.classList.add("opacity-100"))
      : ((e.name = "menu-outline"),
        list.classList.remove("top-[80px]"),
        list.classList.remove("opacity-100"));
  }
  
  function SubMenu(e, subMenuId) {
    let list = document.getElementById(subMenuId);
  
    if (window.innerWidth < 1024) {
      if (e.name === "add-outline") {
        e.name = "remove-outline";
        list.classList.remove("opacity-0", "max-h-0", "overflow-hidden");
        list.classList.add("opacity-100", "max-h-[1000px]", "overflow-auto");
      } else {
        e.name = "add-outline";
        list.classList.add("opacity-0", "max-h-0", "overflow-hidden");
        list.classList.remove("opacity-100", "max-h-[1000px]", "overflow-auto");
      }
    }
  }