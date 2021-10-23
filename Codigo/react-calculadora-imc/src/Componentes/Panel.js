import React,{useState} from 'react'

const Panel = () => {

    const [estaturaInput, setEstaturaInput] = useState('');
    const [pesoInput, setPesoInput] = useState('');


    const cambioEstatura = (e) => {
        setEstaturaInput(e.currentTarget.value)
    }

    const cambioPeso = (e) => {
        setPesoInput(e.currentTarget.value)
    }

    const calcular = (e) => {
        const imc = (pesoInput / ((estaturaInput / 100) * (estaturaInput / 100)));
        e.preventDefault();
        if(imc <= 18.5){
            alert(imc.toFixed() + " de indice IMC\nimc inferior al normal")
            setEstaturaInput("");
            setPesoInput("");
        }else if(imc > 18.5 && imc < 25){
            alert(imc.toFixed() + " de indice IMC\nimc normal")
            setEstaturaInput("");
            setPesoInput("");
        }else if(imc > 25){
            alert(imc.toFixed() + " de indice IMC\nimc superior al normal")
            setEstaturaInput("");
            setPesoInput("");
        }
    }

    return (
        <div>

            <div class="container">

                <div class="card">
                    <div class="card-header bg-info">
                        Para calcular su índice de masa corporal, ingrese su estatura y peso
                    </div>
                    <div class="card-body">
                        <form onSubmit={calcular}>
                            <div class="container">
                            <h5 class="card-title">Estatura</h5>
                            <p class="card-text">En centímetros</p>
                            <input class="form-control me-2" value={estaturaInput} type="number" onChange={cambioEstatura} type="search" placeholder="Estatura" aria-label="Search" />

                            </div>
                            <div class="container">
                            <h5 class="card-title pt-5">Peso</h5>
                            <p class="card-text">En kilogramos</p>
                            <input class="form-control me-2" value={pesoInput} type="number" onChange={cambioPeso} type="search" placeholder="Peso    " aria-label="Search" />

                            </div>   


                            <div class="container-fluid">
                                <button class="btn btn-outline-info mt-5 container-fluid" type="submit">Calcular</button>

                            </div>


                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Panel;