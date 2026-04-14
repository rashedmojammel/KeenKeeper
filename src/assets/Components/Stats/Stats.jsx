import { useContext, useMemo } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

import { FriendsContext } from '../../../Context/FriendsContext';

const COLORS = {
    Text:  '#8B5CF6',
    Call:  '#1D4B3A',
    Video: '#22C55E',
};

const CustomLegend = ({ payload }) => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '8px' }}>
        {payload.map((entry) => (
            <span key={entry.value} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#555' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: entry.color, display: 'inline-block' }} />
                {entry.value}
            </span>
        ))}
    </div>
);

export default function Stats() {
    const { storedTimeline } = useContext(FriendsContext);

    const chartData = useMemo(() => {
        const counts = { Text: 0, Call: 0, Video: 0 };
        storedTimeline.forEach(({ type }) => {
            if (counts[type] !== undefined) counts[type]++;
        });
        return Object.entries(counts)
            .filter(([, value]) => value > 0)
            .map(([name, value]) => ({ name, value }));
    }, [storedTimeline]);

    return (
        <div className='bg-white rounded-3xl p-6 mt-5'>
            <p className='text-sm text-gray-500 mb-4'>By Interaction Type</p>
            <ResponsiveContainer width='100%' height={260}>
                <PieChart>
                    <Pie
                        data={chartData}
                        cx='50%'
                        cy='45%'
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={4}
                        dataKey='value'
                    >
                        {chartData.map((entry) => (
                            <Cell key={entry.name} fill={COLORS[entry.name] ?? '#ccc'} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value} interactions`, name]} />
                    <Legend content={<CustomLegend />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}