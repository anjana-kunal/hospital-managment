import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export default function ReportsAnalyticsMedcoreHealth() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-background text-on-surface font-body-md h-screen flex overflow-hidden">

{/*  SideNavBar Component  */}
<aside className="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-none h-screen w-64 fixed left-0 top-0 overflow-y-auto flex flex-col h-full py-6 z-50 hidden md:flex flex-col">
<div className="px-6 mb-8 flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden shrink-0">
<img alt="Hospital Logo" className="w-full h-full object-cover" data-alt="A minimalist, highly professional hospital logo icon featuring a stylized medical cross integrated with abstract architectural lines. The color palette is clinical and precise, utilizing deep navy blue and stark white. The icon is centered on a light gray background, projecting calm efficiency and technological reliability suitable for an enterprise medical administration system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLQUWBOe28Li9sYV5TJHErDpPOkrhfxKGBSP8O8LQQiOhMe96tkkTNzK7h826LcanuVhRtZZMrhopXgXF1ndPagr85Ll-d95odTcjsA2l3XVjmoOJTFDV9o460bjfTt-IimOHNufUjSZ2BXpLeW96YFEN017bfn6CdjmmnfJfwLNxuOF6vw5To_Cu_MYiqg_5mmw_-rL9iHR5FGnU5vEm_ehPbmR_bLc5_M8ptw7MCTqFGGMH6UopUjc6cio3eADmGgMS8dalj8L_A" />
</div>
<div>
<h1 className="text-lg font-extrabold text-blue-600 font-manrope">MedAdmin</h1>
<p className="font-label-sm text-label-sm text-on-surface-variant">Central Command</p>
</div>
</div>
<nav className="flex-1 px-2 space-y-1">
{/*  Active Tab  */}
<Link className="font-manrope text-sm font-semibold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600 flex items-center gap-3 px-6 py-4 cursor-pointer hover:pl-2 transition-all duration-200" to="/reports_analytics_medcore_health">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>monitoring</span>
                Analytics
            </Link>
<Link className="font-manrope text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-3 px-6 py-4 cursor-pointer hover:pl-2 transition-all duration-200" to="/audit_logs_medcore_health">
<span className="material-symbols-outlined">history_edu</span>
                Audit Logs
            </Link>
<Link className="font-manrope text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-3 px-6 py-4 cursor-pointer hover:pl-2 transition-all duration-200" to="/roles_permissions_medcore_health">
<span className="material-symbols-outlined">admin_panel_settings</span>
                Permissions
            </Link>
<Link className="font-manrope text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-3 px-6 py-4 cursor-pointer hover:pl-2 transition-all duration-200" to="/system_settings_medcore_health">
<span className="material-symbols-outlined">settings</span>
                System Settings
            </Link>
<Link className="font-manrope text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-3 px-6 py-4 cursor-pointer hover:pl-2 transition-all duration-200" to="/admin_profile_settings_medcore_health">
<span className="material-symbols-outlined">person</span>
                Profile
            </Link>
</nav>
<div className="px-6 mt-auto pt-6">
<div className="bg-surface-container-low rounded-lg p-md border border-outline-variant flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-secondary-fixed-dim"></div>
<span className="font-label-sm text-label-sm text-on-surface-variant">System Status: Optimal</span>
</div>
</div>
</aside>
{/*  Main Content Wrapper  */}
<div className="flex-1 flex flex-col ml-0 md:ml-64 relative min-h-screen">
{/*  TopAppBar Component  */}
<header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-40 w-full flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-4">
<span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight font-manrope md:hidden">MedAdmin Pro</span>
{/*  Search Bar (on_left)  */}
<div className="hidden md:flex items-center bg-surface-container-highest rounded-full px-4 py-2 w-64 border border-transparent focus-within:border-primary focus-within:bg-surface-container-lowest transition-colors">
<span className="material-symbols-outlined text-outline mr-2 text-[20px]">search</span>
<input className="bg-transparent border-none outline-none focus:ring-0 text-sm w-full font-body-sm text-on-surface placeholder-on-surface-variant p-0" placeholder="Search records..." type="text" />
</div>
</div>
<div className="flex items-center gap-2">
{/*  Trailing Icons  */}
<button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer active:opacity-80">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer active:opacity-80 hidden sm:flex">
<span className="material-symbols-outlined">help_outline</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer active:opacity-80 hidden sm:flex">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-px h-6 bg-outline-variant mx-2 hidden sm:block"></div>
{/*  Profile & Action  */}
<div className="flex items-center gap-3 pl-2">
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant shrink-0 cursor-pointer active:opacity-80 hover:bg-gray-50 transition-colors">
<img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="A professional headshot portrait of a healthcare administrator. The individual is wearing subtle, modern corporate attire, viewed against a pristine white studio background. The lighting is soft and even, typical of high-end corporate photography, conveying trustworthiness and clinical precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLN-QGjb5qhg8MpcbH95-qLZJixfjvyh5NENn1lGqbqfdTvNyYlxGNzcbbKUjJHHberWbM_UivAZd7j-MH9Jo_Rz6WZp5Wv5yVq-FboG3oGYLpYFCG_pioG2zUuFPoNlemCn-HsRvyrcvd8kx8K_TjEhVwNP8DGWtwYtC8XsclJ1jGindFtmMGLN4L-qKsqTaxTQRRDHgQ1kag4CY2lEwtR1rKMQVZ0WD0MByVahMtO9WYI65Eqe4Rq9X6eehQO9NRWm2Ba6aysZjH" />
</div>
<button onClick={() => navigate("/login_medcore_health")} className="font-manrope text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors px-3 py-1.5 rounded cursor-pointer active:opacity-80 hidden sm:block">Logout</button>
</div>
</div>
</header>
{/*  Canvas  */}
<main className="flex-1 overflow-y-auto p-grid-margin bg-background">
{/*  Page Header & Actions  */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-grid-margin gap-4">
<div>
<h2 className="font-h1 text-h1 text-on-surface">Reports and Analytics</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Enterprise performance overview for current fiscal quarter.</p>
</div>
<div className="flex flex-wrap items-center gap-3">
{/*  Date Picker  */}
<button className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant px-4 py-2 rounded-lg ambient-shadow-level-1 text-on-surface font-label-md hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px] text-outline">calendar_today</span>
                        Last 30 Days
                        <span className="material-symbols-outlined text-[18px] text-outline ml-2">expand_more</span>
</button>
{/*  Export Actions  */}
<div className="flex items-center rounded-lg border border-outline-variant overflow-hidden ambient-shadow-level-1">
<button className="bg-surface-container-lowest px-4 py-2 text-on-surface font-label-md hover:bg-surface-container-low transition-colors border-r border-outline-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                            PDF
                        </button>
<button className="bg-surface-container-lowest px-4 py-2 text-on-surface font-label-md hover:bg-surface-container-low transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">csv</span>
                            CSV
                        </button>
</div>
</div>
</div>
{/*  Bento Grid: Stat Cards  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter mb-grid-margin">
{/*  Stat Card 1: Revenue  */}
<div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-lg border border-outline-variant ambient-shadow-level-1 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">payments</span>
</div>
<div className="flex items-center gap-1 bg-secondary-fixed-dim/20 text-on-secondary-fixed px-2 py-1 rounded font-label-sm">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
                            +12.4%
                        </div>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-1">Total Revenue</h3>
<div className="font-h2 text-h2 text-on-surface">$4.2M</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-highest">
<div className="h-full bg-primary w-[75%]"></div>
</div>
</div>
{/*  Stat Card 2: Patient Growth  */}
<div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-lg border border-outline-variant ambient-shadow-level-1 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">groups</span>
</div>
<div className="flex items-center gap-1 bg-secondary-fixed-dim/20 text-on-secondary-fixed px-2 py-1 rounded font-label-sm">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
                            +8.2%
                        </div>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-1">New Admissions</h3>
<div className="font-h2 text-h2 text-on-surface">1,248</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-highest">
<div className="h-full bg-primary w-[60%]"></div>
</div>
</div>
{/*  Stat Card 3: Efficiency  */}
<div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-lg border border-outline-variant ambient-shadow-level-1 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined">bed</span>
</div>
<div className="flex items-center gap-1 bg-secondary-fixed-dim/20 text-on-secondary-fixed px-2 py-1 rounded font-label-sm">
<span className="material-symbols-outlined text-[14px]">trending_down</span>
                            -2.1 Days
                        </div>
</div>
<div>
<h3 className="font-label-md text-label-md text-on-surface-variant mb-1">Avg Length of Stay</h3>
<div className="font-h2 text-h2 text-on-surface">4.3 Days</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-highest">
<div className="h-full bg-secondary w-[85%]"></div>
</div>
</div>
</div>
{/*  Bento Grid: Charts Area  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter mb-grid-margin">
{/*  Revenue Line Chart Container  */}
<div className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant ambient-shadow-level-1 flex flex-col">
<div className="p-lg border-b border-outline-variant flex justify-between items-center">
<h3 className="font-h3 text-h3 text-on-surface">Revenue Trajectory</h3>
<button className="text-primary hover:bg-surface-container-low p-2 rounded-full transition-colors flex items-center justify-center">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="p-lg flex-1 min-h-[300px] flex items-end gap-2 relative">
{/*  Simulated Chart Grid Lines  */}
<div className="absolute inset-0 p-lg pointer-events-none flex flex-col justify-between">
<div className="w-full h-px bg-surface-container border-dashed"></div>
<div className="w-full h-px bg-surface-container border-dashed"></div>
<div className="w-full h-px bg-surface-container border-dashed"></div>
<div className="w-full h-px bg-surface-container border-dashed"></div>
<div className="w-full h-px bg-surface-container"></div>
</div>
{/*  Simulated Line Chart via SVG area  */}
<div className="absolute inset-0 p-lg pb-10">
<div className="w-full h-full relative overflow-hidden">
{/*  Abstract representational area shape  */}
<div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-primary/20 to-transparent" style={{"clipPath":"polygon(0 100%, 0 60%, 20% 50%, 40% 70%, 60% 40%, 80% 50%, 100% 20%, 100% 100%)"}}></div>
<svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
<polyline fill="none" points="0,60 20,50 40,70 60,40 80,50 100,20" stroke="#1a73e8" strokeWidth="2" vector-effect="non-scaling-stroke"></polyline>
<circle cx="100" cy="20" fill="#ffffff" r="4" stroke="#1a73e8" strokeWidth="2" vector-effect="non-scaling-stroke" />
</svg>
</div>
</div>
{/*  X-Axis Labels  */}
<div className="absolute bottom-4 left-0 w-full px-lg flex justify-between font-label-sm text-on-surface-variant">
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
</div>
</div>
</div>
{/*  Appointment Bar Chart Container  */}
<div className="lg:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant ambient-shadow-level-1 flex flex-col">
<div className="p-lg border-b border-outline-variant flex justify-between items-center">
<h3 className="font-h3 text-h3 text-on-surface">Dept Demand</h3>
<span className="material-symbols-outlined text-outline-variant">bar_chart</span>
</div>
<div className="p-lg flex-1 min-h-[300px] flex items-end justify-between gap-4 pt-12 relative">
{/*  Simulated Bar Chart  */}
<div className="w-full h-[80%] bg-surface-container rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-primary h-[85%] rounded-t-sm transition-all group-hover:bg-primary-fixed-variant"></div>
<span className="absolute -bottom-6 w-full text-center font-label-sm text-on-surface-variant truncate">Cardio</span>
</div>
<div className="w-full h-[80%] bg-surface-container rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-outline-variant h-[60%] rounded-t-sm transition-all group-hover:bg-primary-fixed-variant"></div>
<span className="absolute -bottom-6 w-full text-center font-label-sm text-on-surface-variant truncate">Neuro</span>
</div>
<div className="w-full h-[80%] bg-surface-container rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-outline-variant h-[45%] rounded-t-sm transition-all group-hover:bg-primary-fixed-variant"></div>
<span className="absolute -bottom-6 w-full text-center font-label-sm text-on-surface-variant truncate">Ortho</span>
</div>
<div className="w-full h-[80%] bg-surface-container rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-outline-variant h-[95%] rounded-t-sm transition-all group-hover:bg-primary-fixed-variant"></div>
<span className="absolute -bottom-6 w-full text-center font-label-sm text-on-surface-variant truncate">ER</span>
</div>
</div>
</div>
</div>
{/*  Department Performance Table  */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant ambient-shadow-level-1 overflow-hidden">
<div className="p-lg border-b border-outline-variant flex justify-between items-center bg-surface-bright">
<h3 className="font-h3 text-h3 text-on-surface">Department Performance</h3>
<button className="bg-primary hover:bg-primary-fixed-variant text-on-primary px-4 py-2 rounded font-label-md transition-colors flex items-center gap-2">
                        View Full Report
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
<div className="overflow-x-auto w-full">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-highest border-b border-outline-variant">
<th className="p-md font-label-md text-on-surface whitespace-nowrap">Department</th>
<th className="p-md font-label-md text-on-surface whitespace-nowrap">Bed Occupancy</th>
<th className="p-md font-label-md text-on-surface whitespace-nowrap">Revenue (MTD)</th>
<th className="p-md font-label-md text-on-surface whitespace-nowrap">Staffing Level</th>
<th className="p-md font-label-md text-on-surface whitespace-nowrap">Status</th>
</tr>
</thead>
<tbody className="font-body-md text-on-surface">
<tr className="border-b border-surface-container hover:bg-surface-container-low transition-colors">
<td className="p-md font-medium text-on-surface">Emergency (ER)</td>
<td className="p-md">
<div className="flex items-center gap-2">
<div className="w-16 h-2 bg-surface-container rounded-full overflow-hidden">
<div className="w-[95%] h-full bg-error"></div>
</div>
<span className="font-label-sm">95%</span>
</div>
</td>
<td className="p-md">$1.2M</td>
<td className="p-md text-on-surface-variant">High Demand</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-1 rounded bg-error-container text-on-error-container font-label-sm">Critical Volume</span>
</td>
</tr>
<tr className="border-b border-surface-container bg-background hover:bg-surface-container-low transition-colors">
<td className="p-md font-medium text-on-surface">Cardiology</td>
<td className="p-md">
<div className="flex items-center gap-2">
<div className="w-16 h-2 bg-surface-container rounded-full overflow-hidden">
<div className="w-[78%] h-full bg-primary"></div>
</div>
<span className="font-label-sm">78%</span>
</div>
</td>
<td className="p-md">$850K</td>
<td className="p-md text-on-surface-variant">Optimal</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-1 rounded bg-secondary-fixed-dim/20 text-on-secondary-fixed font-label-sm">Stable</span>
</td>
</tr>
<tr className="border-b border-surface-container hover:bg-surface-container-low transition-colors">
<td className="p-md font-medium text-on-surface">Neurology</td>
<td className="p-md">
<div className="flex items-center gap-2">
<div className="w-16 h-2 bg-surface-container rounded-full overflow-hidden">
<div className="w-[62%] h-full bg-primary"></div>
</div>
<span className="font-label-sm">62%</span>
</div>
</td>
<td className="p-md">$620K</td>
<td className="p-md text-on-surface-variant">Adequate</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-1 rounded bg-secondary-fixed-dim/20 text-on-secondary-fixed font-label-sm">Stable</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors bg-background">
<td className="p-md font-medium text-on-surface">Orthopedics</td>
<td className="p-md">
<div className="flex items-center gap-2">
<div className="w-16 h-2 bg-surface-container rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-tertiary"></div>
</div>
<span className="font-label-sm">85%</span>
</div>
</td>
<td className="p-md">$940K</td>
<td className="p-md text-on-surface-variant">Stretched</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-1 rounded bg-tertiary-fixed-dim/40 text-on-tertiary-fixed font-label-sm">Monitor</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>

</div>
    </>
  );
}
