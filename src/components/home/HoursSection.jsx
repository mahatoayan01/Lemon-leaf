import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_DATA } from '../../data/restaurant';

export const HoursSection = () => {
  // Day of week index: 0 is Sun, 1 is Mon, 2 is Tue, 3 is Wed, 4 is Thu, 5 is Fri, 6 is Sat
  const dayIndex = new Date().getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = dayNames[dayIndex];

  return (
    <section className="py-16 sm:py-20 bg-warm-50 border-b border-warm-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lemon-100 text-lemon-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Clock className="w-3.5 h-3.5" />
            Timings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Weekly Opening Hours
          </h2>
          <p className="text-sm text-zinc-600 mt-2">
            Open 7 days a week for lunch, evening snacks, and family dinners.
          </p>
        </div>

        {/* Schedule Table Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-warm-200 text-xs font-bold uppercase text-zinc-500 tracking-wider">
                  <th className="py-3 px-4">Day</th>
                  <th className="py-3 px-4">Operating Hours</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-100 text-sm">
                {RESTAURANT_DATA.openingHours.map((schedule) => {
                  const isToday = schedule.day.toLowerCase() === currentDayName.toLowerCase();

                  return (
                    <tr
                      key={schedule.day}
                      className={`transition-colors ${
                        isToday
                          ? 'bg-leaf-50/80 font-bold text-leaf-950'
                          : 'text-zinc-700 hover:bg-warm-50/50'
                      }`}
                    >
                      <td className="py-3.5 px-4 flex items-center gap-2">
                        <span>{schedule.day}</span>
                        {isToday && (
                          <span className="px-2 py-0.5 rounded-full bg-leaf-700 text-white text-[10px] font-extrabold tracking-wide uppercase">
                            Today
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs sm:text-sm">
                        {schedule.raw}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Open
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-warm-200 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
            <span>Last dine-in seating: 10:30 PM | Takeaway orders accepted until 10:45 PM</span>
            <span className="font-semibold text-leaf-800">No holiday closures</span>
          </div>
        </div>

      </div>
    </section>
  );
};

