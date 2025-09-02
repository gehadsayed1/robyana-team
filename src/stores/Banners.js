// stores/banners.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import {  BANNERS } from '../api/Api'
import apiClient from '../api/axiosInstance'
import notyf from '../components/global/notify'

export const useBannersStore = defineStore('banners', () => {
  // State
  const banners = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Actions
  const fetchBanners = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await apiClient.get(BANNERS)
      console.log(response.data.data);

      banners.value = response.data.data
      return response.data.data
    } catch (err) {
      error.value = err.response?.data?.message || err.message
      console.error('Error fetching banners:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  const addBanner = async (bannerData) => {
    console.log(bannerData);

    loading.value = true
    error.value = null
    
    try {
      const response = await apiClient.post(BANNERS, bannerData)
      const newBanner = response.data
      notyf.success('Banner added successfully!')
      
      banners.value.push(newBanner)
     
      return newBanner
    } catch (err) {
      error.value = err.response?.data?.message || err.message
      notyf.error('Error adding banner:', err)
      throw err
    } finally {
      loading.value = false
    }
  }



  const deleteBanner = async (bannerId) => {
    loading.value = true
    error.value = null
    
    try {
      await apiClient.delete(`${BANNERS}/${bannerId}`)
      banners.value = banners.value.filter(b => b.id !== bannerId)
      return true
    } catch (err) {
      error.value = err.response?.data?.message || err.message
      console.error('Error deleting banner:', err)
      throw err
    } finally {
      loading.value = false
    }
  }



  
  const activeBanners = computed(() => {
    const now = new Date()
    return banners.value.filter(banner => {
      const startDate = new Date(banner.startDate)
      const endDate = new Date(banner.endDate)
      return now >= startDate && now <= endDate
    })
  })

  const sortedBanners = computed(() => {
    return [...banners.value].sort((a, b) => a.displayOrder - b.displayOrder)
  })

  return {
    // State
    banners,
    loading,
    error,
    
    // Actions
    fetchBanners,
    addBanner,
  
    deleteBanner,
  
    
    // Getters
    activeBanners,
    sortedBanners
  }
})