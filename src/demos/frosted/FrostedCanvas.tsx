import React, { useEffect, useRef } from "react";

const SCOPE = "frosted-glass-demo";

const CHEVRON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>`;

const CARDS = [
  {
    category: "Instant",
    title: "Soul Shatter",
    description:
      "Each opponent sacrifices a creature or planeswalker with the greatest mana value among creatures and planeswalkers they control.",
    image: "/frosted/soul-shatter.jpg",
  },
  {
    category: "Instant",
    title: "Finishing Blow",
    description: "Destroy target creature or planeswalker.",
    image: "/frosted/finishing-blow.jpg",
  },
  {
    category: "Creature",
    title: "Essence Channeler",
    description:
      "As long as you've lost life this turn, this creature has flying and vigilance.",
    image: "/frosted/essence-channeler.jpg",
  },
];

const SCOPED_CSS = `
.${SCOPE} {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 10px;
  overflow: hidden;
}

.${SCOPE}__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.${SCOPE}__card {
  --gutter: 1.5rem;
  --brightness: 0.85;
  --saturation: 1.5;
  --frostRadius: 1.5rem;

  padding: var(--gutter);
  border-radius: var(--gutter);
  aspect-ratio: 4 / 3;
  width: 100%;
  max-width: 32rem;
  display: grid;
  justify-content: start;
  align-content: end;
  position: relative;
  background: #333;
  overflow: hidden;
  cursor: pointer;
  transition: transform 250ms ease-in-out;
}
.${SCOPE}__card img {
  transition: transform 500ms ease-in-out;
}
.${SCOPE}__card svg {
  transition: transform 250ms ease-in-out;
}
.${SCOPE}__card:hover {
  transform: scale(1.05);
}
.${SCOPE}__card:hover img {
  transform: scale(1.1);
}
.${SCOPE}__card:hover svg {
  transform: scale(1.5);
}

.${SCOPE}__card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  z-index: 1;
  pointer-events: none;
  backdrop-filter: blur(var(--frostRadius)) saturate(var(--saturation)) brightness(var(--brightness));
  -webkit-backdrop-filter: blur(var(--frostRadius)) saturate(var(--saturation)) brightness(var(--brightness));
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.5) 55%,
    black 75%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.5) 55%,
    black 75%
  );
}

.${SCOPE}__backdrop {
  position: absolute;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  width: 100%;
  height: 100%;
}

.${SCOPE}__content {
  position: relative;
  z-index: 2;
  display: grid;
  bottom: 0;
  justify-content: start;
  align-content: end;
  gap: 0.5rem;
}

.${SCOPE}__title {
  font-size: 1.7rem;
}

.${SCOPE}__category {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1rem;
  opacity: 0.45;
}

.${SCOPE}__desc {
  font-size: 1.3rem;
  line-height: 1.35;
  display: grid;
  grid-template-columns: 1fr auto;
  place-content: start;
  gap: 0.5rem;
}
.${SCOPE}__desc p {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.${SCOPE}__desc span {
  transform: translateY(-0.1rem);
  font-size: 4rem;
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
}
`;

export const FrostedCanvas: React.FC = () => {
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = SCOPED_CSS;
    document.head.appendChild(style);
    styleRef.current = style;
    return () => {
      style.remove();
    };
  }, []);

  return (
    <div className={SCOPE}>
      <article className={`${SCOPE}__cards`}>
        {CARDS.map((card, i) => (
          <div key={i} className={`${SCOPE}__card`}>
            <img
              className={`${SCOPE}__backdrop`}
              src={card.image}
              alt={card.title}
            />
            <div className={`${SCOPE}__content`}>
              <div className={`${SCOPE}__category`}>{card.category}</div>
              <div className={`${SCOPE}__title`}>{card.title}</div>
              <div className={`${SCOPE}__desc`}>
                <p>{card.description}</p>
                <span dangerouslySetInnerHTML={{ __html: CHEVRON_SVG }} />
              </div>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};
