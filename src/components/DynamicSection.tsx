import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Bell, ChevronRight, Briefcase, Landmark, Train, PiggyBank, ShieldCheck, BookOpen, Users, Map } from 'lucide-react';
import { MOCK_JOBS, COURSES } from '../data';
import { JobNotification } from '../types';
import { SyllabusModal } from './SyllabusModal';

// Map icon strings to actual Lucide components
const IconMap: Record<string, React.ElementType> = {
  Landmark,
  Briefcase,
  Train,
  PiggyBank,
  ShieldCheck,
  BookOpen,
  Users,
  Map
};

export function DynamicSection() {
  const [jobs, setJobs] = useState<JobNotification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const handleCourseClick = (courseId: string) => {
    if (courseId === 'icds' || courseId === 'panchayat') {
      setSelectedCourseId(courseId);
      setIsSyllabusModalOpen(true);
    }
  };

  // Simulate fetching data from a Google Sheet Web App endpoint
  useEffect(() => {
    const fetchJobsFromSheets = async () => {
      try {
        setIsLoading(true);
        // In a real scenario, this would be a fetch to your Google Apps Script Web App URL
        // const response = await fetch('YOUR_GOOGLE_SCRIPT_WEB_APP_URL');
        // const data = await response.json();
        
        // Simulating network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setJobs(MOCK_JOBS);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobsFromSheets();
  }, []);

  return (
    <section id="jobs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Recent Job Notifications */}
          <div className="lg:col-span-5 flex flex-col h-[600px]">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full overflow-hidden">
              <div className="p-4 bg-cracex-blue text-white flex justify-between items-center z-10 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <Bell size={18} className="animate-pulse text-cracex-orange" />
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider">Job Notifications</h3>
                </div>
                <span className="text-[10px] bg-cracex-orange text-cracex-blue px-2 py-0.5 rounded font-bold uppercase">NEW</span>
              </div>
              
              <div className="flex-grow overflow-hidden relative bg-white">
                {isLoading ? (
                  <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-cracex-blue"></div>
                  </div>
                ) : (
                  <div className="h-full overflow-y-auto custom-scrollbar p-2 space-y-2">
                    {jobs.map((job, index) => (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={job.id}
                        className="p-3 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group rounded"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <div className="text-[10px] text-blue-600 font-bold uppercase">
                            {job.department}
                          </div>
                          {job.isNew && (
                            <div className="text-[9px] bg-cracex-orange text-cracex-blue px-1.5 py-0.5 rounded font-bold uppercase">
                              Active
                            </div>
                          )}
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-cracex-orange transition-colors">
                          {job.title}
                        </h3>
                        <div className="text-[10px] text-slate-500 mt-1 flex justify-between items-center">
                          <span>Posted: {new Date(job.date).toLocaleDateString()}</span>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cracex-orange flex items-center gap-1">
                            Details <ChevronRight size={12} />
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Course Carousel/Grid */}
          <div id="courses" className="lg:col-span-7">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-cracex-blue mb-2 tracking-tight uppercase">Our Premium Courses</h2>
              <div className="w-16 h-1 bg-cracex-orange mb-4"></div>
              <p className="text-sm text-slate-500">Targeted batches designed by industry experts to help you secure your dream government job.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COURSES.map((course, index) => {
                const IconComponent = IconMap[course.iconName];
                const isClickable = course.id === 'icds' || course.id === 'panchayat';
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    key={course.id}
                    onClick={() => handleCourseClick(course.id)}
                    className={`bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-all duration-300 group flex items-start gap-4 ${isClickable ? 'cursor-pointer hover:border-cracex-orange hover:shadow-md' : 'hover:shadow-md'}`}
                  >
                    <div className="text-cracex-orange group-hover:text-cracex-orange-hover transition-colors duration-300 flex-shrink-0 mt-1">
                      {IconComponent && <IconComponent size={24} />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-cracex-blue uppercase leading-tight mb-1 group-hover:text-cracex-orange transition-colors">
                        {course.name}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {course.shortDesc}
                      </p>
                      {isClickable && (
                        <span className="text-[10px] text-cracex-orange font-bold uppercase mt-2 inline-block">
                          View Syllabus &rarr;
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-8 text-center sm:text-left">
              <a href="tel:7501409423" className="inline-flex items-center justify-center gap-2 text-cracex-blue font-bold hover:text-cracex-orange transition-colors group text-sm">
                Download detailed syllabus & fee structure 
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
      <SyllabusModal 
        isOpen={isSyllabusModalOpen} 
        onClose={() => setIsSyllabusModalOpen(false)} 
        courseId={selectedCourseId} 
      />
    </section>
  );
}
