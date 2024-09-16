import HeatmapCalendar from '../components/HeatmapCalendar';

const data = [
  { day: '2024-09-15', value: 1 },
  { day: '2024-09-16', value: 1 },
  // Add more data for collected and not-collected days
];

function App() {
  return (
    <div>
      <h1>Custom Heatmap Calendar</h1>
      <HeatmapCalendar data={data} />
    </div>
  );
}

export default App;
