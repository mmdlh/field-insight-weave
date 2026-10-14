import { LayoutDashboard, CloudSun, Sprout, Radio, Droplets, ShieldCheck, ChartNoAxesCombined } from 'lucide-react';
export const menus = [
  { path: '/', label: '农业综合驾驶舱', short: '综合概览', icon: LayoutDashboard },
  { path: '/environment', label: '农田环境监测', short: '环境监测', icon: CloudSun },
  { path: '/production', label: '农业生产管理', short: '生产管理', icon: Sprout },
  { path: '/devices', label: '智能设备管理', short: '智能设备', icon: Radio },
  { path: '/irrigation', label: '智慧水肥管理', short: '智慧水肥', icon: Droplets },
  { path: '/quality', label: '农产品质量溯源', short: '质量溯源', icon: ShieldCheck },
  { path: '/analytics', label: '农业数据分析', short: '数据分析', icon: ChartNoAxesCombined },
] as const;
export const plots = [
  {name:'A01 · 智慧水稻示范区', crop:'优质水稻',area:'1,280',temp:'24.6', moisture:'68.5',health:'生长良好',manager:'张建国'},
  {name:'A02 · 生态蔬菜种植区',crop:'有机蔬菜',area:'860',temp:'25.2',moisture:'72.1',health:'生长良好',manager:'李晓华'},
  {name:'B01 · 数字果园示范区',crop:'阳光玫瑰',area:'640',temp:'23.8',moisture:'61.4',health:'待灌溉',manager:'王志强'},
  {name:'B02 · 高标准粮食种植区',crop:'冬小麦',area:'1,560',temp:'24.1',moisture:'65.8',health:'生长良好',manager:'陈丽萍'},
  {name:'C01 · 智能温室大棚区',crop:'樱桃番茄',area:'320',temp:'26.4',moisture:'70.2',health:'生长良好',manager:'刘海峰'},
];
export function downloadCsv(name: string, rows: string[][]) {
  const csv = '\uFEFF' + rows.map(row=>row.map(value=>'"'+value.replaceAll('"','""')+'"').join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));
  const a = document.createElement('a'); a.href=url; a.download=name+'.csv'; a.click(); URL.revokeObjectURL(url);
}
