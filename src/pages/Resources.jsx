import React from 'react'
import InsightsBanner from '../components/Resources/InsightsBanner'

const Resources = ({blogs,articles,cs}) => {
  return (
    <div>
      <InsightsBanner blogs={blogs} articles={articles} cs={cs} />
    </div>
  )
}

export default Resources