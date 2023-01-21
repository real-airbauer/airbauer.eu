import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className={`component2-container ${props.rootClassName} `}>
      <div className="component2-analyze card">
        <svg viewBox="0 0 1024 1024" className="component2-icon">
          <path d="M726 672l-160-160 160-160-54-54-160 160-160-160-54 54 160 160-160 160 54 54 160-160 160 160zM672 128l224 224v320l-224 224h-320l-224-224v-320l224-224h320z"></path>
        </svg>
      </div>
    </div>
  )
}

Component2.defaultProps = {
  rootClassName: '',
}

Component2.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component2
