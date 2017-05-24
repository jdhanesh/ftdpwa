import React from 'react'
import { Link } from 'react-router-dom'
import Category from '../Category/Category'
import style from './Promoarea.css'

const Promoarea = (props) => (
  <div className={style.promocontainer}>
    {/* <h2>
      {props.titleLink
      ? <Link to={`/catalog/${props.slug}`}>{props.title}</Link>
      : props.title }
    </h2> */}
    <Link to={`/${props.slug}`}>
      <div className={style.promos}>{props.titleLink
      ? <img className={style.promoimg} src={props.content} />
      : <Category {...props} />}
      </div>
    </Link>
  </div>
)

export default Promoarea
