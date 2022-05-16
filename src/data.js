export const data = {
  intro: {
    img: "/images/illustration-hero.svg",
    title: "A Simple Bookmark Manager",
    paragraph: ` A clean and simple interface to organize your favourite websites. Open
    a new browser tab and see your sites load instantly. Try it for free.`,
    buttons: {
      chrome: "Get it on Chrome",
      firefox: "Get it on Firefox",
    },
  },
  header: {
    navLinks: [
      { name: "Features", href: "#", current: false },
      { name: "Pricing", href: "#", current: false },
      { name: "Contact", href: "#", current: false },
    ],
  },
  features: {
    paragraph:
      "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go",
    categories: {
      "Simple Bookmarking": {
        img: "/images/illustration-features-tab-1.svg",
        title: "Bookmark in one click",
        paragraph:
          "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      },
      "Speedy Searching": {
        img: "/images/illustration-features-tab-2.svg",
        title: "Intelligent search",
        paragraph:
          "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      },
      "Easy Sharing": {
        img: "/images/illustration-features-tab-3.svg",
        title: "Share your bookmarks",
        paragraph:
          " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      },
    },
  },
  download: {
    title: "Download the extension",
    paragraph:
      "We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.",
    browsers: {
      chrome: {
        title: "Add to Firefox",
        requirement: "Minimum version 55",
        img: "/images/logo-chrome.svg",
      },
      firefox: {
        title: "Add to Chrome",
        requirement: "Minimum version 62",
        img: "/images/logo-firefox.svg",
      },
      opera: {
        title: "Add to Opera",
        requirement: "Minimum version 46",
        img: "/images/logo-opera.svg",
      },
    },
  },
};
