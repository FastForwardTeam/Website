bypasses = {}
fetch("https://raw.githubusercontent.com/FastForwardTeam/FastForward/manifest-v3/Bypassed.md").then((response) => {
  response.text().then((data) => {
    data = data.split("\n");
    data.splice(0, 16);
    data.pop();
    for (i = 0; i < data.length; i++) {
      data[i].replace(/ /g, "").split("|").splice(1, 2)
      bypasses[data[i].replace(/ /g, "").split("|")[1]] = data[i].replace(/ /g, "").split("|")[2];
    }
  })
});

function values(a, b, c, d) {
  document.getElementById("bypass").innerHTML = a;
  document.getElementById("mv2").innerHTML = b;
  document.getElementById("mv3").innerHTML = c;
  document.getElementById("extraInfo").innerHTML = d;
}

function check() {
  url = this.value;
  if(url != "") {
    for(i = 0; i < Object.keys(bypasses).length; i++) {
      bypass = Object.keys(bypasses)[i];
      if(bypass.includes(url) || url.includes(bypass)) {
        values(bypass, (bypasses[bypass] == undefined || bypasses[bypass][0] == "✅") ? "✓" : "✗", bypasses[bypass][0] == "✅" ? "✓" : "✗", bypasses[bypass][0] == "🛑" ? "We no longer bypass this site because it is no longer active, or harmful to your computer. Dont think so? <a class='link' href='https://github.com/FastForwardTeam/FastForward/issues/new'>Open an issue on GitHub</a>" : "Bypass not working? <a class='link' href='https://github.com/FastForwardTeam/FastForward/issues/new'>Open an issue on GitHub</a>");
        return;
      }
    }
    values("No bypasses found", "✗", "✗", "There is no bypass for this site. <a class='link' href='https://github.com/FastForwardTeam/FastForward/issues/new'>Open an issue on GitHub?</a>");
  } else {
    values("", "", "", "");
  }
}

document.getElementById("url").oninput = check;




