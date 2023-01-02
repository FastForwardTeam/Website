bypasses = {}
fetch("https://raw.githubusercontent.com/FastForwardTeam/FastForward/manifest-v3/bypasssites.md").then((response) => {
  response.text().then((data) => {
    data = data.replace(/  \n/g, "\n").replace(/\\/g, "").split("\n");
    data.splice(0, 6);
    data.pop();
    for (i = 0; i < data.length; i++) {
      bypasses[data[i].split(" ")[0]] = data[i].split(" ")[1];
    }
  })
});

function values(b, c, d, e, f) {
  document.getElementById("bypass").innerHTML = b;
  document.getElementById("available").innerHTML = c;
  document.getElementById("mv2").innerHTML = d;
  document.getElementById("mv3").innerHTML = e;
  document.getElementById("extraInfo").innerHTML = f;
}

function check() {
  url = this.value;
  if(url != "") {
    for(i = 0; i < Object.keys(bypasses).length; i++) {
      bypass = Object.keys(bypasses)[i];
      if(bypass[0] == "(") {
        regex = new RegExp(".*" + bypass.slice(2, -2).replace(/\//g, "\\/").replace(/https:\/\//g, "") + ".*")
        if(regex.test(url)) {
          values(bypass, (bypasses[bypass] == undefined || bypasses[bypass] == "C") ? "✓" : "✗", bypasses[bypass] == undefined || bypasses[bypass] == "C" ? "✓" : "✗", bypasses[bypass] == "C" ? "✓" : "✗", bypasses[bypass] == "X" ? "We no longer bypass this site because it is no longer active, or harmful to your computer. Dont think so? <a class='link' href='https://github.com/FastForwardTeam/FastForward/issues/new'>Open an issue on GitHub</a>" : "Bypass not working? <a class='link' href='https://github.com/FastForwardTeam/FastForward/issues/new'>Open an issue on GitHub</a>");
          return;
        }
      }
      if(bypass.includes(url) || url.includes(bypass)) {
        values(bypass, (bypasses[bypass] == undefined || bypasses[bypass] == "C") ? "✓" : "✗", bypasses[bypass] == undefined ? "✓" : "✗", bypasses[bypass] == "C" ? "✓" : "✗", bypasses[bypass] == "X" ? "We no longer bypass this site because it is no longer active, or harmful to your computer. Dont think so? <a class='link' href='https://github.com/FastForwardTeam/FastForward/issues/new'>Open an issue on GitHub</a>" : "Bypass not working? <a class='link' href='https://github.com/FastForwardTeam/FastForward/issues/new'>Open an issue on GitHub</a>");
        return;
      }
    }
    values("No bypasses found", "✗", "✗", "✗", "There is no bypass for this site. <a class='link' href='https://github.com/FastForwardTeam/FastForward/issues/new'>Open an issue on GitHub?</a>");
  } else {
    values("", "", "", "", "");
  }
}

document.getElementById("url").oninput = check;




