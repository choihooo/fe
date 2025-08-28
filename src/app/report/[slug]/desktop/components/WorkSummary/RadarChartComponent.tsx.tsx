import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

type TickProps = {
  x?: number | string;
  y?: number | string;
  cx?: number | string;
  cy?: number | string;
  payload?: { value: string };
};

type Datum = { subject: string; value: number };

const data: Datum[] = [
  { subject: "타겟 적합성", value: 7.5 },
  { subject: "브랜드 이해도", value: 8.0 },
  { subject: "매체 선정", value: 6.8 },
  { subject: "문제정의", value: 4.5 },
  { subject: "실현 가능성", value: 6.2 },
];

const MAX_SCORE = 10;

const RING_GAP_PX = 43;
const RING_COUNT = 4;
const OUTER_RADIUS = RING_GAP_PX * RING_COUNT;
const POLAR_RADII = Array.from(
  { length: RING_COUNT },
  (_, i) => RING_GAP_PX * (i + 1)
);

const LABEL_OFFSET_PX = 24;
const VALUE_OFFSET_PX = 8;

const renderCustomTick = (props: TickProps): React.ReactElement<SVGElement> => {
  const { x, y, cx, cy, payload } = props;
  if (x == null || y == null || cx == null || cy == null) return <g />;

  const nx = Number(x);
  const ny = Number(y);
  const ncx = Number(cx);
  const ncy = Number(cy);

  const dx = nx - ncx;
  const dy = ny - ncy;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;

  const labelX = nx + ux * LABEL_OFFSET_PX;
  const labelY = ny + uy * LABEL_OFFSET_PX;

  const subject = payload?.value ?? "";
  const datum = data.find((d) => d.subject === subject);
  const v = datum?.value ?? 0;

  const ratio = Math.max(0, Math.min(1, v / MAX_SCORE));
  const vertexX = ncx + dx * ratio;
  const vertexY = ncy + dy * ratio;
  const scoreX = vertexX + ux * VALUE_OFFSET_PX;
  const scoreY = vertexY + uy * VALUE_OFFSET_PX;

  const textValue = Number(v).toFixed(v % 1 === 0 ? 0 : 1);
  const paddingX = 16;
  const paddingY = 8;
  const fontSize = 14;
  const textWidth = textValue.length * 8;
  const textHeight = fontSize;
  const boxWidth = textWidth + paddingX * 2;
  const boxHeight = textHeight + paddingY * 2;

  const multiLineTargets = ["브랜드 이해도", "실현 가능성"];
  const makeTwoLines = multiLineTargets.includes(subject);

  const lineHeight = 16;
  const extraGap = 8;

  return (
    <g>
      {makeTwoLines ? (
        <text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          fontSize={18}
          fill="#434448"
        >
          <tspan x={labelX} dy={0}>
            {subject.split(" ")[0] ?? subject}
          </tspan>
          <tspan x={labelX} dy={lineHeight + extraGap}>
            {subject.split(" ")[1] ?? ""}
          </tspan>
        </text>
      ) : (
        <text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          fontSize={18}
          fill="#434448"
        >
          {subject}
        </text>
      )}

      <rect
        x={scoreX - boxWidth / 2}
        y={scoreY - boxHeight / 2}
        width={boxWidth}
        height={boxHeight}
        fill="transparent"
      />

      <text
        x={scoreX}
        y={scoreY + textHeight / 2 - 2}
        textAnchor="middle"
        fontSize={14}
        fontWeight={600}
        fill="#256AFF"
      >
        {textValue}
      </text>
    </g>
  );
};

const RadarChartComponent = () => {
  const totalScore = 72;

  return (
    <div className="flex flex-col items-start mt-[108px]">
      <div className="text-gray-900 font-T02-B mb-20">작품 총평</div>

      <div className="w-full text-center">
        <div className="text-gray-800 font-T04-SB">총점</div>
        <div className="text-blue-main text-[56px] font-semibold mt-[6px]">
          {totalScore}점
        </div>

        <div className="mt-[52px]">
          <ResponsiveContainer width="100%" height={480}>
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius={OUTER_RADIUS}
              data={data}
            >
              <PolarGrid
                gridType="polygon"
                stroke="#E5E7EB"
                strokeWidth={1.2}
                radialLines={false}
                polarRadius={POLAR_RADII}
              />

              <PolarRadiusAxis
                domain={[0, MAX_SCORE]}
                tick={false}
                axisLine={false}
                tickLine={false}
              />

              <PolarAngleAxis
                dataKey="subject"
                tickLine={false}
                axisLine={false}
                tick={renderCustomTick}
              />

              <Radar
                name="평가"
                dataKey="value"
                stroke="#BBD1FF"
                strokeWidth={2}
                fill="rgba(37,106,255,0.10)"
                fillOpacity={1}
                dot={false}
                activeDot={false}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RadarChartComponent;
