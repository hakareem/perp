function divHideShow(divToHideOrShow) {
  let div = document.getElementById(divToHideOrShow);

  if (div.style.display == "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

// const copyright = document.querySelector(".copyright");

// const date = new Date();
// const year = date.getFullYear();

// copyright.textContent = `Copyright ${year}, Harith A Kareem`;

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    window.addEventListener("hashchange", function () {
      scrollBy(0, 0);
    });
  } else {
    window.addEventListener("hashchange", function () {
      scrollBy(0, -30);
    });
  }
}

let x = window.matchMedia("(max-width: 600px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
