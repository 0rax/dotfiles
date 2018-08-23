//// Browser configuration
// Use default light theme
user_pref("lightweightThemes.persisted.footerURL", false);
user_pref("lightweightThemes.persisted.headerURL", false);
user_pref("lightweightThemes.selectedThemeID", "default-theme@mozilla.org");
user_pref("lightweightThemes.usedThemes", "[]");
// Use devtools light theme
user_pref("devtools.theme", "light");
// Activate CTRL+Tab preview
user_pref("browser.ctrlTab.previews", true);
// Restore previous session at startup
user_pref("browser.startup.page", 3);
// Set about:home as homepage
user_pref("browser.startup.homepage", "about:home");
// Deactivate Firefox internal password manager
user_pref("signon.rememberSignons", false);
// Set Default search engine to DuckDuckGo & hide all other search engines
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");
user_pref("browser.search.hiddenOneOffs", "Google,Bing,Amazon.com,DuckDuckGo,eBay,Twitter,Wikipedia (en)");
// Enable FIDO U2F support
user_pref("security.webauth.u2f", true);
// Allow legacy & usigned extensions to be installed
user_pref("xpinstall.signatures.required", false);
user_pref("extensions.legacy.enabled", true);
// Remove Pocket integration
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.enabled", false);
// Disable SHIELD & Necko experiments
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("network.allow-experiments", false);
// Disable playback of DRM-controlled content + Widevine CDM
user_pref("media.eme.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
// Deactivate useless activity-stream feature
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSearch", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
// Safe browsing settings
user_pref("browser.safebrowsing.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
// Disable WebIDE & Remote Debugging
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.force-local", true);

//// Disable All Telemetry
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("browser.selfsupport.url", "");
user_pref("browser.uitour.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

//// Security tweaks
// General
user_pref("privacy.resistFingerprinting", true);               // Prevent browser fingerprinting
user_pref("privacy.trackingprotection.enabled", true);         // Activate Tracking Protection
user_pref("privacy.donottrackheader.enabled", true);           // Always send DoNotTrack header
user_pref("browser.cache.offline.enable", false);              // Disables offline cache
user_pref("browser.urlbar.speculativeConnect.enabled", false); // Disable preloading of autocomplete URLs
user_pref("network.http.speculative-parallel-limit", 0);       // Disable link pre-fetching
user_pref("general.buildID.override", "20100101");             // Spoof BuildID
user_pref("browser.startup.homepage_override.buildID", "20100101"); // Spoof BuildID
user_pref("network.IDN_show_punycode", true);                  // Force punycode IDN rendering
user_pref("browser.urlbar.trimURLs", false);                   // Don't trim HTTP off of URLs in the address bar
user_pref("browser.fixup.alternate.enabled", false);           // Don't try to guess domain names when entering an invalid domain name in URL bar
user_pref("browser.fixup.hide_user_pass", true);               // When browser.fixup.alternate.enabled is enabled, strip password from 'user:password@...' URLs
user_pref("network.proxy.socks_remote_dns", true);             // Send DNS request through SOCKS when SOCKS proxying is in use
user_pref("network.manage-offline-status", false);             // Don't monitor OS online/offline connection state
user_pref("media.video_stats.enabled", false);                 // Disable video stats to reduce fingerprinting threat
// DOM APIs
user_pref("dom.event.clipboardevents.enabled", false);         // Disable copy, cut & paste dom notification
user_pref("dom.battery.enabled", false);                       // Disable battery dom capability
user_pref("dom.mozTCPSocket.enabled", false);                  // Disable raw TCP socket support (mozTCPSocket)
user_pref("dom.netinfo.enabled", false);                       // Disable leaking network/browser connection information via Javascript
user_pref("dom.gamepad.enabled", false);                       // Disable gamepad API to prevent USB device enumeration
user_pref("dom.vr.enabled", false);                            // Disable virtual reality devices APIs
user_pref("dom.vibrator.enabled", false);                      // Diable vibrator API
user_pref("dom.maxHardwareConcurrency", 4);                    // Spoof QuadCore CPU
// Geolocation
user_pref("geo.enabled", false);                               // Disable geolocation
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%"); // Use Mozilla geoloc service instead of Google when geolocation is enabled
user_pref("geo.wifi.logging.enabled", false);                  // Disable geoloc requests logging when geolocation is enabled
// WebRTC
user_pref("media.peerconnection.ice.default_address_only", true); // Don't reveal your internal IP when WebRTC is enabled
user_pref("media.peerconnection.ice.no_host", true);           // Don't reveal your internal IP when WebRTC is enabled
// Disable some media APIs
user_pref("media.webspeech.recognition.enable", false);        // Disable speech recognition
user_pref("media.webspeech.synth.enabled", false);             // Disable speech synthesis
user_pref("camera.control.face_detection.enabled", false);     // Disable face detection
user_pref("device.sensors.enabled", false);                    // Disable device sensors API
user_pref("browser.beacen.enabled", false);                    // Disable "beacon" asynchronous HTTP transfers (used for analytics)
user_pref("browser.send_pings", false);                        // This attribute would let websites track visitors’ clicks
user_pref("browser.send_pings.require_same_host", true);       // When send_pings is activated, only allow pinging the same host as the origin page
// WebGL
user_pref("webgl.disabled", true);                             // Disable potentialy harmful WebGL content
// Referer Policy
user_pref("network.http.referer.trimmingPolicy", 2);           // Referer policy: Send only the scheme, host, and port in the Referer header
user_pref("network.http.referer.XOriginPolicy", 2);            // Referer policy: only send Referer header when the full hostnames match
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);    // Referer policy: when sending Referer across origins, only send scheme, host, and port


//// Disable Security options
// user_pref("media.peerconnection.enabled", false);           // Disable WebRTC entirely (done via extension)
// user_pref("network.websocket.enabled", false)               // Disable WebSockets (required)
// user_pref("dom.storage.enabled", false);                    // Disable DOM storage
// user_pref("dom.allow_cut_copy", false);                     // Disable "copy to clipboard" functionality via Javascript


//// Reference:
// - https://www.privacytools.io/#browser
// - https://github.com/pyllyukko/user.js/blob/master/user.js
