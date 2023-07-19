import React, { ChangeEvent } from 'react'
import styles from "./InfoInputForm.module.css"
import { user } from '@/types';

const agesRange = ["10대", "20대", "30대", "40대", "50대", "60대", "70대 이상"];

interface InfoInputFormProps {
  user: user;
  phoneRef: React.RefObject<HTMLInputElement>;
  onChangePhone: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeHandle: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InfoInputForm = ({ user, phoneRef, onChangePhone, onChangeHandle }: InfoInputFormProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.inputRow}>
      <div className={styles.inputRowLabel}>
        <label>이메일 </label>
      </div>
        <input
          type={"email"}
          name="email"
          onChange={onChangeHandle}
          value={user?.email}
          placeholder="example@example.com"
        />
      </div>
      <div className={styles.inputRow}>
        <div className={styles.inputRowLabel}>
          <span></span>
          <label>전화번호</label>
        </div>
        <input
          type={"text"}
          onChange={onChangePhone}
          name="phone"
          value={user.phone}
          ref={phoneRef}
          placeholder=" '-' 없이 핸드폰 입력"
        />
      </div>
      <div className={styles.inputRow}>
      <div className={styles.inputRowLabel}>
      <span></span>
        <label>연령 선택 </label>
      </div>
        <div className={styles.inputRadio}>
          {agesRange.map((age: string) => (
            <label key={age}>
              <input
                type={"radio"}
                name="ages"
                value={age}
                checked={age === user.ages}
                onChange={onChangeHandle}
              />
              {age}
            </label>
          ))}
        </div>
      </div>
      <div className={styles.inputRow}>
      <div className={styles.inputRowLabel}>
        <span></span>
        <label>성별 </label>
      </div>
        <div className={styles.inputRadio}>
          <label>
            <input
              type={"radio"}
              name="sex"
              value={"남"}
              checked={"남" === user.sex}
              onChange={onChangeHandle}
            />
            남
          </label>
          <label>
            <input
              type={"radio"}
              name="sex"
              value={"여"}
              checked={"여" === user.sex}
              onChange={onChangeHandle}
            />
            여
          </label>
        </div>
      </div>
    </div>
  )
}

export default InfoInputForm