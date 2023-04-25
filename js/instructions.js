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
    "Chrome" : `<p>Unfortunately, FastForward was removed from the Chrome Web Store. You will have to manually install it instead.</p>
    Manually Installing FastForward:<br>
    1. Download the zip file from <a href="https://nightly.link/FastForwardTeam/FastForward/workflows/main/main/FastForward_chromium.zip">this link</a>.<br>
    2. Unzip (extract) the zip file.<br>
    This should leave you with a single file named <code>FastForward_chromium_0.XXXX.zip</code>.<br>
    If the file is called <code>FastForward_chromium.zip</code>, you have not properly extracted it and will need to try again.<br>
    3. Open <code>${browser == "Opera" ? "opera" : browser == "Brave" ? "brave" : "chrome"}://extensions</code><br>
    4. Enable developer mode, which can be found in the top right corner.<br>
    5. Drag the <code>FastForward_chromium_0.XXXX</code> folder that you extracted into the extentions page.<br>
    FastForward should now be installed!`,

//     "Firefox" : `<p>Unfortunately, FastForward was removed from the Firefox Store. You will have to manually install it instead.</p>
//     Manually Installing FastForward:<br>
//     1. Download the zip file from <a href="https://nightly.link/FastForwardTeam/FastForward/workflows/main/main/FastForward_firefox.zip">this link</a>.<br>
//     2. Unzip (extract) the zip file so that you have <code>FastForward_firefox_0.XXXX.xpi</code>.<br>
//     3. Open <code>about:config</code>, and press Accept the Risk and Continue.<br>
//     4. Search for <code>xpinstall.signatures.required</code>, and make sure it is set to false using the button on the right.<br>
//     5. Restart Firefox by closing all browser windows and opening it again.
//     6. Open <code>about:addons</code><br>
//     7. Drag your <code>FastForward_firefox_X.XXXX.xpi</code> into Firefox, and click "add" when prompted.<br>
//     FastForward should now be installed!`,
    "Firefox" : `<p>Unfortunately, FastForward was removed from the Firefox Store. You will have to manually install it instead.</p>
    Manually Installing FastForward:<br>
    1. Download the xpi file from <a href="https://github.com/FastForwardTeam/FastForward/releases/download/0.2237/fastforwardteam-0.2237.xpi">this link</a>.<br>
    2. Click continue to installation, and then click add.
    FastForward should now be installed!`

    "Edge" : `<p>FastForward is avalible on the Microsoft Edge Addons Store!</p>
    <a href="https://microsoftedge.microsoft.com/addons/detail/FastForward/ldcclmkclhomnpcnccgbgleikchbnecl/">Install FastForward</a>`,

    "Safari" : `<p>Unfortunately, FastForward is not currently supported on Safari.</p>
    We recommend that you download Mozilla Firefox or Google Chrome instead.<br>
    <a href="https://www.mozilla.org/en-US/firefox/new/">Download Firefox</a><br>
    <a href="https://www.google.com/chrome/">Download Chrome</a>`,

    "Other": `<p>You can download FastForward builds with the following links:</p>
    <a href="https://nightly.link/FastForwardTeam/FastForward/workflows/main/main/FastForward_chromium.zip">Download FastForward for Chromium Based Browsers</a><br>
    <a href="https://nightly.link/FastForwardTeam/FastForward/workflows/main/main/FastForward_firefox.zip">Download FastForward for Firefox Based Browsers</a><br>
    <br>
    <a href="https://github.com/FastForwardTeam/FastForward/blob/main/INSTALLING.md">Installation Instructions</a><br>
    <p>If your browser isn't one of these, please contact us on our <a href="https://discord.com/invite/RSAf7b5njt">Discord server</a></p>`
  }

  
  document.querySelector("#endPage").innerHTML = `
  <span>${browserSelect.options[browserSelect.selectedIndex].innerText}</span><br><br>
  ${instructions[browserSelect.value] + "<br><br><p>Not working? Check our <a href='https://github.com/FastForwardTeam/FastForward/blob/main/INSTALLING.md#troubleshooting'>Troubleshooting Page</a>.</p>"}`;
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
