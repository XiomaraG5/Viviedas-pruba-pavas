import React from 'react'
import { useForm } from '../hooks/Useform'

const Form = ({handleSubmit, extras, setExtras,initialValue,setSwitcher,setInitialValues}) => {
    const
    [formValue, handleInputChange] =useForm(initialValue),
    {type,zone,address,rooms,price,size, remark}=formValue
    const
    handlesend=(e)=>{
        handleSubmit(e,formValue)
    },
    handleShare=(e)=>{
        handleSubmit(initialValue.id,formValue,e)
    },
    changePage=()=>{
        setSwitcher()
      setInitialValues({type:'',zone:'',address:'', rooms:'',
                price:'',size:'', remark:''})
    }
    
  return (
    <div className='d-flex p-2 flex-column '  >
        
        <div className='mb-b'>
            <button className='btns' onClick={changePage}>
                Ver viviendas
            </button>
        </div>
    
        <form style={{width:'80%', alignSelf:'center', backgroundColor:'#f2f5f75a',
         borderRadius:5, maxWidth:850}}  
        className='mt-5 d-flex p-5 flex-column for' 
            onSubmit={!initialValue.id? (e)=>handlesend(e):
                (e)=>handleShare(e)}>

                <select className="form-select" aria-label="Default select example"  
                    name='type' onChange={handleInputChange} value={type} >
                        <option value={0}>Elige el tipo de vivienda</option>
                        <option value="Unifamiliar">Unifamiliar</option>
                        <option value="Colectiva">Colectiva</option>
                </select>

                <select className="form-select mt-3" aria-label="Default select example" 
                    name='zone' onChange={handleInputChange}  value={zone}>
                        <option value={0}>Elige la zona de la vivienda</option>
                        <option value="Urbana">Urbana</option>
                        <option value="Rural">Rural</option>
                </select>

                <div className='d-flex gap-3 mt-3 flex-wrap'>
                    <label>Direcciòn</label>
                    <input type='text' minLength={3} name='address' 
                    onChange={handleInputChange} value={address} style={{width:'100%'}} />
                </div>

                <div className='mt-5 d-flex  align-items-center flex-wrap gap-3 '>

                        <p className='mt-2'>Nùmero de habitaciones:</p>
                        <div className='d-flex gap-3 flex-wrap'>
                            <div className='d-flex gap-2 '>
                            <input className="form-check-input" type="radio" name="rooms" 
                                value={1} onChange={handleInputChange} checked={rooms==='1'}/>
                            <label className="form-check-label"> 1 </label>
                            </div>
                            <div className='d-flex gap-2 '>
                            <input className="form-check-input" type="radio" name="rooms" 
                                value={2} onChange={handleInputChange} checked={rooms==='2'}/>
                            <label className="form-check-label" > 2 </label>
                            </div>
                            <div className='d-flex gap-2'>
                            <input className="form-check-input" type="radio" name="rooms" 
                                value={3}  onChange={handleInputChange} checked={rooms==='3'}/>
                            <label className="form-check-label" > 3 </label>
                            </div>
                            <div className='d-flex gap-2 '>
                            <input className="form-check-input" type="radio" name="rooms" 
                                value={4} onChange={handleInputChange} checked={rooms==='4'}/>
                            <label className="form-check-label" > 4 </label>
                            </div>
                            <div className='d-flex gap-2 '>
                            <input className="form-check-input" type="radio" name="rooms" 
                                value={5} onChange={handleInputChange} checked={rooms==='5'} />
                            <label className="form-check-label" > 5  </label>
                            </div>
                        </div>
                </div>

                <div className='d-flex gap-3 align-items-center flex-wrap'>
                    <label >Precio: ( € )</label>
                    <input type='number' minLength={7}  name='price' onChange={handleInputChange}
                    style={{width:'100%'}}
                    value={price} />
                </div>

                <div className='d-flex gap-3 align-items-center flex-wrap'>
                    <label>Tamaño:</label>
                    <input type='number' minLength={3}  name='size' onChange={handleInputChange}
                    value={size} style={{width:'100%'}}/> 
                    <p className='align-self-center pt-2'>Metros cuadrados</p>
                </div>

                <div className='d-flex flex-wrap mb-3' style={{alignContent:'center',alignItems:'center'}}>

                    <p className='mt-2'>Extras (Marque los que proceda)</p>
                    <div className='d-flex flex-wrap  ms-3'>
                        <div className='d-flex gap-2 '>
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" name='pool' 
                            onChange={extras.pool?() => setExtras({...extras, pool:false}): 
                            () => setExtras({...extras, pool:true})} checked={extras.pool}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault"> Piscina </label>
                        </div>
                        <div className='d-flex gap-2 '>
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" name='garden'
                            onChange={extras.garden?() => setExtras({...extras, garden:false}): 
                            () => setExtras({...extras, garden:true})} checked={extras.garden}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault"> Jardìn </label>
                        </div>
                        <div className='d-flex gap-2 '>
                        <input className="form-check-input" type="checkbox"  id="flexCheckDefault" name='garage'
                            onChange={extras.garage?() => setExtras({...extras, garage:false}): 
                            () => setExtras({...extras, garage:true})} checked={extras.garage}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault"> Garage </label>
                        </div>
                    </div>
                </div>

                <div className="form-floating">
                    <textarea className="form-control" placeholder="Observaciones" id="floatingTextarea"
                    name='remark' onChange={handleInputChange} value={remark}/> 
                    <label htmlFor="floatingTextarea">Observaciones</label>
                </div>

                    <button className='btn  btn-primary mt-5' type='submit' >Guardar</button>
            </form>
    </div>
  )
}

export default Form