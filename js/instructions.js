browserSelect = document.querySelector("select.btn");
browserSelect.value = browser();

formPages = document.querySelectorAll(".pageBackground");

for (var i = 1; i < formPages.length; i++) {
  formPages[i].classList.add("hidden");
}

function nextPage(currentPage) {
  loadEndPageContent();

  document.querySelectorAll(".pageBackground")[currentPage].classList.add("leaving");
  document.querySelectorAll(".pageBackground")[currentPage + 1].classList.add("arriving");
  document.querySelectorAll(".pageBackground")[currentPage + 1].classList.remove("hidden");

  setTimeout(function() {
    document.querySelectorAll(".pageBackground")[currentPage].classList.add("hidden");
    document.querySelectorAll(".pageBackground")[currentPage].classList.remove("leaving");
    document.querySelectorAll(".pageBackground")[currentPage + 1].classList.remove("arriving");
  }, 0.375 * 1000);
}

function loadEndPageContent() {
  var browser = browserSelect.options[browserSelect.selectedIndex].innerText;
  instructions = {
    "Chrome" : `<p>Unfortunatly, FastForward was removed from the Chrome Web Store. You will have to manually install it instead.</p>
    Manually Installing FastForward:<br>
    1. Download the zip file from our <a href="https://nightly.link/FastForwardTeam/FastForward/workflows/main/main/FastForward_chromium.zip">GitHub page</a>.<br>
    2. Unzip the file.<br>
    This should leave you with a single file named <code>FastForward_chromium_0.XXXX.zip</code>.<br>
    If the file is called <code>FastForward_chromium.zip</code>, you have not properly extracted it and will need to try again.<br>
    3. Open <code>${browser == "Opera" ? "opera" : browser == "Brave" ? "brave" : "chrome"}://extensions</code><br>
    4. Enable developer mode, which can be found in the top right corner.<br>
    5. Drag the <code>FastForward_chromium_0.XXXX.zip</code> file that you downloaded earler into the extentions page.<br>
    FastForward should now be installed!`,
    "Firefox" : `<p>FastForward is avalible on the Mozilla Firefox Addons Store!</p>
    <a href="https://addons.mozilla.org/en-US/firefox/addon/FastForwardteam/">Install FastForward</a>`,
    "Edge" : `<p>FastForward is avalible on the Microsoft Edge Addons Store!</p>
    <a href="https://microsoftedge.microsoft.com/addons/detail/FastForward/ldcclmkclhomnpcnccgbgleikchbnecl/">Install FastForward</a>`,
    "Safari" : `<p>Unfortunatly, FastForward is not currently supported on Safari.</p>
    We reccomend that you download Mozilla Firefox or Google Chrome instead.<br>
    <a href="https://www.mozilla.org/en-US/firefox/new/">Download FireFox</a><br>
    <a href="https://www.google.com/chrome/">Download Chrome</a>`,
    "Other": `<p>You can download FastForward builds with the folling links:</p>
    <a href="https://nightly.link/FastForwardTeam/FastForward/workflows/main/main/FastForward_chromium.zip">Download FastForward for Chromium Based Browsers</a><br>
    <a href="https://nightly.link/FastForwardTeam/FastForward/workflows/main/main/FastForward_firefox.zip">Download FastForward for Firefox Based Browsers</a><br>
    <p>If your browser isn't one of these, please contact us on our <a href="https://discord.com/invite/RSAf7b5njt">Discord server</a></p>`
  }

  
  document.querySelector("#endPage").innerHTML = `
  <span>${browserSelect.options[browserSelect.selectedIndex].innerText}</span><br><br>
  ${instructions[browserSelect.value]}`;
}

function fixHeight() {
  width = document.querySelector("section h2").offsetWidth;
  for (var i = 0; i < formPages.length; i++) {
    formPages[i].style.width = width + "px";
  }

  document.querySelector("#form").style.marginBottom = document.querySelector(".pageBackground:not(.hidden):not(.leaving)").offsetHeight + "px"

  setTimeout(function() {
    fixHeight();
  }, 50)
}

fixHeight();