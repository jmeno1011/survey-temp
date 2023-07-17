import React from 'react'
import styles from "./Privacy.module.css"

interface PrivacyProps {
  check: boolean;
  onChangeCheck: ()=>void;
}

const Privacy = ({ check, onChangeCheck }: PrivacyProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <h2>이 &ldquo;설문&rdquo;을 사용하기 위해서는 위해서는 아래와 같은 개인정보 수집 및 이용에 대한 동의가 필요합니다.</h2>
        <p>개인정보 수집 및 이용에 대한 동의서</p>
        <p>귀하께서 제공하신 개인 정보는 어딘가모를 서비스 및 추가 이벤트를 위해 이용되며, 이외의 다른 목적에는 절대 사용되지 않습니다.</p>
        <h3>1. 개인정보 수집 항목</h3>
        <ul className={styles.list1}>
          <li>- 이메일, 핸드폰번호, 연령, 성별, 설문 점수 등 새로운 설문 서비스 제공에 필요한 정보</li>
          <li>- 서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다. (IP Address, 쿠키, 방문 일시, 서비스 이용 기록)</li>
        </ul>
        <h3>2. 수집 및 이용목적</h3>
        <ul className={styles.list1}>
          <li><span className={styles.numSpan}>1 )</span>서비스 제공
            <ul className={styles.list2}>
              <li>- 설문 서비스</li>
            </ul>
          </li>
          <li><span className={styles.numSpan}>2 )</span>(주)어떤곳에있는회사의 이용자들의 개인정보를 1) 항에서 고지한 범위 내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
            <ul className={styles.list2}>
              <li>- 이용자들이 사전에 공개에 동의한 경우</li>
              <li>- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
          </li>
        </ul>
        <h3>3. 보유 및 이용기간</h3>
        <p>이용자의 개인정보는 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.</p>
        <h3>4. 개인정보의 수집 이용 및 고유식별 정보 수집 동의에 대하여 거부할 수 있으며, 동의 거부시 설문 서비스의 제한이 있을 수 있습니다.</h3>
      </div>
      <div className={styles.checkboxBlock}>
        <div className={styles.checkbox}>
          <input
            id="agree"
            type={"checkbox"}
            checked={check}
            onChange={onChangeCheck}
            value={check?"":""}
          />
        </div>
        <div className={styles.descriptionBlock}>
          <label htmlFor="agree">
            <h6>개인정보 수집/이용 동의 </h6>
          </label>

          <p>
            이 서비스를 이용할 경우 제공된 정보는 귀하의 마음건강에
            도움을 주기 위한 것으로 수집됨에 있어 동의합니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy