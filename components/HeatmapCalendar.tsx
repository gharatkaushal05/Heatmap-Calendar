import dynamic from 'next/dynamic';
import styles from '../styles/HeatmapCalendar.module.css';

const Calendar = dynamic(() => import('@nivo/calendar').then((mod) => mod.Calendar), {
  ssr: false,
});

interface HeatmapCalendarProps {
  data: {
    day: string;
    value: number; // 1 for collected, 0 for not collected
  }[];
  height?: number;
  width?: number;
}

const HeatmapCalendar: React.FC<HeatmapCalendarProps> = ({ data, height = 750, width = 1000 }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-4xl h-4xl">
        <div className={styles['nivo-calendar']}>
          <Calendar
            data={data}
            from={new Date('2024-01-01')}
            to={new Date('2024-12-31')}
            emptyColor="#dee1e7" // White for not collected
            colors={['#ffcc66']} // Yellow for collected
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            yearSpacing={50}
            monthSpacing={0}
            daySpacing={2}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 45,
                itemCount: 1,
                itemWidth: 52,
                itemHeight: 45,
                itemsSpacing: 18,
                symbolSize: 25,
              },
            ]}
            height={height}
            width={width}
          />
        </div>
      </div>
    </div>
  );
};

export default HeatmapCalendar;
