import { useState } from 'react'

const SetTemp = ({onSetTemp}) => {
    const [temperture, setTemperature] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!temperture) {
          alert('Please set a temperture')
          return
        }

        if(isNaN(temperture)) {
            alert('Pleast enter a number')
            return
        }
    
        onSetTemp({temp: temperture})
    
        setTemperature('')
      }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Temperture</label>
                <input
                type='text'
                placeholder='Enter Temperture'
                value={temperture}
                onChange={(e) => setTemperature(e.target.value)}
                />
            </div>
            <input type='submit' value='Set Temperture' className='btn btn-block' />
        </form>
    )
}

export default SetTemp