(function() {
            "use strict";
            try {
                const playspaceApi = window.player_instance_fb4b1aa81cb54dc2b25170c6e28d1595;
let left;
let right;
let play;
let pause;
let meta;
let clickButtons;
let titleLink;
var floatCard = top.document.createElement("DIV");
floatCard.style =
  "max-height: calc(60vw/(16/9));background-color: rgb(39, 39, 39);height: 100%;width: 40vw;position: absolute;left: 100%;";
floatCard.setAttribute("class", "cnx-bg-float");
var floatTitle = top.document.createElement("a");
var floatTitleAd = top.document.createElement("a");
floatTitleAd.style =
  'font-size: 1em;width:90%;color: white;font-family: "PT Serif",georgia,times,serif;transform: translate(10px, 10px);position: absolute;';
floatTitleAd.setAttribute("class", "cnx-mcc-ad-caption");
floatCard.prepend(floatTitleAd);
floatTitle.style =
  'font-size: 1em;width:90%;color: white;font-family: "PT Serif",georgia,times,serif;transform: translate(10px, 10px);position: absolute;';
floatTitle.setAttribute("class", "cnx-mcc-title");
floatTitle.addEventListener("touchend", openNav);
floatCard.prepend(floatTitle);

playspaceApi.on(cnxps.configEvents.PlayerFloatChanged, function(details) {
  if (details == "float") {
    top.document.querySelector(".cnx-playspace-container").prepend(floatCard);

    redirectSlide(meta[playspaceApi.getStoryPosition()].title);
  } else {
    floatCard.parentNode.removeChild(floatCard);
  }
});


function float() {
  let nav = document.querySelector('.main.can-animate')
  if (document.querySelector('.bx-pusher')) {
    let banner = document.querySelector('.bx-pusher');

    function callback(mutationsList) {
      if (window.getComputedStyle(banner).visibility === 'visible') {

        let h = nav.getBoundingClientRect().height + nav.getBoundingClientRect().y
        playspaceApi.setFloatingSettings({
          floatingGutterY: h
        })
      } else {

        let h = nav.getBoundingClientRect().height + nav.getBoundingClientRect().y
        playspaceApi.setFloatingSettings({
          floatingGutterY: h
        });
        mutationObserver.disconnect();
      }
    }
    callback()
    const mutationObserver = new MutationObserver(callback)
    mutationObserver.observe(banner, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['style', 'class']
    })
  }
}

playspaceApi.on(playspaceApi.configEvents.ChangeSlide, function(eventData) {
  clickButtons = top.document.getElementsByClassName("cnx-ui-ps-cta");
  top.document.getElementsByClassName("cnxClosebtn")[0].onclick = closeNav;
  top.document
    .querySelector(".cnx-ui-ps__wrapper")
    .setAttribute("href", "javascript:void(0);");

  for (var i = 0; i < clickButtons.length; i++) {
    clickButtons[i].removeAttribute("href");
    clickButtons[i].onclick = openNav;
    top.document.querySelector(".cnx-ui-ps__wrapper").onclick = openNav;
  }
  meta = playspaceApi.getStoryMetadata();
  redirectSlide(meta[playspaceApi.getStoryPosition()].title);
});

function redirectSlide(slide_Title) {
  if (top.document.getElementsByClassName("cnx-mcc-title").length !== 0) {
    top.document.getElementsByClassName("cnx-mcc-title")[0].innerHTML =
      slide_Title;
    top.document.getElementsByClassName("cnx-mcc-ad-caption")[0].innerHTML = "Up Next: " + meta[playspaceApi.getStoryPosition() + 1].title;
  }
}

function setIntervalX(callback, delay, repetitions) {
  var x = 0;
  var intervalID = window.setInterval(function() {
    callback();

    if (++x === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
}

// This will be repeated 5 times with 1 second intervals:
setIntervalX(
  function() {
    if (
      top.document.getElementsByClassName("cnx-ps")[0].children.length !== 0
    ) {
      float();
      top.document
        .querySelector(".cnx-ui-ps__wrapper")
        .setAttribute("href", "javascript:void(0);");
      clickButtons = top.document.getElementsByClassName("cnx-ui-ps-cta");
      top.document.getElementsByClassName("cnxClosebtn")[0].onclick = closeNav;

      for (var i = 0; i < clickButtons.length; i++) {
        clickButtons[i].removeAttribute("href");
        clickButtons[i].onclick = openNav;
        top.document.querySelector(".cnx-ui-ps__wrapper").onclick = openNav;
      }

      meta = playspaceApi.getStoryMetadata();
      redirectSlide(meta[playspaceApi.getStoryPosition()].title);
    }
  },
  60,
  5
);

function openNav() {
  var clickUrl =
    playspaceApi.getStoryMetadata()[playspaceApi.getStoryPosition()].clickUrl;
  var title =
    playspaceApi.getStoryMetadata()[playspaceApi.getStoryPosition()].title;
  playspaceApi.pause();
  top.document.getElementById("cnxMyNav").style.width = "100%";
  renderElements(clickUrl, title);
  disableScrolling();
}

function renderElements(url, title) {
  var overlay_content =
    top.document.getElementsByClassName("cnxOverlayContent")[0];
  var x = window.top.document.createElement("script");
  x.setAttribute("id", "2a11f4cdb9b74d9d93a24b19e8570ce6");
  overlay_content.appendChild(x);
  !(function(n) {
    if (!window.cnx) {
      (window.cnx = {}), (window.cnx.cmd = []);
      var t = n.createElement("iframe");
      (t.display = "none"),
      (t.onload = function() {
        var n = t.contentWindow.document,
          c = n.createElement("script");
        (c.src = "//cd.connatix.com/connatix.player.js"),
        c.setAttribute("async", "1"),
          c.setAttribute("type", "text/javascript"),
          n.body.appendChild(c);
      }),
      n.head.appendChild(t);
    }
  })(document);
  cnx.cmd.push(function() {
    cnx({
      playerId: "d47c6801-73bd-4b2d-988a-1013a7775dec",
      settings: {
        playlist: [{
          title: title,
          description: "Demo External Video",
          sources: [{
            file: url,
            quality: cnx.configEnums.QualityEnum.High1080p,
          }, ],
        }, ],
      },
    }).render("2a11f4cdb9b74d9d93a24b19e8570ce6");
  });
}

function closeNav() {
  playspaceApi.play();
  top.document.getElementById("cnxMyNav").style.width = "0%";
  let ele = top.document.querySelector(".cnx-el");
  ele.parentNode.removeChild(ele);
  enableScrolling();
}

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function() {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function() {};
}

//close out main overlay if escape key
window.top.document.addEventListener("keyup", function(e) {
  if (e.keyCode == 27) {
    closeNav();
  }
});

var cnxFloClo = function() {
  setTimeout(function() {
    playspaceApi.play()
  }, 2000);
};
playspaceApi.on(cnxps.configEvents.CloseButtonClicked, cnxFloClo);


            }catch(e){
                console.warn('---CnxCustomApiError---');
                console.warn(e.message);
            }
          })()