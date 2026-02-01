import { BuilderProps, PortfolioData } from '@/lib/types'
import React from 'react'

const BuilderForm = ({ data, onChange }: BuilderProps) => {
    const update = <K extends keyof PortfolioData>(
        key: K,
        value: PortfolioData[K]
    ) => {
        onChange({ ...data, [key]: value });
  
        return (<div className="space-y-4">
      <input
        className="w-full border rounded-lg px-3 py-2"
        placeholder="Full name"
        value={data.fullName}
        onChange={(e) => update("fullName", e.target.value)}
      />

      <input
        className="w-full border rounded-lg px-3 py-2"
        placeholder="Role"
        value={data.role}
        onChange={(e) => update("role", e.target.value)}
      />

      <textarea
        className="w-full border rounded-lg px-3 py-2"
        placeholder="Summary"
        value={data.about}
        onChange={(e) => update("about", e.target.value)}
      />
    </div>
        )
    }
}
export default BuilderForm