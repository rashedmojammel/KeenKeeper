import { useContext, useMemo } from "react";
import { Pie, PieChart, Tooltip, Legend, Cell } from "recharts";
import { FriendsContext } from "../../../Context/FriendsContext";
import { FaSearch } from "react-icons/fa";

const COLORS = {
  Text: "#8B5CF6",
  Call: "#1D4B3A",
  Video: "#22C55E",
};

export default function PieChartWithPaddingAngle({
  isAnimationActive = true,
}) {
  const { storedTimeline } = useContext(FriendsContext);

  const data = useMemo(() => {
    const counts = { Text: 0, Call: 0, Video: 0 };

    storedTimeline.forEach((item) => {
      if (counts[item.type] !== undefined) {
        counts[item.type]++;
      }
    });

    return Object.entries(counts)
      .filter(([, value]) => value > 0)
      .map(([name, value]) => ({
        name,
        value,
        fill: COLORS[name],
      }));
  }, [storedTimeline]);

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-9/12 mx-auto">
      <h1 className="text-3xl mb-5 font-semibold">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <p className="text-sm text-gray-500 mb-4">
          By Interaction Type
        </p>

        {storedTimeline.length === 0 ? (
          <div className="py-10">
            <p className="flex justify-center items-center gap-3">
              <FaSearch />
              No interactions found.
            </p>
          </div>
        ) : (
          <div className="flex justify-center mb-5">
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius={50}
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={isAnimationActive}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        )}
      </div>
    </div>
  );
}