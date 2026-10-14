import { createFileRoute } from '@tanstack/react-router';
import { QualityPage } from '@/components/agriculture/business-pages';
export const Route = createFileRoute('/quality')({
 head: () => ({ meta: [ { title: '农产品质量溯源 | 智慧农业云平台' }, { name: 'description', content: '德清数字农业示范基地农产品质量溯源中心，实时数据监测与精准农业管理。' }, { property: 'og:title', content: '农产品质量溯源 | 智慧农业云平台' }, { property: 'og:description', content: '数字农业农产品质量溯源，助力绿色生产与智慧决策。' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' } ] }),
 component: QualityPage,
});
