import { bodyTempListState } from '@/states/bodyTempList'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

export type BodyTemp = {
  id: string
  time: number
  bodyTemp: string
}

export const useBodyTemp = () => {
  const [bodyTempList, setBodyTempList] = useRecoilState(bodyTempListState)
  const [isLoading, setIsLoading] = useState(true)

  const registerBodyTemp = (bodyTemp: string) => {
    const time = Date.now()
    const data = {
      id: 'bodyTemp:' + time,
      time,
      bodyTemp,
    }
    window.localStorage.setItem('bodyTempList', JSON.stringify([...(bodyTempList || []), data]))
    setBodyTempList([...(bodyTempList || []), data])
  }

  useEffect(() => {
    const iniBodyTempList = JSON.parse(window.localStorage.getItem('bodyTempList') ?? '[]') as BodyTemp[]
    setBodyTempList(iniBodyTempList)
  }, [setBodyTempList])

  useEffect(() => {
    if (!bodyTempList) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }, [bodyTempList])

  return { bodyTempList, isLoading, registerBodyTemp }
}
