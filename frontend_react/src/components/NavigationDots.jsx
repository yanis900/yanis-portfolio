import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills',].map((item, index) => (
          // eslint-disable-next-line
            <a 
            href={`#${item}`} 
            key={item + index}
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: '#4bba3d'} : {}}
            />        
              ))}
    </div>
  )
}

export default NavigationDots;