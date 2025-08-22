import React from "react";

export type Variant = "default" | "success" | "warning";

const STYLES: Record<Variant, { badge: string; title: string; body: string }> =
  {
    default: {
      badge: "bg-gray-100 text-gray-800 font-B03-SB",
      title: "text-gray-800 font-T04-SB",
      body: "text-gray-500 font-B01-M",
    },
    success: {
      badge: "bg-blue-50 text-blue-main font-B03-M",
      title: "text-blue-main font-T04-SB",
      body: "text-gray-500 font-B01-M",
    },
    warning: {
      badge: "bg-orange-50 text-orange-point font-B03-M",
      title: "text-orange-point font-T04-SB",
      body: "text-gray-500 font-B01-M",
    },
  };

export interface ScoreItem {
  order: string;
  title: string;
  body: string;
}

export interface ScoreListProps {
  heading?: string;
  items: ScoreItem[];
  variants?: Variant[];
}

const ScoreList = ({ heading, items, variants = [] }: ScoreListProps) => {
  return (
    <section className="mt-[108px] w-full">
      {heading && <div className="text-gray-900 font-T02-B">{heading}</div>}

      <div className="mt-[52px] space-y-8">
        {items.map((it, i) => {
          const v = STYLES[variants[i] ?? "default"];
          return (
            <div key={i}>
              <div className="flex items-start gap-[18px]">
                <span
                  className={`inline-flex px-3 py-[6px] shrink-0 items-center justify-center rounded-[8px] ${v.badge}`}
                >
                  {it.order}
                </span>
                <div className="space-y-3">
                  <div className={`${v.title}`}>{it.title}</div>
                  <span className={`${v.body}`}>{it.body}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ScoreList;
