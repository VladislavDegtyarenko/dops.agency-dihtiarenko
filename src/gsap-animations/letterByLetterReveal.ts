// Core
import gsap from "gsap";
import splitStringUsingRegex from "@/utils/splitStringUsingRegex";

const defaultTo: gsap.TweenVars = {
  opacity: 1,
  duration: 0.075,
  stagger: {
    each: 0.02,
    ease: "power1.in",
  },
};

export const letterByLetterReveal = (
  element: HTMLElement,
  to: gsap.TweenVars = {},
) => {
  // Since GSAP's SplitText function is not free
  // I've created my own text splitting logic

  // Clear initial opacity: 0
  element.style.cssText = "";

  // Get heading text
  const text = element.textContent!;

  // Split string by individual character using a custom function
  const textSplitted = splitStringUsingRegex(text);

  // Wrap each character into individual span element
  // To perform CSS transformations
  const html = textSplitted.reduce((html, char) => {
    return html + `<span style='opacity: 0'>${char}</span>`;
  }, "");
  element.innerHTML = html;

  // Get our span elements and reveal them with stagger effect
  gsap.to(element.querySelectorAll("span"), {
    ...defaultTo,
    ...to,
    scrollTrigger: element,
    // Return the string instead of <span> elements
    // when the animation ends
    onComplete: () => {
      element.textContent = text;
    },
  });
};
