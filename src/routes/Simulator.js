import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Field } from 'react-final-form'
import style from './Simulator.module.scss'
import Layout from '../components/Layout'

const link = (
  <Link className={style.link} to="/">
    ←
  </Link>
)

const initialValues = {
  min: 5,
  max: 500,
  bank: 500,
  games: 100,
  n: 100,
  betting: 'min'
}

const bettings = [
  { label: '최소 베팅', value: 'min' },
  { label: '프로그레시브', value: 'progressive' },
  { label: '6분의 1', value: 'percentage' }
]

const fields = [
  { label: '최소 베팅', name: 'min' },
  { label: '최대 베팅', name: 'max' },
  { label: '초기 자금', name: 'bank' },
  { label: '게임 횟수', name: 'games' },
  { label: '시행 횟수', name: 'n' },
  { label: '베팅 규칙', name: 'betting', list: bettings }
]

const renderFields = ({ name, label, list }) => {
  const renderRadio = ({ value, label }) => {
    const attrs = { name, value, component: 'input', type: 'radio' }
    return (
      <label key={value}>
        <Field {...attrs} /> {label}
      </label>
    )
  }

  const props = { name, component: 'input', type: 'number' }

  return (
    <div key={name}>
      <label>{label}</label>
      {list ? <div>{list.map(renderRadio)}</div> : <Field {...props} />}
    </div>
  )
}

const Simulator = () => (
  <Layout header={link}>
    <h1>Simulator</h1>
    <Form
      onSubmit={values => console.log(values)}
      initialValues={initialValues}
      render={({ handleSubmit, pristine, invalid }) => (
        <form onSubmit={handleSubmit}>
          {fields.map(renderFields)}
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </Layout>
)

export default Simulator
