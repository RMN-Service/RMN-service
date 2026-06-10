import React from 'react';
import { motion } from 'framer-motion';

const RepairDashboard = () => {
  const tickets = [
    {
      id: 'TK-7721',
      device: 'MacBook Pro 16" M2 Max',
      status: 'in_progress',
      progress: 65,
      steps: [
        { name: 'Приемка', completed: true },
        { name: 'Диагностика', completed: true },
        { name: 'Замена матрицы', completed: true },
        { name: 'Тестирование', completed: false },
        { name: 'Выдача', completed: false }
      ],
      estimatedDate: '2026-06-10',
      cost: 450
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'ready': return 'text-green-400 bg-green-400/10';
      case 'in_progress': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Мои заказы</h2>
        
        {tickets.map(ticket => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            key={ticket.id}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 mb-6"
          >
            <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">ID: {ticket.id}</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${getStatusColor(ticket.status)}`}>
                    В работе
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{ticket.device}</h3>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-500 mb-1">Ориентировочная дата</div>
                <div className="text-lg font-medium">{ticket.estimatedDate}</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex justify-between text-sm mb-4">
                <span className="text-slate-400">Прогресс ремонта</span>
                <span className="text-blue-400 font-bold">{ticket.progress}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${ticket.progress}%` }}
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                />
              </div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {ticket.steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className={`h-1 mb-3 rounded-full ${step.completed ? 'bg-blue-500' : 'bg-slate-800'}`} />
                  <div className={`text-[10px] uppercase font-bold tracking-wider ${step.completed ? 'text-slate-200' : 'text-slate-600'}`}>
                    {step.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RepairDashboard;
