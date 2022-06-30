import React from 'react'
import { useForm } from '../hooks/Useform';

const HouseRegister = () => {

    const initialValue={
        type:'',
        zone:'',
        address:'',
        rooms:'',
        price:'',
        size:'',
        remark:'',
        pool:'',
        garden:'',
        garage:''
    },
    [formValue, handleInputChange, reset] =useForm(initialValue)
    console.log("::::::::",formValue);

  return (
    <div className='container '>
        <form className='mt-5' >
            <h1>Insercion de vivienda</h1>

            <select className="form-select" aria-label="Default select example"  name='type' >
                <option value={0}>Elige el tipo de vivienda</option>
                <option value="Unifamiliar">Unifamiliar</option>
                <option value="Colectiva">Colectiva</option>
            </select>

            <select className="form-select mt-3" aria-label="Default select example" name='zone'>
                <option value={0}>Elige la zona de la vivienda</option>
                <option value="Urbana">Urbana</option>
                <option value="Rural">Rural</option>
            </select>

            <div className='d-flex gap-3 mt-3'>
                <label>Direcciòn</label>
                <input type='text' minLength={3} name='address'/>
            </div>

            <div className='mt-5 container d-flex gap-5'>

                    <p>Nùmero de habitaciones:</p>
                    <div className='d-flex gap-3'>
                        <input className="form-check-input" type="radio" name="rooms" value={1} />
                        {/* onChange={handleInputChange} */}
                        <label className="form-check-label">
                            1
                        </label>
                        
                        <input className="form-check-input" type="radio" name="rooms" value={2}/>
                        {/* onChange={handleInputChange} */}
                        <label className="form-check-label" >
                            2
                        </label>
                    
                        <input className="form-check-input" type="radio" name="rooms" value={3}  />
                        {/* onChange={handleInputChange} */}
                        <label className="form-check-label" >
                            3
                        </label>
                
                        <input className="form-check-input" type="radio" name="rooms" value={4} />
                        {/* onChange={handleInputChange} */}
                        <label className="form-check-label" >
                            4
                        </label>

                        <input className="form-check-input" type="radio" name="rooms" value={5}  />
                        {/* onChange={handleInputChange} */}
                        <label className="form-check-label" >
                            5
                        </label>
                    </div>
            </div>

            <div className='d-flex gap-3 align-items-center'>
                <label>Precio:</label>
                <input type='number' minLength={7}  name='price'/>
                {/* onChange={handleInputChange} */}
                <p className='align-self-center pt-2'>€</p>
            </div>

            <div className='d-flex gap-3 align-items-center'>
                <label>Tamaño:</label>
                <input type='number' minLength={3}  name='size'/> 
                {/* onChange={handleInputChange} */}
                <p className='align-self-center pt-2'>Metros cuadrados</p>
            </div>

            <div className='d-flex gap-3 '>

                <p>Extras (Marque los que proceda)</p>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name='pool'/>
                {/* // onChange={extras.piscina?() => setExtras({...extras, piscina:false}): () => setExtras({...extras, piscina:true})} */}
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Piscina
                </label>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name='garden'/>
                {/* onChange={extras.jardin?() => setExtras({...extras, jardin:false}): () => setExtras({...extras, jardin:true})}/> */}
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Jardìn 
                </label>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name='garage'/>
                {/* onChange={extras.garage?() => setExtras({...extras, garage:false}): () => setExtras({...extras, garage:true})}/> */}
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Garage
                </label>
            </div>

            <div className="form-floating">
                 <textarea className="form-control" placeholder="Observaciones" id="floatingTextarea" name='remark'/> {/*onChange={handleInputChange} */}
                <label htmlFor="floatingTextarea">Observaciones</label>
            </div>

                <button className='btn  btn-primary mt-5' type='submit' >Guardar</button>
        </form>
    </div>
  )
}
export default HouseRegister;