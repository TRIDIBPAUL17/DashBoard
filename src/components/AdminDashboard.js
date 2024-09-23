import React, { useState } from 'react';
import { Bell, ChevronDown, Home, Layout, BarChart2, FileText, Database, ShoppingCart, List, PieChart, Map, Move, Layers, Search, Maximize2, User } from 'lucide-react';
import SidebarItem from './SidebarItem';
import ChartCard from './ChartCard';

export default function AdminDashboard() {
  const [charts, setCharts] = useState([
    { id: 1, title: 'Bar', subtitle: 'Basic' },
    { id: 2, title: 'Bar', subtitle: 'Horizontal' },
    { id: 3, title: 'Bar', subtitle: 'Stacked' },
  ]);

  const [newChart, setNewChart] = useState({ title: '', subtitle: '' });

  const createChart = () => {
    if (newChart.title && newChart.subtitle) {
      const newId = charts.length ? Math.max(charts.map(chart => chart.id)) + 1 : 1;
      setCharts([...charts, { id: newId, ...newChart }]);
      setNewChart({ title: '', subtitle: '' }); // Reset form
    } else {
      alert("Please fill in all fields.");
    }
  };

  const renameChart = (id) => {
    const newTitle = prompt("Enter new title:");
    setCharts(charts.map(chart => chart.id === id ? { ...chart, title: newTitle } : chart));
  };

  const deleteChart = (id) => {
    setCharts(charts.filter(chart => chart.id !== id));
  };

  const updateChart = (id) => {
    const newSubtitle = prompt("Enter new subtitle:");
    setCharts(charts.map(chart => chart.id === id ? { ...chart, subtitle: newSubtitle } : chart));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">PRIMER.</h1>
        </div>
        <nav className="mt-4">
          <SidebarItem icon={<Home size={20} />} label="Home" href="/" />
          <SidebarItem icon={<Layout size={20} />} label="Apps" badge={5} />
          <SidebarItem icon={<BarChart2 size={20} />} label="Widgets" />
          <SidebarItem icon={<FileText size={20} />} label="Material" badge={10} />
          <SidebarItem icon={<Database size={20} />} label="Forms" badge={3} />
          <SidebarItem icon={<ShoppingCart size={20} />} label="Ecommerce" isNew />
          <SidebarItem icon={<List size={20} />} label="Taskboard" />
          <SidebarItem icon={<PieChart size={20} />} label="Charts" />
          <SidebarItem icon={<Map size={20} />} label="Maps" />
          <SidebarItem icon={<Move size={20} />} label="Drag and Drop" />
          <SidebarItem icon={<Layers size={20} />} label="Pages" />
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button className="text-gray-500 focus:outline-none focus:text-gray-700">
              <ChevronDown size={24} />
            </button>
            <div className="flex-1 px-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search size={20} className="text-gray-500" />
                </span>
                <input className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" type="text" placeholder="Search" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 focus:outline-none focus:text-gray-700">
                <Maximize2 size={24} />
              </button>
              <button className="text-gray-500 focus:outline-none focus:text-gray-700">
                <Bell size={24} />
              </button>
              <button className="text-gray-500 focus:outline-none focus:text-gray-700">
                <User size={24} />
              </button>
            </div>
          </div>
        </header>

        {/* Create Chart Form */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Create New Chart</h2>
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              value={newChart.title}
              onChange={(e) => setNewChart({ ...newChart, title: e.target.value })}
              placeholder="Chart Title"
              className="border rounded p-2 flex-1"
            />
            <input
              type="text"
              value={newChart.subtitle}
              onChange={(e) => setNewChart({ ...newChart, subtitle: e.target.value })}
              placeholder="Chart Subtitle"
              className="border rounded p-2 flex-1"
            />
            <button onClick={createChart} className="bg-blue-500 text-white px-4 rounded">Create</button>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {charts.map(chart => (
              <div key={chart.id} className="relative">
                <ChartCard title={chart.title} subtitle={chart.subtitle} />
                <div className="absolute top-2 right-2 space-x-2">
                  <button onClick={() => renameChart(chart.id)} className="bg-blue-500 text-white px-2 py-1 rounded">Rename</button>
                  <button onClick={() => updateChart(chart.id)} className="bg-green-500 text-white px-2 py-1 rounded">Update</button>
                  <button onClick={() => deleteChart(chart.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
