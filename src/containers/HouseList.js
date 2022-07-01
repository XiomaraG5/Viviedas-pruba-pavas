

import {  Card, Modal } from 'react-bootstrap';
import { collection,  deleteDoc, doc,  getDocs} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../services/Firebaseconfi';
import { FcHome,} from "react-icons/fc";
import { IoBugOutline} from 'react-icons/io5';
import Swal from 'sweetalert2';

const HouseList = ({setSwitcher,handleShow}) => {
    const
    [houses,setHouses]=useState([]),
    [viviendas,setvivienda]=useState(houses),
    [show, setShow] = useState(false),
    [items,setItems]=useState(),
    [loading,setLoading]=useState(true),
    [filters,setFilter]=useState(false),
    getViviendas=async()=>{
        const 
        querySnapshot = await getDocs(collection(db, `viviendas`))
            const look = querySnapshot.docs.map(item=>item.data().viviendas);
        setHouses(look); setvivienda(look)
        setLoading(false)
    },
     filterhouses = (para) => {
        setvivienda(houses.filter(ele => ele.type === para))
        setFilter(para)
    },
    remove=async()=>{
        const
        querySnapshot = await getDocs(collection(db, `viviendas`)),
        look = querySnapshot.docs.find(item=>item.data().viviendas.id===items.id);
         console.log(look.id);
        await deleteDoc(doc(db,'viviendas', look.id))  
            setShow(false)
            setItems(0)
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'La vivienda se ha eliminado',
            showConfirmButton: false,
            timer: 1500
            })
        
    },
    handleChange = () =>{
        handleShow(items.id)
         setShow(false)
         setItems(0)
         
         
    },
    handleOpen=(item)=>{
        setItems(item)
        console.log("aaaa",item);
        setShow(true)
    }

    useEffect(()=>{getViviendas()},[show])
    
  return (
    <div className='d-flex justify-content-center w-100 flex-column'>
    {!loading?
        <div className='p-4 d-flex flex-column'>
        <div>
                <button className='btns' onClick={()=>setSwitcher()}>
                    Agregar vivienda
                </button>
        </div>
        <div className='d-flex justify-content-center gap-2 mt-3'>
            <div>
                <input className='switch' type={'radio'} onClick={()=>filterhouses('Colectiva')}  checked={filters==='Colectiva'}/>
                tipo colectivas
            </div>
            <div>
                <input className='switch' type={'radio'}
                 onClick={()=>filterhouses('Unifamiliar')} checked={filters==='Unifamiliar'}/>
                    tipo Unifamiliar
            </div>
        </div>
            <button className='link mt-3'  onClick={()=>{setvivienda(houses);setFilter(false)}}>
                        Quitarfiltros
            </button>
        <div >
           
            {viviendas.length>0?
            <div className='container-fluid d-flex gap-2 w-100 flex-wrap mt-5' style={{justifyContent:'center'}}>
                {viviendas.map((item)=>
                <Card style={{ width: '15rem', backgroundColor:'#f2f5f75a'}} className={'cards'}>
                    <FcHome size={60} style={{alignSelf:'center', marginTop:5}}/>
                    <Card.Body>
                        <Card.Title>
                            <strong> tipo de vivienda:</strong>
                            <p>{item.type}</p>
                        </Card.Title>
                        <Card.Text>
                        <p ><strong> Zona</strong> <i>{item.zone}</i></p>

                        <p > <strong> Habitaciones</strong> <i>{item.rooms}</i></p>

                        <p><strong> Valor </strong> <i>{item.price}</i></p>
                        </Card.Text>
                        <button className='btns'onClick={()=>handleOpen(item)}>
                            Ver detalles
                        </button>
                    </Card.Body>
                </Card>
                )}
            </div>:
            <div className='d-flex flex-column align-items-center gap-4 mt-5'>
                <IoBugOutline size={150} style={{alignSelf:'center'}} color={'tomato'}/>
                <p>
                    Aún no hay viviendas disponibles
                </p>
                <button className='link'  onClick={()=>setSwitcher()}>
                    ¿Desea agregar una vivienda?
                </button>
            </div>
            }
            
            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Caracteristicas de la vivienda</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                <div >
                    <div className='d-flex justify-content-center mb-3 '>
                        <FcHome size={120} style={{alignSelf:'center', marginTop:5}}/>
                    </div>
                    <div className='d-flex justify-content-around flex-wrap'>
                        <div>
                            <p ><strong> Zona: </strong> <i>{items&&items.zone}</i></p>
                            <p ><strong> Habitaciones: </strong> <i>{items&&items.rooms}</i></p>
                            <p><strong> Valor: </strong> <i>{items&&items.price}</i></p>
                            <p><strong> dirección: </strong> <i>{items&&items.address}</i></p>
                            
                        </div>
                        <div>
                            <p><strong> Tamaño: </strong> <i>{items&&items.size}</i></p>
                            <p>
                               <strong> Piscina: </strong> <i>{items&&items.extras&&items.extras.pool?'Si':'No'}</i>
                            </p>
                            <p>
                               <strong> Jardín: </strong> <i>{items&&items.extras&&items.extras.garden?'Si':'No'}</i>
                            </p>
                            <p>
                               <strong> Garage: </strong> <i>{items&&items.extras&&items.extras.garage?'Si':'No'}</i>
                            </p>
                        </div>
                    </div>
                    <div>
                        <strong> Observaciones: </strong> 
                        <p>{items&&items.remark}</p>
                    </div>
                </div>
                </Modal.Body>

                <div className='d-flex justify-content-around pb-3'>
                    <button className='btns' onClick={remove}>
                        Eliminar
                    </button>
                    <button className='btns' onClick={handleChange}>
                        modificar
                    </button>
                </div>
            </Modal>
        </div>
    </div>
    :
    <div className="spinner-border d-flex justify-content-center" role="status"
    style={{alignSelf:'center', marginTop:30}}>
        <span className="visually-hidden">Loading...</span>
    </div>
    }
    </div>
  )
}

export default HouseList