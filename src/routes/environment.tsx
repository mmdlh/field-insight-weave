import { createFileRoute } from '@tanstack/react-router';
import { EnvironmentPage } from '@/components/agriculture/business-pages';
export const Route = createFileRoute('/environment')({
 head: () => ({ meta: [ { title: '农田环境监测 | 智慧农业云平台' }, { name: 'description', content: '德清数字农业示范基地农田环境监测中心，实时数据监测与精准农业管理。' }, { property: 'og:title', content: '农田环境监测 | 智慧农业云平台' }, { property: 'og:description', content: '数字农业农田环境监测，助力绿色生产与智慧决策。' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' } ] }),
 component: EnvironmentPage,
});
