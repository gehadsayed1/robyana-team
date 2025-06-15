import { ref } from 'vue'
import img1 from '@/assets/img1.png'
import img2 from '@/assets/img2.png'
import img3 from '@/assets/img3.png'

export function useSwiper() {
  const slides = ref([
    {
      image: img1,
      // title: 'EVERYDAY DENIM',
      // subtitle: 'GOOD MORNING.',
      // tags: '#GENEROUS #FLEXIBLE #BALANCED' 
    },
   {
      image: img2,
      // title: 'EVERYDAY DENIM',
      // subtitle: 'GOOD MORNING.',
      // tags: '#GENEROUS #FLEXIBLE #BALANCED' 
    },
   {
      image: img3,
      // title: 'EVERYDAY DENIM',
      // subtitle: 'GOOD MORNING.',
      // tags: '#GENEROUS #FLEXIBLE #BALANCED' 
    },
  ])

  return {
    slides
  }
}