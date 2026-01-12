import { ProfessionalLoader } from '@/components/layout/professional-loader'

export default function HomeLoading() {
   return <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
    <ProfessionalLoader size="md" />
  </div>
}
