import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '@/components/agriculture/dashboard';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [ { title: '农业综合驾驶舱 | 智慧农业云平台' }, { name: 'description', content: '全域感知、数据驱动、智慧决策。德清数字农业基地综合运行监测。' }, { property: 'og:title', content: '农业综合驾驶舱 | 智慧农业云平台' }, { property: 'og:description', content: '实时农田地图、环境监测与农业生产数据。' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' } ] }),
 component: Dashboard,
});
