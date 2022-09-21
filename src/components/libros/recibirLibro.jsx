import React from 'react'



const RecibirLibro = () => {
  return (
    <>
    <form action="">
    <div className='container-solicitar'>
        <h3>Recibir Libro</h3>
        <div className='mb-1 me-5 ms-5'>
              <input              
               type="text"
               className='form-control'
               placeholder='Nombre'
               />
            </div>
            <div className='mb-1 me-5 ms-5'>
              <input    
              
               type="text"
               className='form-control'
               placeholder='Código'
               />
            </div>
            <div className='mb-1 me-5 ms-5'>
              <input    
              
               type="text"
               className='form-control'
               placeholder='Estado'
               />
            </div>
            <div className='mb-1 me-5 ms-5'>
              <input    
              
               type="text"
               className='form-control'
               placeholder='Devuelto dentro de la fecha'
               />
            </div>
        
            <button type='submit' className='btn btn-primary w-50'>Recibir</button>
        
       
          </div>

    </form>

          </>
  )
}

export default RecibirLibro