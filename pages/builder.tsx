import React, { useEffect, useMemo, useState } from 'react'
import { DEFAULT_DATA } from '@/lib/defaults'
import { loadData, saveData, resetData } from '@/lib/storage'
import { PortfolioData } from '@/lib/types'
import BuilderForm from '@/components/build/BuilderForm'
import ResumePreview from '@/components/build/Preview'
const Builder = () => {
const [data, setData]=useState<PortfolioData>(DEFAULT_DATA)

    useEffect(() => {
        setData(loadData())
    }, []);

    useEffect(() => {
        saveData(data)
    }, [data])

    const themeClass = useMemo(() => `theme-${data.theme}`, [data.theme])
    
    return (
        <>
        <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1e2a4a]">
            Resume Builder
            
          </h1>
          <p className="text-sm text-gray-600">
            Fill in the form
          </p>
        </div>

        <button
          onClick={() => {
            resetData();
            setData(DEFAULT_DATA);
          }}
          className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-50"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-5">
          <BuilderForm data={data} onChange={setData} />
        </div>

        <div className="bg-white border rounded-xl p-5">
          <ResumePreview data={data} />
        </div>
            </div>
            </>
    )
}

export default Builder