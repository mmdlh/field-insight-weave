import { useEffect, useRef } from 'react';
import type { EChartsOption, ECharts } from 'echarts';

export function Chart({ option, height = 220 }: { option: EChartsOption; height?: number }) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let instance: ECharts | undefined;
    let disposed = false;
    const observer = new ResizeObserver(() => instance?.resize());
    async function mount() {
      const echarts = await import('echarts');
      if (disposed || !element.current) return;
      const css = getComputedStyle(document.documentElement);
      instance = echarts.init(element.current, undefined, { renderer: 'canvas' });
      instance.setOption({
        color: ['--chart-1', '--chart-2', '--chart-3', '--chart-4', '--chart-5'].map(v => css.getPropertyValue(v).trim()),
        backgroundColor: 'transparent',
        textStyle: { color: css.getPropertyValue('--muted-foreground').trim(), fontFamily: '"Noto Sans SC", sans-serif', fontSize: 10 },
        animationDuration: 900,
        ...option,
      }, { notMerge: true });
      observer.observe(element.current);
    }
    void mount();
    return () => { disposed = true; observer.disconnect(); instance?.dispose(); };
  }, [option]);
  return <div ref={element} className={`chart chart-${height}`} role="img" aria-label="农业数据可视化图表" />;
}

const axis = { axisLine: { show: false }, axisTick: { show: false }, axisLabel: { fontSize: 10 }, splitLine: { lineStyle: { color: 'rgba(143,201,185,0.09)', type: 'dashed' as const } } };
const legend = { top: 2, right: 5, icon: 'circle', itemWidth: 6, itemHeight: 6, textStyle: { color: '#91b5ac', fontSize: 10 }, itemGap: 18 };
export function lineOption(period = 'week', names = ['土壤湿度', '空气湿度']): EChartsOption {
  return {
    tooltip: { trigger: 'axis' }, legend: { ...legend, top: 4 }, grid: { top: 40, left: 35, right: 14, bottom: 26 },
    xAxis: { ...axis, type: 'category', boundaryGap: false, data: period === 'day' ? ['02:00','06:00','10:00','14:00','18:00','22:00'] : ['10/08','10/09','10/10','10/11','10/12','10/13','10/14'] },
    yAxis: { ...axis, type: 'value', max: 100 },
    series: names.map((name, i) => ({ name, type: 'line', smooth: true, symbol: 'circle', symbolSize: 5, lineStyle: { width: 2 }, areaStyle: { opacity: 0.08 }, data: (i ? [58,65,59,77,70,80,73] : [37,44,38,53,47,55,48]).slice(period === 'day' ? 1 : 0) })),
  };
}
export function barOption(names = ['计划产量', '实际产量']): EChartsOption {
  return { tooltip: { trigger: 'axis' }, legend, grid: { top: 38, left: 38, right: 12, bottom: 25 }, xAxis: { ...axis, type: 'category', data: ['水稻','小麦','玉米','蔬菜','水果','其他'] }, yAxis: { ...axis, type: 'value' }, series: names.map((name,i) => ({ name, type: 'bar', barWidth: 11, itemStyle: { borderRadius: [3,3,0,0] }, data: i ? [720,580,690,460,360,210] : [680,610,630,420,310,180] })) };
}
export function donutOption(): EChartsOption {
  return { tooltip: { trigger: 'item', formatter: '{b}: {c} 亩 ({d}%)' }, legend: { ...legend, orient: 'vertical', top: 'middle', right: '3%', itemGap: 18 }, series: [{ type: 'pie', radius: ['51%','70%'], center: ['33%','50%'], itemStyle: { borderRadius: 3, borderWidth: 3, borderColor: '#092b24' }, label: { show: false }, data: [{value:4860,name:'粮食作物'},{value:2680,name:'经济作物'},{value:1920,name:'蔬菜种植'},{value:1340,name:'果园种植'}] }], graphic: [{ type: 'text', left:'22%', top:'41%', style: {text:'10,800',fill:'#effff9',fontSize:22,fontWeight:600} },{type:'text',left:'26%',top:'55%',style:{text:'种植总面积',fill:'#91b5ac',fontSize:10}}] };
}
export function radarOption(): EChartsOption {
  return { tooltip: {}, legend: { ...legend, top: 2 }, radar: { center: ['50%','57%'], radius: '65%', indicator: ['土壤质量','作物长势','水肥管理','环境适宜','病虫防控','产出效益'].map(name=>({name,max:100})), axisName:{color:'#91b5ac',fontSize:10}, splitArea:{areaStyle:{color:['rgba(52,207,141,0.02)','rgba(52,207,141,0.04)']}}, splitLine:{lineStyle:{color:'rgba(143,201,185,0.18)'}}, axisLine:{lineStyle:{color:'rgba(143,201,185,0.18)'}} }, series:[{type:'radar',data:[{name:'本月',value:[92,86,94,85,90,88],areaStyle:{opacity:0.18}},{name:'上月',value:[78,75,82,80,72,76],areaStyle:{opacity:0.05}}]}] };
}
