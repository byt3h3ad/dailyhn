const API = "https://dailyhnapi.vercel.app/" as const;
export const DAY_ENDPOINT = API + "day/";
export const MONTH_ENDPOINT = API + "month/";

export const dummy_data = {
  heading: "Daily Hacker News for 2024-10-29",
  links: [
    {
      title:
        "The sins of the 90s: Questioning a puzzling claim about mass surveillance",
      link: "https://blog.cr.yp.to/20241028-surveillance.html",
      comments: "https://news.ycombinator.com/item?id=41972172",
    },
    {
      title: "A return to hand-written notes by learning to read and write",
      link: "https://research.google/blog/a-return-to-hand-written-notes-by-learning-to-read-write/",
      comments: "https://news.ycombinator.com/item?id=41976311",
    },
    {
      title: "HTML Form Validation is underused",
      link: "https://expressionstatement.com/html-form-validation-is-heavily-underused",
      comments: "https://news.ycombinator.com/item?id=41976529",
    },
    {
      title: "Steve Ballmer was an underrated CEO",
      link: "https://danluu.com/ballmer/",
      comments: "https://news.ycombinator.com/item?id=41976754",
    },
    {
      title: "How I write code using Cursor",
      link: "https://www.arguingwithalgorithms.com/posts/cursor-review.html",
      comments: "https://news.ycombinator.com/item?id=41979203",
    },
    {
      title:
        "How to get the whole planet to send abuse complaints to your best friends",
      link: "https://delroth.net/posts/spoofed-mass-scan-abuse/",
      comments: "https://news.ycombinator.com/item?id=41982698",
    },
    {
      title:
        "Writing in Pictures: Richard Scarry and the art of children's literature",
      link: "https://yalereview.org/article/chris-ware-richard-scarry",
      comments: "https://news.ycombinator.com/item?id=41983622",
    },
    {
      title: "New Mac Mini with M4",
      link: "https://www.apple.com/newsroom/2024/10/apples-new-mac-mini-is-more-mighty-more-mini-and-built-for-apple-intelligence/",
      comments: "https://news.ycombinator.com/item?id=41984519",
    },
    {
      title: "GitHub cuts AI deals with Google, Anthropic",
      link: "https://www.bloomberg.com/news/articles/2024-10-29/microsoft-s-github-unit-cuts-ai-deals-with-google-anthropic",
      comments: "https://news.ycombinator.com/item?id=41985915",
    },
    {
      title: "Using an 8K TV as a Monitor",
      link: "https://daniel.lawrence.lu/blog/y2023m12d15/",
      comments: "https://news.ycombinator.com/item?id=41986048",
    },
  ],
};
