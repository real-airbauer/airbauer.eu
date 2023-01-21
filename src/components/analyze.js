import React from 'react'

import PropTypes from 'prop-types'

import './analyze.css'

const Analyze = (props) => {
  return (
    <div className={`analyze-analyze card ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="analyze-icon">
        <path
          d="M726 672l-160-160 160-160-54-54-160 160-160-160-54 54 160 160-160 160 54 54 160-160 160 160zM672 128l224 224v320l-224 224h-320l-224-224v-320l224-224h320z"
          className=""
        ></path>
      </svg>
    </div>
  )
}

Analyze.defaultProps = {
  rootClassName: '',
}

Analyze.propTypes = {
  rootClassName: PropTypes.string,
}

export default Analyze
