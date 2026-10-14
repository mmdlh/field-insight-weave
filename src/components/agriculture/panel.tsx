import type { ReactNode } from 'react';
import { Ellipsis, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function Panel({title, subtitle, children, className='', action}: {title:string; subtitle?:string; children:ReactNode; className?:string; action?:ReactNode}) {
  return <section className={`glass-panel ${className}`}><header className="panel-head"><div><h2><span className="title-mark"/>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{action ?? <Ellipsis size={18} className="text-muted-foreground"/>}</header>{children}</section>;
}
export function Metric({title,value,unit,change,icon:Icon,tone=0}: {title:string;value:string;unit:string;change:string;icon:LucideIcon;tone?:number}) {
  return <div className={`glass-panel metric tone-${tone}`}><div className="metric-top"><span>{title}</span><span className="metric-icon"><Icon size={21}/></span></div><div className="metric-value">{value}<small>{unit}</small></div><div className="metric-bottom"><span><ArrowUpRight size={12}/>{change}</span><span>较上月</span><i className="mini-bars">{[4,7,5,9,6,11,8,13,10,15,13,18].map((h,i)=><b key={i} className={`spark-${h}`}/>)}</i></div></div>;
}
export function SmallTabs({value,onChange,items}: {value:string;onChange:(s:string)=>void;items:{value:string;label:string}[]}) {return <div className="small-tabs">{items.map(i=><Button key={i.value} variant="ghost" size="sm" className={value===i.value?'selected':''} onClick={()=>onChange(i.value)}>{i.label}</Button>)}</div>}
