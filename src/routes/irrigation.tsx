import { createFileRoute } from '@tanstack/react-router';
import { IrrigationPage } from '@/components/agriculture/business-pages';
export const Route = createFileRoute('/irrigation')({
 head: () => ({ meta: [ { title: '智慧水肥管理 | 智慧农业云平台' }, { name: 'description', content: '德清数字农业示范基地智慧水肥管理中心，实时数据监测与精准农业管理。' }, { property: 'og:title', content: '智慧水肥管理 | 智慧农业云平台' }, { property: 'og:description', content: '数字农业智慧水肥管理，助力绿色生产与智慧决策。' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' } ] }),
 component: IrrigationPage,
});
