import React from 'react'

import PropTypes from 'prop-types'

import './icon.css'

const Icon = (props) => {
  return (
    <div className="icon-container">
      <img alt={props.Icon_alt} src={props.Icon_src} className="icon-icon" />
    </div>
  )
}

Icon.defaultProps = {
  Icon_src: '/playground_assets/pastedimage-fii6m-200h.png',
  Icon_alt: 'pastedImage',
}

Icon.propTypes = {
  Icon_src: PropTypes.string,
  Icon_alt: PropTypes.string,
}

export default Icon
