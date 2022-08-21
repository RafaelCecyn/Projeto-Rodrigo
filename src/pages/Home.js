import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    identifica: yup.number().required("A identificação é obrigatória"),
    latitude: yup.number().required("A latitude é obrigatória"),
    longitude: yup.number().required("A longitude é obrigatória"),
    azimuth: yup.number().required("O azimuth é obrigatório"),
    timestamp: yup.number().required("O timestamp é obrigatório"),
  }).required();


   

function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


   function onSubmit(data) {
    console.log(data)
   }
   function onSubmit_second(data) {
    console.log(data)
   }

   console.log(errors)

  return (
    <>
    <div className='container'>
    <div className='titulo_principal'>
        SPSNI - Sistema de Prioridade Seletiva Não Intrusiva
    </div>
    <div className='titulo_secundario'>
        Página de Configuração do Sistema
    </div>
    <div className='identificador'>
        1. Identificação do Controlador
    </div>
    <form action="/get" id="form" className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Identificação Atual:
        <label> Nova Identificação:
        <input placeholder='Digite a identificação ...' {...register("identifica", { required: true })}/>
        {errors.identifica && <p>A identificação é obrigatória e deve ser preenchida com números</p>}
        {/* <p>{errors.nova_identificação?.message}</p> */}
        </label>
        </label>
        <button type='submit'> APLICAR </button>
    </form>
    <div className='identificador'>
        2. Localização do laço virtual
    </div>
    <form action="/get" id="form2" className="form2" onSubmit={handleSubmit(onSubmit_second)}>
        <label>Latitude atual:
        <label>Nova Latitude:
        <input placeholder='Digite a latitude ...' {...register("latitude", { required: true })}/>
        {errors.latitude && <p>A latitude é obrigatória e deve ser preenchida com números</p>}
        {/* <p>{errors.latitude?.message}</p> */}
        </label>
        </label>
        <label>Longitude atual:
        <label>Nova Longitude:
        <input placeholder='Digite a longitude ...' {...register("longitude", { required: true })}/>
        {errors.longitude && <p>A longitude é obrigatória e deve ser preenchida com números</p>}
        {/* <p>{errors.longitude?.message}</p> */}
        </label>
        </label>
        <label>Azimuth atual:
        <label>Novo Azimuth:
        <input placeholder='Digite o azimuth ...' {...register("azimuth", { required: true })}/>
        {errors.azimuth && <p>O azimuth é obrigatório e deve ser preenchido com números</p>}
        {/* <p>{errors.azimuth?.message}</p> */}
        </label>
        </label>
        <label>Timestamp atual:
        <label>Nova Timestamp:
        <input placeholder='Digite o timestamp ...' {...register("timestamp", { required: true })}/>
        {errors.timestamp && <p>O timestamp é obrigatório e deve ser preenchido com números</p>}
        {/* <p>{errors.timestamp?.message}</p> */}
        </label>
        </label>
        <button type='submit'> APLICAR </button>
    </form>
    </div>
    </>
  )
}

export default Home