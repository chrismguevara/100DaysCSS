import { useId, useRef, useState } from "react";
import type { Route } from "../+types/day-12";
import "./day-12.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CSS Day 12" },
    { name: "description", content: "Day 12 of 100 Days of CSS challenge" },
  ];
}

export default function Day12() {
  const tooltipId = useId();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const showTooltip = () => setIsTooltipOpen(true);
  const hideTooltip = () => setIsTooltipOpen(false);
  const termRef = useRef<HTMLElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);

  return (
    // Background
    <div
      className={`
      w-full h-full
      relative
      bg-[#4CB6DE]
      antialiased
      font-['Open_Sans',sans-serif]
      grid place-items-center
      text-white
      `}
    >
      {/* Quote Block */}
      <figure
        className={`
        flex flex-col gap-4
        px-7 py-23
        relative

        before:content-['„']
        before:absolute
        before:z-0
        before:top-0
        before:left-[7px]
        before:font-['Arial']
        before:text-[15.5rem]
        before:leading-[2.2rem]
        before:text-[#6AC2E3]
        before:pointer-events-none
      `}
      >
        {/* Quote */}
        <blockquote className="text-2xl leading-9 z-10">
          I know quite certainly that I myself have no special talent;
          curiosity,&nbsp;
          <dfn
            aria-describedby={tooltipId}
            tabIndex={0}
            ref={termRef}
            onFocus={showTooltip}
            onBlur={hideTooltip}
            onMouseEnter={showTooltip}
            onMouseLeave={(e) => {
              // If the mouse is leaving the term and entering the tooltip, don't hide the tooltip
              if (
                e.relatedTarget &&
                tipRef.current?.contains(e.relatedTarget as Node)
              ) {
                return;
              }
              hideTooltip();
            }}
            className={`
              inline-block px-2 pb-1 bg-[#286F8A] not-italic
              [anchor-name:--obsessionTerm]
              peer
            `}
          >
            obsession
          </dfn>{" "}
          and dogged endurance, combined with self-criticism have brought me to
          my ideas.
        </blockquote>
        {/* Author name */}
        <figcaption
          className={`
          font-light
          italic
          text-xl
        `}
        >
          <cite>Albert Einstein</cite>
        </figcaption>
      </figure>
      <Tooltip
        id={tooltipId}
        ref={tipRef}
        aria-hidden={!isTooltipOpen}
        onMouseLeave={(e) => {
          // If the mouse is leaving the tooltip and entering the term, don't hide the tooltip
          if (
            e.relatedTarget &&
            termRef.current?.contains(e.relatedTarget as Node)
          ) {
            return;
          }
          hideTooltip();
        }}
        className={`
          z-20
          absolute [position-anchor:--obsessionTerm] bottom-[anchor(top)] [justify-self:anchor-center]
        `}
      >
        <TooltipContent />
      </Tooltip>
    </div>
  );
}

/**
 * Tooltip component
 *
 * This component takes in a `children` prop, which is the content to display in the tooltip.
 * This tooltip's visibility is primarily controlled by the `aria-hidden` attribute.
 * When the state of `aria-hidden` is `true`, the tooltip animates out of view, and when the state is `false`, the tooltip animates into view.
 *
 * Note that this component is not responsible for positioning the tooltip.
 *
 * @param props
 * @returns
 */
function Tooltip(props: React.ComponentProps<"div">) {
  const { children, className, ...rest } = props;
  return (
    // This outer div is used to define the "mouse over" area of the tooltip.
    // In order to make the tooltip more stable, this outer div is just a static element that doesn't move.
    // The inner div is the actual tooltip that animates in and out of view.
    <div
      {...rest}
      role="tooltip"
      className={`
        pb-[15px]
        pointer-events-none [:not([aria-hidden="true"])]:pointer-events-auto

        [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-out
        [&>*]:transform-[translate3d(0,-20px,0)]
        [&>*]:opacity-0
        [&:not([aria-hidden="true"])>*]:opacity-100
        [&:not([aria-hidden="true"])>*]:transform-[translate3d(0,0,0)]
        [&:not([aria-hidden="true"])>*]:pointer-events-auto
        ${className ?? ""}
      `}
    >
      <div>{children}</div>
    </div>
  );
}

function TooltipContent() {
  const playSound = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent the button from being focused
    e.preventDefault();
    const synth = window.speechSynthesis;
    if (synth) {
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance("obsession");
      // TODO Consider debouncing this
      synth.speak(utterance);
    }
  };
  return (
    <div
      className={`
        relative
        w-[300px]
        bg-[#286F8A]
        flex flex-col gap-0

        after:absolute
        after:content-['']
        after:w-[10px] after:h-[10px]
        after:rotate-45
        after:bottom-[-5px]
        after:left-[calc(50%-5px)]
        after:bg-[#286F8A]
      `}
    >
      <div className="bg-white text-base leading-6 text-[#286F8A] py-2 px-4">
        [əbˈseʃ(ə)n]{" "}
        <button
          className={`
            fa fa-volume-up
            transition-all duration-200 ease-out
            ml-2
            hover:scale-[1.15]
            active:scale-[0.95]
            cursor-pointer
          `}
          onMouseDown={playSound}
        ></button>
      </div>
      <div className="px-4 py-2">
        {/* Obsession, a persistent disturbing preoccupation with an often
    unreasonable idea or feeling. */}
        <dl>
          <dt className="inline">Obsession</dt>
          <dd className="inline">
            , a persistent disturbing preoccupation with an often unreasonable
            idea or feeling.
          </dd>
        </dl>
      </div>
    </div>
  );
}
