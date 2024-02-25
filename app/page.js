import QuickDeals from '@/components/sectionMainPage/QuickDeals'
import RecommendedProducts from '@/components/sectionMainPage/RecommendedProducts'
import TrendingCategories from '@/components/sectionMainPage/TrendingCategories'
import TrendingCategoriesMain from '@/components/sectionMainPage/TrendingCategoriesMain'
import TrendingProducts from '@/components/sectionMainPage/TrendingProducts'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className='container mx-auto'>
        <TrendingCategoriesMain />
        <QuickDeals />
        <TrendingProducts />
        <RecommendedProducts />
        {/* <TrendingCategories /> */}
      </div>
    </main>
  )
}
