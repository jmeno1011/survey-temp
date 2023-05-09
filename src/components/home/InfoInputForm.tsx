import React, { ChangeEvent } from 'react'
import styles from "./InfoInputForm.module.css"

const agesRange = ["10대", "20대", "30대", "40대", "50대", "60대", "70대 이상"];

interface InfoInputFormProps {
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  phoneRef: React.RefObject<HTMLInputElement>;
  onChangePhone: (e: ChangeEvent<HTMLInputElement>) => void;
  ages: string;
  setAges: (value: string) => void;
  sex: string;
  setSex: (value: string) => void;
}

const InfoInputForm = ({ email, setEmail, phone, phoneRef, onChangePhone, ages, setAges, sex, setSex }: InfoInputFormProps) => {
  return (
    <div className={styles.layout}>
      <div className="input-row">
        <label>이메일 </label>
        <input
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="example@example.com"
        />
      </div>
      <div className="input-row">
        <label>전화번호</label>
        <input
          type={"text"}
          onChange={onChangePhone}
          value={phone}
          ref={phoneRef}
          placeholder=" '-' 없이 핸드폰 입력"
        />
      </div>
      <div className="input-row">
        <label>연령 선택 </label>
        <div className="input-radio">
          {agesRange.map((age: string) => (
            <label key={age}>
              <input
                type={"radio"}
                name="ages"
                value={age}
                checked={age === ages}
                onChange={(e) => setAges(e.target.value)}
              />
              {age}
            </label>
          ))}
        </div>
      </div>
      <div className="input-row">
        <label>성별 </label>
        <div className="input-radio">
          <label>
            <input
              type={"radio"}
              name="sex"
              value={"남"}
              checked={"남" === sex}
              onChange={(e) => setSex(e.target.value)}
            />
            남
          </label>
          <label>
            <input
              type={"radio"}
              name="sex"
              value={"여"}
              checked={"여" === sex}
              onChange={(e) => setSex(e.target.value)}
            />
            여
          </label>
        </div>
      </div>
    </div>
  )
}

export default InfoInputForm