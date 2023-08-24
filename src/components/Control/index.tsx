import style from './Control.module.scss'
import leftIcon from '../../assets/left-icon.svg'
import rightIcon from '../../assets/right-icon.svg'

const Control = () => {
  return (
    <div className={style.pages}>
      <a>
        <img src={leftIcon} alt="Left arrow" />
      </a>
      <a className={style.noImage}>1</a>
      <a className={style.noImage}>2</a>
      <a className={style.noImage}>3</a>
      <a className={style.noImage}>4</a>
      <a className={style.noImage}>5</a>
      <a>
        <img src={rightIcon} alt="Right arrow" />
      </a>
    </div>
  )
}

export default Control
