import { useCallback, useEffect, useState, memo } from "react";
import ButtonImage from "components/image_button";
import InputField from "components/input_field";
import { useDebounce } from "utils/helper";
import { regexName, regexEmail, regexPhone } from "utils/regex";

const OrderDialog = ({ closeDiaLog }) => {
  const [inputName, setInputName] = useState('')
  const [inputPhone, setInputPhone] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [errorMessge, setErrorMessage] = useState({})
  const debouncedName = useDebounce(inputName, 400);
  const debouncedPhone = useDebounce(inputPhone, 400);
  const debouncedEmail = useDebounce(inputEmail, 400);
  //Validate InputNameChange
  useEffect(() => {
    const patternName = regexName();
    validateChange(patternName, 'name', inputName, 'Họ tên');
  }, [debouncedName])
  //Validate InputNameChange
  useEffect(() => {
    const patternPhone = regexPhone();
    validateChange(patternPhone, 'phone', inputPhone, 'Số điện thoại');
  }, [debouncedPhone])
  //Validate InputPhoneChange
  useEffect(() => {
    const patternEmail = regexEmail();
    validateChange(patternEmail, 'email', inputEmail, 'Email');
  }, [debouncedEmail])


  const handleOnSubmit = useCallback((e) => {
    const newErrorMessage = { ...errorMessge }
    //Validate inputName
    const patternName = regexName();
    if (!inputName) {
      newErrorMessage = { ...newErrorMessage, name: 'Họ tên không được bỏ trống' }
    } else if (!patternName.test(inputName)) {
      newErrorMessage = { ...newErrorMessage, name: 'Họ tên phải bắt đầu bằng chữ cái' }
    }

    //Validate inputPhoneNumber
    const patternPhone = regexPhone();
    if (!inputPhone) {
      newErrorMessage = { ...newErrorMessage, phone: 'Số điện thoại không được bỏ trống' }
    } else if (!patternPhone.test(inputPhone)) {
      newErrorMessage = { ...newErrorMessage, phone: 'Số điện thoại không hợp lệ' }
    }


    //Validate inputEmail
    const patternEmail = regexEmail();
    if (!inputEmail) {
      newErrorMessage = { ...newErrorMessage, email: 'Email không được bỏ trống' }
    } else if (patternEmail.test(inputEmail)) {
      newErrorMessage = { ...newErrorMessage, email: 'Email này không hợp lệ' }
    }

    //Set message ERROR
    setErrorMessage(newErrorMessage);

    //Error 
    if (Object.keys(newErrorMessage).length > 0) {
      e.preventDefault()
    }
  }, [])

  //Begin Validate action OnChane Input Field
  const validateChange = useCallback((pattern, key, inputName, label) => {
    const newErrorMessage = { ...errorMessge };
    if (!inputName) {
      newErrorMessage = { ...newErrorMessage, [key]: `` };
    }
    else if (pattern.test(inputName) === false) {
      newErrorMessage = { ...newErrorMessage, [key]: `${label} không hợp lệ` };
    }
    else if (newErrorMessage.hasOwnProperty(key)) {
      delete newErrorMessage[key];
    }
    setErrorMessage(newErrorMessage);
  }, [])

  const handleOnchangeName = useCallback((e) => {
    setInputName(e.target.value);
  }, [])
  const handleOnChagePhone = useCallback((e) => {
    setInputPhone(e.target.value);
  }, [])
  const handleOnChangeEmail = useCallback((e) => {
    setInputEmail(e.target.value);
  }, [])
  //End Validate action onChane Input Field

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white rounded-lg inline-block w-11/12 md:max-w-2xl relative box-border p-7 animate-dialogFadeIN">
        <span className="absolute top-5 right-5 cursor-pointer text-2xl" onClick={closeDiaLog}>
          <ButtonImage
            src='/images/close.png'
            atl='Icons Close'
            width='15'
            height='15'
          />
        </span>
        <h3 className="text-center mb-10 text-lg">Bạn có thể mua hàng tại</h3>

        {/*Social*/}
        <div className="flex justify-center gap-6 mb-12">
          <ButtonImage
            href='https://www.facebook.com/longthanhplastic'
            src='/images/facebook.png'
            atl="Image FaceBook"
            width='30'
            height='30'
          />
          <ButtonImage
            href='https://www.facebook.com/longthanhplastic'
            src='/images/instagram.png'
            atl="Image FaceBook"
            width='30'
            height='30'
          />
        </div>

        {/*Line*/}
        <div className='relative mb-6'>
          <div className="h-px bg-gray-300"></div>
          <span className="inline-block p-4 bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">hoặc</span>
        </div>

        <form action="post" onSubmit={handleOnSubmit}>
          <div className="mb-6">
            <InputField
              id='name' label='Họ tên'
              value={inputName}
              onInputChange={handleOnchangeName}
              errorMessge={errorMessge}
            />
          </div>
          <div className="mb-6">
            <InputField
              id='phone' label='Số điện thoại'
              value={inputPhone}
              onInputChange={handleOnChagePhone}
              errorMessge={errorMessge}
            />
          </div>
          <div className="mb-6">
            <InputField
              id='email' label='Email'
              value={inputEmail}
              onInputChange={handleOnChangeEmail}
              errorMessge={errorMessge}
            />
          </div>
          <input type='submit' className="bg-primary px-16 py-2.5 rounded-2xl text-base font-avertaBold text-white cursor-pointer block mx-auto" value='Đặt hàng'
            onClick={handleOnSubmit} />
        </form>
      </div>
    </div>
  )
}

export default memo(OrderDialog);