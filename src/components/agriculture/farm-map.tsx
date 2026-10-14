import { useState } from 'react';
import { Maximize, Plus, Minus, Layers, LocateFixed, Leaf, Droplets, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
const points = [{x:320,y:140,name:'A01 智慧水稻示范区',crop:'优质水稻',area:'1,280',status:'生长良好'},{x:470,y:230,name:'A02 生态蔬菜种植区',crop:'有机蔬菜',area:'860',status:'生长良好'},{x:255,y:300,name:'B01 数字果园示范区',crop:'阳光玫瑰',area:'640',status:'待灌溉'},{x:565,y:115,name:'C01 智能温室大棚',crop:'樱桃番茄',area:'320',status:'生长良好'}];
export function FarmMap() {
 const [selected,setSelected]=useState(0); const [zoom,setZoom]=useState(1); const [layer,setLayer]=useState('crop'); const [expanded,setExpanded]=useState(false);
 const point=points[selected];
 return <section className={`farm-map ${expanded?'map-expanded':''}`}>
  <header className="map-heading"><div><span className="live-dot"/><h2>农业基地数字孪生</h2><span className="map-tag">实时监测</span></div><Button variant="ghost" size="icon" title="放大地图" aria-label="放大地图" onClick={()=>setExpanded(!expanded)}><Maximize size={16}/></Button></header>
  <div className="map-info"><span>浙江省 · 湖州市 · 德清县</span><small>120.08° E / 30.54° N</small></div>
  <div className="map-view"><svg viewBox="0 0 800 420" aria-label="德清智慧农业基地地图" className={`terrain zoom-${zoom} layer-${layer}`}>
   <defs><pattern id="map-grid" width="35" height="35" patternUnits="userSpaceOnUse"><path d="M 35 0 L 0 0 0 35" className="grid-line"/></pattern><pattern id="field-lines" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><path d="M0 0V9" className="field-line"/></pattern><filter id="map-glow"><feGaussianBlur stdDeviation="3"/></filter><linearGradient id="land-fill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" className="land-light"/><stop offset="1" className="land-dark"/></linearGradient></defs>
   <rect width="800" height="420" fill="url(#map-grid)"/>
   <g className="land-shadow"><path d="M80 183L142 114 250 81 332 41 420 72 488 49 553 80 645 64 683 121 736 156 698 203 725 254 659 310 583 330 520 375 443 351 366 387 293 340 215 336 162 284 99 264 118 225Z"/></g>
   <g className="land-top"><path fill="url(#land-fill)" d="M80 166L142 97 250 64 332 24 420 55 488 32 553 63 645 47 683 104 736 139 698 186 725 237 659 293 583 313 520 358 443 334 366 370 293 323 215 319 162 267 99 247 118 208Z"/><path className="land-outline" d="M80 166L142 97 250 64 332 24 420 55 488 32 553 63 645 47 683 104 736 139 698 186 725 237 659 293 583 313 520 358 443 334 366 370 293 323 215 319 162 267 99 247 118 208Z"/>
   {Array.from({length:6},(_,r)=>Array.from({length:8},(_,c)=>{const x=152+c*59+r*4,y=95+r*35;return <g key={`${r}-${c}`}><path className={`field field-${(r+c)%5}`} d={`M${x} ${y}l44 -11 19 20 -44 12Z`}/><path fill="url(#field-lines)" d={`M${x} ${y}l44 -11 19 20 -44 12Z`}/></g>}))}
   <path className="map-river" d="M426 55C348 103 433 139 399 178S460 225 440 262 471 299 443 334"/>
   <path className="map-road" d="M120 211L285 170 424 188 545 145 694 184M255 80L302 146 339 203 310 278 366 366"/>
   <path className="map-road-edge" d="M120 211L285 170 424 188 545 145 694 184M255 80L302 146 339 203 310 278 366 366"/>
   <g className="buildings">{[0,1,2,3,4].map(i=><g key={i} transform={`translate(${525+i*19} ${86+i*5})`}><path d="M0 0l12 -4 0 15 -12 4Z"/><path d="M0 0l-7 -6 12 -4 7 6Z" className="roof"/><path d="M0 0v15l-7 -6v-15Z" className="building-side"/></g>)}</g>
   </g>
   {points.map((p,i)=><g key={p.name} className={`map-point ${selected===i?'active':''}`} onClick={()=>setSelected(i)} role="button" tabIndex={0} aria-label={p.name} onKeyDown={e=>{if(e.key==='Enter')setSelected(i)}}><ellipse cx={p.x} cy={p.y+10} rx="25" ry="10" className="point-ring"/><ellipse cx={p.x} cy={p.y+10} rx="15" ry="6" className="point-ring-inner"/><path d={`M${p.x} ${p.y+8}v-40`} className="point-stem"/><circle cx={p.x} cy={p.y-34} r="11" className="point-core"/><circle cx={p.x} cy={p.y-34} r="4" className="point-center"/><text x={p.x+17} y={p.y-32}>{p.name.slice(4)}</text></g>)}
   <text x="650" y="365" className="compass-text">N</text><path d="M656 375l-7 20 7 -5 7 5Z" className="compass"/>
  </svg></div>
  <div className="map-controls"><Button variant="outline" size="icon" aria-label="地图放大" title="地图放大" onClick={()=>setZoom(Math.min(3,zoom+1))}><Plus/></Button><Button variant="outline" size="icon" aria-label="地图缩小" title="地图缩小" onClick={()=>setZoom(Math.max(1,zoom-1))}><Minus/></Button><Button variant="outline" size="icon" aria-label="恢复地图" title="恢复地图" onClick={()=>{setZoom(1);setSelected(0)}}><LocateFixed/></Button></div>
  <div className="map-detail"><div><span className="live-dot"/>{point.name}</div><dl><dt>作物类型</dt><dd>{point.crop}</dd><dt>种植面积</dt><dd>{point.area} <small>亩</small></dd><dt>当前状态</dt><dd className={point.status==='待灌溉'?'text-warning':'text-primary'}>{point.status}</dd></dl></div>
  <footer className="map-footer"><span><Layers size={13}/> 图层</span>{[{id:'crop',label:'作物分布',icon:Leaf},{id:'water',label:'水肥监测',icon:Droplets},{id:'sensor',label:'设备点位',icon:Radio}].map(l=><Button variant="ghost" size="sm" key={l.id} className={layer===l.id?'selected':''} onClick={()=>setLayer(l.id)}><l.icon size={12}/>{l.label}</Button>)}<span className="map-scale">━━━━ 500 m</span></footer>
 </section>;
}
