export function getBrowserName(userAgent) {
  if (!userAgent) return "Unknown";

  const ua = userAgent.toLowerCase();

  const browsers = [
    { name: "Edge", keyword: "edg" },
    { name: "Opera", keyword: "opr" },
    { name: "Opera", keyword: "opera" },
    { name: "Chrome", keyword: "chrome" },
    { name: "Firefox", keyword: "firefox" },
    { name: "Safari", keyword: "safari" },
    { name: "Internet Explorer", keyword: "msie" },
    { name: "Internet Explorer", keyword: "trident" },
    { name: "Brave", keyword: "brave" },
    { name: "Vivaldi", keyword: "vivaldi" },
    { name: "UC Browser", keyword: "ucbrowser" },
    { name: "Samsung Internet", keyword: "samsungbrowser" },
    { name: "DuckDuckGo", keyword: "duckduckgo" },
    { name: "Maxthon", keyword: "maxthon" },
    { name: "Puffin", keyword: "puffin" },
    { name: "Tor Browser", keyword: "torbrowser" },
    { name: "Waterfox", keyword: "waterfox" },
    { name: "Epic Privacy Browser", keyword: "epic" },
    { name: "Iridium Browser", keyword: "iridium" },
    { name: "Midori", keyword: "midori" },
  ];

  for (let browser of browsers) {
    if (ua.includes(browser.keyword)) {
      // Safari detect: ensure it's not Chrome
      if (browser.name === "Safari" && ua.includes("chrome")) continue;
      return browser.name;
    }
  }

  return "Unknown";
}
