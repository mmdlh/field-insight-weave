import { createFileRoute } from '@tanstack/react-router';
import { DevicesPage } from '@/components/agriculture/business-pages';
export const Route = createFileRoute('/devices')({
 head: () => ({ meta: [ { title: '智能设备管理 | 智慧农业云平台' }, { name: 'description', content: '德清数字农业示范基地智能设备管理中心，实时数据监测与精准农业管理。' }, { property: 'og:title', content: '智能设备管理 | 智慧农业云平台' }, { property: 'og:description', content: '数字农业智能设备管理，助力绿色生产与智慧决策。' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' } ] }),
 component: DevicesPage,
});
