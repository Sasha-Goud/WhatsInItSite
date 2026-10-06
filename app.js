var app = document.getElementById('app');
var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
var heroSlideshowTimer;

var routes = {
  home: renderHome,
  questions: renderQuestions,
  help: renderHelp,
  privacy: renderPrivacy,
  support: renderSupport
};

function getHashRoute() {
  var hash = (location.hash || '#/home').replace(/^#\//, '');
  return hash.split('/')[0] || 'home';
}

function setActive(route) {
  navLinks.forEach(function(link) {
    link.classList.toggle(
      'active',
      link.getAttribute('data-route') === route
    );
  });
}

function navigate() {
  clearInterval(heroSlideshowTimer);
  var route = getHashRoute();

  if (!routes[route]) {
    route = 'home';
  }

  setActive(route);
  routes[route]();
}

function renderHome() {
  app.innerHTML = [
    '<main class="home-page">',

      '<section class="hero-section">',
        '<div class="hero-inner">',
          '<h1 class="hero-heading-desktop"><span>A mobile app to keep track of what’s where</span><span>Designed for personal and business use</span></h1>',
          '<h1 class="hero-heading-mobile">An app to keep track of what’s where for personal and business use.</h1>',

          '<div class="hero-image-frame">',
            '<img class="hero-image active" src="https://media.whatsinit.app/images/blue-cardigan-list-view.png" alt="A woman in a blue cardigan viewing the What’s In It? list view in a storage area">',
            '<img class="hero-image" src="https://media.whatsinit.app/images/warehouse-flight-case-phone.png" alt="A warehouse worker using What’s In It? beside a barcoded flight case and equipment racks" aria-hidden="true">',
            '<img class="hero-image hero-image--digital" src="https://media.whatsinit.app/images/digital-links-kyoto-research.png" alt="Kyoto research links organised in the What’s In It? app" aria-hidden="true">',
          '</div>',

          '<div class="store-buttons">',
            '<a class="store-badge" href="#" aria-label="Download on the App Store"><img src="app-store-badge.png" alt="Download on the App Store"></a>',
            '<a class="store-badge" href="#" aria-label="Get it on Google Play"><img src="google-play-badge.png" alt="Get it on Google Play"></a>',
          '</div>',

        '</div>',
      '</section>',

      '<section class="demo-section">',
        '<div class="demo-frame">',
          '<video class="demo-video" preload="metadata" playsinline aria-label="What’s In It? demo preview">',
            '<source src="https://media.whatsinit.app/video/demo-preview.mp4?v=20261004-5" type="video/mp4">',
            'Your browser does not support video playback.',
          '</video>',
          '<button class="demo-placeholder" type="button" aria-label="Play demo video">',
            '<svg class="demo-play-icon" viewBox="0 0 72 72" aria-hidden="true"><path d="M25 17L55 36L25 55Z"></path></svg>',
          '</button>',
          '<div class="demo-controls" hidden>',
            '<button class="demo-control-button" type="button" data-demo-action="back" aria-label="Go back 10 seconds"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m11 7-5 5 5 5M18 7l-5 5 5 5"></path></svg></button>',
            '<button class="demo-control-button demo-control-toggle" type="button" data-demo-action="toggle" aria-label="Pause video"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7v10M15 7v10"></path></svg></button>',
            '<button class="demo-control-button" type="button" data-demo-action="forward" aria-label="Go forward 10 seconds"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 7 5 5-5 5M6 7l5 5-5 5"></path></svg></button>',
            '<input class="demo-progress" type="range" min="0" max="100" step="0.1" value="0" aria-label="Video position">',
          '</div>',
          '<div class="demo-end-card" hidden>',
            '<img class="demo-end-logo" src="home_logo.png" alt="">',
            '<div class="demo-end-wordmark" aria-label="What’s in it?">What’s<span>init?</span></div>',
            '<p>Scan to download the app</p>',
            '<a class="demo-qr-link" href="https://whatsinit.app/" aria-label="Open the What’s In It? download page">',
              '<img class="demo-qr" src="app-download-qr.png?v=20261004-1" alt="QR code for the What’s In It? download page">',
            '</a>',
            '<button class="demo-replay" type="button" data-demo-action="replay">Replay demo</button>',
          '</div>',
        '</div>',
      '</section>',

      '<section class="use-section">',
        '<h2>Key Features</h2>',
      '</section>',

      '<section class="features-section">',
        '<div class="features-inner">',
          '<div class="home-feature-grid">',
            '<div class="home-feature-card"><strong>What’s In It? works offline</strong><span>Once installed, the app operates entirely offline, except when containers or their records are displayed on a map. It is fully functional throughout storage areas, warehouses and other locations where internet access is unavailable or unreliable.</span></div>',
            '<div class="home-feature-card"><strong>Private on the device</strong><span>Because the app operates offline, all app records are stored locally on the device. They are not uploaded to a server, collected by What’s In It?, or shared with any other organisation. The records remain private and protected by the device’s security.</span></div>',
            '<div class="home-feature-card"><strong>Multi-level nested containers</strong><span>Containers can be placed inside larger containers across multiple levels. The complete location is displayed as a clear hierarchical path, from the outermost container through each nested container to the stored item, making its exact position easy to understand.</span></div>',
            '<div class="home-feature-card"><strong>Built-in voice control</strong><span>Supported app functions can be operated using spoken commands, allowing those functions to be carried out while the phone is held in one hand, leaving the other hand free.</span></div>',
            '<div class="home-feature-card"><strong>Flexible identification methods</strong><span>Containers and their contents can be identified using barcodes, QR codes, handwritten or printed codes, and manually entered names. The identification method can be changed at any time, allowing flexibility of use.</span></div>',
            '<div class="home-feature-card"><strong>Import and export</strong><span>Records can be imported and exported using app transfer files. Reports can be created as PDF, spreadsheet or CSV files, while the contents of an individual container can be exported as a packing list.</span></div>',
            '<div class="home-feature-card"><strong>No subscription</strong><span>The Trial version supports up to 30 records. The Full version removes this limit through a single purchase, with no subscription or repeat payments.</span></div>',
          '</div>',
        '</div>',
      '</section>',

      '<footer class="home-company-footer">',
        '<p>What’s In It? is published by ForeData Limited, United Kingdom. <span aria-hidden="true">·</span> <a href="mailto:info@whatsinit.app">info@whatsinit.app</a> <span aria-hidden="true">·</span> © 2026 ForeData Limited.</p>',
      '</footer>',

    '</main>'
  ].join('');

  var heroImages = Array.prototype.slice.call(document.querySelectorAll('.hero-image-frame .hero-image'));
  var currentHeroImage = 0;

  heroSlideshowTimer = setInterval(function() {
    heroImages.forEach(function(image) {
      image.classList.remove('previous');
    });
    heroImages[currentHeroImage].classList.remove('active');
    heroImages[currentHeroImage].classList.add('previous');
    heroImages[currentHeroImage].setAttribute('aria-hidden', 'true');
    currentHeroImage = (currentHeroImage + 1) % heroImages.length;
    heroImages[currentHeroImage].classList.add('active');
    heroImages[currentHeroImage].removeAttribute('aria-hidden');
  }, 3000);

  var demoVideo = document.querySelector('.demo-video');
  var demoPlayButton = document.querySelector('.demo-placeholder');
  var demoControls = document.querySelector('.demo-controls');
  var demoProgress = document.querySelector('.demo-progress');
  var demoToggle = document.querySelector('[data-demo-action="toggle"]');
  var demoBack = document.querySelector('[data-demo-action="back"]');
  var demoForward = document.querySelector('[data-demo-action="forward"]');
  var demoEndCard = document.querySelector('.demo-end-card');
  var demoReplay = document.querySelector('[data-demo-action="replay"]');
  var demoIsScrubbing = false;
  var demoBlobURL;

  if (demoVideo && demoPlayButton && demoControls && demoProgress && demoToggle && demoBack && demoForward && demoEndCard && demoReplay) {
    var demoSource = demoVideo.querySelector('source');
    var demoSourceURL = demoSource ? demoSource.getAttribute('src') : '';

    function loadSeekableDemoVideo() {
      if (!demoSourceURL || typeof fetch !== 'function') {
        return Promise.resolve();
      }

      return fetch(demoSourceURL, { method: 'HEAD' })
        .then(function(response) {
          var acceptsRanges = response.headers.get('accept-ranges');

          if (acceptsRanges && acceptsRanges.toLowerCase().indexOf('bytes') !== -1) {
            return null;
          }

          return fetch(demoSourceURL).then(function(videoResponse) {
            if (!videoResponse.ok) {
              throw new Error('The demo video could not be loaded.');
            }

            return videoResponse.blob();
          });
        })
        .then(function(videoBlob) {
          if (!videoBlob) {
            return;
          }

          return new Promise(function(resolve) {
            demoBlobURL = URL.createObjectURL(videoBlob);
            demoVideo.addEventListener('loadedmetadata', resolve, { once: true });
            demoVideo.src = demoBlobURL;
            demoVideo.load();
          });
        })
        .catch(function() {
          return undefined;
        });
    }

    var demoSeekableReady = loadSeekableDemoVideo();

    function hideDemoControls() {
      demoControls.hidden = true;
    }

    function showDemoControls() {
      demoControls.hidden = false;
    }

    function updateDemoToggle() {
      var isPaused = demoVideo.paused;
      demoToggle.innerHTML = isPaused
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="demo-icon-play" d="m9 7 8 5-8 5Z"></path></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7v10M15 7v10"></path></svg>';
      demoToggle.setAttribute('aria-label', isPaused ? 'Play video' : 'Pause video');
    }

    function updateDemoProgressStyle() {
      var maximum = Number(demoProgress.max) || 100;
      var current = Number(demoProgress.value) || 0;
      var percentage = Math.min(100, Math.max(0, (current / maximum) * 100));
      demoProgress.style.setProperty('--demo-progress-percent', percentage + '%');
    }

    function seekDemoVideo(targetTime) {
      var duration = Number.isFinite(demoVideo.duration) ? demoVideo.duration : targetTime;
      var safeTime = Math.min(Math.max(0, targetTime), duration);

      demoVideo.currentTime = safeTime;
      demoProgress.value = String(safeTime);
      updateDemoProgressStyle();
      showDemoControls();
    }

    demoPlayButton.addEventListener('click', function() {
      demoPlayButton.setAttribute('aria-label', 'Loading demo video');

      demoSeekableReady.then(function() {
        demoEndCard.hidden = true;
        demoVideo.hidden = false;
        demoPlayButton.hidden = true;
        demoPlayButton.setAttribute('aria-label', 'Play demo video');
        demoVideo.play();
      });
    });

    demoVideo.addEventListener('click', function() {
      if (demoControls.hidden) {
        showDemoControls();
      } else {
        hideDemoControls();
      }
    });

    demoToggle.addEventListener('click', function() {
      if (demoVideo.paused) {
        demoVideo.play();
      } else {
        demoVideo.pause();
      }
    });

    demoBack.addEventListener('click', function() {
      seekDemoVideo(demoVideo.currentTime - 10);
    });

    demoForward.addEventListener('click', function() {
      seekDemoVideo(demoVideo.currentTime + 10);
    });

    demoProgress.addEventListener('pointerdown', function() {
      demoIsScrubbing = true;
    });

    demoProgress.addEventListener('input', function() {
      seekDemoVideo(Number(demoProgress.value));
    });

    demoProgress.addEventListener('change', function() {
      seekDemoVideo(Number(demoProgress.value));
      demoIsScrubbing = false;
    });

    demoProgress.addEventListener('pointerup', function() {
      demoIsScrubbing = false;
    });

    demoReplay.addEventListener('click', function() {
      demoEndCard.hidden = true;
      demoVideo.hidden = false;
      demoVideo.currentTime = 0;
      demoProgress.value = '0';
      updateDemoProgressStyle();
      demoVideo.play();
    });

    demoVideo.addEventListener('loadedmetadata', function() {
      demoProgress.max = String(demoVideo.duration);
      updateDemoProgressStyle();
    });

    demoVideo.addEventListener('timeupdate', function() {
      if (!demoIsScrubbing) {
        demoProgress.value = String(demoVideo.currentTime);
        updateDemoProgressStyle();
      }
    });

    demoVideo.addEventListener('play', function() {
      demoPlayButton.hidden = true;
      updateDemoToggle();
    });

    demoVideo.addEventListener('pause', function() {
      updateDemoToggle();

      if (!demoVideo.ended) {
        showDemoControls();
      }
    });

    demoVideo.addEventListener('ended', function() {
      demoVideo.hidden = true;
      demoEndCard.hidden = false;
      demoPlayButton.hidden = true;
      demoProgress.value = '0';
      updateDemoProgressStyle();
      hideDemoControls();
    });
  }
}

function renderQuestions() {
  app.innerHTML = [
    '<section class="section questions-page">',
      '<h1>Questions Answered</h1>',

      '<div class="qa-list">',
        '<div class="qa-item"><h2>What is What’s In It?</h2><p>What’s In It? is an app for keeping track of physical items and containers that are packed, stored or in transit, as well as digital assets and reference materials.</p><p>It can be used for home storage, business stock, equipment, tools, props and supplies, research materials, writers’ source material and collections of web links.</p><p>The structure is flexible, allowing it to be adapted imaginatively to many types of physical or digital organisation. For example, a container can represent a subject, nested containers can represent folders or categories within that subject, and individual items can contain links to documents, websites, videos or social media pages.</p></div>',

        '<div class="qa-item"><h2>Does the app need an internet connection?</h2><p>No. Once installed, What’s In It? operates entirely offline for all functions except displaying containers or their records on a map. Records can be created, viewed, searched and managed without an internet connection. A connection is required only when mapping information needs to be loaded.</p></div>',

        '<div class="qa-item"><h2>Where is my information stored?</h2><p>All information entered into What’s In It? is stored locally on the device. App records are not uploaded to a server, collected by What’s In It?, or shared with any other organisation. Information leaves the device only when an export, share or transfer function is deliberately used, and otherwise remains protected by the device’s security.</p></div>',

        '<div class="qa-item"><h2>How are containers and items identified?</h2><p>What’s In It? provides a flexible choice of identification methods. Each container or item can be identified using a barcode, QR code, handwritten or printed code, or manually entered name, allowing the most suitable method to be selected for each record. Different methods can be used together and changed at any time.</p></div>',

        '<div class="qa-item"><h2>Can containers be placed inside other containers?</h2><p>Yes. What’s In It? supports multi-level nested containers, allowing smaller containers to be placed inside progressively larger ones. The complete location is displayed as a clear hierarchical path, from the outermost container through each nested level to the stored item.</p><p><strong>For example:</strong> Warehouse › Aisle 4 › Cabinet B › Drawer 2 › Camera lens.</p></div>',

        '<div class="qa-item"><h2>Can records be transferred between devices?</h2><p>Yes. Records can be exported as What’s In It? transfer files and imported into the app on another device. A transfer file can contain the entire database, but a complete transfer is not required. An individual container can be opened and transferred together with its contents.</p><p>Every transfer is deliberately initiated; records are not uploaded, synchronised or transferred automatically.</p></div>',

        '<div class="qa-item"><h2>Can information be exported?</h2><p>Yes. Reports can be created as PDF, spreadsheet or CSV files. When the contents of an individual container are exported, the resulting report can be used as a packing list for items that are stored, moved, transported or supplied for hire.</p></div>',

        '<div class="qa-item"><h2>What is included in the Trial version?</h2><p>The Trial version includes every app feature and supports a total of 30 records, with items and containers counted together. This allows the complete app to be evaluated before upgrading to the Full version.</p></div>',

        '<div class="qa-item"><h2>How does the Full version work?</h2><p>The Full version removes the 30-record limit through a one-time purchase, allowing an unlimited number of item and container records to be created. There is no subscription, recurring charge or repeat payment.</p></div>',
      '</div>',
    '</section>'
  ].join('');
}

var manualPage = 1;
var manualPageCount = 30;

function renderHelp() {
  app.innerHTML = [
    '<section class="section help-page">',
      '<div class="help-topbar">',
        '<button class="manual-index-button" type="button" id="manual-index">',
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5L8 12L15 19"></path></svg>',
          '<span>Back to index</span>',
        '</button>',
        '<a class="manual-download" href="https://media.whatsinit.app/manual/user_manual.pdf?v=20261004-2" download>Download PDF</a>',
      '</div>',

      '<div class="manual-viewer">',
        '<button class="manual-arrow" type="button" id="manual-prev" aria-label="Previous page"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 3.5H13L4.5 12 13 20.5H19.5L11 12Z"></path></svg></button>',
        '<div class="manual-page-frame">',
          '<img id="manual-page-image" alt="What’s In It? user manual page">',
          '<div class="manual-contents-links" id="manual-contents-links" aria-label="Contents page links">',
            '<button type="button" style="--column:0;--row:1" data-page="3" aria-label="Home page"></button>',
            '<button type="button" style="--column:0;--row:2" data-page="4" aria-label="Identifying options"></button>',
            '<button type="button" style="--column:0;--row:3" data-page="5" aria-label="Putting items away"></button>',
            '<button type="button" style="--column:0;--row:4" data-page="8" aria-label="New Container"></button>',
            '<button type="button" style="--column:0;--row:5" data-page="9" aria-label="Open a container"></button>',
            '<button type="button" style="--column:0;--row:6" data-page="10" aria-label="Add an item - Standard view"></button>',
            '<button type="button" style="--column:0;--row:7" data-page="11" aria-label="Add an item - Extended view"></button>',
            '<button type="button" style="--column:0;--row:8" data-page="12" aria-label="Put a container inside another container"></button>',
            '<button type="button" style="--column:0;--row:9" data-page="13" aria-label="What’s In It?"></button>',
            '<button type="button" style="--column:1;--row:0" data-page="14" aria-label="Where is it?"></button>',
            '<button type="button" style="--column:1;--row:1" data-page="15" aria-label="Everything - List view"></button>',
            '<button type="button" style="--column:1;--row:2" data-page="20" aria-label="Favourites"></button>',
            '<button type="button" style="--column:1;--row:3" data-page="21" aria-label="Export and Import"></button>',
            '<button type="button" style="--column:1;--row:4" data-page="22" aria-label="Storage rules"></button>',
            '<button type="button" style="--column:1;--row:5" data-page="23" aria-label="Voice Control"></button>',
            '<button type="button" style="--column:1;--row:6" data-page="25" aria-label="Automatic Entries and Updates"></button>',
            '<button type="button" style="--column:1;--row:7" data-page="26" aria-label="Safeguards and Warnings"></button>',
            '<button type="button" style="--column:1;--row:8" data-page="28" aria-label="Preferences"></button>',
            '<button type="button" style="--column:1;--row:9" data-page="29" aria-label="Online Help"></button>',
          '</div>',
        '</div>',
        '<button class="manual-arrow" type="button" id="manual-next" aria-label="Next page"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 3.5H11L19.5 12 11 20.5H4.5L13 12Z"></path></svg></button>',
      '</div>',
    '</section>'
  ].join('');

  document.getElementById('manual-prev').addEventListener('click', function() {
    if (manualPage > 1) {
      manualPage--;
      updateManualPage();
    }
  });

  document.getElementById('manual-next').addEventListener('click', function() {
    if (manualPage < manualPageCount) {
      manualPage++;
      updateManualPage();
    }
  });

  document.getElementById('manual-index').addEventListener('click', function() {
    manualPage = 2;
    updateManualPage();
  });

  document.getElementById('manual-contents-links').addEventListener('click', function(event) {
    var link = event.target.closest('[data-page]');
    if (!link) return;
    manualPage = Number(link.getAttribute('data-page'));
    updateManualPage();
  });

  updateManualPage();
}

function updateManualPage() {
  var image = document.getElementById('manual-page-image');
  var prev = document.getElementById('manual-prev');
  var next = document.getElementById('manual-next');
  var indexButton = document.getElementById('manual-index');
  var contentsLinks = document.getElementById('manual-contents-links');
  var pageFrame = document.querySelector('.manual-page-frame');

  if (!image) return;

  image.src = 'https://media.whatsinit.app/manual/pages/page-' + String(manualPage).padStart(2, '0') + '.png?v=20261004-2';
  contentsLinks.hidden = manualPage !== 2;
  indexButton.hidden = manualPage === 2;
  pageFrame.classList.toggle('manual-page-frame--index', manualPage === 2);
  prev.disabled = manualPage === 1;
  next.disabled = manualPage === manualPageCount;
}

function renderPrivacy() {
  app.innerHTML = [
    '<section class="section privacy-page">',
      '<h1>Privacy Policy</h1>',

      '<div class="prose">',
        '<p>What’s In It? is designed so that app records remain private and are stored locally on the device.</p>',

      '<h2>Information stored by the app</h2>',
        '<p>All information entered into What’s In It?, including item and container records, is stored locally on the device. App records are not uploaded to a server or stored by ForeData Limited.</p>',

      '<h2>Internet connection</h2>',
        '<p>Once installed, What’s In It? operates entirely offline for all functions except displaying containers or their records on a map. Records can be created, viewed, searched and managed without an internet connection. A connection is required only when mapping information needs to be loaded.</p>',

      '<h2>Photos and camera access</h2>',
        '<p>Camera and photo access is used only when a photograph is taken or selected for a record, or when the camera is required for an identification function. Photographs attached to app records are stored locally and are not uploaded by What’s In It?</p>',

      '<h2>Location access</h2>',
        '<p>Location access is used only when the current location is deliberately saved with a record. Saved location information forms part of the locally stored app record. An internet connection is required when records are displayed using the mapping service.</p>',

      '<h2>Exporting and transferring data</h2>',
        '<p>App records leave the device only when an export, share or transfer is deliberately initiated. A transfer file can contain the complete database or an individual container together with its contents. Reports can be created as PDF, spreadsheet or CSV files, and the contents of an individual container can be exported as a packing list.</p>',

      '<h2>Data collection</h2>',
        '<p>What’s In It? does not collect app-record data, upload it to a company server or share it with another organisation. Records remain under the control of the device holder unless they are deliberately exported, shared or transferred.</p>',

      '<h2>Device security</h2>',
        '<p>Because records are stored locally, their protection is provided by the security safeguards of the device on which the app is installed.</p>',
      '</div>',
    '</section>'
  ].join('');
}

function renderSupport() {
  app.innerHTML = [
    '<section class="section support-page">',
      '<div class="prose">',
        '<h1 class="support-intro">Help for What’s In It? is available in several formats.</h1>',

        '<div class="support-manual-row">',
          '<div class="support-manual-copy">',
            '<h2>PDF user manual</h2>',
            '<p>Download the complete user manual or view it online.</p>',
          '</div>',
          '<div class="support-manual-actions" aria-label="User manual options">',
            '<a class="support-manual-action" href="https://media.whatsinit.app/manual/user_manual.pdf?v=20261004-2" download aria-label="Download the PDF user manual">',
              '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v3h14v-3"></path></svg>',
              '<span>Download</span>',
            '</a>',
            '<a class="support-manual-action" href="#/help" aria-label="View the user manual online">',
              '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path><circle cx="12" cy="12" r="2.7"></circle></svg>',
              '<span>View online</span>',
            '</a>',
          '</div>',
        '</div>',

        '<div class="support-method-card">',
          '<h2>Help in the app</h2>',
          '<p>Help is also available directly within the What’s In It? app.</p>',
        '</div>',

        '<div class="support-method-card">',
          '<h2>Technical support</h2>',
          '<p>For assistance not covered by the available help resources, email <a class="support-email" href="mailto:info@whatsinit.app">info@whatsinit.app</a>.</p>',
        '</div>',
      '</div>',
    '</section>'
  ].join('');
}

window.addEventListener('hashchange', navigate);

navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    setActive(link.getAttribute('data-route'));
  });
});

navigate();
