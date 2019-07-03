//// Browser user configuration
user_pref("lightweightThemes.selectedThemeID", "default-theme@mozilla.org"); // Set Firefox theme to "Default"
user_pref("lightweightThemes.usedThemes", "[]");                    // Disable lightweight theming
user_pref("lightweightThemes.persisted.footerURL", false);          // Disable lightweight theming
user_pref("lightweightThemes.persisted.headerURL", false);          // Disable lightweight theming
user_pref("devtools.theme", "dark");                                // Use devtools "Dark Theme"
user_Pref("ui.use_standins_for_native_colors", true);               // Fix issues with Linux dark themes
// user_pref("browser.startup.homepage", "about:blank");            // Set "about:blank" as homepage
user_pref("browser.startup.page", 3);                               // Restore previous session at startup
user_pref("browser.ctrlTab.previews", true);                        // Activate CTRL+Tab preview
user_pref("signon.rememberSignons", false);                         // Deactivate Firefox internal password manager
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");          // Set Default search engine to DuckDuckGo
user_pref("browser.search.hiddenOneOffs", "Google,Bing,Amazon.com,DuckDuckGo,eBay,Twitter,Wikipedia (en)"); // Hide all other search engines
user_pref("security.webauth.u2f", true);                            // Enable FIDO U2F support
user_pref("xpinstall.signatures.required", false);                  // Allow unsigned extensions to be installed
user_pref("extensions.legacy.enabled", true);                       // Allow legacy extensions to be installed
user_pref("browser.pocket.enabled", false);                         // Remove Pocket integration
user_pref("extensions.pocket.enabled", false);                      // Remove Pocket extension
user_pref("extensions.shield-recipe-client.enabled", false);        // Disable SHIELD client recipes
user_pref("app.shield.optoutstudies.enabled", false);               // Disable SHIELD experiments
user_pref("network.allow-experiments", false);                      // Disable Necko experiments
user_pref("media.eme.enabled", false);                              // Disable playback of DRM-controlled content
user_pref("media.gmp-widevinecdm.enabled", false);                  // Disable Widevine CDM
user_pref("browser.newtabpage.enabled", false);                     // Set default new tab page to "about:blank" instead of "about:home"
user_pref("browser.newtabpage.enhanced", false);                    // Disable "enhanced mode" for "about:home" in previous version

//// Safe Browsing configuration
user_pref("browser.safebrowsing.enabled", true);                    // Safe Browsing: Enable the Safe Browsing service
user_pref("browser.safebrowsing.phishing.enabled", true);           // Safe Browsing: Activate "Phishing" component
user_pref("browser.safebrowsing.malware.enabled", true);            // Safe Browsing: Activate "Malware" component
user_pref("browser.safebrowsing.downloads.enabled", false);         // Safe Browsing: Activate "Download Protection" component
user_pref("browser.safebrowsing.downloads.remote.enabled", false);  // Safe Browsing: Enable remote lookup for "Download Protection" component

//// Security tweaks
user_pref("privacy.trackingprotection.enabled", true);              // Privacy: Activate Tracking Protection
user_pref("privacy.donottrackheader.enabled", true);                // Privacy: Always send DoNotTrack header
// user_pref("privacy.resistFingerprinting", true);                 // Privacy: Prevent browser fingerprinting (timezone, ...)
user_pref("general.buildID.override", "20100101");                  // General: Spoof BuildID
user_pref("browser.startup.homepage_override.buildID", "20100101"); // Browser: Spoof BuildID
user_pref("browser.cache.offline.enable", false);                   // Browser: Disables offline cache
user_pref("browser.urlbar.speculativeConnect.enabled", false);      // Browser: Disable preloading of autocomplete URLs
user_pref("browser.urlbar.trimURLs", false);                        // Browser: Don't trim HTTP off of URLs in the address bar
user_pref("browser.fixup.alternate.enabled", false);                // Browser: Don't try to guess domain names when entering an invalid domain name in URL bar
user_pref("browser.fixup.hide_user_pass", true);                    // Browser: When browser.fixup.alternate.enabled is enabled, strip password from 'user:password@...' URLs
// user_pref("browser.display.use_document_fonts", 0);              // Browser: Disable font fingerprinting
user_pref("network.http.speculative-parallel-limit", 0);            // Network: Disable link pre-fetching
user_pref("network.IDN_show_punycode", true);                       // Network: Force punycode IDN rendering
user_pref("network.proxy.socks_remote_dns", true);                  // Network: Send DNS request through SOCKS when SOCKS proxying is in use
user_pref("network.manage-offline-status", false);                  // Network: Don't monitor OS online/offline connection state
// user_pref("network.websocket.enabled", false)                    // Network: Disable WebSockets (required)
user_pref("dom.battery.enabled", false);                            // DOM API: Disable battery dom capability
user_pref("dom.mozTCPSocket.enabled", false);                       // DOM API: Disable raw TCP socket support (mozTCPSocket)
user_pref("dom.netinfo.enabled", false);                            // DOM API: Disable leaking network/browser connection information via Javascript
user_pref("dom.gamepad.enabled", false);                            // DOM API: Disable gamepad API to prevent USB device enumeration
user_pref("dom.vr.enabled", false);                                 // DOM API: Disable virtual reality devices APIs
user_pref("dom.vibrator.enabled", false);                           // DOM API: Disable vibrator API
user_pref("dom.maxHardwareConcurrency", 4);                         // DOM API: Spoof QuadCore CPU
// user_pref("dom.storage.enabled", false);                         // DOM API: Disable DOM storage (required)
// user_pref("dom.event.clipboardevents.enabled", false);           // DOM API: Disable copy, cut & paste notification (required)
user_pref("geo.enabled", false);                                    // Geolocation: Disable geolocation
user_pref("geo.wifi.logging.enabled", false);                       // Geolocation: Disable requests logging when enabled
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%"); // Geolocation: Use Mozilla geoloc service instead of Google when  enabled
user_pref("media.peerconnection.enabled", false);                   // WebRTC: Disable WebRTC entirely
user_pref("media.peerconnection.ice.default_address_only", true);   // WebRTC: Don't reveal your internal IP when enabled
user_pref("media.peerconnection.ice.no_host", true);                // WebRTC: Don't reveal your internal IP when enabled
user_pref("media.video_stats.enabled", false);                      // Media API: Disable video stats to reduce fingerprinting threat
user_pref("media.webspeech.recognition.enable", false);             // Media API: Disable speech recognition
user_pref("media.webspeech.synth.enabled", false);                  // Media API: Disable speech synthesis
user_pref("camera.control.face_detection.enabled", false);          // Media API: Disable face detection
user_pref("device.sensors.enabled", false);                         // Media API: Disable device sensors API
user_pref("browser.beacen.enabled", false);                         // Media API: Disable "beacon" asynchronous HTTP transfers (used for analytics)
user_pref("browser.send_pings", false);                             // Media API: This attribute would let websites track visitors’ clicks
user_pref("browser.send_pings.require_same_host", true);            // Media API: When send_pings is activated, only allow pinging the same host as the origin page
user_pref("webgl.disabled", true);                                  // WebGL: Disable potentialy harmful WebGL content
user_pref("network.http.referer.trimmingPolicy", 2);                // Referer policy: Send only the scheme, host, and port in the Referer header
user_pref("network.http.referer.XOriginPolicy", 2);                 // Referer policy: only send Referer header when the full hostnames match
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);         // Referer policy: when sending Referer across origins, only send scheme, host, and port

//// Disable Telemetry
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.selfsupport.url", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.uitour.enabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

//// Disable WebIDE & remote debugging
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.force-local", true);

//// Activty Stream bullshit mitigation
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false);
user_pref("browser.newtabpage.activity-stream.feeds.favicon", false);
user_pref("browser.newtabpage.activity-stream.feeds.messagecenterfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.migration", false);
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("browser.newtabpage.activity-stream.feeds.prefs", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.sections", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.theme", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.messageCenterExperimentEnabled", false);
user_pref("browser.newtabpage.activity-stream.migrationExpired", true);
user_pref("browser.newtabpage.activity-stream.prerender", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.tippyTop.service.endpoint", "");

//// References:
// - https://www.privacytools.io/#browser
// - https://github.com/pyllyukko/user.js/blob/master/user.js
// - https://github.com/ghacksuserjs/ghacks-user.js/blob/master/user.js
// - https://wiki.mozilla.org/Security/Safe_Browsing
// - https://wiki.mozilla.org/Security/Download_Protection
