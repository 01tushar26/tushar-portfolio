"use client";

import { useEffect, useState } from "react";

const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function getColor(level: number, dark: boolean) {
  const dark_colors: Record<number, string> = {
    0: "#161b22",
    1: "#2d2d2d",
    2: "#4a4a4a",
    3: "#6b6b6b",
    4: "#9a9a9a",
  };
  const light_colors: Record<number, string> = {
    0: "#ebedf0",
    1: "#c8c8c8",
    2: "#a0a0a0",
    3: "#6b6b6b",
    4: "#3a3a3a",
  };
  return (dark ? dark_colors : light_colors)[level] ?? (dark ? dark_colors[0] : light_colors[0]);
}

function levelFromCount(count: number) {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 10) return 3;
  return 4;
}

interface Day {
  date: string;
  count: number;
}

export function GitHubHeatmap({ username = "01tushar26" }: { username?: string }) {
  const [days, setDays] = useState<Day[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => r.json())
      .then((data) => {
        setDays(data.contributions || []);
        setTotal(data.total?.lastYear ?? 0);
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, [username]);

  const weeks: (Day | null)[][] = [];
  let week: (Day | null)[] = [];
  days.forEach((day, i) => {
    const d = new Date(day.date);
    if (i === 0) {
      for (let pad = 0; pad < d.getDay(); pad++) week.push(null);
    }
    week.push(day);
    if (week.length === 7) { weeks.push(week); week = []; }
  });
  if (week.length) { while (week.length < 7) week.push(null); weeks.push(week); }

  const months: { wi: number; m: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((w, wi) => {
    const first = w.find((d) => d);
    if (first) {
      const m = new Date(first.date).getMonth();
      if (m !== lastMonth) { months.push({ wi, m }); lastMonth = m; }
    }
  });

  if (loading) return (
    <div className="w-full rounded-xl border border-border p-4 text-sm text-muted-foreground animate-pulse">
      Loading contributions...
    </div>
  );

  if (error) return (
    <div className="w-full rounded-xl border border-border p-4 text-sm text-muted-foreground">
      Could not load GitHub contributions.
    </div>
  );

  return (
    <div className="w-full rounded-xl border border-border p-4 overflow-x-auto">
      <div className="relative h-4 mb-1" style={{ width: weeks.length * 14 }}>
        {months.map(({ wi, m }) => (
          <span
            key={`${wi}-${m}`}
            className="absolute text-[11px] text-muted-foreground"
            style={{ left: wi * 14 }}
          >
            {MONTH_NAMES[m]}
          </span>
        ))}
      </div>

      <div className="flex gap-[3px]">
        {weeks.map((w, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {w.map((day, di) => {
              if (!day) return <div key={di} className="w-[11px] h-[11px]" />;
              const level = levelFromCount(day.count);
              const dateStr = new Date(day.date).toLocaleDateString("en-US", {
                month: "short", day: "numeric", year: "numeric",
              });
              return (
                <div
                  key={di}
                  title={`${day.count} contribution${day.count !== 1 ? "s" : ""} on ${dateStr}`}
                  className="w-[11px] h-[11px] rounded-[2px] cursor-pointer"
                  style={{ background: getColor(level, dark) }}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-[12px] text-muted-foreground">
          {total.toLocaleString()} contributions in the last year
        </span>
        <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
          Less
          {[1, 2, 3, 4].map((l) => (
            <div
              key={l}
              className="w-[11px] h-[11px] rounded-[2px]"
              style={{ background: getColor(l, dark) }}
            />
          ))}
          More
        </div>
      </div>
    </div>
  );
}