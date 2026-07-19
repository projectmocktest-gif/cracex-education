import React from 'react';
import { X, Phone, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId: string | null;
}

export function SyllabusModal({ isOpen, onClose, courseId }: SyllabusModalProps) {
  if (!isOpen || !courseId) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:p-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative z-10"
        >
          {/* Header */}
          <div className="bg-cracex-blue p-4 sm:p-6 flex justify-between items-center text-white">
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase">
                {courseId === 'icds' ? 'ICDS Exam Syllabus 2026' : 'Gram Panchayat Exam 2026'}
              </h2>
              <p className="text-blue-200 text-xs sm:text-sm mt-1">Detailed Exam Pattern & Syllabus</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-grow overflow-y-auto p-4 sm:p-6 custom-scrollbar">
            {courseId === 'icds' ? <ICDSSyllabus /> : <PanchayatSyllabus />}
          </div>

          {/* Footer */}
          <div className="bg-slate-50 p-4 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg font-bold text-slate-600 bg-white border border-slate-300 hover:bg-slate-50 transition-colors uppercase text-sm tracking-wider"
            >
              Close
            </button>
            <a
              href="tel:7501409423"
              className="px-6 py-2.5 rounded-lg font-bold text-cracex-blue bg-cracex-orange hover:bg-cracex-orange-hover transition-colors uppercase text-sm tracking-wider flex items-center justify-center gap-2 shadow-md"
            >
              <Phone size={16} /> Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function ICDSSyllabus() {
  return (
    <div className="space-y-8 text-slate-700">
      <section>
        <h3 className="text-lg font-bold text-cracex-blue uppercase mb-4 border-b border-slate-200 pb-2">1. ICDS Worker (কর্মী)</h3>
        
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="p-3 border border-slate-200">Subject</th>
                <th className="p-3 border border-slate-200">Marks</th>
                <th className="p-3 border border-slate-200">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-slate-200">Bengali Language</td><td className="p-3 border border-slate-200">20</td><td className="p-3 border border-slate-200" rowSpan={4}>90 mins to 2 hrs</td></tr>
              <tr><td className="p-3 border border-slate-200">General Knowledge & Current Affairs</td><td className="p-3 border border-slate-200">30</td></tr>
              <tr><td className="p-3 border border-slate-200">Arithmetic & Numerical Ability</td><td className="p-3 border border-slate-200">20</td></tr>
              <tr><td className="p-3 border border-slate-200">Child Development & Nutrition Awareness</td><td className="p-3 border border-slate-200">30</td></tr>
              <tr className="bg-slate-50 font-bold"><td className="p-3 border border-slate-200">Total</td><td className="p-3 border border-slate-200">100</td><td className="p-3 border border-slate-200"></td></tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-3 text-sm">
          <p><strong>• বাংলা ভাষা:</strong> বোধপরীক্ষা, বিশেষ্য, সর্বনাম, ক্রিয়া, বিশেষণ, কাল, বাক্য সংশোধন, শূন্যস্থান পূরণ, শব্দভাণ্ডার, প্রবন্ধ রচনা, পত্র লিখন।</p>
          <p><strong>• সাধারণ জ্ঞান ও কারেন্ট অ্যাফেয়ার্স:</strong> পশ্চিমবঙ্গ ও ভারতের ইতিহাস, ভূগোল, সংবিধান, সমসাময়িক ঘটনাবলী, সরকারি প্রকল্প, সাধারণ বিজ্ঞান, গুরুত্বপূর্ণ ব্যক্তিত্ব।</p>
          <p><strong>• পাটিগণিত:</strong> সংখ্যা তত্ত্ব, সরলীকরণ, শতকরা, অনুপাত, গড়, লাভ-ক্ষতি, সরল সুদ, সময় ও কাজ, ডাটা ইন্টারপ্রিটেশন।</p>
          <p><strong>• শিশু বিকাশ ও পুষ্টি:</strong> শিশুর বৃদ্ধি, মা ও শিশুর পুষ্টি, অঙ্গনওয়াড়ি কেন্দ্র, ICDS, পোষণ অভিযান, টিকাকরণ, স্বাস্থ্যবিধি।</p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-bold text-cracex-blue uppercase mb-4 border-b border-slate-200 pb-2">2. ICDS Helper (সহায়িকা)</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="p-3 border border-slate-200">Subject</th>
                <th className="p-3 border border-slate-200">Marks</th>
                <th className="p-3 border border-slate-200">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-slate-200">Bengali Language</td><td className="p-3 border border-slate-200">40</td><td className="p-3 border border-slate-200" rowSpan={3}>90 mins</td></tr>
              <tr><td className="p-3 border border-slate-200">General Knowledge</td><td className="p-3 border border-slate-200">30</td></tr>
              <tr><td className="p-3 border border-slate-200">Basic Arithmetic</td><td className="p-3 border border-slate-200">30</td></tr>
              <tr className="bg-slate-50 font-bold"><td className="p-3 border border-slate-200">Total</td><td className="p-3 border border-slate-200">100</td><td className="p-3 border border-slate-200"></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section>
        <h3 className="text-lg font-bold text-cracex-blue uppercase mb-4 border-b border-slate-200 pb-2">3. ICDS Supervisor Main Exam</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="p-3 border border-slate-200">Paper</th>
                <th className="p-3 border border-slate-200">Subject</th>
                <th className="p-3 border border-slate-200">Marks</th>
                <th className="p-3 border border-slate-200">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-slate-200">Paper I</td><td className="p-3 border border-slate-200">English</td><td className="p-3 border border-slate-200">100</td><td className="p-3 border border-slate-200">90 mins</td></tr>
              <tr><td className="p-3 border border-slate-200">Paper II</td><td className="p-3 border border-slate-200">Bengali / Hindi / Urdu / Nepali / Santali</td><td className="p-3 border border-slate-200">100</td><td className="p-3 border border-slate-200">90 mins</td></tr>
              <tr><td className="p-3 border border-slate-200">Paper III</td><td className="p-3 border border-slate-200">General Studies & Current Affairs</td><td className="p-3 border border-slate-200">100</td><td className="p-3 border border-slate-200">90 mins</td></tr>
              <tr><td className="p-3 border border-slate-200">Paper IV</td><td className="p-3 border border-slate-200">Arithmetic</td><td className="p-3 border border-slate-200">100</td><td className="p-3 border border-slate-200">90 mins</td></tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm font-semibold text-slate-800">• Viva Voce / Interview: 50 Marks</p>
        </div>
      </section>
    </div>
  );
}

function PanchayatSyllabus() {
  return (
    <div className="space-y-8 text-slate-700">
      <section>
        <h3 className="text-lg font-bold text-cracex-blue uppercase mb-4 border-b border-slate-200 pb-2">1. Exam Pattern</h3>
        
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="p-3 border border-slate-200">Subject</th>
                <th className="p-3 border border-slate-200">No. of Questions</th>
                <th className="p-3 border border-slate-200">Total Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-slate-200">Bengali</td><td className="p-3 border border-slate-200">25</td><td className="p-3 border border-slate-200">25</td></tr>
              <tr><td className="p-3 border border-slate-200">English</td><td className="p-3 border border-slate-200">25</td><td className="p-3 border border-slate-200">25</td></tr>
              <tr><td className="p-3 border border-slate-200">Arithmetic / Maths</td><td className="p-3 border border-slate-200">25</td><td className="p-3 border border-slate-200">25</td></tr>
              <tr><td className="p-3 border border-slate-200">General Knowledge</td><td className="p-3 border border-slate-200">10</td><td className="p-3 border border-slate-200">10</td></tr>
              <tr className="bg-slate-50 font-bold"><td className="p-3 border border-slate-200">Total</td><td className="p-3 border border-slate-200">85</td><td className="p-3 border border-slate-200">85</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-bold text-cracex-blue uppercase mb-4 border-b border-slate-200 pb-2">2. Selection Process</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="p-3 border border-slate-200">Post</th>
                <th className="p-3 border border-slate-200">Written</th>
                <th className="p-3 border border-slate-200">Interview</th>
                <th className="p-3 border border-slate-200">Skill Test</th>
                <th className="p-3 border border-slate-200">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-slate-200">Panchayat Worker, Group D, Peon</td><td className="p-3 border border-slate-200">43</td><td className="p-3 border border-slate-200">7</td><td className="p-3 border border-slate-200">—</td><td className="p-3 border border-slate-200">50</td></tr>
              <tr><td className="p-3 border border-slate-200">GP Sahayak, Secretary, Clerk, Typist</td><td className="p-3 border border-slate-200">85</td><td className="p-3 border border-slate-200">15 / 10</td><td className="p-3 border border-slate-200">5 (if req)</td><td className="p-3 border border-slate-200">100</td></tr>
              <tr><td className="p-3 border border-slate-200">DEO, Cashier, LDC, Steno, EA, Nirman Sahayak</td><td className="p-3 border border-slate-200">85</td><td className="p-3 border border-slate-200">10</td><td className="p-3 border border-slate-200">5</td><td className="p-3 border border-slate-200">100</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section>
        <h3 className="text-lg font-bold text-cracex-blue uppercase mb-4 border-b border-slate-200 pb-2">3. Detailed Syllabus</h3>
        <div className="space-y-3 text-sm">
          <p><strong>• বাংলা (Bengali):</strong> কারক, বিভক্তি, সন্ধি, সমাস, প্রত্যয়, লিঙ্গ পরিবর্তন, এককথায় প্রকাশ, সমার্থক শব্দ, বিপরীত শব্দ, বাগধারা, প্রবাদ প্রবচন, বোধপরীক্ষা।</p>
          <p><strong>• English:</strong> Articles, Prepositions, Tenses, Narration, Voice Change, Synonyms, Antonyms, One-word substitution, Idioms & Phrases, Sentence Transformation, Spotting Errors, Spelling Test.</p>
          <p><strong>• পাটিগণিত (Maths):</strong> ল.সা.গু ও গ.সা.গু, লাভ ও ক্ষতি, অনুপাত ও সমানুপাত, গড়, শতাংশ, সরল ও চক্রবৃদ্ধি সুদ, সময় ও কাজ, সময় ও দূরত্ব।</p>
          <p><strong>• সাধারণ জ্ঞান (GK):</strong> পঞ্চায়েত ব্যবস্থা (৭৩তম সংবিধান সংশোধনী, ত্রি-স্তরীয় কাঠামো), সরকারি প্রকল্প (লক্ষ্মীর ভান্ডার, কন্যাশ্রী, ১০০ দিনের কাজ, আবাস যোজনা), গ্রামীণ অর্থনীতি, ইতিহাস ও ভূগোল।</p>
        </div>
      </section>
    </div>
  );
}
