import React from 'react'
import { Hero } from './Hero'
import { Features } from './Features'
import { CTA } from './CTA'
// Import other components as blocks are added

const blocksMap: Record<string, any> = {
  hero: Hero,
  features: Features,
  cta: CTA,
}



export const Blocks: React.FC<{ blocks: any[] }> = ({ blocks }) => {
  if (!blocks) return null

  return (
    <>
      {blocks.map((block, index) => {
        const BlockComponent = blocksMap[block.blockType]
        if (BlockComponent) {
          return <BlockComponent key={index} {...block} />
        }
        return <div key={index}>Block "{block.blockType}" not found.</div>
      })}
    </>
  )
}
