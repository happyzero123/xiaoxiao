import React, { PropTypes } from 'react'

class Contact extends React.Component {
  render () {
    let styles={
      center:{
        margin:'10vh auto',
        textAlign:'center'
      },
      title:{
        color:'teal',
        fontWeight:'600',
        marginBottom:'8vh'
      },
      call:{
        color:'red',
      },
      phone:{
        color:'blue',
      }
    }
    return(
    <div style={styles.center}>
      <h2 style={styles.title}>联系我</h2>

      <h4 style={styles.call}>CALL ME:</h4>
      <h3 style={styles.phone}>13621325129</h3>

    </div>
    )
  }
}

export default Contact;

