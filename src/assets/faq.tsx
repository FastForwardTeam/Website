const faq = [
  {
    question: "Why does FastForward have access to all websites?",
    reply:
      "FastForward operates by circumventing commonly used templates across numerous domains, making it infeasible for us to maintain an exhaustive list of bypassed domains. To utilize newly bypassed sites, you'll need to update to the latest FastForward version and consent to its updated permissions for each addition. Custom bypasses would lose their utility if restricted to already bypassed sites. Additionally, since it's open-source, anyone can scrutinize its source code independently.",
  },
  {
    question: "What is crowd bypass?",
    reply:
      'Also known in the options as "Give and take the destinations of unbypassable shorteners.", this feature exists to bypass a respectable amount of link shorteners using CAPTCHAs and other forms of backend validation to make sure you\'ve actually waited before you can proceed to the target link, to share this target with other FastForward users, who come across the same link in the future, so they can proceed to the target immediately.',
  },
  {
    question: "How can I check that FastForward is working?",
    reply: () => {
      return (
        <>
          There's a list of example links where you can see FastForward in
          action{" "}
          <a className="text-blue-500 hover:text-blue-600" href="/examples">
            over here.
          </a>
        </>
      );
    },
  },
  {
    question: "What to do when a website isn't bypassed?",
    reply: () => {
      return (
        <>
          We're always happy to add new bypasses to FastForward, so if you
          happen to encounter a website that isn't bypassed yet, please{" "}
          <a
            className="text-blue-500 hover:text-blue-600"
            target="_blank"
            href="https://github.com/FastForwardTeam/FastForward/issues/new"
          >
            open an issue on GitHub
          </a>
          , and we'll try our best to bypass it!{" "}
        </>
      );
    },
  },
  {
    question: "What if my question wasn't answered?",
    reply: () => {
      return (
        <>
          Feel free to{" "}
          <a
            className="text-blue-500 hover:text-blue-600"
            target="_blank"
            href="https://github.com/FastForwardTeam/FastForward/issues/new"
          >
            open an issue on GitHub
          </a>
          , or join our{" "}
          <a
            className="text-blue-500 hover:text-blue-600"
            target="_blank"
            href="https://discord.com/invite/RSAf7b5njt"
          >
            Discord
          </a>{" "}
          where you can talk to us directly.
        </>
      );
    },
  },
];

export default faq;
