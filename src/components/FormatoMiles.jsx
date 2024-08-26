const FormatoMiles = (props) => {
    const iNumeroMiles = new Intl.NumberFormat('es-CL').format(props.numero);
    return (
    <span>{iNumeroMiles}</span>
  )
}

export default FormatoMiles;
