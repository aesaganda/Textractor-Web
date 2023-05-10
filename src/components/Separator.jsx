function Separator({ hrColor, hrWidth }) {
  return (
    <div>
      <hr 
      style={{
            color: hrColor,
            width: hrWidth,
        }}/>
    </div>
  )
}

Separator.propTypes = String;

export default Separator
