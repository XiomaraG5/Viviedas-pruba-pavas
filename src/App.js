
import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Form from './components/Form';
import HouseList from './containers/HouseList';
import { db } from './services/Firebaseconfi';

function App() {
  
  const [switcher,setSwitcher]=useState(false),
  handleSwitcher=()=>{
    setSwitcher(!switcher)
  },
  [extras,setExtras]=useState({
        pool:false,
        garden:false,
        garage:false
  }),
  [initialValue,setInitialValues]=useState({
        type:'',
        zone:'',
        address:'',
        rooms:'',
        price:'',
        size:'',
        remark:'',
    })
    ;
  useEffect(()=>{},[switcher,initialValue])
  const
  RamdonNumber = () => {
      return Math.floor(Math.random() * (9999 - 1) + 1);
  },
  handleSubmit=async (e, newData)=>{
        e.preventDefault()
        const
        {type,zone,address,rooms,price,size,}=newData;
        if(type  && zone && address && rooms && price&& size ){
            const values ={...newData,id:RamdonNumber()}
                await addDoc(collection(db,`viviendas`),{
                    viviendas:{...values,extras}
                })   
                .then(async()=>{
                    Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'La nueva vivienda se ha agregado con exito',
                    showConfirmButton: false,
                    timer: 1500
                    })
                    setExtras({ pool:false,garden:false,garage:false})
                    setSwitcher(false)
                })
        }else{
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor completa todos los campos'
          })
        }
    },
    handleShow =async (id) =>{
        const
        querySnapshot = await getDocs(collection(db, `viviendas`)),
        look = querySnapshot.docs.find(item=>item.data().viviendas.id===id)
        setInitialValues(look.data().viviendas)
        setSwitcher(true)
        
    },
    updata=async(id,newData,e)=>{
        e.preventDefault()
        const
        querySnapshot = await getDocs(collection(db, `viviendas`)),
        look = querySnapshot.docs.find(item=>item.data().viviendas.id===id),
        identification =look.id,
        {type,zone,address,rooms,price,size}=newData,
        values ={...newData,id:RamdonNumber()}

        if(type && zone  && address && rooms && price&& size){
            await updateDoc(doc(db,'viviendas', identification),{viviendas:{...values,extras}})
            .then(()=>{
                Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'La nueva vivienda se ha agregado con exito',
              showConfirmButton: false,
              timer: 1500
              })
              setExtras({ pool:false,garden:false,garage:false})
              setSwitcher(false)
            })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor completa todos los campos'
          })
        }
    };
  return (
    <>
    <h1 className='text-center mt-3'>Viviendas</h1>
      {switcher?
      <Form handleSubmit={initialValue.id? updata : handleSubmit}initialValue={initialValue} 
            extras={extras} setExtras={setExtras} setSwitcher={handleSwitcher} setInitialValues={setInitialValues}/>:
      <HouseList setSwitcher={handleSwitcher} handleShow={handleShow}/>
      }
    </>
  );
}

export default App;
